
/*
功能：保存cookie
参数：
	cookie名;
	cookie值
	保质期；单位是天；
返回值：无
*/
function saveCookie(cookieName,cookieValue,dayCount){
	var date = new Date();
	date.setDate(date.getDate()+dayCount);
	document.cookie = encodeURIComponent(cookieName+"="+cookieValue+";expires="+date.toGMTString());

}

//获取cookie
/*
功能：获取cookie
参数：
	cookie名;
返回值：cookie值
*/

function getCookie(cookieName){
	var str = decodeURIComponent(document.cookie);
	var arr = str.split("&");
	for(var i=0;i<arr.length;i++){
		if(arr[i].indexOf(cookieName+"=")==0){
			return arr[i].substring(cookieName.length+1);
		}
	}
	return "";
}

//删除cookie
/*
功能：删除cookie
参数：
	cookie名;
返回值：cookie值
*/
function deleteCookie(cookieName){
	saveCookie(cookieName,"hi",-10);
}

//修改cookie
/*
功能：修改cookie
参数：
	cookie名;
	cookie值
	保质期；单位是天；
返回值：无
*/
function modifyCookie(cookieName,cookieValue,dayCount){
	saveCookie(cookieName,cookieValue,dayCount);
}

