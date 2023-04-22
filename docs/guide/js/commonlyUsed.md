---
title: 常用方法
---

#### 处理商品规格

```js
var arr = []
    function format() {
        if (arr.length < 2) return arr[0] || [];
        return [].reduce.call(arr, function (col, set) {
            let res = [];
            col.forEach(c => {
                set.forEach(s => {
                    let t = [].concat(Array.isArray(c) ? c : [c]);
                    t.push(s);
                    res.push(t);
                })
            });
            return res;
        });
    }

    function test2(){
        arr = [["iPhone X", "iPhone XS",],["黑色","白色","蓝色"]]
        console.log( format())
    }
```


#### 轮播图片自动分页

```
 <div class="goods-item" v-for="ele in buyList.slice(0 + index * 3, 3 + index * 3)" :key="ele.itemid">
 
 </div>

```