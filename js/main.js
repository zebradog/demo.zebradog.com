var width = 1920;
var height = 1080;
var category;

$(function(){

   setCategory();
   $(window).bind( 'hashchange', setCategory);

   $('#nav .next').click(function(e){
      e.preventDefault();
      next();
   });

   $('#nav .prev').click(function(e){
      e.preventDefault();
      prev();
   });
  $( window ).resize(resize);
	resize();
  $('body').css({overflow:"auto"});
});

function setCategory(){
   category = window.location.hash.split('#')[1];
   if(!category || !$('#nav .category[data-category="'+category+'"]').length) category = "featured";
}

function resize(){
	var w = $("#content").width();
	var h = $("#content").height();

	var scaleFactor = width/height < w/h ? w/width : h/height;

	$('#demo').css({
		'-webkit-transform': 'scale('+scaleFactor+')',
		'transform': 'scale('+scaleFactor+')',
		'-webkit-transform-origin': '0 0',
		'transform-origin': '0 0'
	});
}

function next(){
  var $n;
  var $c = $('#nav .category[data-category="'+category+'"] li.demo');
  if($('#nav li.demo.selected').length) $n = $c.has('.selected').next();
  else $n = $c.eq(Math.floor(Math.random()*$c.length)); 
  if(!$n.length) $n = $('#nav .category[data-category="'+category+'"] li.demo').first();
  window.location =  $n.find('a').attr('href');
}

function prev(){
  var $n = $('#nav .category[data-category="'+category+'"] li.demo.selected').prev();
  if(!$n.length) $n = $('#nav .category[data-category="'+category+'"] li.demo').last();
  window.location =  $n.find('a').attr('href');
}

//remaining time in seconds
function updateTime(t){
  if(t >= 0){
    var m = Math.floor(t/60);
    var s = Math.round(t - m * 60);
    if(s < 10) s = '0'+s;
    $('.timer').text(m+":"+s);
  }
}
