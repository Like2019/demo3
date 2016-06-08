/*
function Person(_name,_age,_sex) {
	this.name = _name;
	this.age = _age;
	this.sex = _sex;
	this.run = function() {
		return this.age + this.name + this.sex;
	}
}
var person = new Person("zhangsan",23,"man");
var person1 = new Person("zhangsan",23,"man");

alert(person == person1);//不相等
alert(person.name == person1.name);//相等
alert(person.run == person1.run);//不相等

function Box(){};//构造函数，什么都不用写
	//在构造函数中的属性，称为实例属性。
	Box.prototype.name="zhangsan";//原型属性
	Box.prototype.age = 23;
	Box.prototype.run = function() {
		return this.name  + this.age + "run...";
}
var box = new Box();
var box1 = new Box();
//alert(box.name);
//alert(box.age);
//alert(box.run());
alert(box == box1);
alert(box.name == box1.name);
alert(box.run == box1.run);
//原型对象中的方法是共享的。

alert(box.__proto__);//原型对象的实例
alert(box.prototype);//访问原型对象是不行的

//人类
function Person() {
		this.name="zhangsan";//实例属性
		this.run = function() {	
			return this.name + "run...";
		}
}
//人类中的特征和行为：所有人类对象共有的
Person.prototype.name = "lisi";
Person.prototype.run = function() {
	return this.name ;
}
//prototype是所有实例对象共享的对象

//人类中个体 实例对象
var person = new Person();
var person1 = new Person();

delete person.name;//删除实例属性
delete Person.prototype.name;//删除原型属性
alert(person.name);
alert(person.run());
alert("person1 name:" + person1.name);
delete person1.name;
alert("person1 run:" + person1.run());
*/
//判断实例对象是否指向构造函数的原型对象
//人类
function Person() {
	this.name="zhangsan";//实例属性
	this.age = 23;
	this.run = function() {	
		return this.name + "run...";
	}
}
//人类中的特征和行为：所有人类对象共有的 isPrototypeOf()

Person.prototype.name = "lisi";
Person.prototype.run = function() {
	return this.name ;
}

var p = new Person();
alert(p.name);

/*
var p = new Person();
var obj = new Object();
alert(Person.prototype.isPrototypeOf(p));//p对象是否指向构造函数Person的原型对象
*/
/*
var p = new Person();
//判断p中有name属性？
//alert(p.hasOwnProperty("age"));
//alert("name" in p);

//判断只有原型中有的属性
function isProperty(obj,property) {
		return !obj.hasOwnProperty(property) && (property in obj);
}
alert(isProperty(p,"name"));
*/

