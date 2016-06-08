
/*
功能：去掉敏感词汇；

参数：
	原始字符串；

返回值：
    替换后的字符串

*/

function replaceMinGan(oldStr){
	//若干个敏感词汇
	var minGanArr = ["nnd","tmd","sb"];
	
//	var resultStr = oldStr;
	for(var i=0;i<minGanArr.length;i++){
		oldStr =  oldStr.replace(minGanArr[i],"");
	}
	
	return oldStr;
}