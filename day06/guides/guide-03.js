/**
 * JOUR 06 — GUIDE 03
 * Parcourir un Objet
 *
 * OBJECTIF
 * Affichez toutes les clés et leurs valeurs de l'objet voiture sous la forme "clé : valeur".
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let voiture = {marque: "Toyota" , modèle : "Corolla", année : 2020}
for (let cle in voiture) {
      console.log(cle + " : " + voiture[cle]);
  }
