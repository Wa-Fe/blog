---
title: flutter添加网络调试

---

### 使用`Dio`进行开发
添加以下函数

```dart
    if(kDebugMode){
      (dio.httpClientAdapter as DefaultHttpClientAdapter).onHttpClientCreate = (client){
        client.findProxy = (uri){
          return 'PROXY 192.168.3.151:8888';
        };
      };
    }

```

