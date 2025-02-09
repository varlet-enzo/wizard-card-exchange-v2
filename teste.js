function toggleMenu() {
  const navList = document.getElementById('nav-list');
  navList.classList.toggle('active');
}


window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  setTimeout(function() {
      loader.style.opacity = '0';
      setTimeout(function() {
          loader.style.display = 'none';
      }, 500);
  }, 1000);
});

function toggleMenu() {
  const navList = document.getElementById('nav-list');
  navList.classList.toggle('active');
}
// Sélectionner les éléments du carousel
const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselNext = document.querySelector('.carousel-next');
const carouselPrev = document.querySelector('.carousel-prev');

// Définir la position initiale du carousel
let position = 0;

// Fonction pour déplacer le carousel vers la droite
function moveNext() {
  position += 100; // déplacer le carousel de 100px vers la droite
  carouselTrack.style.transform = `translateX(-${position}%)`;
  
  // Vérifier si le carousel est à la fin
  if (position >= carouselItems.length * 100) {
    position = 0; // Réinitialiser la position
    carouselTrack.style.transform = `translateX(-${position}%)`;
  }
}

// Fonction pour déplacer le carousel vers la gauche
function movePrev() {
  position -= 100; // déplacer le carousel de 100px vers la gauche
  
  // Vérifier si le carousel est au début
  if (position < 0) {
    position = (carouselItems.length - 1) * 100; // Déplacer le carousel à la fin
    carouselTrack.style.transform = `translateX(-${position}%)`;
  } else {
    carouselTrack.style.transform = `translateX(-${position}%)`;
  }
}

// Ajouter des écouteurs d'événements pour les boutons
carouselNext.addEventListener('click', moveNext);
carouselPrev.addEventListener('click', movePrev);

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  
  let currentIndex = 0;
  let itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);

  function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      
      // Réactivation des boutons si nécessaire
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex >= items.length - Math.floor(track.offsetWidth / itemWidth);
  }

  nextButton.addEventListener('click', () => {
      if (currentIndex < items.length - 1) {
          currentIndex++;
      } else {
          currentIndex = 0; // Retour au début
      }
      updateCarousel();
  });

  prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = items.length - 1; // Aller à la fin
      }
      updateCarousel();
  });

  // Adaptation au redimensionnement
  window.addEventListener('resize', () => {
      itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
      updateCarousel();
  });

  // Initialisation
  updateCarousel();
  


});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
      }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.legendary-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(50px)';
  observer.observe(card);
});

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.avis-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.avis-next');
  const prevButton = document.querySelector('.avis-prev');
  const dotsNav = document.querySelector('.avis-nav');
  const dots = Array.from(dotsNav.children);
  
  let currentIndex = 0;
  
  // Arrange the slides next to one another
  const setSlidePosition = () => {
      slides.forEach((slide, index) => {
          slide.style.transform = `translateX(${100 * index}%)`;
      });
  };
  
  setSlidePosition();
  
  const moveToSlide = (targetIndex) => {
      if (targetIndex < 0) {
          targetIndex = slides.length - 1;
      } else if (targetIndex >= slides.length) {
          targetIndex = 0;
      }
      
      track.style.transform = `translateX(-${targetIndex * 100}%)`;
      
      // Update dots
      dots[currentIndex].classList.remove('active');
      dots[targetIndex].classList.add('active');
      
      currentIndex = targetIndex;
  };
  
  // Next button click
  nextButton.addEventListener('click', () => {
      moveToSlide(currentIndex + 1);
  });
  
  // Previous button click
  prevButton.addEventListener('click', () => {
      moveToSlide(currentIndex - 1);
  });
  
  // Dots click
  dotsNav.addEventListener('click', (e) => {
      const targetDot = e.target.closest('span');
      if (!targetDot) return;
      
      const targetIndex = dots.findIndex(dot => dot === targetDot);
      moveToSlide(targetIndex);
  });
  
  // Auto-advance slides every 5 seconds
  setInterval(() => {
      moveToSlide(currentIndex + 1);
  }, 5000);
});