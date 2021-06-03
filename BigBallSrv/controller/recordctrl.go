package controller

import (
	"bigballsrv/common"
	"bigballsrv/dto"
	"bigballsrv/model"
	"bigballsrv/router"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func init() {
	g := router.WithGroup("api/record")
	{
		g.GET("/", getAllRecord)
		g.GET("/:id", getOneRecord)
		g.GET("/uid/:uid", getOneRecordByUID)
		g.POST("/", insertOrUpdateRecord)
		g.DELETE("/:id", deleteOneRecord)

		g.GET("/rank", getRank)
		g.GET("/rank/:uid", getRankOrder)
	}
}

func getRankOrder(c *gin.Context) {
	uid := c.Param("uid")
	db := common.GormDB()
	var ranks []dto.Rank
	db.Raw(`select * from (
		select id, name from User where id = ?
	) u
	inner join (
		select row_number() over(order by weight desc) as seq, uid, weight from Record
		order by weight desc
	)t on t.uid=u.id`, uid).Scan(&ranks)
	if len(ranks) == 0 {
		c.JSON(http.StatusOK, dto.NewRespDto(dto.NotFund, nil))
	}
	c.JSON(http.StatusOK, dto.NewRespDto(dto.Ok, ranks[0]))
}

// 获取排行榜
func getRank(c *gin.Context) {
	ranks := make([]dto.Rank, 0)
	db := common.GormDB()
	db.Table("User").
		Select("row_number() over(order by weight desc) as seq, User.name, Record.weight").
		Joins("inner join Record on Record.uid=User.id").
		Order("weight desc").
		Limit(5).
		Find(&ranks)
	c.JSON(http.StatusOK, dto.NewRespDto(dto.Ok, ranks))
}

// 获取所有记录
func getAllRecord(c *gin.Context) {
	records := make([]model.Record, 0)
	db := common.GormDB()
	db.Find(&records)
	c.JSON(http.StatusOK, dto.NewRespDto(dto.Ok, records))
}

// 根据ID获取一条记录
func getOneRecord(c *gin.Context) {
	id := c.Param("id")
	var record model.Record
	db := common.GormDB()
	db.Where("id = ?", id).First(&record)
	if record.ID == 0 {
		c.JSON(http.StatusOK, dto.NewRespDto(dto.NotFund, nil))
		return
	}
	c.JSON(http.StatusOK, dto.NewRespDto(dto.Ok, record))
}

func getOneRecordByUID(c *gin.Context) {
	uid := c.Param("uid")
	var record model.Record
	db := common.GormDB()
	db.Where("uid = ?", uid).First(&record)
	if record.ID == 0 {
		c.JSON(http.StatusOK, dto.NewRespDto(dto.NotFund, nil))
		return
	}
	c.JSON(http.StatusOK, dto.NewRespDto(dto.Ok, record))
}

// 删除一条记录
func deleteOneRecord(c *gin.Context) {
	id := c.Param("id")
	var record model.Record
	db := common.GormDB()
	db.Where("id = ?", id).Delete(&record)
	if record.ID == 0 {
		c.JSON(http.StatusOK, dto.NewRespDto(dto.NotFund, nil))
		return
	}
	c.JSON(http.StatusOK, dto.NewRespDto(dto.Ok, record))
}

// 新增或更新一条数据
func insertOrUpdateRecord(c *gin.Context) {
	var record model.Record
	if err := c.ShouldBind(&record); err != nil {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, dto.NewRespDto(dto.BadRequest, nil))
		return
	}

	db := common.GormDB()
	if db.NewRecord(&record) {
		db.Create(&record)
	} else {
		db.Update(&record)
		// db.Exec("update Record set weight = ?, max_time = ? where id = ?", record.Weight, record.MaxTime, record.ID)
	}

	c.JSON(http.StatusOK, dto.NewRespDto(dto.Ok, record))
}
