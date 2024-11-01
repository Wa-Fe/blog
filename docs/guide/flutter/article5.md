---
title: gradle 过慢

---

### `android/gradle/wrapper/gradle-wrapper.properties`

```dart
distributionUrl=https\://mirrors.cloud.tencent.com/gradle/gradle-7.5-all.zip
```
### `android/gradle/build.gradle`

```dart

allprojects {
    repositories {
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'https://maven.aliyun.com/repository/public' }
        google()
        mavenCentral()
    }
}

```
