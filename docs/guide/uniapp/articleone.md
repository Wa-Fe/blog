---
title: uniapp 配置iOS分享，Universal Links
---

如果我要唤醒的网址为 https://test.com. 需要通过这个链接直接唤起App，或者是ios微信分享过后跳回自己的App

# 在`uniapp`里 `manifest.json` 中的配置

打包配置网址不带`http`,`https`,也不带后缀的域名

分享配置填写完整域名，同时要在微信开放平台后台填写

### `ios打包配置`

```js
  
            "ios" : {
                "capabilities" : {
                    "entitlements" : {
                        "com.apple.developer.associated-domains" : [ "applinks:test.com" ]
                    }
                },
  
            },
```

### `ios分享配置`

```js
 "share" : {
                    "weixin" : {
                        "appid" : "wx37000000000",
                        "UniversalLinks" : "https://test.com/ulink/"
                    }
                }
```

# 需要向服务器上传的文件

 文件名称为 `apple-app-site-association`,不带任何后缀，上传到服务器根目录，通过`https://test.com/apple-app-site-association`可以访问到

`appid`为 TeamID与包名的组合,同时注意，访问此文件的时候必须可以在浏览器直接打开显示配置文件，如果以文件流的方式打开，则此文件会失效。可以在后台设置下请求文件的请求头为`application/json` 或者是 `text/html` 



```js
 {  
    "applinks": {  
        "apps": [],  
        "details": [  
            {  
                "appID": "LM8.com.xx.xx",  
                "paths": ["*"]  
            }  
        ]  
    }  
}
```

### 配置完成可以通过 `https://yurl.chayev.com/` 来进行检测，最多48小时生效

### 或者通过 `curl` 进行检测
```
curl -v https://app-site-association.cdn-apple.com/a/v1/xxx.com
```