### Sharp库是用来处理图片(可以进行裁剪，旋转)

- resize 裁剪图片
- toFile 格式

```
sharp("./bar.png").resize(200, 200).toFile("./baz.png");
```

- toBuffer 需要使用配合then

  ```
  sharp("./foo.png")
    .resize(300, 300)
    .toBuffer()
    .then((data) => {
      fs.writeFile("./bax.png", data, (err) => console.log(err));
    });
  ```

  