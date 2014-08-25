var width = 1920;
var height = 1080;

$(function(){
	$( window ).resize(resize);
	resize();
});

function resize(){
	var w = $("#content").width()-1;
	var h = $("#content").height()-1;
	var scaleFactor = width/height < w/h ? w/width : h/height;

	$('#demo').css({
		'-webkit-transform': 'scale('+scaleFactor+')',
		'transform': 'scale('+scaleFactor+')',
		'-webkit-transform-origin': '0 0',
		'transform-origin': '0 0'
	});
}

