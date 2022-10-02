http://www.jsdelivr.com/#!pubsubjs

上一节的"事件"，完全可以理解成"信号"。

我们假定，存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"（publish）一个信号，其他任务可以向信号中心"订阅"（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做"发布/订阅模式"（publish-subscribe pattern），又称"观察者模式"（observer pattern）。

这个模式有多种实现，下面采用的是 Ben Alman 的 Tiny Pub/Sub，这是 jQuery 的一个插件。

首先，f2 向"信号中心"jQuery 订阅"done"信号。

jQuery.subscribe("done", f2);

然后，f1 进行如下改写：

```js
function f1() {
  setTimeout(function () {
    // f1 的任务代码

    jQuery.publish("done");
  }, 1000);
}
```

jQuery.publish("done")的意思是，f1 执行完成后，向"信号中心"jQuery 发布"done"信号，从而引发 f2 的执行。

此外，f2 完成执行后，也可以取消订阅（unsubscribe）。

jQuery.unsubscribe("done", f2);

这种方法的性质与"事件监听"类似，但是明显优于后者。因为我们可以通过查看"消息中心"，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。
