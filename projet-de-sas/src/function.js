const apprenants = require("./data");
function trouverParId(id) {
  return apprenants.find((apprenant) => apprenant.id === id);
}
module.exports = {
  trouverParId
}



function normaliserNom(nom){

}
// Nettoyer et uniformiser un nom.
function validerResultat(){

}
// Vérifier les valeurs d’un résultat journalier.
function ajouterApprenant(nomComplet, ville, resultats){
const apprenant = { newId: id++, nomComplet, ville, resultats}
apprenant.push(apprenant)
return apprenant
}
// Ajouter un apprenant en contrôlant les doublons d’identifiant.
function enregistrerResultat(){

}
// Ajouter ou mettre à jour une journée.
function rechercherApprenant(){

}
// Retrouver un profil par identifiant ou par nom.
function calculerProgression(){

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