	var oMainIn=document.getElementById("main");
	var oMainFirst=document.getElementById("mainfirst");
	var oMainSecond=document.getElementById("mainsecond");
	var oMainThird=document.getElementById("mainthird");
	var aMainUl=oMainIn.getElementsByTagName("ul");
	var aMainLi=oMainIn.getElementsByTagName("li");
	hoverin(oMainFirst,"background","#eee","#fff");
	hoverin(oMainSecond,"background","#eee","#fff");
	hoverin(oMainThird,"background","#eee","#fff");
	for(var i=0;i<aMainLi.length;i++){
		hoverin(aMainLi[i],"background","url('/images/dot2.jpg') #eee no-repeat -1px 11px","url('/images/dot1.jpg') #fff no-repeat -1px 11px");
		hoverin(aMainLi[i].getElementsByTagName("a")[0],"color","red","#000");
	};