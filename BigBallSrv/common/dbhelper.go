package common

import (
	"database/sql"
	"sync"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/jmoiron/sqlx"
)

const conn string = "root:123456@tcp(127.0.0.1:3306)/bigball?charset=utf8&parseTime=true"

var gormDb *gorm.DB
var once sync.Once

func init() {
	once.Do(func() {
		var err error
		gormDb, err = gorm.Open("mysql", conn)
		if err != nil {
			panic(err)
		}
	})
}

// GormDB 获取gorm的db对象
func GormDB() *gorm.DB {
	return gormDb
}

func Open() (*sql.DB, error) {
	return sql.Open("mysql", conn)
}

//Queryx 支持结构体的查询
func Queryx(sql string, args ...interface{}) (*sqlx.Rows, error) {
	db, err := Open()
	if err != nil {
		return nil, err
	}
	dbx := sqlx.NewDb(db, "mysql")
	defer dbx.Close()
	return dbx.Queryx(sql, args)
}

//Query from mssql database.
func Query(sql string, args ...interface{}) ([]map[string]interface{}, error) {
	db, err := Open()
	if err != nil {
		return nil, err
	}
	defer db.Close()

	rows, err := db.Query(sql, args)
	if err != nil {
		return nil, err
	}
	return getResult(rows)
}

//Execute
func Execute(sql string, args ...interface{}) (sql.Result, error) {
	db, err := Open()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return db.Exec(sql, args)
}

func getResult(query *sql.Rows) ([]map[string]interface{}, error) {
	column, err := query.Columns()
	if err != nil {
		return nil, err
	}
	// values是每个列的值，这里获取到byte里
	values := make([][]byte, len(column))
	// 因为每次查询出来的列是不定长的，用len(column)定住当次查询的长度
	scans := make([]interface{}, len(column))
	// 让每一行数据都填充到[][]byte里面
	for i := range values {
		scans[i] = &values[i]
	}
	results := make([]map[string]interface{}, 0)
	for query.Next() {
		//query.Scan查询出来的不定长值放到scans[i] = &values[i],也就是每行都放在values里
		if err := query.Scan(scans...); err != nil {
			return nil, err
		}
		row := make(map[string]interface{})
		for k, v := range values {
			key := column[k]
			row[key] = string(v)
		}
		results = append(results, row)
	}
	return results, nil
}
