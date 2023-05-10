---
title: 数组常用方法
---

#### 获取多个数组交集

```js 
const intersection = (a, ...arr) => [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)))

intersection([1, 2, 3, 4], [2, 3, 4, 7, 8], [1, 3, 4, 9])
// [3, 4]
```
