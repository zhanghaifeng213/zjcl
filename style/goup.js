	var oGoup=document.getElementById("goup");
	oGoup.onclick=function(){
		var newTime=new Date();
		var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		var timer=setInterval(function(){
			var nowTime=new Date();
			var prop=(nowTime-newTime)/300;
			if(prop>=1){
				prop=1;
				clearInterval(timer);
			};
			var xscrollTop=scrollTop-prop*scrollTop;
			document.body.scrollTop=xscrollTop;
			document.documentElement.scrollTop=xscrollTop;
		},18)
	};