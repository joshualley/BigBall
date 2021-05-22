package dto

type RespDto struct {
	IsSuccess bool
	Info      *respInfo
	Data      interface{}
}

func NewRespDto(code int, data interface{}) *RespDto {
	return &RespDto{
		IsSuccess: code == Ok,
		Info:      newRespInfo(code),
		Data:      data,
	}
}
