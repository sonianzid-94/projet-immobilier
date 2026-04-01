document.addEventListener("DOMContentLoaded", () => {
  // On sélectionne tous les éléments qui ont nos classes cibles
  const animatedElements = document.querySelectorAll('.slide-target, .slide-target-down');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;

        // 1. On retire l'invisibilité (remplace 'hidden' par 'opacity-0' dans ton HTML)
        el.classList.remove('opacity-0');

        // 2. On applique l'animation correspondante définie dans ton @theme
        if (el.classList.contains('slide-target')) {
          el.classList.add('animate-slide-in-left');
        } else if (el.classList.contains('slide-target-down')) {
          el.classList.add('animate-fade-in-down');
        }

        // 3. On arrête d'observer pour ne pas relancer l'animation inutilement
        observer.unobserve(el);
      }
    });
  }, { 
    threshold: 0.15, // Déclenche quand 15% de l'élément est visible
    rootMargin: '0px 0px -50px 0px' // Optionnel: déclenche un peu avant qu'il n'entre
  });

  animatedElements.forEach(el => observer.observe(el));
});