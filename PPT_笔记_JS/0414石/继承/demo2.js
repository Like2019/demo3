/*
�̳У�Ϊ����߳���Ľ�׳�ԣ�����չ�ԡ�
	�򻯴��룺�ѹ��������Ժͷ�����ȡΪһ�������࣬
	����������Ҫ�������Ժͷ���ʱ������ֱ�ӵ��������л�ȡ
*/
function Animal() {//������
	this.name = "aaa";
	this.age = "";
	this.sex = "";
	this.clr = "";
}

Animal.prototype.run = function() {
	return "run";
}

function Dog() {//������
	//var obj = new Object();
	this.type = "";
	//��ԭ�Ͷ��������ԭ������
	Dog.prototype.bb = "bb";
	//��ԭ�Ͷ����滻
	/*
	Dog.prototype = {
		aa:22
	};*/
	//return obj
}
//ԭ�����ķ�ʽ

Dog.prototype = new Animal();//�������Ͷ��󸳸������͵�ԭ�Ͷ���

function Cat() {
	this.cry = "";
}

Cat.prototype = new Animal();Cat.prototype = new Animal();Cat.prototype = new Animal();

var d= new Dog();
alert(d.run);

/*
var d = new Dog();//�ڴ�������ʱ��ԭ�Ͷ��󱻸ı�����ʹ�õ���֮ǰ��Animal����ԭ�Ͷ���
alert(d.name);//aaa
alert("d aa:" + d.aa);//d aa:undefined
alert("d bb:" + d.bb);//bb

var d1 = new Dog();//��δ���ʱ��ʹ��Dog.prototype = {aa:22};ԭ�Ͷ���
alert("d1 aa:" + d1.aa);// 22
alert("d1 name:" + d1.name); //d1 name:undefined
alert("d1 bb:" + d1.bb);//bb
*/
/*
//2.���⣺���ܴ��ݲ���
//���������ʹ�ö���ð��ķ�ʽʵ�ּ̳�
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
	//ʹ��thisð��Animalִ��
	//��Animal����this����
	Animal.call(this,name,age,sex,clr);
}
/*
//var t = new Tiger("pagertiger",23,"white","manager");
//alert(t.name);
var a = new Animal("aaa",23,"man","white");
var t = new Tiger("pagertiger",23,"white","manager");
var a = a.show.call(t);
alert(a);

//����ʱ �Ὣ�����ŵ�ԭ�Ͷ�����
//���ܼ̳�ԭ�Ͷ����еĺ�����
*/










