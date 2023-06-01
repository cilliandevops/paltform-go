// @Time    : 5/18/2023 10:34 AM
// @Author  : Cillian
// @Email   : cilliandevops@gmail.com
// Website  : www.cillian.website
// Have a good day!

package routers

import (
	"cilliandevops-platform/controller"
	"github.com/gin-gonic/gin"
)

var Router router

type router struct{}

func (r *router) InitApiRouter(router *gin.Engine) {
	router.
		//测试

		//pod操作
		GET("/api/k8s/pods", controller.Pod.GetPods).
		GET("/api/k8s/pod/detail", controller.Pod.GetPodDetail)

}
