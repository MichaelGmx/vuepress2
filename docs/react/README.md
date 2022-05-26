### 话在前：
React v15-  v16+ 是分水岭<br />
v16 从2017年推出后，在较长的一段时间内一直是最常用的版本<br />
v16又在v16.8引入了 [React Hooks](https://zh-hans.reactjs.org/docs/hooks-overview.html#gatsby-focus-wrapper)，但向下兼容，所以组件依然可以用传统class的写法，但建议使用Hooks<br />
[react version参考](https://www.javatpoint.com/react-version)


### 重要步骤：
首先可以使用 官方推荐的脚手架  [Create React App](https://github.com/facebook/create-react-app) 创建新的项目，开始撸码。<br />
也可以手动使用webpack自搭脚手架，重点是需要babel对语法的转换（可以参考[手挽手带你学React：一档 React环境搭建，语法规则，基础使用](https://segmentfault.com/a/1190000018139343)）。


### 入门教程：
阮一峰老师的：<br />
[阮一峰 React入门（注意文章中代码是基于v15的）](https://www.ruanyifeng.com/blog/2015/03/react.html)<br />
[阮一峰 React入门 GitHub地址（v16重写 但使用的是class、demo13添加了服务端渲染）](https://github.com/ruanyf/react-demos)<br />
[阮一峰 React Hooks 入门（推荐）](https://www.ruanyifeng.com/blog/2019/09/react-hooks.html)<br />
[轻松学会 React 钩子：以 useEffect() 为例](https://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html)

手书：<br />
[React 入门](https://hulufei.gitbooks.io/react-tutorial/content/introduction.html)<br />
[給初入JS框架新手的React.js入門](https://ithelp.ithome.com.tw/users/20116826/ironman/2278)

Hooks：<br />
[react-use 第三方常用自定义Hooks](https://github.com/streamich/react-use)

样式：<br />
[styled-components 组件化样式 方式之一](https://github.com/styled-components/styled-components)<br />
[emotion 后起之秀](https://emotion.sh/docs/introduction)

### 注意：
v18 莫名加入使用严格模式的 开发模式下，Effect触发2次的情况（参考：[React 18 中StrictMode多次调用函数式组件体及其hook](https://juejin.cn/post/7092696529105846303)）<br />
最省事的方法：是先取消严格模式，在build生产环境的时候再加回来

### 总结：
Hooks语法是目前（2022-05-09）较多使用的，非必要最好使用Hooks语法。<br />
旧程序使用class语法也不必重写，因向下兼容原因，所以可以同时存在。新的内容使用Hooks，保留原有即可。