package dto

var msg = map[int]string{
	200:  "请求成功",
	400:  "请检查请求的参数是否有误",
	404:  "未找到请求的资源",
	500:  "服务器出错了",
	5001: "数据库连接出错",
	5002: "数据库保存数据出错",
	5003: "数据库修改数据出错",
	5004: "数据库删除数据出错",
	5005: "数据库查询数据出错",
}

const (
	Ok                  = 200
	BadRequest          = 400
	NotFund             = 404
	InternalServerError = 500
	SqlConnError        = 5001
	SqlInsertError      = 5002
	SqlUpdateError      = 5003
	SqlDeleteError      = 5004
	SqlQueryError       = 5005
)

type respInfo struct {
	Code    int
	Message string
}

func newRespInfo(code int) *respInfo {
	return &respInfo{
		Code:    code,
		Message: msg[code],
	}
}
