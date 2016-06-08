<%@ page contentType="text/html; charset=utf-8" language="java" import="java.sql.*" errorPage="" %>

<%
	String str = "[{\"name\":\"张三\",\"sex\":\"男\",\"age\":\"28\"},{\"name\":\"张四\",\"sex\":\"女\",\"age\":\"20\"},{\"name\":\"张五\",\"sex\":\"男\",\"age\":\"120\"}]";
	out.print(str);
%>