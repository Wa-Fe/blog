---
title: 获取url参数
---


```js 
function getUrlString(name) {
  const urlTxt = "https://cn.bing.com/search?q=vscode+%E5%A4%87%E6%B3%A8"; // window.location.href
  const url = new URL(urlTxt);
  return url.searchParams.get(name);
}
```
