---
title: vue打包发布的命令(sh脚本)
---

#### 执行命令为 `bash xx.sh`

```sh
#!/opt/homebrew/bin/bash


REMOTE_REPO="xxxx.git"

# 提示用户输入commit信息
read -ep "请输入commit信息: " COMMIT_MESSAGE

# 分支数组及其对应的打包命令
declare -A branch_commands=(
    ["xxxx"]="npm run build:prod"
    ["xxxx"]="npm run build:dev"
)

# 显示分支选项
echo "请选择要发布的分支（输入数字）："
index=1
for branch in "${!branch_commands[@]}"; do
    echo "$index)$branch"
    ((index++))
done

# 读取用户选择的分支
read -p "分支选择: " branch_choice

# 获取分支名
BRANCH_KEY=$(echo "${!branch_commands[@]}" | tr ' ' '\n' | sed -n "${branch_choice}p")

# 确保选择了有效的分支
if [ -z "$BRANCH_KEY" ]; then
    echo "无效的分支选择。"
    exit 1
fi

# 获取选择的分支名
BRANCH=$BRANCH_KEY
echo "您选择的分支是: $BRANCH"

# 获取对应的打包命令
BUILD_CMD=${branch_commands[$BRANCH]}

# 执行对应的打包命令
echo "正在打包 $BRANCH..." $BUILD_CMD || { echo '打包失败' ; exit 1; }

$BUILD_CMD


# 切换到打包后的目录，通常是dist
cd dist

echo "进入dist"

# 初始化git仓库（如果尚未初始化）
git init

git branch -M main master


# 添加所有文件到暂存区
git add -A

# 创建一个新的commit
git commit -m "$COMMIT_MESSAGE"


# 强制推送到远程仓库的指定分支
git push -f $REMOTE_REPO master:$BRANCH

# 返回项目根目录
cd ..

echo "打包完成"


```