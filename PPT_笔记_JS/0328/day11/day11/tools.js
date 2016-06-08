//删除文本节点
function removeTextNode(nodeList){
	var arr = new Array();
	for(var i=0;i<nodeList.length;i++){
		if(nodeList[i].nodeType!=3){//非文本节点
			arr.push(nodeList[i]);
		}
	}
	return arr;
}