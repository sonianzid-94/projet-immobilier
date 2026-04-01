
const maisons = [
  
  {
    id: 4,
    titre: "studio ",
    commune: "Cocody",
    prix: 100000,
    chambres: 1,
    douches: 1,
    surface: 80,
    type: "Appartement",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
     galerie : [
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    ]
  },
  {
    id: 5,
    titre: "Villa ",
    commune: "plateau",
    prix: 450000,
    chambres: 4,
    douches: 3,
    surface: 200,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
     galerie : [
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    ]
  },

  {
    id:7,
    titre: "appartement ",
    commune: "abobo",
    prix: 200000,
    chambres: 3,
    douches: 2,
    surface: 200,
    type: "Villa",
    garage: "avec garage",
    localisation:"Abidjan,Cote d'ivoire",
    description:" Magnifique villa moderne située à Cocody, idéale pour une famille.Elle dispose d’un grand salon lumineux, d’une cuisine équipée,et d’un espace extérieur agréable.",
    image: "https://images.pexels.com/photos/5587932/pexels-photo-5587932.jpeg ",
     galerie : [
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    ]
  },
   {
    id:8,
    titre: "Villa ",
    commune: "plateau",
    prix: 450000,
    chambres: 4,
    douches: 3,
    surface: 200,
    type: "Villa",
    garage: "avec garage",
    localisation:"Abidjan,Cote d'ivoire",
    description:" Magnifique villa moderne située à Cocody, idéale pour une famille.Elle dispose d’un grand salon lumineux, d’une cuisine équipée,et d’un espace extérieur agréable.",
    image: "https://images.pexels.com/photos/8134748/pexels-photo-8134748.jpeg",
     galerie : [
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    ]
  },
  
  
];



function afficherMaisonsPremiums(liste) {
  const container = document.getElementById("premium");
  container.innerHTML = "";

 
  // -----------------------------
  maisons.forEach(maison => {
    container.innerHTML += `
      <div class="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ">
        
        <img src="${maison.image}" class="h-52 w-full object-cover rounded-t-2xl">

        <div class="p-4">
          <h2 class="font-bold text-lg">${maison.titre}</h2>
          <p class="text-gray-500 text-sm">${maison.commune}, Abidjan</p>

          <div class="flex justify-between text-sm mt-3 text-gray-600">
            <span>🛏 ${maison.chambres}</span>
            <span>🚿 ${maison.douches}</span>
            <span>📐 ${maison.surface} m²</span>
          </div>

          <div class="mt-4 flex justify-between items-center">
            <span class="text-orange-400 font-bold">${maison.prix} FCFA</span>

            <button onclick="window.location.href='detail.html?id=${maison.id}'" class="text-white bg-orange-600 px-3 py-1 rounded-lg hover:bg-orange-400">
              Voir
            </button>
          </div>
        </div>

      </div>
    `;
  });
  // On génère les boutons après avoir affiché les maisons
 //IMPORTANT : On dit à l'observer de regarder les nouveaux éléments
  observeNewElements();
}
const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.remove('opacity-0');
      // Détecte l'animation à mettre
      const anim = el.classList.contains('slide-target') ? 'animate-slide-in-left' : 'animate-slide-in-down';
      el.classList.add(anim);
      animationObserver.unobserve(el);
    }
  });
}, { threshold: 0.1 });

// Fonction pour observer les nouveaux éléments
function observeNewElements() {
  const elements = document.querySelectorAll('.slide-target:not(.observed), .slide-target-down:not(.observed)');
  elements.forEach(el => {
    el.classList.add('observed'); // On marque pour ne pas observer 2 fois
    animationObserver.observe(el);
  });
}

window.onload = () => {
   afficherMaisonsPremiums(maisons);
};