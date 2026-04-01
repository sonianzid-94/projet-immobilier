
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
    titre: "Villa ",
    commune: "plateau",
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
    commune: "Yopougon",
    prix: 300000,
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


 // 1. Récupérer l'ID dans l'URL (ex: detail.html?id=3)
const params = new URLSearchParams(window.location.search);
const idMaison = parseInt(params.get('id'));

// 2. Trouver la maison dans ton tableau (tu dois importer ou avoir accès au même tableau 'maisons')
const maisonTrouvee = maisons.find(m => m.id === idMaison);

// 3. Injecter les données
if (maisonTrouvee) {
  document.getElementById('imagePrincipale').src = maisonTrouvee.image;
  document.getElementById('titre').innerText = maisonTrouvee.titre;
  document.getElementById('commune').innerText = `${maisonTrouvee.commune}, Abidjan`;
  document.getElementById('prix').innerText = `${maisonTrouvee.prix.toLocaleString()} FCFA / mois`;
  document.getElementById('douche').src = maisonTrouvee.douches;
  document.getElementById('surface').innerText = maisonTrouvee.surface;
  document.getElementById('localisation').src = maisonTrouvee.localisation;
  document.getElementById('garage').innerText = maisonTrouvee.garage;
  document.getElementById('description').innerText = maisonTrouvee.description;
  document.getElementById('chambre').innerText = maisonTrouvee.chambres;
  const lien = document.getElementById("telephone");
lien.href = `https://wa.me/${maisonTrouvee.telephone}`;


  // Gestion de la galerie
  const galerieContainer = document.getElementById('galerie');
  if (maisonTrouvee.galerie) {
    maisonTrouvee.galerie.forEach(imgUrl => {
      galerieContainer.innerHTML += `
        <img src="${imgUrl}" class="rounded-xl h-40 w-full object-cover">
      `;
    });
  } else {
    galerieContainer.innerHTML = "<p>Aucune photo supplémentaire.</p>";
  }
} else {
  // Si l'ID n'existe pas
  document.body.innerHTML = "<h1>Maison non trouvée</h1><a href='index.html'>Retour</a>";
}