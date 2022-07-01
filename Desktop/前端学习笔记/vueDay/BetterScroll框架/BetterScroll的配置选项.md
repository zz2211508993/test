#### BetterScroll中的配置选项

probeType 是否监听 scroll事件

0(默认值)不监听scroll 

- 1 只有上拉到停才有效
- 2 滚动有效，上拉到停才有效
- 3 滚动和上拉都有效

pullUpLoad 是否开启上拉加载

pullingDown  是否开启下拉加载

click 被包裹起来的元素，不能使用点击事件 要设置click为true才可以

##### BetterScroll中使用on监听方法

- pullingDown 下拉超过临近值加载，执行的函数
- pullingUp 上拉超过临近值加载，执行的函数
  - pullingUP/pullingDown只会执行一次
  - 可以使用finishPullUp()/Down 可以使用这个函数，下拉到底再执行一次pullingUp或者pullingDown

scrollTo(x,y,time))

x，y就是回到水平和垂直的位置

time 就是几秒到底水平和垂直的位置

可以回到顶部