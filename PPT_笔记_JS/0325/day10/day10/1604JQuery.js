	/*
		    1)	请封装一个名字为$的函数，用于获取元素
			2)	$(“#box”) 用于获取id名为box的DOM元素
			3)	$(“.active”) 用于获取class名为active的DOM元素
			4)	$(“tr”) 用于获取标签名为input的DOM元素
			5)  $("name=abc") 用于获取name属性为abc的元素；
	*/
	//str="#formId"
function $(str){
	var flag = str.charAt(0);
	if(flag=="#"){
		return document.getElementById(str.substring(1));
	}else if(flag=="."){
		return document.getElementsByClassName(str.substring(1));
	}else if(str.indexOf("name=")==0){
		return document.getElementsByName(str.substring(5))
	}else{
		return document.getElementsByTagName(str);
	}
}