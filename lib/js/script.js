console.log('./lib/js/script.js connected');

let video = document.querySelector('.video');
let videoHeight = Math.ceil(video.offsetWidth * 0.5625);
video.setAttribute('height', videoHeight);
console.log(`video height set to ${videoHeight}`)