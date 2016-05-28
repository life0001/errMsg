/**
 * by pwf
 */
;(function($,document,window,undefined){
    function Errmsg(options){
    	var _timer,toindex,usual;
    	usual='<div class="maskmsg" >'+
		        '<div class=" maskmsg_content" >'+
		        '<p class="maskmsg_box"><i class="tips_img3"></i><span>'+options.msg+'</span></p>'+
		        '</div>'+
		    '</div>';
        toLink='<div class="maskmsg" >'+
			        '<div class=" maskmsg_content" >'+
			        '<p class="maskmsg_box"><i class="tips_img3"></i><span>'+options.msg+'</span><a class="toindex" href="../index.do">我去赚钱</a></p>'+
			        '</div>'+
			    '</div>';
    	if(options.btnLink){
    		$('body').append(toLink);
    	}else{
    		$('body').append(usual);
    	}
      
      $('body').on('touchstart click','.maskmsg',function(){
    	$('.maskmsg').off().remove();
    	clearTimeout(_timer);
    })
    $('body').on('touchstart click','.toindex',function(){
    	  window.location.href='../index.do'
    })
    _timer=setTimeout(function timer(){
    	$('.maskmsg').off().remove();
    },options.delay)    
    }
  $.errorMSG=function(parameter,callback){
    if(typeof parameter == 'function'){
      callback = parameter;
      parameter = {};
    }else{
      parameter = parameter || {};
      callback = callback || function(){};

    }
    var defaults={
      msg:'错误',     //错误提示
      delay:4000,
      forward:2000,
      btnLink:false
    };
    if(parameter.constructor==String) defaults.msg=parameter;
    var options=$.extend({},defaults,parameter),
            newerrorMSG= new Errmsg(options);
    setTimeout(function(){callback()},options.forward);
    
  }
})(jQuery,document,window);