(function(win,doc){
			change();
			 function change(){
			 	doc.documentElement.style.fontSize = doc.documentElement.clientWidth*20/320+'px';
			 }
			 win.addEventListener('resize',change,false)
		})(window,document);