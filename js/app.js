// 3D Scroll
let zspacing = -1000, // Отступ между элементами по Z оси
 lastPos = zspacing / 5,
  $frames = document.getElementsByClassName('frame'),
  frames = Array.from($frames),
  zVals = [];

window.onscroll = function() {
   let top = document.documentElement.scrollTop,
      delta = lastPos - top;

   lastPos = top;

   frames.forEach(function(n, i) {
      zVals.push((i * zspacing) + zspacing);
      zVals[i] += delta * -5.5; // Delta = Speed of scroll
      let frame = frames[i],
         transform = `translateZ(${zVals[i]}px)`,
         opacity = zVals[i] < Math.abs(zspacing) / 1.8 ? 1 : 0;
      frame.setAttribute('style', `transform: ${transform};opacity: ${opacity}`);
   })
}

window.scrollTo(0, 1); 

//Audio
let soundButton = document.querySelector('.soundbutton'),
   audio = document.querySelector('.audio');

soundButton.addEventListener('click', e => {
   soundButton.classList.toggle('paused');
   audio.paused ? audio.play() : audio.pause();
})

// Событиек проверки нахождения на данной вкладке
window.onfocus = function() {
   soundButton.classList.contains('paused') ? audio.pause() : audio.play(); // Оставнока аудио при выходе из вкладки
}