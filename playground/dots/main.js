document.addEventListener('DOMContentLoaded', () => {
  const sounds = [
    new Audio('audio/01.mp3'),
    new Audio('audio/02.mp3'),
    new Audio('audio/03.mp3'),
    new Audio('audio/04.mp3'),
    new Audio('audio/05.mp3'),
    new Audio('audio/06.mp3'),
  ];

  sounds.forEach((sound) => sound.volume = 0.1);

  const $wrapper = document.querySelector('.wrapper');
  const $counter = document.querySelector('.counter');
  let counter = 0;

  const hue = Math.floor(Math.random() * 255);
  document.body.style.setProperty('--hue', hue);

  for (let index = 0; index < 200; index++) {
    const $dotWrapper = document.createElement('div');
    const size = Math.random() * 16 + 20 + 'px';
    const background = `oklch(
      ${(Math.random() * 60 + 20).toFixed(2)}%
      ${(Math.random() * 0.4).toFixed(1)}
      ${hue}
      / ${Math.random().toFixed(2)}
    )`;

    $dotWrapper.classList.add('dot');
    $dotWrapper.style.left = Math.random() * document.documentElement.clientWidth + 'px';
    $dotWrapper.style.top = Math.random() * document.documentElement.clientHeight + 'px';
    $dotWrapper.style.width = size;
    $dotWrapper.style.height = size;
    $dotWrapper.style.setProperty('--background', background);
    $wrapper.appendChild($dotWrapper);
  }

  
  const $dots = document.querySelectorAll('.dot');
  $dots.forEach(($dot) => {
    const clientRect = $dot.getBoundingClientRect();
    const { width, height } = clientRect;
  
    const transform = { x: 0, y: 0 };
    $dot.addEventListener('mouseenter', (e) => {
      transform.x += ((e.offsetX > width / 2) ? -e.offsetX : width - e.offsetX) * 3;
      transform.y += ((e.offsetY > height / 2) ? -e.offsetY : height - e.offsetY) * 3;
      const clientRect = $dot.getBoundingClientRect();

      if (clientRect.top - height * 2 < 0) {
        transform.y += height * 3;
      }
      
      if (clientRect.right + width * 3 > document.documentElement.clientWidth) {
        transform.x -= width * 4;
      }

      if (clientRect.bottom + height * 3 > document.documentElement.clientHeight) {
        transform.y -= height * 4;
      }

      if (clientRect.left - width * 2 < 0) {
        transform.x += width * 3;
      }
      $dot.style.transform = `translate(${transform.x}px, ${transform.y}px)`;

      const sound = sounds[Math.floor(Math.random() * sounds.length)];
      sound.currentTime = 0;
      sound.play();

      counter++;
      $counter.innerHTML = counter;
    });
  });
});