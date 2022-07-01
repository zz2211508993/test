### Commander 里面内置一些指令（也可以自定义指令）

- 定义版本号

  - ```
    program.version(require("./package.json").version);
    ```

- 添加其他选项，帮助选项

  - <xxx> 是必选的，并且可以拿到的

  ```
    program.option("-w --why", "a w option");
    program.option("-s --src <src>", "a source folder ");
    program.option("-d --dest <dest>", "a dest folder 例如-d /src/components");
    program.option("-f --framework <framework>", "a w option");
  
    // 监听help
    program.on("--help", function () {
      console.log("aaa");
    });
  ```

  

- 必须解析终端命令，才可以使用

  ```
  program.parse(process.argv);
  ```

  

