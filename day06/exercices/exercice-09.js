/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day06/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function condidats(){
    const tableau = [
    {nom : "ali", score : 8 },
    {nom : "sara", score : 10},
    {nom : "fatima zahrae", score : 90}
    ] 
    let tableau2 = []
if (tableau[0].score >= 10){
    tableau2.push(tableau[0].nom)
}
if (tableau[1].score >= 10){
    tableau2.push(tableau[1].nom)
}if(tableau[2].score >= 10){
    tableau2.push(tableau[2].nom)
    }
    return tableau2
}
console.log(condidats())