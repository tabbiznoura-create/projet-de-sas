const apprenants = require("./data");
// import {apprenant} from "./data.js"

function trouverParId(id) {
  return apprenants.find((apprenant) => apprenant.id === id);}



export function normaliserNom(nomComplet){
   if(!nomComplet || typeof nomComplet !== "string"){
    return "Ressayer !"
   }
     nomComplet = nomComplet.trim()
   
   return nomComplet.charAt(0).toUpperCase() +
         nomComplet.slice(1).toLowerCase()
  }
      
// Nettoyer et uniformiser un nom.

export function validerResultat(resultat){
   let estValide = 
    typeof resultat.challengeTermine === "boolean" &&
    resultat.exercicesTermines <= resultat.totalExercices &&
    resultat.exercicesTermines >= 0 &&
    resultat.totalExercices === 20;

  return {
    valide: estValide,
    message: estValide ? "Résultat valide" : "Non valide, merci de réessayer"
  };
}
// Vérifier les valeurs d’un résultat journalier.


function ajouterApprenant(nomComplet, ville){
const id = apprenants.length > 0 ? Math.max(
  ...apprenants.map(apprenant.id)
) + 1 : 1

const apprenant = {
  id, nomComplet, ville, resultats
}
apprenants.push(apprenant)

return apprenant
}
// Ajouter un apprenant en contrôlant les doublons d’identifiant.

function enregistrerResultat(apprenant, nouveauResultat) {
  let index = apprenant.resultats.findIndex(x => x.jour === nouveauResultat.jour);

  if (index !== -1) {
    apprenant.resultats[index] = nouveauResultat;
  } else {
    apprenant.resultats.push(nouveauResultat);
  }
  return apprenant;
}
// Ajouter ou mettre à jour une journée.

function rechercherApprenant(recherche) {
  return apprenants.filter(apprenant =>
    apprenant.nomComplet
      .toLowerCase()
      .startsWith(recherche.toLowerCase())
  );
}
// Retrouver un profil par identifiant ou par nom. 
function calculerProgression(exercicesTermines, exercicesTotal){
  let progression = (exercicesTermines / (exercicesTotal * 7)) * 100
    return progression
} 
// Produire les indicateurs individuels.
function filtrerParNiveau(){

}
// Sélectionner les profils d’un niveau donné.
function trierParProgression(){

}
// Classer les profils par progression décroissante.
function afficherTableauDeBord(){

}
// Présenter les indicateurs du groupe et les listes










module.exports = {
  normaliserNom,
  validerResultat,
  ajouterApprenant,
  enregistrerResultat,
  rechercherApprenant,
  calculerProgression,
  filtrerParNiveau,
  trierParProgression,
  afficherTableauDeBord
}
