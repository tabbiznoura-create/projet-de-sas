/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day06/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

 function condidats(){
    const tableau = [
    {nom : "ali", score : 200 },
    {nom : "sara", score : 300},
    {nom : "fatima zahrae", score : 900}
    ]
if (tableau[0].score > tableau[1].score && tableau[0].score > tableau[2].score){
    return tableau[0].nom
}else if (tableau[1].score > tableau[0].score && tableau[1].score > tableau[2].score){
    return tableau[1].nom
} else if(tableau[2].score > tableau[0].score && tableau[2].score > tableau[1].score){
    return tableau[2].nom
    }
}
console.log(condidats())

