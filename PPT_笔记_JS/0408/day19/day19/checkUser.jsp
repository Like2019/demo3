<%@ page contentType="text/html; charset=utf-8" language="java" import="java.sql.*" errorPage="" %>

<%
	String userName = request.getParameter("userName");//接收客户端传来的信息
	
	//判断信息是否正确
	if(userName.equals("jzm")){
		out.print(true);//给客户端响应的内容
	}else{
		out.print(false);//给客户端响应的内容
	}
%>