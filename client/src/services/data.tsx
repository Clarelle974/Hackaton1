export const articlesPirates = [
  {
    id: 1,
    titre:
      "Le Capitaine 'Vent-en-Panne' Coincé en Mer Sans un Souffle de Brise !",
    date: "2025-02-05",
    contenu:
      "L'infâme capitaine 'Vent-en-Panne', célèbre pour sa chance légendaire (et son haleine de poisson avarié), s’est retrouvé bloqué au beau milieu des mers pendant 15 jours… faute de vent ! Son équipage a d'abord accusé une malédiction, puis un manque évident de compétences en aviron. Finalement, c’est une invasion de mouettes affamées qui a permis au navire d’avancer… en volant ses biscuits.",
    commentaire:
      "Moralité : toujours prévoir un plan B… et un stock de pain sec !",
    img: "/public/piratebloquer.jpg",
  },
  {
    id: 2,
    titre: "Un Trésor Enfoui Retrouvé… Mais Impossible à Ouvrir !",
    date: "2025-02-03",
    contenu:
      "L’équipage du Capitaine 'Barbe-Sceptique' a découvert un coffre au trésor sur une île abandonnée. Problème ? Impossible de l’ouvrir, même à coups de hache, de canon ou de jurons bien placés. Certains matelots pensent qu'il s'agit d'une ruse de l’ancien propriétaire, d'autres soupçonnent un simple manque de force musculaire.",
    commentaire:
      "Le coffre a été ramené à bord, en espérant qu'un membre du futur équipage sache crocheter autre chose qu'un poisson.",
    img: "/public/coffrepirate.jpg",
  },
  {
    id: 3,
    titre: "Panique en Haute Mer : Un Kraken Refuse de Lâcher le Navire",
    date: "2025-01-28",
    contenu:
      "Le capitaine 'Jean-Les-Deux-Pieds-Dans-le-Même-Sabot' a eu la surprise de voir son navire enlacé par les tentacules d’un kraken… qui semblait vouloir jouer ! Après trois heures de lutte acharnée (et une tentative de négociation au rhum), la créature a fini par relâcher l’équipage en échange de la moitié de la cargaison de biscuits.",
    commentaire:
      "Ce qui prouve une chose : même les monstres marins ont une faiblesse pour les douceurs !",
    img: "/public/krakennews.jpg",
  },
  {
    id: 4,
    titre:
      "Recrutement Difficile : Les Jeunes Pirates Refusent de Monter à Bord !",
    date: "2025-01-22",
    contenu:
      "Les capitaines des Sept Mers se plaignent : recruter de jeunes pirates devient un véritable casse-tête. 'Ils veulent tous des bateaux avec Wi-Fi !' se lamente le Capitaine 'Grog-en-Bourre'. D’autres évoquent une pénurie de sabres de qualité et une peur grandissante des sirènes chanteuses.",
    commentaire:
      "Une solution envisagée ? Proposer un forfait 'piraterie tout compris' avec hamacs, cocktails et abonnements aux ballades chantées par le perroquet du bord.",
    img: "/public/piratesbateau.jpg",
  },
  {
    id: 5,
    titre:
      "Bataille Navale Épique : Deux Capitaines Se Battent Pour Une Carte... Erronée !",
    date: "2025-01-15",
    contenu:
      "Les Capitaines 'Flibuste Fred' et 'Tatoué-Jusqu’aux-Orteils' se sont livrés à un duel mémorable pour une carte au trésor prétendument inestimable. Après des heures de combat acharné, ils ont découvert que la carte indiquait… une taverne servant 'le meilleur rhum des Caraïbes'. Résultat : une trêve immédiate et une tournée générale.",
    commentaire:
      "Finalement, tout le monde est gagnant quand le rhum est bon !",
    img: "/public/piratesbagarre.jpg",
  },
  {
    id: 6,
    titre: "Les Pirates du Golfe de Gascogne : La Vengeance des Mouettes !",
    date: "2025-02-06",
    contenu:
      "Les pirates du Golfe de Gascogne ont récemment fait parler d’eux en capturant un navire marchand... mais c’est leur attaque inattendue de mouettes affamées qui a fait le plus de bruit. Lors de l’abordage, un nuage de mouettes affamées s’est abattu sur le navire, volant biscuits, fromage, et même les épices précieuses. L’équipage pirate, pris par surprise, a dû fuir, laissant derrière eux des mouettes très satisfaites.",
    commentaire:
      "Leçon : ne jamais sous-estimer l’appétit d’une mouette en période de pénurie alimentaire.",
    img: "/public/mouettes.jpg",
  },
  {
    id: 7,
    titre: "Napoléon et les Pirates : Une Alliance Inattendue ?",
    date: "2025-02-07",
    contenu:
      "On raconte que Napoléon, durant ses voyages maritimes, a eu une rencontre insolite avec un groupe de pirates corses. Plutôt que de les combattre, l’empereur aurait tenté une alliance pour contrer les navires britanniques. Les pirates, au lieu de répondre par l’or ou le sang, ont proposé un échange : des cartes maritimes détaillées contre un stock de rhum. Napoléon, sceptique, aurait finalement accepté... mais il se serait empressé de chercher à doubler les corsaires pour ne pas leur laisser le monopole des eaux.",
    commentaire:
      "Napoléon a-t-il eu le dernier mot ? L’histoire reste floue...",
    img: "/public/napoleon.jpg",
  },
];

