## 内置模块path

- path模块用于对路径和文件进行处理，提供了很好的方法

- 并且Mac OS 、linux 和window上的路径可能是不一样的
  - window可能是\ 或者\\ 来作为文件的分隔符，也可以支持/
  - 在Mac OS、linux都是以\
  - 

### path常见API

- ##### 路径获取信息

  - dirname 获取父文件的路径

  - basename 获取文件名

  - extname 获取扩展名

  

- #####  路径的拼接

  - 使用path.join 可以对多个路径进行拼接，但是不同的操作系统使用的是不同的分隔符

  - 需要使用path.resolve

    

    

- ##### 将文件和某个文件进行拼接

  - 希望将某个文件和文件夹，拼接可以使用path.resolve
  
  - resolve会判断当前是否有 / ./ ../ 默认不加就是将当前所在路径作为目录
  
  - 如果有就是绝对路径，返回绝对路径
  
  - 如果没有，那么将当前所在路径和执行的文件进行拼接
  
  - 如果有多个，那么会按照顺序拼接到后面
  
  - 如果第二个路径是/，那么会将当前路径作为绝对路径 C:指定的路径，第一个路径不存在
  
  - ```
    const basePath = "/User/why";
    const filename = "/abc.txt";
    const filepath = path.resolve(basePath, filename);
    只会返回
    console.log(filepath); //C:\abc.txt
    ```
  
    

