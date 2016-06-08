/*
继承：为了提高程序的健壮性，可扩展性。
	简化代码：把公共的属性和方法提取为一个公共类，
	若子类型需要公共属性和方法时，可以直接到公共类中获取
*/
function Animal() {//超类型
	this.name = "aaa";
	this.age = "";
	this.sex = "";
	this.clr = "";
}

Animal.prototype.run = function() {
	return "run";
}

function Dog() {//子类型
	//var obj = new Object();
	this.type = "";
	//往原型对象中添加原型属性
	Dog.prototype.bb = "bb";
	//将原型对象替换
	/*
	Dog.prototype = {
		aa:22
	};*/
	//return obj
}
//原型链的方式

Dog.prototype = new Animal();//将超类型对象赋给子类型的原型对象

function Cat() {
	this.cry = "";
}

Cat.prototype = new Animal();Cat.prototype = new Animal();Cat.prototype = new Animal();

var d= new Dog();
alert(d.run);

/*
var d = new Dog();//在创建对象时，原型对象被改变了吗？使用的是之前（Animal）的原型对象
alert(d.name);//aaa
alert("d aa:" + d.aa);//d aa:undefined
alert("d bb:" + d.bb);//bb

var d1 = new Dog();//这次创建时，使用Dog.prototype = {aa:22};原型对象
alert("d1 aa:" + d1.aa);// 22
alert("d1 name:" + d1.name); //d1 name:undefined
alert("d1 bb:" + d1.bb);//bb
*/
/*
//2.问题：不能传递参数
//解决方案：使用对象冒充的方式实现继承
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
/*
//var t = new Tiger("pagertiger",23,"white","manager");
//alert(t.name);
var a = new Animal("aaa",23,"man","white");
var t = new Tiger("pagertiger",23,"white","manager");
var a = a.show.call(t);
alert(a);

//开发时 会将函数放到原型对象中
//不能继承原型对象中的函数。
*/










