// @Time    : 5/17/2023 10:23 AM
// @Author  : Cillian
// @Email   : cilliandevops@gmail.com
// Website  : www.cillian.website
// Have a good day!

package main

import (
	"cilliandevops-platform/config"
	"cilliandevops-platform/middleware"
	"cilliandevops-platform/routers"
	"cilliandevops-platform/services"
	"github.com/gin-gonic/gin"
)

func main() {
	//初始化k8s客户端
	services.K8s.InitCluster()

	//初始化路由配置
	r := gin.Default()

	//跨域配置
	r.Use(middleware.Cors())

	//初始化路由
	routers.Router.InitApiRouter(r)

	//http server启动
	r.Run(config.ListenAddr)
}
