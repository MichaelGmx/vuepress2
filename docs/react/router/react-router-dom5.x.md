# react-router-dom 5.x

下面内容基于 `react-router-dom` 的使用
### 1. 关于 react-router-dom 与 react-router 的关系
`react-router-dom` 依赖于 `react-router`<br />
直接引用了 `Switch`、`Route`、`Router`、`Redirect`<br />
新增了 `Link`、`NavLink`、`BrowserRouter`、`HashRouter`

参考：<br />
[react-router与react-router-dom有什么不同？](https://segmentfault.com/a/1190000022443557)

### 2. 关于 Switch 的使用
```javascript
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function Example() {
  return (
    <BrowserRouter>
    	<Switch>
    		<Route extra path="/" component={Home}>
    		<Route path="/detail" component={Detail}>
        <Route path="*" component={NotMatch}>
    	</Switch>
    </BrowserRouter>
  )
}
```
`Route` 会按顺序匹配path，渲染组件<br />
使用了 `Switch` 包裹的Route，找到匹配的路由后，不再向下继续寻找<br />
若不使用 `Switch`，path只要是有匹配到，就都会渲染出来<br />
使用了 `extra` 的路由，表示需要严格符合path才会渲染<br />

### 3. useHistory、useLocation、useParams、useRouteMatch
这几个方法都是 16.8以上版本才有的
**useHistory** 基于historyAPI的方法
```javascript
import { useHistory } from 'react-router-dom'

function Example() {
  const history = useHistory();

  return (
    <>
    	<button onClick={() => history.goBack()}>返回</button>
			<button onClick={() => history.push('/post/2021-09-29')}>跳至某文章页</button>
			<button onClick={() => history.replace('/user')}>跳至User页，且覆盖History记录</button>
    </>
  )
}
```
**useLocation** 获取地址对象
```javascript
// 假设 地址栏为：http://example.com/about/about-author?some=value

import { useLocation } from 'react-router-dom'

function Example() {
  const { pathname } = useLocation();
  
  console.log(useLocation())
  /*
    输出： 
    {
      hash: "",
      key: "337wq7,
      pathname: "/about/about-author",
      search: "?some=value",
      state: null
    }
  */

  return (
    <>
    	<p>获取的路由地址：{pathname}</p>
    </>
  )
}
```

**useParams** 获取路由参数
```javascript
import { useParams } from 'react-router-dom'

function Example() {
  const { param1 } = useParams();

  return (
    <>
    	<p>获取的路由参数：{param1}</p>
    </>
  )
}
```
**useRouteMatch** 获取路由匹配信息
```javascript
// 假设 地址栏为：http://example.com/about/about-author
import { useRouteMatch } from 'react-router-dom'

function AboutPage() {
  const { url, path } = useRouteMatch();
  
  console.log(useRouteMatch());
  /*
    输出： 
    {
      isExact: true,
      params: {slug: 'about-author'},
      path: "/about/:slug",
      url: "/about/about-author"
    }
  */

  return (
    <>
    	<Link to={`${url}`}>About Main</Link>
      <Link to={`${url}/about-author`}>About Author</Link>
      <Link to={`${url}/about-history`}>About History</Link>
			<Switch>
				<Route exact path={`${path}`}>
					About Main
				</Route>
				<Route exact path={`${path}/:slug`}>
					<AboutDetail />
				</Route>
			</Switch>
    </>
  )
}
```

### 4. 页面跳转
页面跳转一般使用 `Link` 或 `NavLink`，如下：
```javascript
import { Link, NavLink } from 'react-router-dom'

function Example() {
  return (
    <Link to="/somePage">somePage</Link>
    <NavLink to="/anotherPage" activeClassName="active">anotherPage</NavLink>
  )
}
```
同样也可以使用 useHistory：
```javascript
import { useHistory } from 'react-router-dom'

function Example() {
  const history = useHistory();

  // 跳转到 Detail页面
  const goToDetailPage = () {
    history.push('/detail');
  }
}
```
 
### 5. Link 与 NavLink 的区别
NavLink最常用的是用 activeClassName、activeStyle 以区分当前激活路由的样式
```javascript
<Link to="/" />
<NavLink to="/" activeClassName="active" />
```