document.addEventListener('DOMContentLoaded', function() {
  const $root = document.querySelector('.root');
  const $colorValue = $root.querySelector('.color-value');

  $lightnessInput = $root.querySelector('input#lightness');
  $lightnessInput.addEventListener('input', (event) => {
    document.body.style.setProperty('--l', event.target.value + '%')
    setColorValue();
  });

  $chromaInput = $root.querySelector('input#chroma');
  $chromaInput.addEventListener('input', (event) => {
    document.body.style.setProperty('--c', event.target.value);
    setColorValue();
  });

  $hueInput = $root.querySelector('input#hue');
  $hueInput.addEventListener('input', (event) => {
    document.body.style.setProperty('--h', event.target.value);
    setColorValue();
  });

  $opacityInput = $root.querySelector('input#opacity');
  $opacityInput.addEventListener('input', (event) => {
    document.body.style.setProperty('--a', event.target.value);
    setColorValue();
  });

  const setColorValue = () => {
    $colorValue.querySelector('.l').innerHTML = $lightnessInput.value;
    $colorValue.querySelector('.c').innerHTML = $chromaInput.value;
    $colorValue.querySelector('.h').innerHTML = $hueInput.value;
    $colorValue.querySelector('.a').innerHTML = $opacityInput.value;
  }

  setColorValue();
});