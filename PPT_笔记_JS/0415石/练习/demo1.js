function DVD(dno,dname,dleft,dlendNo,dlendTime,state) {
	this.dno = dno;//编号
	this.dname = dname;//名称
	this.dleft= dleft;//剩余本数
	this.dlendNo = dlendNo;//借出次数
	this.dlendTime = dlendTime;//借出时间
	this.state = state;//状态
	DVD.prototype.lendDVD = function() {
		if(this.dleft > 0 ) {
			this.dleft = this.dleft - 1;
			this.dlendNo = this.dlendNo + 1;
			//根据本地的日期格式，返回日期字符串
			this.dlendTime = new Date().toLocaleString();
			if(this.dleft == 0) {//特殊情况，若剩最后一本时，借出后显示无库存
				this.state = "无库存";
			}
		} else {
			alert("not store");
		}
	}
	DVD.prototype.returnDVD = function() {
		this.dleft = this.dleft + 1;//库存+1
		if(this.state == "无库存"){//若是无库存，需要改为由库存
			this.state = "有库存";
		}
	}
}



