// JavaScript Document
function $(str)
{
	var flag=str.indexOf(0);
	if(flag=="#")	
	{
		return document.getElementById("str.substring(1)");	
	}
	else if(flag==".")
	{
		return document.getElementsByClassName("str.substring(1)");	
	}
	else if(flag=="name=")
	{
		return document.getElementsByName("str.substring(5)");	
	}
	else
	{
	 	return document.getElementsByTagName(str);	
	}
	
	
	
	
	
}


