#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


# 生成静态文件
npm run docs:build


# # 进入生成的文件夹
cd docs/.vuepress/dist


# 如果是发布到自定义域名
echo 'wafe.cc' > CNAME

git init
git add -A
git commit -m 'deploy'

# # 如果发布到 https://<USERNAME>.github.io
# # git push -f git@github.com:Wa-Fe/myblog.git main

# # 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Wa-Fe/blog.git main:public

# cd -