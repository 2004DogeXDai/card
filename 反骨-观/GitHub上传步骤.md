# GitHub 上传操作步骤指南

## 方法一：使用 GitHub Desktop（最简单，推荐新手）⭐

### 第一步：下载安装 GitHub Desktop
1. 访问：https://desktop.github.com/
2. 下载并安装 GitHub Desktop
3. 打开后使用你的 GitHub 账号登录

### 第二步：创建 GitHub 仓库
1. 登录 GitHub 网站：https://github.com
2. 点击右上角的 "+" 号
3. 选择 "New repository"（新建仓库）
4. 填写信息：
   - **Repository name**: `surprise-card`（或你喜欢的名字，如：xiao-wu-surprise）
   - **Description**: 惊喜贺卡网页
   - **选择 Public**（公开，这样才能免费使用 GitHub Pages）
   - ⚠️ **不要**勾选 "Add a README file"、"Add .gitignore"、"Choose a license"
5. 点击绿色的 "Create repository" 按钮

### 第三步：使用 GitHub Desktop 上传
1. 打开 GitHub Desktop
2. 点击菜单栏 "File" → "Add Local Repository"
3. 点击 "Choose..." 按钮
4. 选择你的项目文件夹：`d:\剧本杀\反骨-观`
5. 如果提示 "This directory does not appear to be a Git repository"，点击 "create a repository" 按钮
6. 在左下角填写提交信息（Commit message）：`Initial commit: 惊喜贺卡`
7. 点击 "Commit to main" 按钮
8. 点击顶部工具栏的 "Publish repository" 按钮
9. 在弹出的窗口中：
   - 取消勾选 "Keep this code private"（因为我们选择的是 Public）
   - 点击 "Publish repository"

### 第四步：启用 GitHub Pages
1. 在 GitHub 网站打开你的仓库
2. 点击仓库页面顶部的 "Settings"（设置）标签
3. 在左侧菜单中找到 "Pages"（页面）选项
4. ⚠️ **重要：如果看到 "GitHub Pages is currently disabled"（GitHub Pages 当前已禁用）**
   - 这说明仓库还没有文件，需要先完成第三步（上传文件）
   - 请先回到仓库主页，确认 `index.html` 等文件已经上传成功
   - 如果文件已上传，继续下面的步骤
5. 在 "Source" 部分：
   - Branch 选择：`main`
   - Folder 选择：`/ (root)`
6. 点击 "Save"（保存）按钮
7. 等待 1-2 分钟，GitHub 会显示你的网站地址：
   - **显示位置**：在 "Pages" 设置页面的顶部，会显示一个绿色的提示框
   - **提示框内容**：显示 "Your site is live at..."（你的网站已上线，地址是...）
   - **地址格式**：`https://你的用户名.github.io/仓库名/`
   - **例如**：`https://zhangsan.github.io/surprise-card/`
   - ⚠️ **注意**：
     - 如果刚保存，可能需要等待 1-2 分钟才会显示地址
     - 如果显示 "Not yet published"（尚未发布），请稍等片刻后刷新页面
     - 如果一直显示 "disabled"，请检查仓库中是否有 `index.html` 文件

### 完成！🎉
现在其他人可以通过你分享的链接访问这个惊喜贺卡了！

---

## 方法二：使用 Git 命令行（适合有经验的用户）

### 前提条件
确保已安装 Git：https://git-scm.com/download/win

### 操作步骤

1. **打开命令提示符或 PowerShell**
   - 按 `Win + R`，输入 `cmd` 或 `powershell`，回车

2. **进入项目目录**
   ```bash
   cd "d:\剧本杀\反骨-观"
   ```

3. **初始化 Git 仓库**
   ```bash
   git init
   ```

4. **添加所有文件**
   ```bash
   git add .
   ```

5. **提交代码**
   ```bash
   git commit -m "Initial commit: 惊喜贺卡"
   ```

6. **在 GitHub 创建仓库**（参考方法一第二步）

7. **连接远程仓库**
   ```bash
   git remote add origin https://github.com/你的用户名/仓库名.git
   ```
   例如：`git remote add origin https://github.com/zhangsan/surprise-card.git`

8. **推送代码到 GitHub**
   ```bash
   git branch -M main
   git push -u origin main
   ```
   如果提示输入账号密码，使用 GitHub 的个人访问令牌（Personal Access Token）

9. **启用 GitHub Pages**（参考方法一第四步）

---

## 方法三：直接在 GitHub 网页上传（最简单但功能有限）

1. 在 GitHub 创建新仓库（参考方法一第二步）

2. 在仓库页面，点击 "uploading an existing file"

3. 将项目文件夹中的以下文件拖拽到页面：
   - `index.html`
   - `README.md`
   - `.gitignore`
   - `部署指南.md`（可选）
   - `GitHub上传步骤.md`（可选）

4. 在页面底部填写提交信息：`Initial commit: 惊喜贺卡`

5. 点击 "Commit changes" 按钮

6. 启用 GitHub Pages（参考方法一第四步）

---

## 常见问题解答

### Q1: 如何获取 GitHub 用户名？
A: 登录 GitHub 后，右上角显示的就是你的用户名。

### Q2: 网站地址是什么格式？
A: `https://你的用户名.github.io/仓库名/`
例如：如果用户名是 `zhangsan`，仓库名是 `surprise-card`，地址就是：
`https://zhangsan.github.io/surprise-card/`

### Q3: 上传后多久可以访问？
A: 通常 1-5 分钟即可访问。如果显示 404，等待几分钟再试。

### Q4: 如何更新网站内容？
- **使用 GitHub Desktop**: 修改文件后，在 GitHub Desktop 中会显示更改，填写提交信息后点击 "Commit to main"，然后点击 "Push origin"
- **使用命令行**: `git add .` → `git commit -m "更新描述"` → `git push`
- **使用网页**: 直接在 GitHub 网页上编辑文件

### Q5: 忘记仓库地址怎么办？
A: 登录 GitHub，在个人主页的 "Repositories" 中可以找到所有仓库。

### Q6: 如何分享链接给朋友？
A: 直接将 GitHub Pages 的地址分享给朋友即可，例如：
`https://你的用户名.github.io/仓库名/`

### Q7: 为什么在 Pages 设置页面看不到网站地址，只显示 "GitHub Pages is currently disabled"？
A: 这是因为仓库还没有文件。解决步骤：
1. **检查仓库是否有文件**：
   - 回到仓库主页（点击仓库名称）
   - 查看是否有 `index.html` 等文件
   - 如果仓库是空的，需要先完成第三步（上传文件）

2. **如果文件已上传但仍显示 disabled**：
   - 刷新页面（按 F5）
   - 确认文件在 `main` 分支上
   - 等待几分钟后再试

3. **上传文件后**：
   - 重新进入 Settings → Pages
   - 选择 Branch: `main`，Folder: `/ (root)`
   - 点击 Save
   - 等待 1-2 分钟后，页面顶部会显示绿色的网站地址

---

## 推荐流程

如果你是第一次使用：
1. ⭐ **强烈推荐使用方法一（GitHub Desktop）**，最简单直观
2. 如果遇到问题，可以尝试方法三（网页上传）

上传成功后，你就可以把链接分享给任何人，他们都能看到这个惊喜贺卡了！🎉

