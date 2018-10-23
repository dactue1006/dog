/* Get our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  
}

function updateButton() {
  const icon = this.paused ? '►' : '❚❚';
  toggle.textContent = icon;
  console.log('Update the button');
}

function skip() {
  console.log(this.dataset);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  console.log(this.value);
  video[this.name] = this.value;
  console.log(this.name);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  console.log(percent);
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
/* Hook up the event listners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mouseover', handleRangeUpdate));
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

var elem = document.getElementById("video");

const fullScreen = player.querySelector('[full-screen]');
fullScreen.addEventListener('click', openFullscreen);

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
const fullDiv = document.getElementById('full-div');
const container = document.getElementById('container');

fullDiv.addEventListener('click', openFullscreen1);
function openFullscreen1() {
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  ) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.mozRequestFullScreen) {
      container.mozRequestFullScreen();
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (container.msRequestFullscreen) {
      container.msRequestFullscreen();
    }
  }
}

(function (mouseStopDelay) {
  var timeout;
  document.addEventListener('mousemove', function (e) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
          var event = new CustomEvent("mousestop", {
              detail: {
                  clientX: e.clientX,
                  clientY: e.clientY
              },
              bubbles: true,
              cancelable: true
          });
          e.target.dispatchEvent(event);
      }, mouseStopDelay);
  });
}(3000));
const control = player.querySelector('.player__controls');
console.log(control);
// Example use
container.addEventListener('mousestop', function(e) {
  console.log('You stopped your mouse while on the link');
  console.log('Mouse coordinates are: ', e.detail.clientX, e.detail.clientY);
  control.style.display = 'none';
  // The event will bubble up to parent elements.
});
container.addEventListener('mousemove', (e) => {
  control.style.display = 'flex';
})

function Mouse(name) {
  this.name = name;
  this.dead = false;
}

Mouse.prototype.die = function() {
  this.dead = true;
}