export interface Navire {
  nom: string;
  img?: string;
  capitaine: string;
  tailleEquipage: number;
  type: string;
  armement: string;
  reputation: string;
  particularite: string;
}

export interface Crew {
  nom: string;
  surnom: string;
  age: number;
  role: string;
  phrasePreferee: string;
  capacite: string;
  particularite: string;
  img: string;
}

export interface News {
  titre: string;
  date: string;
  contenu: string;
  commentaire: string;
  img: string;
  id: number;
}
export const naviresEnnemis: Navire[] = [
  {
    nom: "Le Trident Sanglant",
    img: "/trident-sanglant.webp",
    capitaine: "Morgan 'Le Requin' Blacktooth",
    tailleEquipage: 80,
    type: "Fregate",
    armement: "24 canons, harpons renforcés, rames pour attaques surprises",
    reputation:
      "Aborde ses ennemis en silence avant de les couler sans sommation.",
    particularite:
      "Les marins survivants jurent avoir vu des ombres de requins nager autour du navire, même en eau calme.",
  },
  {
    nom: "La Veuve Écarlate",
    img: "/veuve-ecarlate.webp",
    capitaine: "Isabella 'Sans-Pitié' De Vega",
    tailleEquipage: 60,
    type: "Brick",
    armement: "18 canons, boulets enflammés, mousquets de précision",
    reputation:
      "Ne prend aucun prisonnier… sauf pour raconter son histoire avant de les jeter aux requins.",
    particularite:
      "Possède une figure de proue en forme de femme pleurant des larmes de sang (qui semblent parfois bouger…).",
  },
  {
    nom: "L'Ouragan Noir",
    img: "/ouragan-noir.webp",
    capitaine: "Sebastian 'Main de Fer' Graves",
    tailleEquipage: 100,
    type: "Galion",
    armement: "30 canons, mitraille anti-matelots, barils explosifs",
    reputation:
      "Rien ne survit après son passage, ni bateaux, ni espoirs, ni bouteilles de rhum.",
    particularite:
      "On dit que son équipage ne dort jamais… et que son navire continue d’avancer même sans vent.",
  },
  {
    nom: "Le Ventre de Poséidon",
    img: "/ventre-poseidon.png",
    capitaine: "Bartholomew 'Trois Poumons' Flint",
    tailleEquipage: 50,
    type: "Sloop rapide",
    armement: "10 canons, grappins d'abordage, fumée d'illusion",
    reputation:
      "Capable de disparaître en pleine bataille et de réapparaître à l'autre bout de la mer.",
    particularite:
      "Certains disent que le capitaine Flint n’a pas besoin de respirer sous l’eau… et que ses hommes non plus.",
  },
  {
    nom: "Le Jugement Dernier",
    img: "/jugement-dernier.png",
    capitaine: "Ezekiel 'Le Pieux' Crowe",
    tailleEquipage: 75,
    type: "Navire de guerre",
    armement:
      "20 canons bénis, catapultes à boulets maudits, croix inversées gravées sur la coque",
    reputation:
      "Prêche la fin des pirates… avant de les faire disparaître en mer.",
    particularite:
      "Son équipage murmure des prières avant chaque attaque… et ses ennemis se réveillent parfois avec leurs noms gravés sur le pont du navire.",
  },
  {
    nom: "L'Anguille Fantôme",
    img: "/aiguille-fantome.png",
    capitaine: "Silas 'Sans-Visage' Vayne",
    tailleEquipage: 40,
    type: "Corvette legere",
    armement:
      "6 canons rapides, filets empoisonnés, carreaux d’arbalète silencieux",
    reputation:
      "On ne le voit jamais arriver… mais on voit son pavillon flotter au petit matin.",
    particularite:
      "Il paraît que ceux qui rejoignent son équipage perdent leur reflet dans les miroirs.",
  },
];

