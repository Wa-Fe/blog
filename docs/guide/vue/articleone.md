---
title: cdn在线加载资源
---

### 字节跳动在心啊cdn地址

```js
https://cdn.bytedance.com/
```


###  在`index.html`引入资源

```html
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
    <script src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/2.6.10/vue.min.js" type="application/javascript"></script>
    <!-- elementui -->
    <link href="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/element-ui/2.15.6/theme-chalk/index.min.css" type="text/css" rel="stylesheet" />
    <script src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/element-ui/2.15.6/index.min.js" type="application/javascript"></script>
```



### 在`vue.config`加入一下代码

```js
module.exports = defineConfig({
  configureWebpack:{
    externals:{
      'vue': 'Vue',
      'element-ui': 'ELEMENT',
    }
  }
});

```