# vue总结
16年开始接触vue，到现在也使用一段时间了，发现很多有关原理的知识只是一知半解，所以将用到的一些知识在这里做一下总结，方便今后查看回顾。


### 配置文件
对于vue生成的build、config、package.json等文件进行标注，方便对整个框架进行初步了解，[扒光它，欣赏它，蹂躏它](./配置文件标注/)


### axios
axios 数据请求是前端开发必不可少的一部分，由于公司业务要求，需要兼容到IE9+，前后端分离接口跨域处理一般都在用CORS通信解决，解决IE问题只能使用jsonp，在这里做一个总结：[axiso兼容ie](./axios/兼容IE.md)

### swiper-vue
一个常用的滑屏插件，比较好用，这里介绍的是[Vue-Awesome-Swiper](https://github.com/surmon-china/vue-awesome-swiper)；

我这里有一个[模仿微信表情的组件](./swiper-vue/README.md)，就是通过vue+swiper开发