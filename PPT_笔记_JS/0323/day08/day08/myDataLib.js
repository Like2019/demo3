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
function covertDate(transDate){
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