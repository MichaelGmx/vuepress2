# angularjs Directive中的scope设置

| 值	| 继承/隔离 |	理解  | 解释   |
|:---:|:--------:|:-----:|:-----:|
| false |	继承不隔离	 | 使用父scope	        | 父子同享同一作用域 |
| true  |	继承且隔离	 | 使用父scope，但只单向 |	子使用父作用域初始化，而后建立自己的作用域 |
| {}	  | 不继承且隔离 | 使用自己独立的scope	 | 父子使用各自的作用域 |

**@** 方式局部属性用来访问 directive 外部环境定义的字符串值，主要是通过 directive 所在的标签属性绑定外部字符串值。这种绑定是单向的，即父 scope 的绑定变化，directive 中的 scope 的属性会同步变化，而隔离 scope 中的绑定变化，父 scope 是不知道的。
**（父可以传子，子不可以传父）**

**=** 通过 directive 的 attr 属性的值在局部 scope 的属性和父 scope 属性名之间建立双向绑定。
意思是，当你想要一个双向绑定的属性的时候，你可以使用=来引入外部属性。无论是改变父 scope 还是隔离 scope 里的属性，父 scope 和隔离 scope 都会同时更新属性值，因为它们是双向绑定的关系。
**（互相传值）**

**&** 方式提供一种途经是 directive 能在父 scope 的上下文中执行一个表达式。此表达式可以是一个 function。
比如当你写了一个 directive，当用户点击按钮时，directive 想要通知 controller，controller 无法知道 directive 中发生了什么，也许你可以通过使用 angular 中的 event 广播来做到，但是必须要在 controller 中增加一个事件监听方法。
最好的方法就是让 directive 可以通过一个父 scope 中的 function，当 directive 中有什么动作需要更新到父 scope 中的时候，可以在父 scope 上下文中执行一段代码或者一个函数。
**（子传父 表达式）**

## 例子
实际运行一下例子更容易理解

html代码如下：
```html
<div ng-controller="MyCtrl">
  <my-directive my-name="{{name}}"
                age="age"
                active-from-child="notifyToDoSomething()"
                child-invoke-value="getValueFormChild(keyName)">
  </my-directive>
</div>
```
controller代码如下：
```javascript
.controller('MyCtrl', ['$scope',
  function ($scope) {
    $scope.name = 'dream';
    $scope.age = 29;
    $scope.value = 'Parent Value';
    
    $scope.notifyToDoSomething = function () {
      console.log('Child notify to do something');
    }
    $scope.getValueFormChild = function (value) {
      $scope.value = value;
    }
    $scope.getChange = function (value) {
      console.log(value);
    }
  }])
```
directive代码如下：

```javascript
.directive("myDirective", [
  function() {
    return {
      restrict: 'AE',
      scope: {
        name: '@myName',                   // 单向绑定，父作用域可以操作子作用域
        age: '=',                          // 双向绑定
        optionalParam: '=?',               // 此处表示optionalParam为可选，使用时未传入该属性，不会报错
        active: '&activeFromChild',        // 此处例子只让父作用域执行一个函数（目的是：通知父作用域执行某些操作）
        invokeValue: '&childInvokeValue',  // 此处让父作用域执行一个带参数的函数（目的是：可以传值至父作用域，并执行一些操作）
      },
      template: `
        <div class="my-directive">
          <p>Child name: {{name}}</p>
          <input type="text" ng-model="name">
          <p>Child age: {{age}}</p>
          <input type="text" ng-model="age">
          <button ng-click="active()">Notify Parent</button>
          <button ng-click="invokeValue({keyName: childValue})">Change Value From Child</button>
        </div>
      `,
      link: function(scope, element, attrs) {
        scope.childValue = 'Child Value';
      }
    }
  }])
```

[參考文章：AngularJS Directive 隔离 Scope 数据交互](https://blog.coding.net/blog/angularjs-directive-isolate-scope)

