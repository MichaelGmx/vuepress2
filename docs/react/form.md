# 表单

[受控组件](https://zh-hans.reactjs.org/docs/forms.html#controlled-components)：

`<input>`、`<textarea>`、`<select>`等表单元素 自己维护state
```javascript
import React, { useState } from 'react';

const LoginForm = () => {
  const [account, setAccount] = useState("");

  return (
    <div>
      <input type="text" onChange={e => { setAccount(e.target.value) }} />
      <p>current account: {account}</p>
    </div>
  )
}
// 点击input，并修改内容
// 下面的p会同时修改
```

```javascript
import React, { useState } from 'react';

const LoginForm = () => {
  const [account, setAccount] = useState("input now");  // state的默认值

  return (
    <div>
      <input type="text" onChange={e => { setAccount(e.target.value) }} />
      <p>current account: {account}</p>
    </div>
  )
}
// 如果只设置了state的默认值
// p标签中 会显示 默认值 input no
// input中 不会，input的默认值需要设定defaultValue
```

```javascript
import React, { useState } from 'react';

const LoginForm = () => {
  const [account, setAccount] = useState("input now");  // state的默认值

  return (
    <div>
      <input type="text" defaultValue={account} onChange={e => { setAccount(e.target.value) }} />
      <p>current account: {account}</p>
    </div>
  )
}
// input设置了defaultValue，也可以正常显示 默认值
```

```javascript
import React, { useState } from 'react';

const LoginForm = () => {
  const [account, setAccount] = useState("input now");

  return (
    <div>
      <input type="text" defaultValue={account} onChange={e => { setAccount(e.target.value) }} />
      <p>current account: {account}</p>
      <button onClick={() => { setAccount("") }}>reset</button>
    </div>
  )
}
// 点击 下面的reset 按钮，只能重置p标签的内容
// 因为input仅设置了默认值，需要绑定state的值，需要设置value
```

```javascript
import React, { useState } from 'react';

const LoginForm = () => {
  const [account, setAccount] = useState("input now");

  return (
    <div>
      <input type="text" value={account} onChange={e => { setAccount(e.target.value) }} />
      <p>current account: {account}</p>
      <button onClick={() => { setAccount("") }}>reset</button>
    </div>
  )
}
// 设置 value后，点击 reset 按钮，input的内容也可以重置了
```

```javascript
import React, { useState, useEffect } from 'react';

const LoginForm = () => {
  const [account, setAccount] = useState("input now");
  
  useEffect(() => {
    setTimeout(() => {
      setAccount('fetch data');
    }, 2000);
  }, []);

  return (
    <div>
      <input type="text" value={account} onChange={e => { setAccount(e.target.value) }} />
      <p>current account: {account}</p>
      <button onClick={() => { setAccount("") }}>reset</button>
    </div>
  )
}
// 2秒后，input、p标签内容都更新为了 fetch data
// 模拟了fetch获取资料并更新内容的情况
```

```javascript
import React, { useState, useEffect } from 'react';

const LoginForm = () => {
  const [account, setAccount] = useState("input now");
  
  useEffect(() => {
    setTimeout(() => {
      setAccount('fetch data');
    }, 2000);
  }, []);

  return (
    <div>
      <input type="text" defaultValue={account} onChange={e => { setAccount(e.target.value) }} />
      <p>current account: {account}</p>
      <button onClick={() => { setAccount("") }}>reset</button>
    </div>
  )
}
// 错误示范：如果input 使用的是defaultValue设置了默认值，没有使用value绑定state的值
// 2秒后，只有p标签内容会更新
// 如果需要input同步更新，只绑定value即可（同时满足了使用state初始化默认值，也绑定了state）
// defaultValue使用时 需要注意
```

```javascript
import React, { useState, useEffect } from 'react';

const LoginForm = () => {
  const [account, setAccount] = useState("input now");

  return (
    <div>
      <input type="text" disabled={true} value={account} onChange={e => { setAccount(e.target.value) }} />
      <p>current account: {account}</p>
    </div>
  )
}
// 禁用，设置属性disabled 为布尔值
```

```javascript
import React, { useState } from "react";

const LoginForm=()=>{
    const [nowSelect,setNowSelect]=useState("789");

    return (
        <div>
            <select value={nowSelect} onChange={(e)=>{setNowSelect(e.target.value)}}>
                <option value="123">123</option>
                <option value="456">456</option>
            </select>
            <p>current select:{nowSelect}</p>
            <button onClick={(e)=>{setNowSelect("789")}}>set 789</button>
        </div>
    )
}
export default LoginForm;
// select 会显示 123（option中存在的第一个）
// 因为 789 不存在于 option中

// p标签的值 永远跟随state，此处 789
```

```javascript
import React, { useState } from "react";

const LoginForm=()=>{
    const [nowSelect,setNowSelect]=useState("789");

    return (
        <div>
            <select value={nowSelect} onChange={(e)=>{setNowSelect(e.target.value)}}>
                <option selected={true} value="123">123</option>
                <option value="456">456</option>
                <option value="798">789</option>
            </select>
            <p>current select:{nowSelect}</p>
        </div>
    )
}
export default LoginForm;
// select 会显示 789
// 即使option第一个设置了selected，但如果select有value绑定，会优先选中value的值

// 所以 切勿select使用了value的同时，又在option上设置selected
```