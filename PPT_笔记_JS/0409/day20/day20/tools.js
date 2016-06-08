/*
函数名：toArray，
函数功能：把字符串变成数组。
参数：字符串，分割符。
返回值：数组

abc,def,fff,dd,
,
*/

function toArray(str,seprate){
	//str += seprate;
	var arr = new Array();
	var startIndex = 0;
	for(var i=0;i<str.length;i++){
		if(str.charAt(i)==seprate){
			//把上次分隔符与本次分隔符之间的字符串追加到数组里。
			arr.push(str.substring(startIndex,i));
			//改变起始位置，为下次使用，
			startIndex = i+1;
		}
	}
	arr.push(str.substring(startIndex));
	
}


/*
函数名：removeRepeat
函数功能：把数组中重复的元素去除掉。
参数：有重复元素的数组，
返回值：无重复元素的数组，

arr=3,6,3,6,7,8,3,9

newArr = 3,6,


"abc","abcabc","aabcccd","aaaa"

,abc,abcabc,aabcccd,aaaa,


*/

function removeRepeat(arr){
	var newArr = new Array();
	for(var i=0;i<arr.length;i++){
		var isExists = false;
		for(var j=0;j<newArr.length;j++){
			if(arr[i]==newArr[j]){
				isExists = true;
				break;
			}
		}
		if(!isExists){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}


/*
3)	函数封装（12分）
函数名：$create 
功能：根据传入的字符串不同，分别创建文本节点或者标签节点：
	如：参数为“<tr>”，则创建tr标签对象；如参数为“hello”，则创建文本节点对象；
参数：字符串
返回值：节点对象；
注意：此函数测试时，需要调用两次该函数，分别传入“<div>”和“为人民服务”，把“为人民服务”放在div节点中。并让div的背景为红色。
*/

function $create(str){
	if(str.indexOf("<")==0 && str.lastIndexOf(">")==str.length-1){
		return document.createElement(str.substring(1,str.length-1));
	}else{
		return document.createTextNode(str);
	}
}

