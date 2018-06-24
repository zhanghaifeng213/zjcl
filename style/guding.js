	window.onscroll=function(){
		var oPart3=document.getElementById("part3");
		var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		if(scrollTop>=147){
			oPart3.className="part3_gd";
		}else{
			oPart3.className="";
		};
	};