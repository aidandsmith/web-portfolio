document.addEventListener('DOMContentLoaded', function() {
    const waveElement = document.querySelector('.wave');
    const profileContainer = document.querySelector('.profile-container');

    profileContainer.addEventListener('mouseenter', function() {
      waveElement.style.animation = 'none';
      setTimeout(() => {
        waveElement.style.animation = 'wave 3s ease-in-out'; 
      }, 0);
    });
});