// import PromptSync from "prompt-sync"
const prompt = require("prompt-sync")()
const  apprenants = require("./data")

const { afficherTableauDeBord,
  afficherListeApprenants,
  rechercherApprenantParNom,
  rechercherApprenantParId, 
 normaliserNom,
  validerResultat,
  ajouterApprenant,
  enregistrerResultat,
  calculerProgression,
  filtrerParNiveau,
  trierParProgression,
  TrierLesApprenantsParOrdreAlphabétique,
ajouterOuModifierResultat} = require("./function")








let continuer = true

while (continuer){

console.log("\n===== MENU =====")
console.log("1. Afficher le tableau de bord")
console.log("2. Afficher la liste des apprenants")
console.log("3. Ajouter un apprenant")
console.log("4. Consulter un apprenant par identifiant")
console.log("5. Ajouter ou modifier le résultat d'une journée")
console.log("6. Rechercher un apprenant par nom")
console.log("7. Filtrer les apprenants par niveau")
console.log("8. Trier les apprenants par progression décroissante")
console.log("9. Trier les apprenants par ordre alphabétique")
console.log("0. Quitter")

let choix = prompt("Choisissez une option : ")

  console.log("Tu as choisi :", choix)


switch(choix){

  case"1":

  afficherTableauDeBord()
  break;

  case"2":

  afficherListeApprenants()
  break;

  case "3":
  console.log(ajouterApprenant())
  break



  case"4":

  console.log(rechercherApprenantParId())
  break;

  case "5":
  console.log(ajouterOuModifierResultat())
  break

  case"6":

  console.log(rechercherApprenantParNom())
  break;

case "7":
  filtrerParNiveau()
  break

case "8":
  console.table(trierParProgression())
  break

case "9":

  TrierLesApprenantsParOrdreAlphabétique()
  break

  case"0":

  continuer = false
  break;
  
}}