export type ArticleBoutique = {
  id: number;
  nom: string;
  categorie: string;
  prix: string;
  description: string;
  particularite: string;
  rarete: string;
  image: string;
};

export const boutiquePirate: ArticleBoutique[] = [
  {
    id: 10,
    nom: "Sabre du Kraken",
    categorie: "Arme",
    prix: "150 pièces d'or",
    description:
      "Un sabre recouvert d'écailles noires, censé avoir été trempé dans le sang d'un kraken.",
    particularite: "Laisse une légère odeur de poisson après chaque coup.",
    rarete: "Légendaire",
    image: "/public/sabrepirate.jpeg",
  },
  {
    id: 9,
    nom: "Canon à silex 'Crachouilleur'",
    categorie: "Arme",
    prix: "800 pièces d'or",
    description:
      "Un canon à un coup, précis si le vent est du bon côté (et si on prie assez fort).",
    particularite:
      "Parfois, il tire tout seul… quand il est de mauvaise humeur.",
    rarete: "Rare",
    image: "/public/canon.jpeg",
  },
  {
    id: 8,
    nom: "Boussole de l'Indécis",
    categorie: "Accessoire",
    prix: "40 pièces d'or",
    description:
      "Indique toujours une direction… mais jamais la même deux fois de suite.",
    particularite: "Parfait pour se perdre avec style.",
    rarete: "Étrange",
    image: "/public/boussole.jpeg",
  },
  // {
  //   nom: "Crochet 'Main d'Argent'",
  //   categorie: "Prothèse",
  //   prix: "100 pièces d'or",
  //   description:
  //     "Un élégant crochet en argent, idéal pour gratter sous un bandage ou ouvrir une bouteille de rhum.",
  //   particularite: "Électrise légèrement quiconque lui serre la main.",
  //   rarete: "Épique",
  //   image: "./public/boussole.jpeg",
  // },
  {
    id: 7,
    nom: "Chapeau de Capitaine 'Grande Gueule'",
    categorie: "Vêtements",
    prix: "70 pièces d'or",
    description:
      "Un tricorne noir orné d'une plume de corbeau, parfait pour imposer le respect.",
    particularite: "Amplifie la voix du porteur lorsqu'il donne des ordres.",
    rarete: "Rare",
    image: "/public/ChapeauCapitaine.jpeg",
  },
  {
    id: 6,
    nom: "Jumelles 'Oeil de Loup'",
    categorie: "Accessoire",
    prix: "60 pièces d'or",
    description:
      "Permettent de voir clairement à des kilomètres… sauf si on regarde directement le soleil.",
    particularite:
      "Un œil fantomatique apparaît parfois dans la lentille gauche.",
    rarete: "Mystique",
    image: "/public/jumelle.png",
  },
  {
    id: 5,
    nom: "Carte au Trésor Incomprise",
    categorie: "Objet Mystérieux",
    prix: "Gratuit (ou pas...)",
    description:
      "Une carte dessinée par un pirate fou… personne n'a encore su déchiffrer son code.",
    particularite: "Brille dans le noir les soirs de pleine lune.",
    rarete: "Unique",
    image: "/public/carteautresor.jpeg",
  },
  {
    id: 4,
    nom: "Bottes de Loup de Mer",
    categorie: "Vêtements",
    prix: "55 pièces d'or",
    description:
      "Des bottes en cuir trempé, résistantes à l'eau, au sable et aux promesses non tenues.",
    particularite: "Ne laissent aucune empreinte, sauf dans la neige.",
    rarete: "Rare",
    image: "/public/bottespirate.jpeg",
  },
  {
    id: 3,
    nom: "Tonnelet de Rhum Maudit",
    categorie: "Consommable",
    prix: "25 pièces d'or",
    description:
      "Un rhum noirci par le sel et le temps… délicieux, mais il fait chanter celui qui en boit.",
    particularite: "Plus on en boit, plus on chante juste.",
    rarete: "Maudit",
    image: "/public/tonnelet.jpeg",
  },
  // {
  //   nom: "Corde de Pendaison Recyclée",
  //   categorie: "Outil",
  //   prix: "30 pièces d'or",
  //   description:
  //     "Une corde solide et usée… qui a déjà servi à quelque chose de peu réjouissant.",
  //   particularite: "Parle parfois en chuchotant des avertissements.",
  //   rarete: "Troublant",
  //   image: "./public/PerroquetEmpoisonneur.jpeg",
  // },
  {
    id: 2,
    nom: "Perroquet Empoisonneur",
    categorie: "Animal de Compagnie",
    prix: "120 pièces d'or",
    description:
      "Un perroquet capable d’imiter n’importe quelle voix pour mieux manipuler les ennemis.",
    particularite: "Insulte les passants sans raison apparente.",
    rarete: "Légendaire",
    image: "/public/PerroquetEmpoisonneur.jpeg",
  },
  {
    id: 1,
    nom: "Œil de Verre 'Vision de l'Au-delà'",
    categorie: "Prothèse",
    prix: "90 pièces d'or",
    description:
      "Un œil de verre enchanté qui permet de voir les âmes perdues en mer.",
    particularite: "Se met à pleurer tout seul certains soirs…",
    rarete: "Surnaturel",
    image: "/public/oeilverre.jpeg",
  },
];

