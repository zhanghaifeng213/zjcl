	function hoverin(obj,str,first,second){
		obj.onmouseover=function(){
			this.style[str]=first;
		};
		obj.onmouseout=function(){
			this.style[str]=second;
		};
	};