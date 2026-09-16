/**
 * JOUR 06 — GUIDE 02
 * L'accès dynamique
 *
 * OBJECTIF
 * On vous donne une variable let cleRecherche = "modele";. Comment utiliser cette variable pour afficher la valeur correspondante 
 * dans l'objet voiture ?
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let  cleRecherche = "modèle"
let voiture = {marque: "Toyota" ,
     modèle : "Corolla",
      année : 2020
    }
    console.log(voiture[cleRecherche])
