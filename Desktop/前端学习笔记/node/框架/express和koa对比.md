express和koa对比

- express提供了get path post 连续注册中间件

- express 不能操作异步数据
- express next 返回的是一个普通的函数
- koa没有提供get path post 连续注册中间件

- koa对操作异步数据比较好操作
- koa 返回的一个是promise 所以可以操作异步

- koa是轻量级的，代码比较少

  

### 案例实现

- express同步数据 aaa,bbb,ccc

```
const express = require("express");

const app = express();

const middleware1 = (req, res, next) => {
  req.message = "aaa";
  next();
  res.end(req.message);
};

const middleware2 = (req, res, next) => {
  req.message += "bbb";
  next();
};

const middleware3 = (req, res, next) => {
  req.message += "ccc";
};

app.use(middleware1, middleware2, middleware3);

app.listen(8000, () => {
  console.log("服务器启动成功");
});

```

- express异步数据 返回aaa,bbb 歌词

```
const express = require("express");
const axios = require("axios");

const app = express();

const middleware1 = async (req, res, next) => {
  req.message = "aaa";
  await next();
  res.end(req.message);
};

const middleware2 = async (req, res, next) => {
  req.message += "bbb";
  await next();
};

const middleware3 = async (req, res, next) => {
  const result = await axios.get("http://123.207.32.32:9001/lyric?id=167876");
  req.message += result.data.lrc.lyric;
};

app.use(middleware1, middleware2, middleware3);

app.listen(8000, () => {
  console.log("服务器启动成功~");
});

```

- koa 实现同步数据 aaa,bbb,ccc

- ```
  const Koa = require("koa");
  
  const app = new Koa();
  
  const middleware1 = (ctx, next) => {
    ctx.message = "aaa";
    next();
    ctx.body = ctx.message;
  };
  
  const middleware2 = (ctx, next) => {
    ctx.message += "bbb";
    next();
  };
  
  const middleware3 = (ctx, next) => {
    ctx.message += "ccc";
  };
  
  app.use(middleware1);
  app.use(middleware2);
  app.use(middleware3);
  
  app.listen(8000, () => {
    console.log("服务器启动成功");
  });
  
  ```

  

  

- koa实现 异步数据 返回aaa,bbb 歌词

- ```
  const Koa = require("koa");
  const axios = require("axios");
  const app = new Koa();
  
  const middleware1 = async (ctx, next) => {
    ctx.message = "aaa";
    await next();
    ctx.body = ctx.message;
  };
  
  const middleware2 = async (ctx, next) => {
    ctx.message += "bbb";
    await next();
  };
  
  const middleware3 = async (ctx, next) => {
    const result = await axios.get("http://123.207.32.32:9001/lyric?id=167876");
    ctx.message += result.data.lrc.lyric;
  };
  
  app.use(middleware1);
  app.use(middleware2);
  app.use(middleware3);
  
  app.listen(8000, () => {
    console.log("服务器启动成功");
  });
  ```

  