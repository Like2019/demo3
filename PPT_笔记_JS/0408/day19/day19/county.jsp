<%@ page contentType="text/html; charset=utf-8" language="java" import="java.sql.*,java.util.*" errorPage="" %>

<%
	String isSheng = request.getParameter("isSheng");
	if(isSheng.equals("1")){
		
		String str = "["
		+"{                    "
		+"	\"sid\":\"001\",   "
		+"	\"sName\":\"北京\"	"
		+"},                   "
		+"{                    "
		+"	\"sid\":\"002\",   "
		+"	\"sName\":\"上海\""
		+"},                   "
		+"{                    "
		+"	\"sid\":\"003\",   "
		+"	\"sName\":\"陕西\" "	
		+"},                   "
		+"{                    "
		+"	\"sid\":\"004\",   "
		+"	\"sName\":\"河南\" "
		+"},                   "
		+"{                    "
		+"	\"sid\":\"005\",   "
		+"	\"sName\":\"河北\" "
		+"}                    "
		+"]";
		
		out.print(str);
		
	}
	else{
		
		String[][] aArray = new String[5][];
		aArray[0] = new String[]{"海淀","昌平","朝阳"};
		aArray[1] = new String[]{"浦东","徐汇","长宁","闸北","虹口"};
		aArray[2] = new String[]{"西安","宝鸡","咸阳","渭南","汉中"};
		aArray[3] = new String[]{"郑州","洛阳","安阳"};
		aArray[4] = new String[]{"邯郸","鸡泽"};
		
		String shengId = request.getParameter("shengId");
		
		
		int sId = 0;
		if(shengId!=null){
			sId =  Integer.parseInt(shengId)-1;
		}
		String[] countyArr = aArray[sId];
		String str = "[";
		for(int i=0;i<countyArr.length;i++){
			str += "{\"cid\":\""+i+"\",\"cName\":\""+countyArr[i]+"\"},";
		}
		
		str = str.substring(0,str.length()-1);
		str +="]";
		out.print(str);
		
		
		
	}



		
		%>