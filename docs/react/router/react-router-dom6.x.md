# react-router-dom 6.x

### 1. 安装依赖
```shell
npm install react-router-dom
```
### 2. 基本使用
```javascript
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import User from './pages/User';
import UserDetail from './pages/UserDetail';
import UserSetting from './pages/UserSetting';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/user/*" element={<User />}>
            <Route path=":id" element={<UserDetail />} index />
            <Route path="setting" element={<UserSetting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}
```
`path` **/** 开头 表示绝对路由，否则是 相对路由

###  3. 路由跳转 Link NavLink
`Link`、`NavLink` 必须在Router内部使用<br />
NavLink 比 Link 多了可以设置当前激活路由样式的功能<br />
移除 v5 NavLink 的 `activeClassName`，改为 style/className回调中 isActive 参数<br />
v6 `<NavLink />` 默认有激活后的active class<br />

```javascript
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    // ...
      <NavLink
        to="about"
        style={({ isActive }) => ({ color: isActive ? "#f00" : "#333" })}
        className={({ isActive }) => `link${isActive ? " active" : ""}`}>
        go to About
      </NavLink>
    
      <Link to="/">go Home</Link>
    // ...
  )
}
```

###  4. useNavigate
新react-router 移除了 props的 history对象<br />
移除 v5 的 `useHistory`<br />
用于js跳转<br />

```javascript
import { useNavigate } from 'react-router-dom';

const Example = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('detail')}>跳转至 Detail</button>
  )
}

// 跳转，不留记录（无法返回）
navigate('/home', { replace: true })

// 返回上一页
navigate(-1)

// 使用对象
navigate({
  pathname: '/home'
})
```

### 5. 路由参数
新react-router 移除了 props的 location、match，移除了高阶组件withRouter

#### （1）动态路由传参，useParams
```javascript
// 路由
<Route path="/detail/:id" element={<Detail />} />
```
```javascript
// Detail Page
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const params = useParams();
  return (
    <p>{params.id}</p>
  )
}
```
#### （2）search传参，useSearchParams
```javascript
// 访问模拟
import { useNavigate } from 'react-router-dom';

const Example = () => {
  const navigate = useNavigate();

  // ...
    navigate('/list?page=2&size=8');
  // ...
  
  // Or（效果相同）
    navigate({
      pathname: '/list',
      search: 'page=2&size=8'
    });
}
```

```javascript
// List Page
import { useSearchParams } from 'react-router-dom';

const ListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // ...
    console.log(searchParams.get('page'));  // 2
  // ...

  const handleSearchParam = () => {
    setSearchParams({
      page: 3
    });     // /list?page=3   size不继承
  }

  // ...
}
```
#### （3）state传参，`<Link />`、`<NavLink />`、useNavigate 中使用
```javascript
<Link to="/list" state={{ page: 2, size: 8 }}>List第二页</Link>

const navigate = useNavigate();
natigate('/list', { state: { page: 2, size: 8 } })
```

```javascript
// List Page
import { useLocation } from 'react-router-dom';

const ListPage = () => {
  const { state } = useLocation();
  
  // ...
    console.log(state.page);  // 2
    console.log(state.size);  // 8
  // ...
}
```

### 6. 重定向
移除 v5 的 `<Redirect />`

```javascript
import { Routes, Route, Navigate } from 'react-router-dom';

const Example = () => {
  return (
    ...
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    ...
  )
}
```

### 7. 嵌套路由

#### （1）父子路由页面 分开设置
user路由的path后面需要加 **/\*** ，以匹配其子路由
```javascript
// 父路由 页面
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// ...

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        // ...
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/user/*" element={<User />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}
```
```javascript
// 子路由页面
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const User = () => {
  return (
    // ...
    <Routes>
      <Route path="info" element={<UserInfo />} />
      <Route path="setting" element={<UserSetting />} />
    </Routes>
    // ...
  )
}
```
#### （2）都写在父路由页面
~~子路由的第一个 加了 index 属性，目的是设为 默认路由~~
```javascript
// 父路由 页面
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ...

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        // ...
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/user" element={<User />}>
            <Route path="info" element={<UserInfo />} index />
            <Route path="setting" element={<UserSetting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}
```

子路由页面 使用 `<Outlet />` 显示页面内容
```javascript
// 子路由页面

// ...
  <Outlet />
// ...
```

#### 3）useRoutes()

```javascript
// 父路由 页面
import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';

// ...

const MyRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/detail", element: <Detail /> },
    { path: "/user", element: <User />, children: [
       { path: "info", element: <UserInfo /> },
       { path: "setting", element: <UserSetting /> },
    ]},
  ]);
  return routes;
}

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        // ...
        <MyRoutes />
        // ...
      </BrowserRouter>
    </React.StrictMode>
  )
}
```

### 参考：
[react-router-dom使用指南（最新V6.0.1）](https://zhuanlan.zhihu.com/p/431389907)<br />
[快速上手react-router@6新版路由（有v5 v6的比较）](https://juejin.cn/post/7065139910822346782)