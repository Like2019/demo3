//定义一个带参的函数;
//判断一个年是不是闰年
function isRun(year){//year是函数的参数，即已知条件
	if((year%4==0 && year%100!=0)||(year%400==0)){
		//alert("是闰年");
		return true;//return后面跟的是函数的返回值，即结果
	}else{
		return false;//return后面跟的是函数的返回值，即结果
	}
}