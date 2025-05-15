function resetPawTrail() {
    const pawTrack = document.querySelector('.paw-track');
    const newTrack = pawTrack.cloneNode(true); // clone it
    pawTrack.remove();                         // remove the old one
    document.body.appendChild(newTrack);       // add the new one
  }
  
  // Recreate paw trail every 6 seconds
  
  setInterval(resetPawTrail, 6000);
  let lastScrollY = window.scrollY;
  const footer = document.querySelector('.sticky-footer');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      footer.classList.add('hide');
    } else {
      // Scrolling up
      footer.classList.remove('hide');
    }
    lastScrollY = window.scrollY;
  });