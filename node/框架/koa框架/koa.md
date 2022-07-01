#### koa是express原作者推出的一款框架，原作者不在维护express交给，团队维护



- ##### koa的基本使用

  - koa返回的是一个类
  - use中的参数
    - ctx
      - response 
      - request
    - next 执行下一个中间件

```
const Koa = require("koa");
const app = new Koa();
app.use((ctx, next) => {
  //   console.log(ctx.request, ctx.response);
  next();
});
app.use((ctx, next) => {
  ctx.response.body = "Hello, world!";
});
app.listen(8000, () => {
  console.log("koa初体验");
});
```



- ##### koa注册中间件

  - 没有提供method，path
  - method app.get

  - path app.use('/login'()=>{})

  - 连续注册 app.use(()=>{},()=>{})





