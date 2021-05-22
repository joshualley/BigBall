package main

import (
	"bigballsrv/common"
	_ "bigballsrv/controller"
	"bigballsrv/router"
)

func main() {
	// gin.SetMode(gin.ReleaseMode)
	defer common.GormDB().Close()
	app := router.App()
	app.Run("0.0.0.0:9899")
}
