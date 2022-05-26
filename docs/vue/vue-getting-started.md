# vue快速入门

参考教程：
[从零到部署：用 Vue 和 Express 实现迷你全栈电商应用](https://github.com/tuture-dev/vue-online-shop-frontend)

目前(2021-03-05)vue3.x已出现，但2.x版本依然是主流，所以暂时先学习2.x。

## 一、初始化、配置

### 1.切换版本

```shell
vue --version  # 查看版本
npm install -g @vue/cli    # 安装3.x版本
npm install -g @vue-cli    # 安装2.x版本
npm uninstall -g @vue/cli  # 卸载3.x版本
npm uninstall -g @vue-cli  # 卸载2.x版本
```

### 2.更好的方式

安装3.x版本
使用桥接工具 创建2.x

```shell
npm install -g @vue/cli       # 安装3.x版本
npm install -g @vue/cli-init  # 安装桥接工具
# `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
vue init webpack vue2-project-name  # 新建2.x版本项目
vue start vue3-project-name         # 新建3.x版本项目
```

## 二、基础概念

### 1. v-on:click

> 简写 @click
> @click.prevent    等同于  加了event.preventDefault()  禁用浏览器默认行为 

### 2. v-bind:id

> 简写 :id

### 3. 双向绑定 v-model

```html
<input v-model="name" />
```

```javascript
export default {
  data() {
    return {
      name: 'Some Text'
    }
  }
}
```

### 4. 循环 v-for

```html
<div class="list">
  <div class="item" v-for="item in items" :key="id">
    {{ item.name }}
  </div>
</div>
```

```javascript
export default {
  data() {
    return {
      items [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Xiaomi' }
      ]
    }
  }
}
```

### 5. 条件选择 v-if、v-else、v-else-if

```html
<span v-if="isEdit">编辑模式</span>
<span v-else>查看模式</span>
```

```javascript
export default {
  data() {
    return {
      isEdit: true
    }
  }
}
```

### 6. 数据(data)

```html
<p>{{ msg }}</p>
<!--<p>Hello Vue</p>-->
```

```javascript
export default {
  data() {
    return {
      msg: 'Hello Vue'
    }
  },
}
```

### 7. 计算属性(Computed)

```html
<p>{{ addResult }}</p>
<!--<p>5</p>-->
```

```javascript
<p>{{ product.name }}</p>

export default {
  data() {
    return {
      value1: 2,
      value2: 3
    }
  },
  computed: {
    addResult() {
      return this.value1 + this.value2
    },
    product() {
      return this.$store.state.products[0];   //  vuex Store 数据
    }
  }
}
```

### 8. 方法(Methods)

```html
<button @click="addToCart">Add To Cart</button>
```

```javascript
export default {
  data() {
    return {
      product: {
        name: '商品', price: '88.00'
      }
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit("ADD_TO_CART", { product });
    }
  }
}
```

### 9. 组件(Components)

组件：

```html
<form>
  <div class="form-control">
    <label>姓名</label>
    <input name="name" v-model="modelData.name">
  </div>
  <div class="form-control">
    <label>年龄</label>
    <input name="age" v-model="modelData.age">
  </div>
  <button @click="onSubmit">保存</button>
</form>
```

```javascript
export default {
  props: [ 'model' ],
  data() {
    return {
      modelData: {}
    }
  },
  created() {
    this.modelData = model;
  },
  methods: {
    onSubmit() {
      this.$emit('save-product', this.modelData)
    }
  }
}
```

使用组件：

```html
<product-form
  @save-product="addProduct"
  :model="model"
></product-form>
```

```javascript
import ProductForm from '@/components/ProductList.vue';

export default {
  data() {
    return {
      model: {}
    }
  },
  methods: {
    addProduct(model) {
      console.log('model', model);
    }
  },
  components: {
    'product-form': ProductForm
  }
}
```

## 三、Vuex 状态管理

关键词：Store、Mutation、Action

### 1. 安装依赖
```shell
npm install vuex
```

### 2. 建立Vuex Store

项目根目录建立 `src/store/` 文件夹管理状态 

创建index.js 入口文件

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,  // 设置为true，表示必须使用Mutation函数来改变state
  state: {   // 状态内容
    cart: [],
    showLoader: false,
    products: [],
    // ...
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      const { product } = payload;
      state.cart.push(product)
    },
    ALL_PRODUCTS_SUCCESS(state, payload) {
      const { products } = payload;
      state.products = products;
    }
    // ...
  },
  actions: {
    allProducts({ commit }) {
      axios.get(`${API_BASE}/products`).then(res => {
        commit('ALL_PRODUCTS_SUCCESS', { products: res.data });
      })
    }
  }
});
```

### 3. 引入Vuex至main

```javascript
import App from './App';
import router from './router';
import store from './store';
// ...
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App />',
})
```

### 4. 使用Mutations 修改本地状态

关键词：修改Vuex Store的唯一手段

```javascript
Mutation_NAME(state, payload) {
  // 对 `state` 进行操作以返回新的 `state`
  return newState;
}
```

```javascript
// src/store/index.js
export default new Vuex.Store({
  strict: true,
  state: {
    // ...
    cart: [],
    // ...
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      const { product } = payload;
      state.cart.push(product);
    },
    // ...
  },
  // ...
});
```

```javascript
// src/pages/home.vue
export default {
  methods: {
    addToCart(product) {
      this.$store.commit("ADD_TO_CART", { product: product });  // 使用 $store.commit 调用
    }
  }
}
```

### 5. 使用Actions 获取远程数据

```javascript
Action_NAME(context, payload) {
  // 进行异步操作，从后端获取远程数据并返回
  return response.data;
}
```

```javascript
// src/store/index.js
export default new Vuex.Store({
  strict: true,
  state: {
    // ...
    products: [],
    // ...
  },
  mutations: {
    ALL_PRODUCTS_SUCCESS(state, payload) {
      const { products } = payload;
      state.products = products;
    },
    // ...
  },
  actions: {
    allProducts(context) {  // 异步操作，加载数据
      axios.get(`${API_BASE}/products`).then(res => {
        context.commit('ALL_PRODUCTS_SUCCESS', { products: res.data });
      });
    }
  }
});
```

```javascript
// src/pages/home.vue
export default {
  computed: {
    products() {
      // ...
    }
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts');   // 使用 $store.dispatch 调用
    }
  }
}
```

### 6. 使用Getters 复用本地数据获取逻辑

```javascript
// src/store/index.js
export default new Vuex.Store({
  strict: true,
  state: {
    // ...
    products: [],
    // ...
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    productById: (state, getters) => id => {
      if (getters.allProducts.length > 0) {
        return getters.allProducts.filter(p => p._id === id)[0];
      } else {
        return state.product;
      }
    },
  }
});
```

```javascript
// src/pages/home.vue
export default {
  computed: {
    products() {
      return this.$store.getters.allProducts;
    }
  }
}
```

```javascript
// src/pages/detail.vue
export default {
  computed: {
    product() {
      return this.$store.getters.productById(this.$route.params['id']);
    }
  }
}
```

## 四、与Angular比较

Angular 生命周期 ngInit() 

Vue2.x created()

Angular component @Input() 

Vue2.x component props

Angular component @Output() 

Vue2.x component methods