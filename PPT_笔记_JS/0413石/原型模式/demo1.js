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
//��дԭ�Ͷ��󣬻Ὣ֮ǰ��ԭ�Ͷ��󸲸ǣ������ᱣ��֮ǰ�����Ժͺ���

var emp = new Emp();

alert(emp.name);
alert(emp.run());


alert(Array.prototype.sort);
alert(String.prototype.substring);
//���ַ�ʽ�ǲ�����ʹ�ã��п��ܻ������ͻ��
String.prototype.addString = function() {
	return this + "�������������";
}

alert("abc".addString());
*/
/*
	function Emp(){}
	Emp.prototype = {
		interest:["�Է�","˯��","�򶹶�"]
	};
	var e1 = new Emp();
	e1.interest.push("����Ϸ");
	alert(e1.interest);
	var e2 = new Emp();
	e2.interest.push("������");
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









