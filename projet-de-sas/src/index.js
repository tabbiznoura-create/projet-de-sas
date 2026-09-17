// import PromptSync from "prompt-sync"
const prompt = require("prompt-sync")()




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

  if (choix === "0") {
    continuer = false

}
}