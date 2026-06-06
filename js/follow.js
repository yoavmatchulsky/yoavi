document.addEventListener('DOMContentLoaded', () => {
  let $followers = createFollowers(4);


  const size = $followers[0].getBoundingClientRect().width;

  let canFollow = true;

  let top = 0;
  let left = 0;

  document.addEventListener('mousemove', (e) => {
    top = e.clientY - size / 2;
    left = e.clientX - size / 2;

    if (canFollow) {
      canFollow = false;
      setTimeout(() => {
        $followers.forEach($follower => {
          $follower.style.top = top + 'px';
          $follower.style.left = left + 'px';
        })
        canFollow = true;
      }, 50);
    }
  });

  const $followersCountInput = document.querySelector('input#followers-count');
  $followersCountInput.addEventListener('change', (e) => {
    const newCount = Number(e.target.value);
    if (newCount === $followers.length) return;
    $followers.forEach($follower => $follower.remove());
    $followers = createFollowers(newCount);
  });
});


function createFollowers(count) {
  const $followers = [];
  for (let index = 0; index < count; index++) {
    const $follower = document.createElement('span');
    $follower.classList.add('follower');
    $follower.style.setProperty('--duration', 500 + index * 150 + 'ms')
    $follower.style.setProperty('--alpha', 0.7 - index * 0.05);
    document.body.appendChild($follower);
    $followers.push($follower);
  }
  return $followers;
}