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

alert(person == person1);//�����
alert(person.name == person1.name);//���
alert(person.run == person1.run);//�����

function Box(){};//���캯����ʲô������д
	//�ڹ��캯���е����ԣ���Ϊʵ�����ԡ�
	Box.prototype.name="zhangsan";//ԭ������
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
//ԭ�Ͷ����еķ����ǹ���ġ�

alert(box.__proto__);//ԭ�Ͷ����ʵ��
alert(box.prototype);//����ԭ�Ͷ����ǲ��е�

//����
function Person() {
		this.name="zhangsan";//ʵ������
		this.run = function() {	
			return this.name + "run...";
		}
}
//�����е���������Ϊ��������������е�
Person.prototype.name = "lisi";
Person.prototype.run = function() {
	return this.name ;
}
//prototype������ʵ��������Ķ���

//�����и��� ʵ������
var person = new Person();
var person1 = new Person();

delete person.name;//ɾ��ʵ������
delete Person.prototype.name;//ɾ��ԭ������
alert(person.name);
alert(person.run());
alert("person1 name:" + person1.name);
delete person1.name;
alert("person1 run:" + person1.run());
*/
//�ж�ʵ�������Ƿ�ָ���캯����ԭ�Ͷ���
//����
function Person() {
	this.name="zhangsan";//ʵ������
	this.age = 23;
	this.run = function() {	
		return this.name + "run...";
	}
}
//�����е���������Ϊ��������������е� isPrototypeOf()

Person.prototype.name = "lisi";
Person.prototype.run = function() {
	return this.name ;
}

var p = new Person();
alert(p.name);

/*
var p = new Person();
var obj = new Object();
alert(Person.prototype.isPrototypeOf(p));//p�����Ƿ�ָ���캯��Person��ԭ�Ͷ���
*/
/*
var p = new Person();
//�ж�p����name���ԣ�
//alert(p.hasOwnProperty("age"));
//alert("name" in p);

//�ж�ֻ��ԭ�����е�����
function isProperty(obj,property) {
		return !obj.hasOwnProperty(property) && (property in obj);
}
alert(isProperty(p,"name"));
*/

