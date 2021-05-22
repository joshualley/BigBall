package router

import (
	"sync"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var r *gin.Engine
var once sync.Once

//App 返回路由
func App() *gin.Engine {
	// r.LoadHTMLGlob("templates/*")
	// r.Static("/static", "static")
	return r
}

//GetRouter 获取路由实例
func GetRouter() *gin.Engine {
	once.Do(func() {
		r = gin.Default()
		config := cors.DefaultConfig()
		config.AllowOrigins = []string{
			"http://localhost:8080",
			"http://192.168.104.143:8080",
			"http://192.168.1.103:8080",
			"http://192.168.3.9:8080",
		}
		config.AllowCredentials = true
		r.Use(cors.New(config))
	})

	return r
}

// WithGroup 注册路由组
func WithGroup(name string) *gin.RouterGroup {
	return GetRouter().Group(name)
}
