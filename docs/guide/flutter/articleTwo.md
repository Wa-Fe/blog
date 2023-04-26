---
title: flutter添加permission_handler报错

---

### 系统证书目录 `/system/etc/security/cacerts/`
证书命名规则 `<Certificate_Hash>.<Number>`

命令行算出证书名称

```js
openssl x509 -subject_hash_old -in <Certificate_File>
```

后缀名的数字是为了防止文件名冲突的，比如如果两个证书算出的Hash值是一样的话，那么一个证书的后缀名数字可以设置成0，而另一个证书的后缀名数字可以设置成1

此时你应该可以在 设置->安全->加密与凭据->信任的凭据 的系统标签页看到你新加入的证书，将其启用即可顺利抓包
