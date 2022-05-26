# Prop-Types

v15.5后，被官方 从react中 单独出来 `prop-types`
#### 项目内 安装
```shell
# 安装
npm i prop-types
```

#### 简单示例：
```javascript
// 设置限定的组件

// 引入 prop-types
import PropTypes from 'prop-types';

// 组件
const Greeting = (props) => {
  return (
    <p>Greeting, {props.name}</p>
  )
}
// name 必须是字符串
Greeting.propTypes = {
  name: PropTypes.string
}

export default Greeting
```

```javascript
// 引入 组件
import Greeting from '../components/Greeting';

const Example = () => {
  const name1 = 'Jack';
  const name2 = 12345;

  return (
    <div>
      {/* 正常  Greeting, Jack */}
      <Greeting name={name1} />

      {/* console 会报错，提示 name 需要字符串类型值 */}
      <Greeting name={name2} />
    </div>
  );
}

export default Example
```

#### 设置默认值
```javascript
// 设置限定的组件

// 引入 prop-types
import PropTypes from 'prop-types';

// 组件
const Greeting = (props) => {
  return (
    <p>Greeting, {props.name}</p>
  )
}
// name 必须是字符串
Greeting.propTypes = {
  name: PropTypes.string
}
// 默认值
Greeting.defaultProps = {
  name: 'Stranger'
}

export default Greeting
```

```javascript
// 引入 组件
import Greeting from '../components/Greeting';

const Example = () => {
  const name1 = 'Jack';

  return (
    <div>
      {/* 正常  Greeting, Jack */}
      <Greeting name={name1} />

      {/* 正常  Greeting, Stranger */}
      <Greeting />
    </div>
  );
}

export default Example
```

#### 设置必须
```javascript
// 设置限定的组件

// 引入 prop-types
import PropTypes from 'prop-types';

// 组件
const Greeting = (props) => {
  return (
    <p>Greeting, {props.name}</p>
  )
}
// name 必须是字符串，且必须含有此参数
Greeting.propTypes = {
  name: PropTypes.string.isRequired
}

export default Greeting
```

```javascript
// 引入 组件
import Greeting from '../components/Greeting';

const Example = () => {
  const name1 = 'Jack';

  return (
    <div>
      {/* 正常  Greeting, Jack */}
      <Greeting name={name1} />

      {/* console报错，提示 必须是string类型，且name参数必填 */}
      <Greeting />
    </div>
  );
}

export default Example
```

参考：<br />
[官方 prop-types Doc](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html)