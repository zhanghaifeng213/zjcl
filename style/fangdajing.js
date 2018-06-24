var oCTI0=document.getElementById("content-tdk-img");
var oMag0=document.getElementById("tdk-img");
var oSmall0=document.getElementById("small");
var oShadow0=document.getElementById("shadow");
var oBig0=document.getElementById("big");
var oImg20=oBig0.getElementsByTagName("img")[0];
mag(oCTI0,oMag0,oSmall0,oShadow0,oBig0,oImg20);
//放大镜封装
function mag(oCTI,oMag,oSmall,oShadow,oBig,oImg2){
	oSmall.onmouseover=function(){
		oShadow.style.display="block";
		oBig.style.display="block";
	};
	oSmall.onmouseout=function(){
		oShadow.style.display="none";
		oBig.style.display="none";
	};
	oSmall.onmousemove=function(e){
		var ev=e||event;
		var magL=oMag.offsetLeft;
		var magT=oMag.offsetTop;
		var shadowL=ev.clientX-(oShadow.offsetWidth/2)-magL-oCTI.offsetLeft;
		var shadowT=ev.clientY-(oShadow.offsetHeight/2)-magT-oCTI.offsetTop+window.pageYOffset;
		console.log(shadowT);
		if(shadowL<=0){
			shadowL=0;
		}else if(shadowL>=oSmall.offsetWidth-oShadow.offsetWidth){
			shadowL=oSmall.offsetWidth-oShadow.offsetWidth;
		};
		if(shadowT<=0){
			shadowT=0;
		}else if(shadowT>=oSmall.offsetHeight-oShadow.offsetHeight){
			shadowT=oSmall.offsetHeight-oShadow.offsetHeight;
		};
		oShadow.style.left=shadowL+"px";
		oShadow.style.top=shadowT+"px";
		oBig.style.width=oSmall.offsetHeight+"px";
		oBig.style.height=oSmall.offsetHeight+"px";
		oBig.style.left=oSmall.offsetWidth+20+"px";
		oBig.style.top="0px";
		var propW=oSmall.offsetWidth/oShadow.offsetWidth;
		var propH=oSmall.offsetHeight/oShadow.offsetHeight;
		var oImg2W=propW*oBig.offsetWidth;
		var oImg2H=propH*oBig.offsetHeight;
		var propX=(oImg2W-oBig.offsetWidth)/(oSmall.offsetWidth-oShadow.offsetWidth);
		var propY=(oImg2H-oBig.offsetHeight)/(oSmall.offsetHeight-oShadow.offsetHeight);
		var oImg2L=-propX*shadowL;
		var oImg2T=-propY*shadowT;
		oImg2.style.width=oImg2W+"px";
		oImg2.style.height=oImg2H+"px";
		oImg2.style.left=oImg2L+"px";
		oImg2.style.top=oImg2T+"px";
	};
};