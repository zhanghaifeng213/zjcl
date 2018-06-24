	var oSecone=document.getElementById("sec-one");
	var oSectwo=document.getElementById("sec-two");
	var aSenSpan=oSecone.getElementsByTagName("span");
	var aSenDiv=oSectwo.getElementsByTagName("div");
	aSenSpan[0].style.background="#479C37";
	aSenSpan[0].style.color="#fff";
	aSenDiv[1].style.display="none";
	for(var i=0;i<aSenSpan.length;i++){
		aSenSpan[i].index=i;
		aSenSpan[i].onmouseover=function(){
			for(var j=0;j<aSenSpan.length;j++){
				aSenSpan[j].style.background="#C3FFB3";
				aSenSpan[j].style.color="#000";
				aSenDiv[j].style.display="none";
			};
			this.style.background="#479C37";
			this.style.color="#fff";
			aSenDiv[this.index].style.display="block";
		};
	};