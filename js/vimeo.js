$(function(){

  var iframe = $('#demo')[0];
  var player = $f(iframe);

  player.addEvent('ready', function() {
    player.addEvent('finish', onFinish);
    player.addEvent('playProgress', onPlayProgress);
  });

  function onFinish(id) {
      $('#demo').hide();
      next();
  }

  function onPlayProgress(data, id) {
      updateTime(data.duration - data.seconds)
  }

});
