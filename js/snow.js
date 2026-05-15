document.addEventListener('DOMContentLoaded', function() {
  const $container = document.querySelector('.snow');
  if (!$container) return;

  const snowflakesCount = Math.random() * 500 + 200;

  for (let i = 0; i <= snowflakesCount; i++) {
    const $element = document.createElement('i');
    const x = Math.random();
    const width = Math.random() * 10 + 2;
    const duration = Math.random() * 10 + 4;
    const delay = Math.random() * 10 + 0.2;
    const opacity = Math.random() * 0.8 + 0.2;

    $element.style.setProperty('--x', x);
    $element.style.setProperty('--width', `${width}px`);
    $element.style.setProperty('--duration', `${duration}s`);
    $element.style.setProperty('--delay', `${delay}s`);
    $element.style.setProperty('--opacity', `${opacity}`);
    $container.appendChild($element);
  }

  let isPlaying = true;
  const togglePlaying = () => {
    isPlaying = !isPlaying;
    $playButton.innerHTML = isPlaying ? 'Stop the snow': 'Let snow fall!';
    if (isPlaying) {
      $container.classList.add('falling')
      $playButton.classList.add('falling');
    } else {
      $container.classList.remove('falling')
      $playButton.classList.remove('falling');
    }
  }

  const $playButton = document.createElement('button');
  $playButton.classList.add('snow-play-button')
  $playButton.addEventListener('click', function(e) {
    togglePlaying();
  });
  togglePlaying();
  document.body.appendChild($playButton);
});