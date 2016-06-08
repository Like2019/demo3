function isRun(year){
	if((year%4==0 && year%100!=0) || (year%400==0)){
		return true;
	}else{
		return false;
	}
}

//将日期格式化输出 “2015-08-24”
//参数：指定的日期
//返回值是字符串
function convertDate(transDate){
	var str="";
	str = str+ transDate.getFullYear()+"-"+(transDate.getMonth()+1)+"-"+transDate.getDate();
	return str;
}

//获得某个月份的天数
function getDaysFromMonth(year,month){
	if(month=="1" || month=="3" || month=="5" || month=="7" || month=="8" || month=="10" || month=="12"){	
		return 31;
	}else if(month=="2"){
		if(isRun(year)==true){
			return 29;
		}else{
			return 28;
		}
	}else{
		return 30;
	}
}

//给定一个字符串(字符串的格式为yyyy-MM-dd;如：2015-08-24或yyyy/MM/dd 如： 2015/08/24
//)，转换为日期；
//类型转换
function getDateByStr(str){
	var arr=[];
	if(str.indexOf("-")==4 && str.lastIndexOf("-")==7){//下标为4和7的位置上的字符是不是"-"
		arr = str.split("-");
	}else if(str.indexOf("/")==4 && str.lastIndexOf("/")==7){//下标为4和7的位置上的字符是不是"/"
		arr = str.split("/");
	}else{
		alert("亲，格式不对");
	}
	var myDate = new Date(arr[0],arr[1]-1,arr[2]);
	return myDate;
}


//判断两个日期相差的天数
function differentDay(date1,date2){
	//1、先获得两个日期对象的毫秒数
	 var num1 = date1.getTime();
	 var num2 = date2.getTime();
	 
	//2、两个毫秒数相减,得差；
	var num3 = num1-num2;
	
	//3、把毫秒数的差，转换为天数
	return parseInt(num3/(24*3600*1000));
}

