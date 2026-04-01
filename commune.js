
const maisons = [
  {
    id: 1,
    titre: "Appartement moderne",
    commune: "Cocody",
    prix: 150000,
    chambres: 2,
    douches: 1,
    surface: 80,
    type: "Appartement",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",

  },
  {
    id: 2,
    titre: "Villa luxe",
    commune: "Marcory",
    prix: 450000,
    chambres: 4,
    douches: 3,
    surface: 200,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    galerie: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    ]

  },
  {
    id: 3,
    titre: "Studio Americain",
    commune: "Yopougon",
    prix: 80000,
    chambres: 1,
    douches: 1,
    surface: 40,
    type: "Studio",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    galerie: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    ]
  },
  {
    id: 4,
    titre: "Appartement ",
    commune: "Cocody",
    prix: 150000,
    chambres: 2,
    douches: 1,
    surface: 80,
    type: "Appartement",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    galerie: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    ]
  },
  {
    id: 5,
    titre: "studio ",
    commune: "plateau",
    prix: 50000,
    chambres: 1,
    douches: 1,
    surface: 60,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    galerie: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    ]
  },
  {
    id: 6,
    titre: "Studio Americain",
    commune: "Adjame",
    prix: 80000,
    chambres: 1,
    douches: 1,
    surface: 40,
    type: "Studio",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    galerie: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    ]
  },
  {
    id: 7,
    titre: "Villa ",
    commune: "abobo",
    prix: 200000,
    chambres: 3,
    douches: 2,
    surface: 200,
    type: "Villa",
    garage: "avec garage",
    localisation: "Abidjan,Cote d'ivoire",
    description: " Magnifique villa moderne située à Cocody, idéale pour une famille.Elle dispose d’un grand salon lumineux, d’une cuisine équipée,et d’un espace extérieur agréable.",
    image: "https://images.pexels.com/photos/5587932/pexels-photo-5587932.jpeg ",
    galerie: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    ]
  },
  {
    id: 8,
    titre: "Villa ",
    commune: "plateau",
    prix: 450000,
    chambres: 4,
    douches: 3,
    surface: 200,
    type: "Villa",
    garage: "avec garage",
    localisation: "Abidjan,Cote d'ivoire",
    description: " Magnifique villa moderne située à Cocody, idéale pour une famille.Elle dispose d’un grand salon lumineux, d’une cuisine équipée,et d’un espace extérieur agréable.",
    image: "https://images.pexels.com/photos/8134748/pexels-photo-8134748.jpeg",
    galerie: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    ]
  },
  {
    id: 9,
    titre: "Villa ",
    commune: "plateau",
    prix: 450000,
    chambres: 4,
    douches: 3,
    surface: 200,
    type: "Villa",
    garage: "avec garage",
    localisation: "Abidjan,Cote d'ivoire",
    description: " Magnifique villa moderne située à Cocody, idéale pour une famille.Elle dispose d’un grand salon lumineux, d’une cuisine équipée,et d’un espace extérieur agréable.",
    image: "https://images.pexels.com/photos/12364203/pexels-photo-12364203.jpeg",
    galerie: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    ]
  },

];
let currentPage = 1;
const itemsPerPage = 3; // On affiche 3 maisons par page pour le test
let housesToDisplay = maisons; // On garde une trace de la liste actuelle (filtrée ou non)

const btnprincipale = document.getElementById("btnAll")
const btnone = document.getElementById("btn1")
const btntwo = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")


function afficherMaisons(liste) {
  const container = document.getElementById("listeMaisons");
  container.innerHTML = "";
  // --- LOGIQUE DE PAGINATION ---
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedList = liste.slice(start, end);
  // -----------------------------
  paginatedList.forEach(maison => {
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
  setupPagination(liste.length);
}
function filterMaisons() {
  const prixMax = document.getElementById("prixMax").value;
  const commune = document.getElementById("commune").value;


  let resultat = maisons;

  // 🔍 Filtre par prix
  if (prixMax) {
    resultat = resultat.filter(maison => maison.prix <= prixMax);
  }

  // 🏙️ Filtre par commune
  if (commune) {
    resultat = resultat.filter(maison => maison.commune === commune);
  }
  housesToDisplay = resultat; // On stocke le résultat filtré
  currentPage = 1; // On revient à la page 1
  afficherMaisons(housesToDisplay);
}



function setupPagination(totalItems) {
  const paginationContainer = document.getElementById("pagination"); // Crée cette div dans ton HTML
  paginationContainer.innerHTML = "";

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  if (pageCount <= 1) return; // Pas besoin de boutons s'il n'y a qu'une page

  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.className = `mx-1 px-3 py-1 rounded ${currentPage === i ? 'bg-orange-600 text-white' : 'bg-gray-200'}`;

    btn.addEventListener("click", () => {
      currentPage = i;
      afficherMaisons(housesToDisplay); // On réaffiche avec la nouvelle page
      window.scrollTo(0, 0); // Optionnel : remonte en haut de page
    });

    paginationContainer.appendChild(btn);
  }
}
window.onload = () => {
  afficherMaisons(maisons);
};













