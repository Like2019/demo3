/*
1.	利用面向对象的编程方法，设计构造函数Circle计算圆的面积。
①.分析有哪些构造函数？一般是名词:
	新闻系统：
		新闻：
		新闻类别：
		用户：
		评论：
② 分析：构造函数中的属性和行为
	属性：半径
	行为：计算面积

*/
function Circle(r) {
	this.r  = r;//实例属性
	//行为
	Circle.prototype.getArea = function() {//原型对象
		return 3.14 * r * r; 
	}
} 

/*
	构造函数：	
	圆柱
	圆
	属性：
		圆  高 
	行为：
		计算体积

*/
function Cylinder(circle,h) {
	this.circle = circle//圆的实例对象
	this.h = h;//高
	
	Cylinder.prototype.getTiji = function() {
		return circle.getArea() * h;
	}
}



