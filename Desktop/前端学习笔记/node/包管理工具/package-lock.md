### package-lock.json

- packages-lock.json文件解析:

- name 项目名称

- version 项目的版本

- lockfileVersion lock文件的版本

- requires 记录当前模块的依赖

- dependencies 项目的依赖

  - 当前项目依赖axios，但是axios依赖follow-redireacts 所以创建了两个

  - axios中的属性如下

    - verison 安装的axios版本

    - resolved 用来记录registry仓库的下载地址

    - requires 记录当前模块的依赖

    - integrity 用来从缓存中获取索引，在通过索引去获取压缩包

      
