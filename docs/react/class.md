# Class

### state

```javascript
import React, { Component } from 'react';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 'StateValue1'
    }
  }
  
  render() {
    return (
      <button>{this.state.value1}</button>
    );
  }
}
```

### setState
```javascript
// 常用格式：
this.setState({
  属性名: 新值
});


// 完整格式：
this.setState((state, props) => {
     /* 第一個參數函式 */
  return {新的state};
},()=>{
     /* 第二個參數函式，state改變後執行 */
});
```

### class小结
```javascript
import React, { Component } from 'react';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {           // state  ReadOnly值，修改需要使用 setState方法
      value1: 'StateValue1'  // 切勿使用 this.state.percent = "50%" 修改，是不会生效的
    }
    this.handleClick = this.handleClick.bind(this);  // 绑定方法
  }
  
  handleClick(event) {
    console.log(event);
    this.setState({
      value1: 'Changed Value'
    }, () => {   // 可选第二参数
      console.log('setState执行后的操作');
    })
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.value1}</button>
    );
  }
}
```

### 生命周期
#### 周期函数、执行顺序
大致分为3个周期：
- **Mounting**：  已插入真实 DOM
- **Updating**：  正在被重新渲染
- **Unmounting**：已移出真实 DOM

Class形式才有的 周期函数：
- **componentWillMount()**    // 16.X 废弃，17.0起 移除
- **componentDidMount()**
- **componentWillUpdate(object nextProps, object nextState)**
- **componentDidUpdate(object prevProps, object prevState)**
- **componentWillUnmount()**
- **componentWillReceiveProps(object nextProps)**：已加载组件收到新的参数时调用
- **shouldComponentUpdate(object nextProps, object nextState)**：组件判断是否重新渲染时调用

大致顺序为：
v16.2-
> constructor() -> componentWillMount() -> render() -> 渲染DOM -> 执行其它生命周期函数

v16.3+
> constructor() -> static getDerivedStateFromProps() -> render() -> 渲染DOM -> 执行其它生命周期函数

注：`componentWillMount` 在v17后，变为UNSAFE_componentWillMount.
v16.3加入static getDerivedStateFromProps() 作为替代
componentWillMount()方法 在非必要情况下并不建议使用

#### Update
v17-，update顺序：
1. componentWillReceiveProps（props被改变的情况下）
2. shouldComponentUpdate
3. componentWillUpdate
4. render()
5. 渲染DOM
6. componentDidUpdate
注：v17后，componentWillReceiveProps、componentWillUpdate 变为UNSAFE_（同componentWillMount），不建议使用

v16.3+，update顺序：
1. static getDerivedStateFromProps(props, state)
2. shouldComponentUpdate(nextProps, nextState)
3. render()
4. getSnapshotBeforeUpdate(prevProps, prevState)
5. 渲染DOM
6. componentDidUpdate(prevProps, prevState, snapshot)

**static getDerivedStateFromProps(props, state)** v16.3 是props被改动才触发，v16.4以后是只要re-render就触发，且props、state是最新值(更新后的)
**shouldComponentUpdate(nextProps, nextState)** 需要返回 false/true，false表示不更新（render、update都不执行）。可以使用this.state、this.props、参数nextProps、参数nextState 做比较，告诉接下来是否需要更新
**getSnapshotBeforeUpdate(prevProps, prevState)** 在render之前，给componentDidUpdate传入参数snapshot
**componentDidUpdate(prevProps, prevState, snapshot)** 更新后需要做的事情
参考生命周期图：https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/