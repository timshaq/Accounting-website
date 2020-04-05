window.onload = function() {

  var videoPlay = document.querySelector('.video-controller--play')
  var videoPause = document.querySelector('.video-controller--pause');
  var video = document.querySelector('.video-clip__mp4');
  var barLine = document.querySelector('.bar__line');
  var poster = document.querySelector('.video-clip__mp4');

  poster.addEventListener('click', function() {

  })
  videoPlay.addEventListener('click', function() {
    video.play();
    videoPlay.style.display = 'none';
    videoPause.style.display = 'block';
  })


  videoPause.addEventListener('click', function() {
    video.pause();
    videoPause.style.display = 'none';
    videoPlay.style.display = 'block';
  })


  video.ontimeupdate = function () {
    var percent = (video.currentTime / video.duration) * 100
    console.log(percent)
    barLine.style.width = percent + '%'
    if (percent === 100) {
      videoPause.style.display = 'none';
      videoPlay.style.display = 'block';
    }
  }

}
