git的指令 都是加上Git前面

clone xxx 克隆 xxx就是gitHub上的项目

status 查看状态 

add . 一次性添加多个文件，管理

commit -m "xx" 提交的信息

config --global user.name '你的用户名'  设置用户名

config --global user.email '你的邮箱'  设置邮箱

remote add origin "gitHub项目的地址" 添加到远程仓库

push -u origin master 上传并指定默认	

gir 强制提交

push 提交到远程仓库 将当前分支的commit提交的添加到远程仓库

branch '分支名字' 创建分支

  在使用git的过程中，我们经常需要查看某次commit修改了哪些内容，与之相关的命令就是:

git log

git show

b退出

运行 git bash here

一、简介

git ls-files 查看暂存区中文件信息

二、参数信息，括号里是简写

--cached (-c) 查看暂存区中文件，git ls-files 命令默认是此命令

--midified （-m）查看修改的文件

--delete （-d）查看删除过的文件

--other （-o）查看没有被git跟踪的文件

--stage (-s) 显示mode以及文件对应的Blob对象，进而我们可以获取暂存区中对应文件里面的内容。				



删除

remote rm  origin 删除远程仓库

git branch -d master 



切换分支

 git checkout master 











