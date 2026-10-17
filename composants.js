/* =========================================================
   COMPOSANTS.JS - Bibliothèque de composants électroniques
   Projet : InitiaElectro / EspaceElectronic
   Auteur : M. Ziane
   Version : 2.0 (Octobre 2026)
   
   Niveaux :
   - "decouverte"  : 8-10 ans (6 composants)
   - "exploration" : 10-13 ans (+12 composants)
   - "maitrise"    : 13-18 ans (+20 composants)
   - "expert"      : 18+ ans (+6 composants)
   ========================================================= */

var COMPOSANTS = {
  
  /* =========================================================
     NIVEAU 1 : DÉCOUVERTE (6 composants)
     ========================================================= */
  
  pile9v: {
    id: "pile9v", nom: "Pile 9V", emoji: "🔋", categorie: "sources", niveau: "decouverte", difficulte: 1,
    description: "Source d'énergie portable délivrant 9 volts. C'est elle qui alimente tout le circuit.",
    caracteristiques: { tension: "9V", capacite: "500mAh", type: "Alcaline" },
    visuel: { couleur: "#333333", largeur: 100, hauteur: 60, forme: "rectangle" },
    pattes: [{ x: -10, y: 10, nom: "+" }, { x: 10, y: 20, nom: "-" }],
    exemple_usage: "Alimenter une LED, un NE555, un petit moteur",
    precautions: ["Ne pas court-circuiter", "Respecter la polarité"],
    suggestion: "Idéal pour les premiers circuits"
  },
  
  resistance470: {
    id: "resistance470", nom: "Résistance 470Ω", emoji: "🎨", categorie: "passifs", niveau: "decouverte", difficulte: 1,
    description: "Composant qui limite le courant pour protéger les autres composants (comme une LED).",
    caracteristiques: { resistance: "470Ω", tolerance: "5%", puissance: "0.25W", code_couleur: "Jaune - Violet - Marron - Or" },
    visuel: { couleur: "#D4A76A", largeur: 100, hauteur: 30, forme: "ovale" },
    pattes: [{ x: -15, y: 0, nom: "1" }, { x: 15, y: 0, nom: "2" }],
    exemple_usage: "Protéger une LED rouge ou verte",
    precautions: [],
    suggestion: "Valeur classique pour une LED standard"
  },
  
  ledRouge: {
    id: "ledRouge", nom: "LED rouge", emoji: "💡", categorie: "lumieres", niveau: "decouverte", difficulte: 1,
    description: "Diode Électroluminescente : elle s'allume quand le courant la traverse. Attention à la polarité !",
    caracteristiques: { tension: "1.8V", courant: "20mA", couleur: "Rouge", polarite: "Anode (+) et Cathode (-)" },
    visuel: { couleur: "#E63946", largeur: 50, hauteur: 50, forme: "ronde" },
    pattes: [{ x: -10, y: 0, nom: "A (anode)" }, { x: 10, y: 0, nom: "K (cathode)" }],
    exemple_usage: "Voyant lumineux, indicateur d'allumage",
    precautions: ["Toujours avec une résistance", "Respecter la polarité"],
    suggestion: "La LED la plus courante"
  },
  
  interrupteur: {
    id: "interrupteur", nom: "Interrupteur", emoji: "🔘", categorie: "interrupteurs", niveau: "decouverte", difficulte: 1,
    description: "Permet d'ouvrir ou de fermer un circuit. Quand il est fermé, le courant passe.",
    caracteristiques: { type: "SPST (unipolaire)", tension_max: "250V", courant_max: "2A", positions: "ON / OFF" },
    visuel: { couleur: "#555555", largeur: 100, hauteur: 50, forme: "rectangle" },
    pattes: [{ x: -15, y: 0, nom: "1" }, { x: 15, y: 0, nom: "2" }],
    exemple_usage: "Allumer/éteindre une lampe",
    precautions: [],
    suggestion: "Pour comprendre la notion de circuit ouvert/fermé"
  },
  
  boutonPoussoir: {
    id: "boutonPoussoir", nom: "Bouton poussoir", emoji: "🧲", categorie: "interrupteurs", niveau: "decouverte", difficulte: 1,
    description: "Contact momentané : le courant ne passe que lorsqu'on appuie sur le bouton.",
    caracteristiques: { type: "NO (Normalement Ouvert)", tension_max: "12V", courant_max: "50mA" },
    visuel: { couleur: "#777777", largeur: 80, hauteur: 50, forme: "ronde" },
    pattes: [{ x: -15, y: 0, nom: "1" }, { x: 15, y: 0, nom: "2" }],
    exemple_usage: "Sonnerie, commande momentanée",
    precautions: [],
    suggestion: "Différence avec l'interrupteur : il faut maintenir appuyé"
  },
  
  resistance220: {
    id: "resistance220", nom: "Résistance 220Ω", emoji: "🎨", categorie: "passifs", niveau: "decouverte", difficulte: 1,
    description: "Résistance plus faible, utilisée quand on a plusieurs LED ou une tension plus basse.",
    caracteristiques: { resistance: "220Ω", tolerance: "5%", puissance: "0.25W", code_couleur: "Rouge - Rouge - Marron - Or" },
    visuel: { couleur: "#D4A76A", largeur: 100, hauteur: 30, forme: "ovale" },
    pattes: [{ x: -15, y: 0, nom: "1" }, { x: 15, y: 0, nom: "2" }],
    exemple_usage: "Alimenter 2 LED en série, ou une LED bleue",
    precautions: [],
    suggestion: "Pour les circuits avec plusieurs LED"
  },
  
  /* =========================================================
     NIVEAU 2 : EXPLORATION (12 composants)
     ========================================================= */
  
  ledVerte: {
    id: "ledVerte", nom: "LED verte", emoji: "💡", categorie: "lumieres", niveau: "exploration", difficulte: 2,
    description: "LED de couleur verte. Tension légèrement plus élevée que la rouge.",
    caracteristiques: { tension: "2.1V", courant: "20mA", couleur: "Vert" },
    visuel: { couleur: "#22C55E", largeur: 50, hauteur: 50, forme: "ronde" },
    pattes: [{ x: -10, y: 0, nom: "A" }, { x: 10, y: 0, nom: "K" }],
    exemple_usage: "Indicateur, feu tricolore",
    precautions: ["Toujours avec une résistance"],
    suggestion: "Pour varier les couleurs dans les circuits"
  },
  
  ledBleue: {
    id: "ledBleue", nom: "LED bleue", emoji: "💡", categorie: "lumieres", niveau: "exploration", difficulte: 2,
    description: "LED de couleur bleue. Tension plus élevée (3.2V) que les rouges/vertes.",
    caracteristiques: { tension: "3.2V", courant: "20mA", couleur: "Bleu" },
    visuel: { couleur: "#3B82F6", largeur: 50, hauteur: 50, forme: "ronde" },
    pattes: [{ x: -10, y: 0, nom: "A" }, { x: 10, y: 0, nom: "K" }],
    exemple_usage: "Éclairage d'ambiance, indicateur",
    precautions: ["Toujours avec une résistance adaptée"],
    suggestion: "Nécessite une résistance plus faible"
  },
  
  ledJaune: {
    id: "ledJaune", nom: "LED jaune", emoji: "💡", categorie: "lumieres", niveau: "exploration", difficulte: 2,
    description: "LED de couleur jaune. Souvent utilisée pour les clignotants ou feux d'avertissement.",
    caracteristiques: { tension: "2.0V", courant: "20mA", couleur: "Jaune" },
    visuel: { couleur: "#FBBF24", largeur: 50, hauteur: 50, forme: "ronde" },
    pattes: [{ x: -10, y: 0, nom: "A" }, { x: 10, y: 0, nom: "K" }],
    exemple_usage: "Clignotant, feu orange",
    precautions: ["Toujours avec une résistance"],
    suggestion: "Parfaite pour le feu tricolore"
  },
  
  resistance1k: {
    id: "resistance1k", nom: "Résistance 1kΩ", emoji: "🎨", categorie: "passifs", niveau: "exploration", difficulte: 2,
    description: "Résistance de 1 000 ohms. Utilisée pour limiter le courant dans des circuits plus gros.",
    caracteristiques: { resistance: "1000Ω", tolerance: "5%", puissance: "0.25W", code_couleur: "Marron - Noir - Rouge - Or" },
    visuel: { couleur: "#D4A76A", largeur: 100, hauteur: 30, forme: "ovale" },
    pattes: [{ x: -15, y: 0, nom: "1" }, { x: 15, y: 0, nom: "2" }],
    exemple_usage: "Protection de transistor, diviseur de tension",
    precautions: [],
    suggestion: "Valeur passe-partout"
  },
  
  resistance10k: {
    id: "resistance10k", nom: "Résistance 10kΩ", emoji: "🎨", categorie: "passifs", niveau: "exploration", difficulte: 2,
    description: "Résistance de 10 000 ohms. Utilisée pour les capteurs et les polarisations.",
    caracteristiques: { resistance: "10000Ω", tolerance: "5%", puissance: "0.25W", code_couleur: "Marron - Noir - Orange - Or" },
    visuel: { couleur: "#D4A76A", largeur: 100, hauteur: 30, forme: "ovale" },
    pattes: [{ x: -15, y: 0, nom: "1" }, { x: 15, y: 0, nom: "2" }],
    exemple_usage: "Polarisation de transistor, LDR",
    precautions: [],
    suggestion: "Idéale avec les capteurs"
  },
  
  potentiometre: {
    id: "potentiometre", nom: "Potentiomètre", emoji: "🎛️", categorie: "passifs", niveau: "exploration", difficulte: 2,
    description: "Résistance variable. On peut tourner un bouton pour changer sa valeur (0 à 10kΩ).",
    caracteristiques: { valeur: "0 à 10kΩ", type: "Linéaire" },
    visuel: { couleur: "#8899AA", largeur: 80, hauteur: 50, forme: "ronde" },
    pattes: [{ x: -15, y: 0, nom: "1" }, { x: 0, y: -10, nom: "curseur" }, { x: 15, y: 0, nom: "3" }],
    exemple_usage: "Volume, luminosité, vitesse de clignotement",
    precautions: [],
    suggestion: "Pour régler un paramètre en temps réel"
  },
  
  condensateur10uF: {
    id: "condensateur10uF", nom: "Condensateur 10µF", emoji: "🔌", categorie: "passifs", niveau: "exploration", difficulte: 2,
    description: "Composant qui stocke l'énergie électrique. Petit réservoir qui se remplit et se vide.",
    caracteristiques: { capacite: "10µF", tension_max: "25V", type: "Électrolytique" },
    visuel: { couleur: "#0369a1", largeur: 40, hauteur: 60, forme: "ronde" },
    pattes: [{ x: -10, y: 0, nom: "+" }, { x: 10, y: 0, nom: "-" }],
    exemple_usage: "Filtrage, temporisation",
    precautions: ["Respecter la polarité (+/-)"],
    suggestion: "Utilisé avec le NE555"
  },
  
  condensateur100uF: {
    id: "condensateur100uF", nom: "Condensateur 100µF", emoji: "🔌", categorie: "passifs", niveau: "exploration", difficulte: 2,
    description: "Condensateur de plus grande capacité. Stocke plus d'énergie, décharge plus lentement.",
    caracteristiques: { capacite: "100µF", tension_max: "16V", type: "Électrolytique" },
    visuel: { couleur: "#0284c7", largeur: 40, hauteur: 60, forme: "ronde" },
    pattes: [{ x: -10, y: 0, nom: "+" }, { x: 10, y: 0, nom: "-" }],
    exemple_usage: "Alimentation lissée, temporisation longue",
    precautions: ["Respecter la polarité"],
    suggestion: "Pour des temporisations plus longues"
  },
  
  diode1n4148: {
    id: "diode1n4148", nom: "Diode 1N4148", emoji: "➡️", categorie: "semi_conducteurs", niveau: "exploration", difficulte: 2,
    description: "Petite diode de signal. Laisse passer le courant dans un seul sens.",
    caracteristiques: { tension_directe: "0.7V", courant_max: "200mA", type: "Signal" },
    visuel: { couleur: "#111111", largeur: 60, hauteur: 20, forme: "rectangle" },
    pattes: [{ x: -10, y: 0, nom: "A" }, { x: 10, y: 0, nom: "K" }],
    exemple_usage: "Protection, redressement de signal",
    precautions: ["Respecter la polarité"],
    suggestion: "La plus courante des petites diodes"
  },
  
  diode1n4007: {
    id: "diode1n4007", nom: "Diode 1N4007", emoji: "➡️", categorie: "semi_conducteurs", niveau: "exploration", difficulte: 2,
    description: "Diode de redressement. Plus grosse, supporte plus de courant.",
    caracteristiques: { tension_directe: "0.7V", courant_max: "1A", type: "Redresseur" },
    visuel: { couleur: "#222222", largeur: 60, hauteur: 20, forme: "rectangle" },
    pattes: [{ x: -10, y: 0, nom: "A" }, { x: 10, y: 0, nom: "K" }],
    exemple_usage: "Protection d'alimentation, redressement secteur",
    precautions: ["Respecter la polarité"],
    suggestion: "Pour les circuits plus puissants"
  },
  
  ne555: {
    id: "ne555", nom: "NE555", emoji: "⚡", categorie: "semi_conducteurs", niveau: "exploration", difficulte: 2,
    description: "Puce électronique polyvalente : minuterie, oscillateur, clignotant. 8 pattes.",
    caracteristiques: { type: "DIP-8", tension: "4.5V à 16V", fonction: "Minuteur / Oscillateur" },
    visuel: { couleur: "#222222", largeur: 80, hauteur: 100, forme: "rectangle" },
    pattes: [
      { x: -10, y: 20, nom: "1 (GND)" },
      { x: -10, y: 40, nom: "2 (TRIG)" },
      { x: -10, y: 60, nom: "3 (OUT)" },
      { x: -10, y: 80, nom: "4 (RESET)" },
      { x: 90, y: 20, nom: "8 (VCC)" },
      { x: 90, y: 40, nom: "7 (DISCH)" },
      { x: 90, y: 60, nom: "6 (THRESH)" },
      { x: 90, y: 80, nom: "5 (CTRL)" }
    ],
    exemple_usage: "Clignotant, minuterie, générateur",
    precautions: ["Respecter le brochage"],
    suggestion: "Composant magique de l'électronique"
  },
  
  cd4017: {
    id: "cd4017", nom: "CD4017", emoji: "🔢", categorie: "semi_conducteurs", niveau: "exploration", difficulte: 2,
    description: "Compteur décimal : à chaque impulsion, il active une sortie différente (0 à 9). 16 pattes.",
    caracteristiques: { type: "DIP-16", tension: "3V à 15V", fonction: "Compteur décimal" },
    visuel: { couleur: "#1e293b", largeur: 80, hauteur: 100, forme: "rectangle" },
    pattes: [
      { x: -10, y: 20, nom: "Horloge" },
      { x: -10, y: 40, nom: "Reset" },
      { x: -10, y: 60, nom: "VCC" },
      { x: -10, y: 80, nom: "GND" },
      { x: 90, y: 20, nom: "S0" },
      { x: 90, y: 40, nom: "S1" },
      { x: 90, y: 60, nom: "S2" },
      { x: 90, y: 80, nom: "S3" }
    ],
    exemple_usage: "Chenillard, séquenceur, feu tricolore",
    precautions: ["Respecter le brochage"],
    suggestion: "Pour créer des séquences lumineuses"
  }
  
  /* =========================================================
     NIVEAU 3 : MAÎTRISE (20 composants)
     À ajouter en Session 3C
     ========================================================= */
  
  /* =========================================================
     NIVEAU 4 : EXPERT (6 composants)
     À ajouter en Session 3D
     ========================================================= */
  
};

