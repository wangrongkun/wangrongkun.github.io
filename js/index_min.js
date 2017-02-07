window.onload=function(){
		var last=0; //记录需要隐藏的页
		var now=1; //记录当前显示的页
		var pageLen=$('#content>div').length;
		var tw={'toup':1,'tobottom':2}

		document.addEventListener('touchmove',function(event){
		event.preventDefault(); },false);

		var isAnimating=false;//开关
		//向上滑
		$(document).swipeUp(function(){
			if (isAnimating) return;
		    if( now < pageLen ){
		    	now++; 
		    	last=now-1 ;	
		    	pagemoveFn(tw.toup);
		    }
		});
		//向下滑
		$(document).swipeDown(function(){
			if (isAnimating) return;
			if( now != 1 ){
		    	now=now-1;	
		    	last=now+1;
		    	pagemoveFn(tw.tobottom);
			}
		});
		function pagemoveFn(towords){
			var lastPage='.page-'+last+'-1',
				nowPage='.page-'+now+'-1';
			var Lclass='',
			    Nclass='';
				console.log('上一页lastPage:'+lastPage);
		    	console.log('上一页nowPage:'+nowPage);
	    	switch(towords){
	    		case tw.toup:
		    		Lclass='page-moveToTop';
		    		Nclass='page-moveFromBottom';
	    			break;
	    		case tw.tobottom:
		    		Lclass='page-moveToBottom';
		    		Nclass='page-moveFromTop';
		    		break;
			}
		    	
	    	$(lastPage).addClass(Lclass);
			$(nowPage).removeClass('hide').addClass(Nclass);
			isAnimating = true;
			setTimeout(function(){
				$(lastPage).addClass("hide");
				$(lastPage).removeClass(Lclass);
				$(nowPage).removeClass(Nclass);
				$(lastPage).find('img').addClass('hide');
				$(nowPage).find('img').removeClass('hide');
				isAnimating = false;
			},600);
		}
		var soundBox=document.getElementById('bgsoundContainer');
		var au=document.getElementById('bgsound');
		var auText=document.getElementById('music_txt');
		function bgsound() {

			soundBox.onclick = function(){
				if(au.paused){
					au.play();
					auText.innerHTML='打开';
					auText.style.visibility='visible';
					setTimeout(function(){
						auText.style.visibility='hidden';
					},1000)
				}else{
					au.pause();
					auText.innerHTML='关闭';
					auText.style.visibility='visible';
					setTimeout(function(){
						auText.style.visibility='hidden';
					},1000)
				}
			}
		};
		bgsound();
		var share=document.getElementById('share');
		var shareBtn=document.getElementById('shareBtn');
		shareBtn.onclick=function(){
			share.style.visibility='visible';
		}
		share.onclick=function(){
			share.style.visibility='hidden';
		}
		
	}