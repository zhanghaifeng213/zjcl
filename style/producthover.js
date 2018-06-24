	var oProductUl=document.getElementById("productUl");
	var aProductLi=oProductUl.getElementsByTagName("li");
	for(var i=0;i<aProductLi.length;i++){
		hoverin(aProductLi[i],"background","#ccc","#eee");
		hoverin(aProductLi[i].getElementsByTagName("h3")[0],"color","red","#000");
	};