export const equipagePirate = [
  {
    nom: "Barbe-Foudre",
    surnom: "Le Capitaine Électrique",
    age: 47,
    role: "Capitaine",
    capacite: "Peut invoquer la foudre en levant son sabre",
    phrasePreferee: "Que le tonnerre me foudroie si je perds !",
    particularite: "Son perroquet insulte tout le monde en vieux gaélique.",
    img: "/public/pirate.jpg",
  },
  {
    nom: "Bigoudi Jack",
    surnom: "Le Coiffeur des Mers",
    age: 38,
    role: "Second",
    capacite: "Peut tresser une barbe en pleine tempête",
    phrasePreferee: "Un nœud bien fait, c’est la clé du succès !",
    particularite: "Exige une coiffure impeccable avant chaque abordage.",
    img: "/public/bigoudijack.jpg",
  },
  {
    nom: "Mains-d’Acier",
    surnom: "Le Charpentier Fantôme",
    age: 52,
    role: "Charpentier",
    capacite: "Répare un navire avec trois clous et un regard menaçant",
    phrasePreferee: "Si ça tient, c’est que c’est bon.",
    particularite: "Personne ne l’a jamais vu dormir, même en pleine tempête.",
    img: "/public/mainacier.jpg",
  },
  {
    nom: "Oeil-de-Serpent",
    surnom: "Le Tireur de Légende",
    age: 45,
    role: "Canonnier",
    capacite: "Ne rate jamais sa cible, même en tirant à l’aveugle",
    phrasePreferee: "Un coup de canon bien placé, et hop ! Plus de problème.",
    particularite:
      "A un bandeau sur l'œil gauche… mais son œil droit est en verre.",
    img: "/public/pirate1 .jpg",
  },
  {
    nom: "Dent-d’Ancre",
    surnom: "Le Bourreau Gourmand",
    age: 50,
    role: "Cuisinier",
    capacite:
      "Peut faire un ragoût avec n'importe quoi (et c’est souvent le cas)",
    phrasePreferee:
      "Si tu demandes ce qu’il y a dedans, t’es pas prêt à le manger.",
    particularite:
      "A une dent en or en forme d’ancre et une obsession pour le rhum arrangé.",
    img: "/public/ancre.jpg",
  },
  {
    nom: "Pied-Léger",
    surnom: "L’Espion Danseur",
    age: 29,
    role: "Éclaireur",
    capacite: "Se faufile partout sans un bruit",
    phrasePreferee: "Les murs ont des oreilles, moi j’ai des jambes rapides.",
    particularite: "Parle toujours en chuchotant, même en pleine bataille.",
    img: "/public/piedslegers.jpg",
  },
  {
    nom: "Sifflote",
    surnom: "La Charmeuse de Requins",
    age: 36,
    role: "Navigateur",
    capacite: "Sait toujours où elle est, même en pleine brume",
    phrasePreferee: "Si l’étoile brille, c’est que c’est par là !",
    particularite: "Siffle tout le temps… même en dormant.",
    img: "/public/sifflotte.jpg",
  },
  {
    nom: "Culbuto",
    surnom: "Le Matelot Élastique",
    age: 32,
    role: "Gabier",
    capacite: "Peut se plier en quatre pour atteindre les voiles",
    phrasePreferee:
      "Si tu tombes pas une fois par jour, c’est que t’apprends rien.",
    particularite: "A déjà survécu à 17 chutes de mât.",
    img: "/public/gros.jpg",
  },
  {
    nom: "Madame Kraken",
    surnom: "La Sorcière des Océans",
    age: 61,
    role: "Médecin",
    capacite: "Peut soigner une fracture avec des algues et du rhum",
    phrasePreferee: "Bois ça. Ça va te guérir… ou t’achever.",
    particularite: "Récite des incantations bizarres en préparant des potions.",
    img: "/public/kraken.jpg",
  },
  {
    nom: "Racine Noire",
    surnom: "Le Maître des Plantes",
    age: 48,
    role: "Herboriste",
    capacite: "Fait pousser des plantes médicinales sur le pont",
    phrasePreferee: "Tout ce qui pique soigne.",
    particularite: "A un cactus qu’il appelle 'Jean-Baptiste'.",
    img: "/public/serpent.jpg",
  },
  {
    nom: "Moustique",
    surnom: "Le Pilleur Minus",
    age: 19,
    role: "Voleur de bord",
    capacite: "Peut dérober une bourse sans même la toucher",
    phrasePreferee:
      "Ce qui est à toi est à moi, et ce qui est à moi… reste à moi.",
    particularite: "Dort avec une main sur son butin, l’autre sur sa dague.",
    img: "/public/moustique.jpg",
  },
  {
    nom: "Bout-de-Chandelle",
    surnom: "Le Moussaillon Maudit",
    age: 16,
    role: "Moussaillon",
    capacite: "Peut renverser un tonneau d’eau douce par accident n’importe où",
    phrasePreferee: "Euh… désolé, Capitaine.",
    particularite:
      "A déjà survécu à trois tentatives d’abandon sur une île déserte.",
    img: "/public/chandelle.jpg",
  },
];

const getNewsDetails = (id: number) => {
  const result = articlesPirates.find((crew) => crew.id === Number(id));
  if (!result) {
    throw new Error();
  }
  return result;
};

const getArticleById = (id: number) => {
  const result = boutiquePirate.find((article) => article.id === Number(id));
  if (!result) {
    throw new Error();
  }
  return result;
};

export { getNewsDetails, getArticleById };
