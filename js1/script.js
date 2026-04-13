const shareButton = document.getElementById('shareButton');
const shareBubble = document.getElementById('shareBubble');

shareButton.addEventListener('click', () => {
  const isDesktop = window.innerWidth > 768;

  if (isDesktop) {
    shareBubble.classList.toggle('active');
    shareButton.classList.toggle('active-btn');
  } else {
    document.getElementsByClassName('profile')[0].style.display = 'none';
    document.querySelector('footer').classList.toggle('mobile-active');
    // NOT DONE YET 
  }
});