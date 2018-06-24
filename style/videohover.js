	var oVideoUl=document.getElementById("videoul");
	var aVideoLi=oVideoUl.getElementsByTagName("li");
	var aVideoH3=oVideoUl.getElementsByTagName("h3");
	for(var i=0;i<aVideoLi.length;i++){
		hoverin(aVideoLi[i],"background","#ccc","#eee");
	};
	for(var i=0;i<aVideoH3.length;i++){
		hoverin(aVideoH3[i],"color","red","#000");
	};
	oVideoUl.innerHTML+=oVideoUl.innerHTML;
	var videoNum=0;
	var oVideoUl2=oVideoUl.innerHTML;
	var timer2=setInterval(movetime,3000);
	oVideoUl.onmouseover=function(){
		clearInterval(timer2);
	};
	oVideoUl.onmouseout=function(){
		timer2=setInterval(movetime,3000);
	};
	function movetime(){
		videoNum++;
		timeMove(oVideoUl,{left:-(parseInt(getStyle(aVideoLi[0],"width"))+18)*videoNum},1000,"linear",function(){
			if(videoNum==5){
				oVideoUl.style.left="0px";
				videoNum=0;
			};
		});
	};