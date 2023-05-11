---
title: 组件的懒加载
---

```vue
<template>
  <div id="app">
      <Test1></Test1>
  </div>
</template>

<script>
export default {
  components: {
    Test1 : resolve => require(['./components/test1.vue'],resolve)
  },
  props: {},
  data() {
    return {
    };
  },
  created() {},
  mounted() {

  },  
  watch: {},
  computed: {
  
  },
  methods: {  
  },
};
</script>

```
