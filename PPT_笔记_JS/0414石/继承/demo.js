//�ϻ�
/*
function tiger() {
	this.name="tiger1";
	this.clr = "��ɫ";
	this.tyle="������";
}

function lion() {
	this.name="lion1";
	this.clr = "��ɫ";
	this.tyle="����ʨ";
}

//�뽫���������Ժͷ�����ȡ����
//���Ǵ����Ĺ��캯������֮��Ӧ�����ԣ���ôֱ�ӵ����������Ի�ȡ
//ԭ�����̳У�
function Animal() {//�����ͣ��������ԣ����� ���ࣩ
	this.name="name";
	this.clr = "clr";
	this.type="type";
	this.run = function() {
		return "run...";
	}
}

//�̳У�
function Tiger() { //������ ���������ͣ����� �����ࣩ
	this.role = "ɭ��֮��";
	Tiger.prototype.bb="bb";//��ԭ�Ͷ����������	
}
/*
Tiger.prototype = {//ֱ�����ԭ�Ͷ���
		constructor:Tiger,
		aa:"22"	
};	
*/

/*
function Lion() {
	this.live = 50;
}

Tiger.prototype = new Animal();//�������Ͷ����ԭ�Ͷ���ָ���˳����Ͷ���
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

//�̳еĺô�:���ٴ����ظ��ԵĴ���

*/
//������	
function Animal(name,clr,type) {
	this.name = name;
	this.clr = clr;
	this.type = type;
}

function Tiger(name,clr,type,role) {
	this.role = role;
	//���г����͵�����
	//��this����ð��Animalִ�й��캯��
	Animal.call(this,name,clr,type);
}

function Lion(name,clr,type,live) {
	this.live = live;
	//���г����͵�����
	Animal.call(this,name,clr,type);
}

var t = new Tiger("tiger1","white","dongbeihu","manager");
alert(t.name);
var l = new Lion("lion1","yellow","admin","50");
alert(l.name);
alert(l.live);

//call:ð�����
function Box(){
	this.run = function() {
		return "run";
	}	
}
//ð�����
var obj = new Object();
//���캯��.call(ð�����);
Box.call(obj);//obj ð�� Box����
alert(obj.run());












