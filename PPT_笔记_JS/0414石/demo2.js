/*
1.	�����������ı�̷�������ƹ��캯��Circle����Բ�������
��.��������Щ���캯����һ��������:
	����ϵͳ��
		���ţ�
		�������
		�û���
		���ۣ�
�� ���������캯���е����Ժ���Ϊ
	���ԣ��뾶
	��Ϊ���������

*/
function Circle(r) {
	this.r  = r;//ʵ������
	//��Ϊ
	Circle.prototype.getArea = function() {//ԭ�Ͷ���
		return 3.14 * r * r; 
	}
} 

/*
	���캯����	
	Բ��
	Բ
	���ԣ�
		Բ  �� 
	��Ϊ��
		�������

*/
function Cylinder(circle,h) {
	this.circle = circle//Բ��ʵ������
	this.h = h;//��
	
	Cylinder.prototype.getTiji = function() {
		return circle.getArea() * h;
	}
}



