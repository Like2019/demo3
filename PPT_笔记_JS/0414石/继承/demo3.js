//原型链 + 冒充的方式=组合继承方式
//既可以解决传参问题 又可以继承原型中的函数
function Animal(name,age,sex,clr) {
	this.name = "aaa";
	this.age = age;
	this.sex = sex;
	this.clr = clr;
	this.show=function() {
		return this.name;
	}
}

Animal.prototype.run = function() {
	return "run...";
}

function Tiger(name,age,sex,clr,role) {
	this.role = role;
	//this.name = name;
	//使用this冒充Animal执行
	//用Animal代替this对象
	Animal.call(this,name,age,sex,clr);
}
//原型链
Tiger.prototype = new Animal();
//所有的对象，都隐含继承Object对象

var t = new Tiger("pagertiger",23,"white","manager");
var a = t.run();
alert(a);
