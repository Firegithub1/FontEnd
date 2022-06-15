# messTest

### BFC
Block Formatting Context 块格式化上下文
1.浮动元素（元素的float不是 none，指定float为left或者right就可以创建BFC）
2.绝对定位元素（元素的 position 为 absolute 或 fixed）
3.display:inline-block，display:table-cell，display:flex，display:inline-flex
4.overflow指定除了visible的值
5.添加两个BFC(盒子)

1、解决外边距折叠问题
2、制作两栏布局---BFC的区域不会与浮动的元素区域重叠。
3、清除元素内部的浮动

### 绘制五角星
先绘制 3 个三角形，再将这三个三角形组合而成
border-left: 30px solid transparent;
transform: rotate(-35deg)

<!-- W3School有标准的五角形 -->

### 伪类、伪元素
伪类：先是一个类，作用于元素本身
先是一个元素，效果作用于新创建的 before/after 元素
