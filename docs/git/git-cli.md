# git常用cli

[我的 git语雀笔记](https://www.yuque.com/xiaomaipian/ih98mh/mdarb4)

## 一、简单总结经常使用的git命令
### 1. 创建仓库
github中创建

### 2. 拉取仓库 至 本地
```shell
git clone <url>
```

### 3. 本地创建新分支 | 删除新分支
```shell
git checkout -b <branch_name>
git branch -d <branch_name>
```

### 4. 本地编辑代码

### 5. 加入本地暂存区
```shell
git add <file_name>
git add *
```

### 6. 提交HEAD commit（提示信息）
```shell
git commit -m "代码提交信息"
```

### 7. 推送 本地Code至远端
```shell
git push origin <branch_name>
```

### 8. 还原至远端某个分支
```shell
git reset --hard origin/<branch_name>
```

### 9. 更新/合并/比较差异
```shell
git megre <branch_name>
git diff <source_branch> <target_branch>
```


## 二、git的使用场景

本地工作：
1. 先获取最新code
2. 新建branch
3. 新增/编辑/删除 files
4. 提交到缓存区
5. 提交到服务器

提交code到服务器：
1. 查看变动（查看commit log）

master branch的维护：
1. diff比较一个需要升级为master的branch（假设是feature），解决冲突
2. 合并为master（feature消失）

▲什么时候commit
– 任何时候都可以，但message需要按格式书写，方便维护和生成Log

▲commit注释写什么，怎么写
– 参考格式规范，如：fix修复，feat新功能 等
[阮一峰老师的建议 - Commit message 和 Change log 编写指南](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)


## 三、git相关的一些参考

[git - 简明指南](http://rogerdudler.github.io/git-guide/index.zh.html)

[小白入门~ GitHub和Git超详细使用教程~](https://blog.csdn.net/buknow/article/details/80325986)

[图解Git](https://marklodato.github.io/visual-git-guide/index-zh-cn.html)，有图比较容易理解每个命令执行的逻辑

[Pro Git book](https://git-scm.com/book/zh/v2/)

[工作、开源两不误：Git多账号管理](https://zhuanlan.zhihu.com/p/62071906)，一台电脑使用多个账号时的解决办法

window平台自建git服务器的思路：服务端gitblit + 客户端git for windows
[一款window平台自建git服务器的开源软件 Bonobo Git Server](https://bonobogitserver.com/)