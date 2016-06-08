var xhr = null;

function ffff(t){
	if(xhr.readyState==4 && xhr.status==200){
		//var s = 2+3; 等价 eval("var s = 2+3");
		//deal(); 等价于 eval("deal()"); 等价于  var str = "deal"; eval(str+"()");
		//alert(xhr.responseText);
		
		eval(t+"("+xhr.responseText+")");
	}
}

function ajax1604(methodStr,url,fun,sendStr){
	xhr = new XMLHttpRequest();
	if(methodStr=="get"){
		var urlStr = url;
		if(sendStr!=null){
			urlStr = urlStr+"?"+sendStr;
		}
		xhr.open(methodStr,urlStr,true);
		xhr.onreadystatechange = function(){
			ffff(fun);//"deal"
		};
		xhr.send(null);	
	}else{
		xhr.open(methodStr,url,true);
		xhr.setRequestHeader("Content-Type",
			    "application/x-www-form-urlencoded"); 
		xhr.onreadystatechange = function(){
			ffff(fun);//"deal"
		};
		xhr.send(sendStr);	
	}
}

