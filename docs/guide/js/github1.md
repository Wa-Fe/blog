---
title: mac zsh 执行部分脚本无效
---

#### 首先使用brew安装zsh
```
brew install zsh
```

#### 查看所在的路经
```
which -a zsh
------
/opt/homebrew/bin/zsh
/bin/zsh
```

#### 添加到默认的shell文件中，添加到最后一行
```
sudo vim /etc/shells
```

#### 查看是否添加成功
```
cat /etc/shells
```

#### 替换默认的shell
```
chsh -s /opt/homebrew/bin/zsh
```

#### 成功之后关闭终端然后重新打开，切记


