# Router

react 没有路由的概念，需要使用 react-router 或是 react-router-dom 实现 路由。

**网页** 使用 `react-router-dom` ，其依赖于`react-router` 和 `history`
但安装只需要如下，需要再安装react-router

```shell
# 安装
npm install react-router-dom

# or 最新版（目前2022-05-09 为v6）
npm install react-router-dom@lastest
```

**Native** 使用 `react-router`，包含了 `react-native`的部分内容

react-router 每个大版本变动较多，2020还在使用v5、2021年底官方推出稳定的v6。这两个版本应是目前（2022-05-09）使用最多的，所以优先学习这两个版本。
变动参考：[从 React Router v5 过渡到 v6](https://www.zhdate.com/software/578536.html)