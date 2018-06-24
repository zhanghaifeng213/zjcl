	var oMenuList=document.getElementById("menu-list");
	var aMenuLi=oMenuList.getElementsByTagName("li");
	for(var i=0;i<aMenuLi.length;i++){
		aMenuLi[i].onclick=function(){
			for(var j=0;j<aMenuLi.length;j++){
				aMenuLi[j].className="";
			};
			this.className="on";
		};
	};