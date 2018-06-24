	function timeMove(obj,json,times,mode,fn){
		var sAttr={};
		var startTime=new Date().getTime();
		for(var attr in json){
			sAttr[attr]=0;
			sAttr[attr]=(attr=="opacity")?Math.round(getStyle(obj,attr)*100):parseInt(getStyle(obj,attr));
		};
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var nowTime=new Date().getTime();
			var t=times-Math.max(0,(times+startTime-nowTime));
			for(var attr in json){
				var target=json[attr];
				var s=Tween[mode](t,sAttr[attr],json[attr]-sAttr[attr],times);
				if(attr=="opacity"){
					obj.style.opacity=s/100;
					obj.style.filter="alpha(opacity="+s+")";
				}else{
					obj.style[attr]=s+"px";
				};
			};
			if(t==times){
				clearInterval(obj.timer);
				if(fn)fn();
			};
		},13);
	};
	function getStyle(obj,attr){
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
	};
	var Tween={
		linear:function(t,b,c,d){
			return c*t/d+b;
		},
		bounceOut: function(t, b, c, d){  //弹簧
		if ((t/=d) < (1/2.75)){
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
			return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
		}
	};