/* =========================================================
   FONCTIONS DE FILTRAGE
   ========================================================= */
function getComposantsParNiveau(niveau) {
  var resultat = [];
  for (var id in COMPOSANTS) {
    if (COMPOSANTS[id].niveau === niveau) {
      resultat.push(COMPOSANTS[id]);
    }
  }
  return resultat;
}

function getComposantsJusquaNiveau(niveauMax) {
  var ordre = ["decouverte", "exploration", "maitrise", "expert"];
  var indexMax = ordre.indexOf(niveauMax);
  if (indexMax === -1) return [];
  var resultat = [];
  for (var id in COMPOSANTS) {
    var indexComposant = ordre.indexOf(COMPOSANTS[id].niveau);
    if (indexComposant !== -1 && indexComposant <= indexMax) {
      resultat.push(COMPOSANTS[id]);
    }
  }
  return resultat;
}

function getComposantsParCategorie(categorie) {
  var resultat = [];
  for (var id in COMPOSANTS) {
    if (COMPOSANTS[id].categorie === categorie) {
      resultat.push(COMPOSANTS[id]);
    }
  }
  return resultat;
}

function rechercherComposants(terme) {
  var termeLower = terme.toLowerCase();
  var resultat = [];
  for (var id in COMPOSANTS) {
    var c = COMPOSANTS[id];
    if (c.nom.toLowerCase().indexOf(termeLower) !== -1 ||
        c.description.toLowerCase().indexOf(termeLower) !== -1 ||
        c.categorie.toLowerCase().indexOf(termeLower) !== -1) {
      resultat.push(c);
    }
  }
  return resultat;
}

function getCategories() {
  var categories = {};
  for (var id in COMPOSANTS) {
    categories[COMPOSANTS[id].categorie] = true;
  }
  return Object.keys(categories);
}

function getComposant(id) {
  return COMPOSANTS[id] || null;
}

var NIVEAUX = {
  decouverte: { nom: "Découverte", emoji: "🟢", age: "8-10 ans", couleur: "#22c55e" },
  exploration: { nom: "Exploration", emoji: "🟡", age: "10-13 ans", couleur: "#eab308" },
  maitrise: { nom: "Maîtrise", emoji: "🟠", age: "13-18 ans", couleur: "#f97316" },
  expert: { nom: "Expert", emoji: "🔴", age: "18+ ans", couleur: "#ef4444" }
};

function getNiveau(id) { return NIVEAUX[id] || null; }
function getListeNiveaux() { return ["decouverte", "exploration", "maitrise", "expert"]; }

function compterComposantsParNiveau() {
  var compteur = { decouverte: 0, exploration: 0, maitrise: 0, expert: 0 };
  for (var id in COMPOSANTS) {
    var niveau = COMPOSANTS[id].niveau;
    if (compteur[niveau] !== undefined) compteur[niveau]++;
  }
  return compteur;
}