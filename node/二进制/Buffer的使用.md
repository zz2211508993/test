### Buffer中存储的二进制的数组

- 数组中的每一项，可以保存8位二进制，000000000

- 为什么是八位
  - 默认情况下，很少操作1位二进制，8位合在一起
  - 就是一个单元，也就是一个字节

- 并且Buffer解码和编码必须一致，不然会出现乱码的错误

- 默认是utf-8 英文一个字节，中文 三个字节

- #### Buffer的创建过程

  - 创建Bufffer的过程，不会频繁的向操作系统申请空间，会一次性申请一块8 * 1024字节的空间

  - 放不下就会创建，新的空间，也会执行偏移

    

- ##### 使用

  - 两种方式

    - Buffer的两种，第二参数都什么格式解析编码

    - 第一种

    - ```
      // const buffer01 = new Buffer("why",解析编码);
      ```

    - 第二种

    - ```
      // const buffer01 = Buffer("why",解析编码);
      ```

- ##### Buffer的alloc(可以创建指定的空间)，并且指定的字节中存储默认是00

  - ​	创建8个字节，每个字节都是00

  - ```
    // const buffer01 = Buffer.alloc(8); //00 00 00 00 00 00 00 00
    ```

    

