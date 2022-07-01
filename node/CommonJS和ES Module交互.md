### COmmonJS和ES Module交互



##### 情况一:通常情况，CommonJS可以加载ES_Module

- 因为Commonjs是同步加载的，ES_Module是异步加载的(需要通过解析)，无法在这个时候执行js代码
- 可能CommonJS执行到，还没解析完毕代码还没加载完成
- 但是并非绝对的，有些平台是支持的
- Node当前是不支持的

##### 情况二:多数情况下，ES Module可以加载CommonJS

- ES Module是支持加载CommonJS的，会将module.export 当做 export default导出
- 因为CommonJS执行到的时候，ES Module已经进行解析完毕了
- 具体看平台，Node webpack都支持
- 但是在LTS的版本12以下就不支持了

