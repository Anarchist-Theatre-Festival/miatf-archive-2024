/* !document.ready() */$(function(){$('a[href^="http://"], a[href^="https://"]').each(function(){this.href.indexOf(location.hostname)===-1&&$(this).attr("target","_blank")});$(window).scroll(function(){var e;window.pageYOffset<243?e=0:e=window.pageYOffset-243;$("#wrapper").animate({backgroundPositionY:e},{duration:1e3,queue:!1})});$(".fancybox").fancybox({loop:!1,nextEffect:"fade",prevEffect:"fade"});var e=$('iframe[src^="http://www.youtube.com"]'),t=$(".main article");e.each(function(){$(this).data("aspectRatio",this.height/this.width).removeAttr("height").removeAttr("width")});$(window).on("load resize",function(){var n=t.width();e.each(function(){var e=$(this);e.width(n).height(n*e.data("aspectRatio"))})})});