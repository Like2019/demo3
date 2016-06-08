获得所有的省份：

http://10.0.163.65:8080/web1604/county.jsp?isSheng=1

[{ "sid":"001", "sName":"北京" }, { "sid":"002", "sName":"上海"}, { "sid":"003", "sName":"陕西" }, { "sid":"004", "sName":"河南" }, { "sid":"005", "sName":"河北" } ]


获得某个省份对应的城市（省份编号从1到5）

http://10.0.163.65:8080/web1604/county.jsp?isSheng=2&shengId=省份编号

[{"cid":"0","cName":"浦东"},{"cid":"1","cName":"徐汇"},{"cid":"2","cName":"长宁"},{"cid":"3","cName":"闸北"},{"cid":"4","cName":"虹口"}]