// Tableaux pour stocker les participants et leurs rôles
let participants = [];

// Fonction pour ajouter un participant
document
  .getElementById("add-participant")
  .addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const role = document.getElementById("role").value;

    if (name && role) {
      participants.push({ name, role });
      displayParticipants();
      document.getElementById("name").value = ""; // Réinitialiser le champ du nom
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  });

// Fonction pour afficher les participants dans la liste
function displayParticipants() {
  const list = document.getElementById("participant-list");
  list.innerHTML = ""; // Réinitialiser la liste

  participants.forEach(function (participant) {
    const li = document.createElement("li");
    li.textContent = `${participant.name} - ${getRoleName(participant.role)}`;
    list.appendChild(li);
  });
}

// Fonction pour obtenir le nom du rôle à partir de la lettre
function getRoleName(role) {
  const roles = {
    A: "Écoute",
    B: "Communication",
    C: "Observation",
    D: "Prise de décision",
    E: "Créativité",
  };
  return roles[role] || "Inconnu";
}

// Fonction pour générer les groupes
document
  .getElementById("generate-groups")
  .addEventListener("click", function () {
    if (participants.length < 4) {
      alert("Il faut au moins 4 participants pour générer des groupes.");
      return;
    }

    if (participants.length % 2 !== 0) {
      alert(
        "Le nombre de participants doit être pair pour générer les groupes."
      );
      return;
    }

    const groups = createTwoGroups(participants);
    displayGroups(groups);
  });

// Fonction pour créer deux groupes équilibrés
function createTwoGroups(participants) {
  // Mélanger les participants pour garantir des groupes équilibrés
  const shuffledParticipants = shuffleArray(participants);

  // Diviser les participants en deux groupes
  const midIndex = Math.floor(shuffledParticipants.length / 2);
  const group1 = shuffledParticipants.slice(0, midIndex);
  const group2 = shuffledParticipants.slice(midIndex);

  return [group1, group2];
}

// Fonction pour mélanger un tableau (pour une distribution aléatoire)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Échanger les éléments
  }
  return array;
}

// Fonction pour afficher les groupes générés
function displayGroups(groups) {
  const groupsContainer = document.getElementById("groups");
  groupsContainer.innerHTML = ""; // Réinitialiser l'affichage des groupes

  groups.forEach(function (group, index) {
    const groupDiv = document.createElement("div");
    const groupTitle = document.createElement("h3");
    groupTitle.textContent = `Groupe ${index + 1}`;
    groupDiv.appendChild(groupTitle);

    const list = document.createElement("ul");
    group.forEach(function (participant) {
      const li = document.createElement("li");
      li.textContent = `${participant.name} - ${getRoleName(participant.role)}`;
      list.appendChild(li);
    });

    groupDiv.appendChild(list);
    groupsContainer.appendChild(groupDiv);
  });
}
function goToHome() {
  // Redirige vers la page d'accueil
  window.location.href = "principale.html"; // Remplacez par le chemin de votre page d'accueil
}

function goToTeamPage() {
  // Redirige vers la page de création des équipes
  window.location.href = "index.html"; // Remplacez par le chemin de votre page de création d'équipes
}
