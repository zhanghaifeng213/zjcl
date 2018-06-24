	var	oFleshImg=document.getElementById("fleshimg");
	var	oFleshBtn=document.getElementById("fleshbtn");
	var	oFleshDot=document.getElementById("fleshdot");
	var aFleshLi=oFleshImg.getElementsByTagName("li");
	var aFleshInput=oFleshBtn.getElementsByTagName("input");
	var aFleshSpan=oFleshDot.getElementsByTagName("span");
	var FleshNum=0;
	var FleshCount=0;
	var nowTime=0;
	var oldon=aFleshSpan[FleshNum];
	for(var i=0;i<aFleshInput.length;i++){
		aFleshInput[i].index=i;
		aFleshInput[i].onclick=function(){
			clearInterval(timer);
			if(new Date()-nowTime>2000){
				nowTime=new Date();
				if(this.index){
					autoMove1();
				}else{
					autoMove2();
				};
			};
		};
	};
	for(var i=0;i<aFleshSpan.length;i++){
		aFleshSpan[i].index=i;
		aFleshSpan[i].onclick=function(){
			clearInterval(timer);
			FleshNum=this.index;
			FleshCount=this.index;
			oldon.className="";
			oldon=aFleshSpan[this.index];
			aFleshSpan[this.index].className="flesh-on";
			timeMove(oFleshImg,{top:-parseInt(getStyle(aFleshLi[0],"height"))*FleshNum},1500,"bounceOut");
		};
	};
	var timer=setInterval(autoMove1,2500);
	oFleshImg.onmouseover=function(){
		clearInterval(timer);
	};
	oFleshImg.onmouseout=function(){
		timer=setInterval(autoMove1,2500);
	};
	function autoMove1(){
		if(FleshNum==aFleshSpan.length-1){
			FleshNum=0;
			aFleshLi[FleshNum].style.position="relative";
			aFleshLi[FleshNum].style.top=parseInt(getStyle(aFleshLi[0],'height'))*aFleshSpan.length+"px";
		}else{
			FleshNum++;
		};
		FleshCount++;
		timeMove(oFleshImg,{top:-parseInt(getStyle(aFleshLi[0],"height"))*FleshCount},1500,"bounceOut",function(){
			if(FleshNum==0){
				aFleshLi[FleshNum].style.position="static";
				oFleshImg.style.top=0+"px";;
				FleshCount=0;
			};
		});
		oldon.className="";
		oldon=aFleshSpan[FleshNum];
		aFleshSpan[FleshNum].className="flesh-on";
	};
	function autoMove2(){
		if(FleshNum==0){
			FleshNum=aFleshSpan.length-1;
			aFleshLi[FleshNum].style.position="relative";
			aFleshLi[FleshNum].style.top=-parseInt(getStyle(aFleshLi[0],'height'))*aFleshSpan.length+"px";;
		}else{
			FleshNum--;
		};
		FleshCount--;
		timeMove(oFleshImg,{top:-parseInt(getStyle(aFleshLi[0],"height"))*FleshCount},1500,"bounceOut",function(){
			if(FleshNum==aFleshSpan.length-1){
				aFleshLi[FleshNum].style.position="static";
				oFleshImg.style.top=-parseInt(getStyle(aFleshLi[0],'height'))*(aFleshSpan.length-1)+"px";
				FleshCount=aFleshSpan.length-1;
			};
		});
		oldon.className="";
		oldon=aFleshSpan[FleshNum];
		aFleshSpan[FleshNum].className="flesh-on";
	};