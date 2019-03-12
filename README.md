# vueDEMO

## 1、如何预览网站
#### a.下载vueDEMO项目。
#### b.使用浏览器打开vueDEMO文件中的dist文件夹中的index.html。

## 2、如何运行项目（打包部署是项目上线前的最后一步，开发时不需要打包部署）
#### a.安装vue-cli(mac电脑使用sudo npm)
`npm install -g vue-cli`

#### b.安装依赖
      将命令切换到vueDEMO文件夹下，运行代码：   
`npm i`

#### c.运行项目
      将命令切换到vueDEMO文件夹下，运行代码：
`npm run dev`

#### d.打包部署
        · 打包-将命令切换到vueDEMO文件夹下，运行代码：
`npm run build`

        · 部署
           将打包后vueDEMO文件下的dist文件丢到tomcat、nagix等服务器的静态文件下。
           
## 3.如何从零搭建这个前端框架
#### a.这个页面使用到的 脚手架（vue-cli）+ UI框架（ElementUI）+ 路由（vue-router）;
      教程：如何使用vue-cli创建一个 vue 的项目 https://blog.csdn.net/inthuixiang/article/details/82225407
           elementUI http://element-cn.eleme.io/#/zh-CN/component/container
           路由 https://router.vuejs.org/zh/
#### b.这个页面未使用 但已经集成的 依赖库 http库(axios)。
      教程：axios https://www.kancloud.cn/yunye/axios/234845
           

        
