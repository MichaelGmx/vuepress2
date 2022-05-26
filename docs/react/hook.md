# Hook

### 1. useState
```javascript
// 传统Class 设置 State：
import React, { Component } from "react";
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 5
    }
  }
  render() {
    retrun ...
  }
}

// Hooks 设置 State：
const Example = () => {
  const [value1, setValue1] = useState(5);
  return ...
}
```

setValue1 为约定俗成的方法名，方便知道是更新value1这个State的。
useState的( )中为初始值，还可以使用函数对其初始值设置：

```javascript
const Example = (props) => {
  function getInitValue() {
    return props.value1 + 8;
  };

  const [value1, setValue1] = useState(getInitValue());
}
```

**setXXX** 中可以使用 `对象`、`函数`等多种方式更新State
```javascript
const [todos, setTodos] = useState([])

// 方法1 对象
setTodos(
  todos.map(todo => {
    if (todo.id === id) {
      todo.title = myChangeData
    }
    return todo
  })
)

// 方法2 函数
// - 函数参数可以有prevState
setTodos(prevState => 
  prevState.filter(todo => {
    return todo.id !== id;
  })
)

// 方法3 es6解构
setTodos([
  ...todos.filter(todo => {
    return todo.id !== id;
  })
])
```
使用示例 [TodoList中的使用](https://github.com/MichaelGmx/react-todo-app/blob/main/src/functionBased/pages/Home.js)

### 2. useEffect
```javascript
useEffect(callback, [array])
```
callback是在 浏览器渲染完成后调用的<br />
1. array有值时，数组中的变量发生改变，每次render后，触发callback
2. 没有第二参数时，每次render都触发callback
3. [] 空数组时，表示不依赖props、state任何值，effect内部props、state一直拥有其初始值。仅在组件挂载和卸载时执行callback一次<br />
注：useEffect第二参数使用 [ ] 不完全等同于class的 componentDidMount、componentWillUnmount<br />
参考 [在依赖列表中省略函数是否安全？](https://zh-hans.reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies)<br />
**只有** 当函数（以及它所调用的函数）不引用 props、state 以及由它们衍生而来的值时，你才能放心地把它们从依赖列表中省略

### 3. hooks 与Class组件的生命周期 比较
仅作为比较，不完全等同。两者概念不同，作用不同，需要区分。
**constructor**
```javascript
// class 组件
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0;
    }
  }
}

// class 组件
class Example extends React.Component {
  state = {
    value: 0
  }
  constructor(props) {
    super(props);
  }
}

// function 组件 hooks
function Example {
  const [value, setValue] = useState(0);
  return <></>;
}
```

**componentDidMount**

```javascript
// class 组件
class Example extends React.Component {
  componentDidMount() {
    console.log('mounted');
  }
  componentWillUnmount() {
    console.log('will unmount');
  }
  return ...
}

// function 组件 hooks
function Example {
  useEffect(() => {
    /* 这里code 相当于 componentDidMount */
    console.log('第一次挂载、卸载 都将运行');
    
    return(() => {
      /* 这里code 相当于 componentWillUnmount */
      console.log('卸载 将运行');
    });
  }, [])  // 注：并不完全等同于 class的 componentDidMount、componentWillUnmount
  return ...
}
```

**componentDidUpdate**
```javascript
// class 组件
class Example extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.sysID !== this.state.sysID) {
      console.log('update handle');
    }
  }
  return ...
}
  
// function 组件 hooks
function Example {
  useEffect(() => {
    console.log('update handle');
  }, [sysID])
  return ...
}
```