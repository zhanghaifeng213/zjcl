	var oHeaderUl=document.getElementById("header-ul");
	var oHeaderImg=document.getElementById("header-img");
	var aHeaderLi=oHeaderUl.getElementsByTagName("li");
	var aHeaderA=oHeaderUl.getElementsByTagName("a");
	hoverin(aHeaderLi[3],"color","red","#000");
	aHeaderLi[3].onmouseover=function(){
		oHeaderImg.style.display="block";
	};
	aHeaderLi[3].onmouseout=function(){
		oHeaderImg.style.display="none";
	};
	for(var i=0;i<aHeaderA.length;i++){
		hoverin(aHeaderA[i],"color","red","#000");
	};