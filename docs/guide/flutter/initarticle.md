---
title: flutter初始化项目

---

### 设置gradle, user/xxx/.gradle, `touch gradle.properties` 新建 gradle.properties, 内容设置为
```
# 阿里云 Maven 镜像
repositories.grails.default = https://maven.aliyun.com/repository/public
# Optional, you can add other sources
repositories.grails.default.1 = https://mirrors.tuna.tsinghua.edu.cn/maven/repos/public
# Optional, adding Central repository
repositories.grails.default.2 = https://repo.maven.apache.org/maven2
```

### 新建项目， cd 到 android 下，执行以下命令，直到出现 `BUILD SUCCESSFUL` 
```
./gradlew clearn
./gradlew build
```

### 然后运行项目











