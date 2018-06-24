	var oSearchForm=document.getElementById("searchform");
	oSearchForm.searchtxt.onfocus=function(){
		if(oSearchForm.searchtxt.value=="内容搜索"){
			oSearchForm.searchtxt.value="";
		};
	};
	oSearchForm.searchtxt.onblur=function(){
		if(oSearchForm.searchtxt.value==""){
			oSearchForm.searchtxt.value="内容搜索";
		};
	};