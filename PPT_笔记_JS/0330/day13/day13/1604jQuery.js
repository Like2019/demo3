function stopBubble(event){
	if(document.all){
		event.returnValue = false;   //IE
	}else{
		event.preventDefault(); //非IE
	}
}
