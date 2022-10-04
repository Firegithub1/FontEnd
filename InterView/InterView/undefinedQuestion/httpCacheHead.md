浏览器发出请求：
1.检查是否有缓存
2.Pragma字段no-cache 强制请求新资源
3.有缓存无Pragma，先判断缓存是否过期（Cache-Control 优先于 Expires),没有过期就使用缓存
4.缓存有效时间过期了，查看Eatg和Last-Modified头部
5.发送if-none-Match 和 if-Modified-Since 去验证是否缓存还能继续使用
（可能缓存到期了，但是服务端没有修改，而且资源又比较大，通过校验可以减少网络传输）
6.资源没有修改就是用缓存
7.资源修改了就返回新的资源
