//老虎
/*
function tiger() {
	this.name="tiger1";
	this.clr = "白色";
	this.tyle="东北虎";
}

function lion() {
	this.name="lion1";
	this.clr = "黄色";
	this.tyle="非洲狮";
}

//想将公共的属性和方法抽取出来
//若是创建的构造函数有与之相应的属性，那么直接到公共的属性获取
//原型链继承：
function Animal() {//超类型（其他语言：父类 基类）
	this.name="name";
	this.clr = "clr";
	this.type="type";
	this.run = function() {
		return "run...";
	}
}

//继承：
function Tiger() { //子类型 （其他类型：子类 派生类）
	this.role = "森林之王";
	Tiger.prototype.bb="bb";//给原型对象添加属性	
}
/*
Tiger.prototype = {//直接添加原型对象
		constructor:Tiger,
		aa:"22"	
};	
*/

/*
function Lion() {
	this.live = 50;
}

Tiger.prototype = new Animal();//将子类型对象的原型对象指向了超类型对象
Lion.prototype = new Animal();

var t = new Tiger();
var l = new Lion();
alert("tiger:" + t.name);
alert("tiger aa:" + t.aa);
alert("tiger bb:" + t.bb);
alert("tiger role:" + t.role);
alert("lion:" + l.type);
alert("lion live:" + l.live);
alert("lion run:" + l.run());

//继承的好处:减少大量重复性的代码

*/
//超类型	
function Animal(name,clr,type) {
	this.name = name;
	this.clr = clr;
	this.type = type;
}

function Tiger(name,clr,type,role) {
	this.role = role;
	//具有超类型的属性
	//用this对象冒充Animal执行构造函数
	Animal.call(this,name,clr,type);
}

function Lion(name,clr,type,live) {
	this.live = live;
	//具有超类型的属性
	Animal.call(this,name,clr,type);
}

var t = new Tiger("tiger1","white","dongbeihu","manager");
alert(t.name);
var l = new Lion("lion1","yellow","admin","50");
alert(l.name);
alert(l.live);

//call:冒充调用
function Box(){
	this.run = function() {
		return "run";
	}	
}
//冒充调用
var obj = new Object();
//构造函数.call(冒充对象);
Box.call(obj);//obj 冒充 Box对象
alert(obj.run());












