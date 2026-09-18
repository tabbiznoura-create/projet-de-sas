

const prompt = require("prompt-sync")()
const apprenants = require("./data");
// import {apprenant} from "./data.js"








function normaliserNom(nomComplet) {
  if (!nomComplet || typeof nomComplet !== "string") {
    return "Ressayer !"
  }
  nomComplet = nomComplet.trim()

  return nomComplet.charAt(0).toUpperCase() +
    nomComplet.slice(1).toLowerCase()
}

// Nettoyer et uniformiser un nom.







function ajouterApprenant() {

  let nomComplet = prompt("Entrer votre nom: ")
  let ville = prompt("Entrer votre ville: ")

  const id = apprenants.length > 0 ? Math.max(
    ...apprenants.map(apprenant => apprenant.id)
  ) + 1 : 1

  const apprenant = {
    id, nomComplet: nomComplet,
    ville: ville,
    resultats: []
  }
  apprenants.push(apprenant)

  return apprenant
}
// Ajouter un apprenant en contrôlant les doublons d’identifiant.








function validerResultat(challenge, exercicesTermines, totalExercices) {

  if (typeof challenge === "boolean" &&
    exercicesTermines <= totalExercices &&
    totalExercices === 20 &&
    exercicesTermines >= 0
  ) {
    return "Resultat Valide"
  } else {
    return "Resultat non valide, Merci de ressayer !"
  }

}

// Vérifier les valeurs d’un résultat journalier.










function enregistrerResultat(apprenant, nouveauResultat) {
  let newResultat = validerResultat(
    nouveauResultat.challengeTermine,
    nouveauResultat.exercicesTermines,
    nouveauResultat.totalExercices
  )
  if (newResultat === "Resultat non valide, Merci de ressayer !") {
    return newResultat
  }

  let index = apprenant.resultats.findIndex(x => x.jour === nouveauResultat.jour);


  if (index !== -1) {
    apprenant.resultats[index] = nouveauResultat;
  } else {
    apprenant.resultats.push(nouveauResultat);
  }
  return apprenant;
}
//  Ajouter ou mettre à jour une journée.





function rechercherApprenantParNom() {
  let nom = prompt("Entrer Nom: ")
  return apprenants.filter(apprenant =>
    apprenant.nomComplet
      .toLowerCase()
      .startsWith(nom.toLowerCase())
  )
}
// Retrouver un profil par identifiant ou par nom. 




function rechercherApprenantParId() {
  let id = Number(prompt("Entrer ID: "))
  return apprenants.filter(apprenant =>
    apprenant.id === id
  )

}








function calculerProgression(apprenant) {

  let exercicesTermines = 0

  for (let i = 0; i < apprenant.resultats.length; i++) {
    exercicesTermines = exercicesTermines + apprenant.resultats[i].exercicesTermines
  }
  let nombreJours = apprenant.resultats.length
  let progression = (exercicesTermines / (20 * nombreJours)) * 100
  return progression.toFixed(0) + "%"
}
// Produire les indicateurs individuels.
 








function filtrerParNiveau(progression) {
  //  progression = prompt("Entrer le niveau: ")
  progression = parseInt(progression)
  if (progression >= 0 && progression < 40) {
    return "Faible"
  } else if (progression >= 40 && progression < 70) {
    return "Intermédiare"
  } else if (progression >= 70 && progression <= 100) {
    return "Avancé"
  }
} // Sélectionner les profils d’un niveau donné.









function trierParProgression() {
  let classement = []
  for (let i = 0; i < apprenants.length; i++) {

    let progression = calculerProgression(apprenants[i])

    classement.push(progression)
  }

  classement.sort((a, b) => parseInt(b) - parseInt(a))

  return classement
}
// Classer les profils par progression décroissante.







function afficherTableauDeBord() {

  let tableau = []
  for (let i = 0; i < apprenants.length; i++) {

    let progression = calculerProgression(apprenants[i])
    let niveau = filtrerParNiveau(progression)
    tableau.push({
      id: apprenants[i].id,
      nomComplet: apprenants[i].nomComplet,
      progression: progression,
      niveau: niveau
    })
  }
  console.table(tableau)
}
// Présenter les indicateurs du groupe et les listes









function afficherListeApprenants() {
  let liste = []

  for (let i = 0; i < apprenants.length; i++) {
    liste.push({
      id: apprenants[i].id,
      nomComplet: apprenants[i].nomComplet,
      ville: apprenants[i].ville
    })
  }

  console.table(liste)
}









function TrierLesApprenantsParOrdreAlphabétique() {

  const consultation = [...apprenants]

  consultation.sort((a, b) => {
    if (a.nomComplet < b.nomcomplet) {
      return -1
    }
    if (a.nomComplet > b.nomComplet) {
      return 1
    }
    return 0
  })
  console.log(consultation)
}








function ajouterOuModifierResultat() {

  let id = Number(prompt("Entrer ID : "))
  let jour = Number(prompt("Entrer le jour : "))
  let challengeTermine = prompt("Challenge terminé ? (true/false) ") === "true"
  let exercicesTermines = Number(prompt("Nombre d'exercices terminés : "))
  let totalExercices = Number(prompt("Total des exercices : "))

  let apprenant = apprenants.find(apprenant => apprenant.id === id)

  if (!apprenant) {
    return "Apprenant introuvable"
  }

  let nouveauResultat = {
    jour: jour,
    challengeTermine: challengeTermine,
    exercicesTermines: exercicesTermines,
    totalExercices: totalExercices
  }

  return enregistrerResultat(apprenant, nouveauResultat)
}







module.exports = {
  normaliserNom,
  validerResultat,
  ajouterApprenant,
  enregistrerResultat,
  rechercherApprenantParNom,
  rechercherApprenantParId,
  calculerProgression,
  filtrerParNiveau,
  trierParProgression,
  afficherTableauDeBord,
  afficherListeApprenants,
  TrierLesApprenantsParOrdreAlphabétique,
  ajouterOuModifierResultat
}
