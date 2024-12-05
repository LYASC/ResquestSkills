const participants = [];

// Ajouter un participant
document.getElementById("add-participant").addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const role = document.getElementById("role").value;

    if (!name) {
        alert("Veuillez entrer un nom !");
        return;
    }

    participants.push({ name, role });
    updateParticipantList();
    document.getElementById("name").value = ""; // Réinitialiser le champ nom
});

// Mettre à jour la liste des participants affichée
function updateParticipantList() {
    const list = document.getElementById("participant-list");
    list.innerHTML = "";
    participants.forEach((participant, index) => {
        const li = document.createElement("li");
        li.textContent = `${participant.name} (${participant.role})`;
        list.appendChild(li);
    });
}

// Générer les groupes de manière aléatoire
document.getElementById("generate-groups").addEventListener("click", () => {
    if (participants.length < 2) {
        alert("Ajoutez au moins 2 participants pour créer des groupes !");
        return;
    }

    // Mélanger les participants de manière aléatoire
    const shuffled = participants.sort(() => Math.random() - 0.5);

    // Créer des groupes
    const groups = [];
    for (let i = 0; i < shuffled.length; i += 2) {
        const group = shuffled.slice(i, i + 2);
        groups.push(group);
    }

    // Afficher les groupes
    displayGroups(groups);
});

// Afficher les groupes générés
function displayGroups(groups) {
    const groupsContainer = document.getElementById("groups");
    groupsContainer.innerHTML = ""; // Réinitialiser l'affichage

    groups.forEach((group, index) => {
        const groupDiv = document.createElement("div");
        groupDiv.innerHTML = `<h3>Groupe ${index + 1}</h3>`;
        groupDiv.innerHTML += group
            .map(member => `<p>${member.name} (${member.role})</p>`)
            .join("");
        groupDiv.style.marginBottom = "20px";
        groupDiv.style.padding = "10px";
        groupDiv.style.border = "1px solid #ddd";
        groupDiv.style.borderRadius = "5px";
        groupDiv.style.backgroundColor = "#f9f9f9";
        groupsContainer.appendChild(groupDiv);
    });
}
