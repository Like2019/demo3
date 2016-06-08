

window.onload = function() {	
	//1.确定每行可以存放多少张图片
	imgLocation("container","box");
	var data = [
		{"src":"11.jpg"},
		{"src":"12.jpg"},
		{"src":"13.jpg"},
		{"src":"14.jpg"},
		{"src":"15.jpg"},
		{"src":"16.jpg"},
		{"src":"17.jpg"},
		{"src":"18.jpg"},
		{"src":"19.jpg"},
		{"src":"20.jpg"}
	];
	window.onscroll = function() {
		//快到最后一张图片的时候，发送请求获取数据
		//添加图片标志
		if(checkFlag()) {//开始加载图片
			var cparent = document.getElementById("container");
			for(var i=0;i<data.length;i++) {
				var box = document.createElement("div");
				box.className = "box";
				var box_img = document.createElement("div");
				box_img.className = "box_img";
				var img = document.createElement("img");
				img.src = "./img/" + data[i].src;
				box.appendChild(box_img);
				box_img.appendChild(img);
				cparent.appendChild(box);
			}
			//重新定位图片
			imgLocation("container","box");	
		}
	}
}

function checkFlag() {
	//获取最后一张图片
	var parent = document.getElementById("container");
	var boxes = getChilds(parent,"box");
	var lastImageHeight = boxes[boxes.length - 1].offsetTop;
	//页面高度
	var pagerHeight = document.documentElement.clientHeight || document.body.clientHeight;
	//滚动高度
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	console.log("lastImageHeight:" + lastImageHeight);
	console.log("pagerHeight:" + pagerHeight);
	console.log("scrollTop:" + scrollTop);
	//当滚动的高度  + 页面的高度 > 最后一张图片高度
	if((scrollTop + pagerHeight) > lastImageHeight) {
		return true;
	}
	
}

function imgLocation(parent,box) {
	//1.获取所有的盒子
	var cparent = document.getElementById(parent);
	var childs = getChilds(cparent,box);
	
	//获取盒子的宽度
	var imgWidth = childs[0].offsetWidth;
	//console.log(imgWidth);//在控制台打印
	//获取屏幕可视的宽度
	var cWidth = cparent.clientWidth;
	//console.log(cWidth);
	//每一行存放几张图片
	var imgNo = parseInt(cWidth / imgWidth);
	//console.log(imgNo);
	//共有imgNo列，从中查找高度最小一列，在之下添加图片
	
	//查找最小高度的一列
	var imgHeights = [];
	for(var i=0;i<childs.length;i++) {
		if(i < imgNo) {//从其中找最小的高度
			imgHeights[i] = childs[i].offsetHeight;
		} else {//操作其他的图片
			//找到最小的位置，放置图片
			var minHeight = getMinImageHeight(imgHeights);
			//在最小高度的位置，添加图片
			var minIndex = getMinImageIndex(imgHeights,minHeight);
			//放置图片
			childs[i].style.position="absolute";
			childs[i].style.top = minHeight + "px";
			childs[i].style.left = childs[minIndex].offsetLeft + "px";
			//重新设置每列的高度
			imgHeights[minIndex] = imgHeights[minIndex] + childs[i].offsetHeight;
		}
	}
}

/*
	查找最小图片的高度
*/
function getMinImageHeight(imgHeights) {
	var minHeight = imgHeights[0];
	for(var i=1;i<imgHeights.length;i++) {
		if(imgHeights[i] < minHeight) {
			minHeight = imgHeights[i];
		}
	}
	return minHeight;
}

/*
	获取最小图片所在的下标
*/
function getMinImageIndex(imgHeights,minIndex) {
	for(var i=0;i<imgHeights.length;i++) {
		if(imgHeights[i] == minIndex) {
			return i;
		}
	}
}

/**
	解决getElementsByClassName 兼容的问题
*/
function getChilds(parent,className) {
	var childsArr = [];
	var childs = parent.getElementsByTagName("*");//获取所有的标签
	for(var i=0;i<childs.length;i++) {
		if(childs[i].className == className) {
			childsArr.push(childs[i]);
		}
	}
	return childsArr;
}







