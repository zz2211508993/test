### Stream(流)

##### 可以通过使用流来控制readFile或者writeFile是读写全部

- 流可以控制，从什么位置开始读取，一次性读取多少个字节

- 读取到某个位置后暂停，某个时刻恢复读取

- 如果这个文件很大，一次性读取并不适合

  

##### 文件读写Stream

- 所有流都是EventEmitter的实例

- Node.js的四种基本流类型
  - Writable 可以向其写入数据流
  - Readable 可以从中读取数据的流

- Readble的使用

  - 通过fs.createReadStream()

    第一个参数路径

    第二个参数: 对象

    - start 从哪里开始都

    - end 读到哪里

    - highWaterMark 每次读取几个字节
    - pause 暂停
    - on(open) 文件被打开
    - end文件读取结束
    - close 文件被关闭

    ```
    const read = fs.createReadStream("./foo.txt", {
      // 从哪里开始读
      start: 3,
      //  读到哪里
      end: 8,
      //   每次读取几个
      highWaterMark: 4,
    });
    read.on("data", (data) => {
      console.log(data);
      //   读到文件先暂停，1000秒，然后在继续读取
      read.pause();
      setTimeout(() => {
        read.resume();
      }, 1000);
    });
    
    read.on("open", () => {
      console.log("文件被打开");
    });
    
    read.on("end", () => {
      console.log("文件读取结束");
    });
    
    read.on("close", () => {
      console.log("文件被关闭");
    });
    
    ```

    

- Writable 的使用

  - 通过fs.createWriteStream

    - 第一个参数 路径

    - 第二个参数 写入的一样

    - 注意点:

      - writable 不能通过on 监听到关闭
      - 需要通过 writer.close
      - 才可以监听到关闭的事件

      

- pipe 可以通过管道发送数据

  - 发送数据给writer 参数必须是 writerStream

  - ```
    const fs = require("fs");
    
    const reader = fs.createReadStream("./foo.txt");
    const writer = fs.createWriteStream("./foz.txt");
    
    reader.pipe(writer);
    
    // writer.close(); 关闭之后写入的会是空的
    ```

    