window.addEventListener('load', function() {
  setTimeout(function() {
    try {
      if (typeof CATALOGUE !== 'undefined' && !CATALOGUE.microcontroleur) {
        CATALOGUE.microcontroleur = {
          id: 'microcontroleur', nom: 'Microcontrôleur (FC)', icone: '🧠',
          couleur: '#0f172a', largeur: 120, hauteur: 120,
          pattes: [
            {x:-10,y:15},{x:-10,y:35},{x:-10,y:55},{x:-10,y:75},{x:-10,y:95},{x:-10,y:115},
            {x:130,y:15},{x:130,y:35},{x:130,y:55},{x:130,y:75},{x:130,y:95},{x:130,y:115}
          ],
          valeurs: null
        };
      }
      
      function choix(types, defaut) {
        for (var i = 0; i < types.length; i++) { if (CATALOGUE[types[i]]) return types[i]; }
        return defaut;
      }
      var tMoteur = choix(['moteurDc','moteur','servomoteur'], 'led');
      var tCapteur = choix(['ldr','capteurIr'], 'resistance');
      var tMCU = choix(['microcontroleur','ne555'], 'led');
      var tBuzzer = choix(['buzzer','hautParleur'], 'led');
      var tBouton = choix(['bouton','boutonPoussoir'], 'interrupteur');
      
      if (typeof BLOCS !== 'undefined' && !BLOCS.droneFC) {
        BLOCS.droneFC = {
          id: 'droneFC', nom: '🚁 Carte Contrôle Vol Drone', icone: '🚁',
          desc: 'MCU + capteurs + 4 moteurs + buzzer',
          fn: function(cx, cy, avecCablage) {
            var pile = creerComposantBloc('pile', cx - 420, cy + 100, null);
            var mcu = creerComposantBloc(tMCU, cx - 150, cy - 60, null);
            var ldr = creerComposantBloc(tCapteur, cx - 420, cy - 100, null);
            var arm = creerComposantBloc('interrupteur', cx - 420, cy + 30, null);
            var btn = creerComposantBloc(tBouton, cx - 420, cy - 30, null);
            var led = creerComposantBloc('led', cx + 80, cy - 180, 'vert');
            var res = creerComposantBloc('resistance', cx + 80, cy - 130, '470');
            var m1 = creerComposantBloc(tMoteur, cx + 100, cy - 60, null);
            var m2 = creerComposantBloc(tMoteur, cx + 300, cy - 60, null);
            var m3 = creerComposantBloc(tMoteur, cx + 100, cy + 110, null);
            var m4 = creerComposantBloc(tMoteur, cx + 300, cy + 110, null);
            var buzz = creerComposantBloc(tBuzzer, cx + 80, cy + 20, null);
            
            if (avecCablage) {
              ajouterFilBloc(pile.id, 0, mcu.id, 0); ajouterFilBloc(mcu.id, 1, pile.id, 1);
              ajouterFilBloc(ldr.id, 0, pile.id, 0); ajouterFilBloc(ldr.id, 1, mcu.id, 2);
              ajouterFilBloc(arm.id, 0, pile.id, 0); ajouterFilBloc(arm.id, 1, mcu.id, 4);
              ajouterFilBloc(btn.id, 0, pile.id, 0); ajouterFilBloc(btn.id, 1, mcu.id, 3);
              ajouterFilBloc(mcu.id, 5, res.id, 0); ajouterFilBloc(res.id, 1, led.id, 0);
              ajouterFilBloc(led.id, 1, pile.id, 1);
              ajouterFilBloc(mcu.id, 6, m1.id, 0); ajouterFilBloc(m1.id, 1, pile.id, 1);
              ajouterFilBloc(mcu.id, 7, m2.id, 0); ajouterFilBloc(m2.id, 1, pile.id, 1);
              ajouterFilBloc(mcu.id, 8, m3.id, 0); ajouterFilBloc(m3.id, 1, pile.id, 1);
              ajouterFilBloc(mcu.id, 9, m4.id, 0); ajouterFilBloc(m4.id, 1, pile.id, 1);
              ajouterFilBloc(mcu.id, 10, buzz.id, 0); ajouterFilBloc(buzz.id, 1, pile.id, 1);
            }
          }
        };
      }
      if (typeof afficherBlocs === 'function') afficherBlocs();
      console.log('✅ Bloc Drone FC chargé avec succès');
    } catch(e) {
      console.error('❌ Erreur Drone FC:', e.message);
    }
  }, 1000);
});
