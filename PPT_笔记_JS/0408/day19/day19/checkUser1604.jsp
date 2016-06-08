<%@ page contentType="text/html; charset=utf-8" language="java" import="java.sql.*" errorPage="" %>
<%
	String userName = request.getParameter("userName");
	
	if(userName.equals("jzm")){
		  out.print("亲，用户名已经被使用，请换一个");
	}else{
		  out.print("√");
	}
	
%>