package controller

import (
	"bigballsrv/common"
	"bigballsrv/dto"
	"bigballsrv/model"
	"bigballsrv/router"
	"net/http"

	"github.com/gin-gonic/gin"
)

func init() {
	g := router.WithGroup("api/user")
	{
		g.GET("/", getAllUser)
		g.GET("/:id", getOneUser)
		g.GET("/name/:name", getUserByName)
		g.POST("/", insertOrUpdateUser)
		g.DELETE("/:id", deleteOneUser)
	}
}

// 获取所有用户数据
func getAllUser(c *gin.Context) {
	users := make([]model.User, 0)
	db := common.GormDB()
	db.Find(&users)
	c.JSON(http.StatusOK, dto.NewRespDto(dto.Ok, users))
}

func getUserByName(c *gin.Context) {
	name := c.Param("name")
	var user model.User
	db := common.GormDB()
	db.Where("Name = ?", name).First(&user)
	if user.ID == 0 {
		c.JSON(http.StatusOK, dto.NewRespDto(dto.NotFund, nil))
		return
	}
	c.JSON(http.StatusOK, dto.NewRespDto(dto.Ok, user))
}

// 根据ID获取一条记录
func getOneUser(c *gin.Context) {
	id := c.Param("id")
	var user model.User
	db := common.GormDB()
	db.Where("id = ?", id).First(&user)
	if user.ID == 0 {
		c.JSON(http.StatusOK, dto.NewRespDto(dto.NotFund, nil))
		return
	}
	c.JSON(http.StatusOK, dto.NewRespDto(dto.Ok, user))
}

// 删除一条记录
func deleteOneUser(c *gin.Context) {
	id := c.Param("id")
	var user model.User
	db := common.GormDB()
	db.Where("id = ?", id).Delete(&user)
	if user.ID == 0 {
		c.JSON(http.StatusOK, dto.NewRespDto(dto.NotFund, nil))
		return
	}
	c.JSON(http.StatusOK, dto.NewRespDto(dto.Ok, user))
}

// 新增或更新一条数据
func insertOrUpdateUser(c *gin.Context) {
	var user model.User
	if err := c.ShouldBind(&user); err != nil {
		c.JSON(http.StatusBadRequest, dto.NewRespDto(dto.BadRequest, nil))
		return
	}

	db := common.GormDB()
	if db.NewRecord(&user) {
		db.Create(&user)
	} else {
		db.Update(&user)
	}

	c.JSON(http.StatusOK, dto.NewRespDto(dto.Ok, user))
}
