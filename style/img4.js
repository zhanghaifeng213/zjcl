	var oImg4=document.getElementById("img4");
	var oButtonLr=document.getElementById("button-lr");
	var aImg4=oImg4.getElementsByTagName("img");
	var aButtonLr=oButtonLr.getElementsByTagName("span");
	var num=0;
	var oldAimg=aImg4[num];
	aImg4[num].style.display="block";
	for(var i=0;i<aButtonLr.length;i++){
		aButtonLr[i].onclick=function(){
			oldAimg=aImg4[num];
			oldAimg.style.display="none";
			if(i>0){
				num++;
				if(num>=aImg4.length)num=0;
			}else{
				num--;
				if(num<0)num=(aImg4.length-1);
			};
			aImg4[num].style.display="block";
		};
	};