/*
function Emp() {
		this.name = "zhangsan";	
}
Emp.prototype.age = 23;
Emp.prototype.run = function() {
	return "run...";
}
var e = new Emp();
alert(e.name);
*/
/*
var emp = {
		name:"zhangsan",
		age:23,
		run:function() {
			return "aaa";
		}
};
emp = {
		size:"111"
};
alert(emp.name);

*/
/*
function Emp(){};
Emp.prototype = {
	constructor:Emp,
	name:"zhangsan",
	age:23,
	run:function() {
		return "run...";
	}
};
//重写原型对象，会将之前的原型对象覆盖，它不会保留之前的属性和函数

var emp = new Emp();

alert(emp.name);
alert(emp.run());


alert(Array.prototype.sort);
alert(String.prototype.substring);
//这种方式是不建议使用，有可能会产生冲突。
String.prototype.addString = function() {
	return this + "。。。。添加了";
}

alert("abc".addString());
*/
/*
	function Emp(){}
	Emp.prototype = {
		interest:["吃饭","睡觉","打豆豆"]
	};
	var e1 = new Emp();
	e1.interest.push("玩游戏");
	alert(e1.interest);
	var e2 = new Emp();
	e2.interest.push("踢足球");
	alert(e2.interest);
*/
function Emp(name,age,sex) {
	this.name = name;
	this.age = age;
	this.sex = sex;
	alert("begin");
	alert(this.run);
	if(typeof this.run != "function") {
		Emp.prototype.run = function() {
			return this.name + this.age + this.sex + "run....";
		}
	}
	if(typeof this.show != "function") {
		Emp.prototype.show = function() {
			return "show";
		}
	}
	alert("end");
}o


var e1 = new Emp("zhangsan",23,"man");
var e2 = new Emp("lisi",26,"woman");
alert(e1 == e2);
alert(e1.run == e2.run);









