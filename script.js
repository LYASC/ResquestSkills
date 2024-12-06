// Variables pour les questions et les résultats
const questions = document.querySelectorAll(".question");
const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const resultsButton = document.getElementById("submit-button");
const resultsContainer = document.getElementById("results");
let currentQuestionIndex = 0;

// Stocker les réponses
let answers = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
};

// Afficher la question actuelle
function showCurrentQuestion() {
  // Masquer toutes les questions
  questions.forEach((question, index) => {
    question.classList.remove("active");
    if (index === currentQuestionIndex) {
      question.classList.add("active");
    }
  });

  // Mettre à jour la visibilité des boutons
  updateButtonVisibility();
}

// Calculer et afficher les résultats
function showResults() {
  let maxAnswer = Object.keys(answers).reduce((a, b) =>
    answers[a] > answers[b] ? a : b
  );
  let resultText = "";

  switch (maxAnswer) {
    case "A":
      resultText = `Majority of A: Listening<br> <br>
      You are attentive and empathetic.<br> <br> Your active listening allows you to deeply understand others and contribute to effective communication.`;
      break;
    case "B":
      resultText = `Majority of B: Communication<br> <br>
        You explain things clearly and help others understand. <br> <br> Your ability to talk well is a strong point.`;
      break;
    case "C":
      resultText = `Majority of C : Observation<br><br>
        You pay attention to details and notice small things. <br> <br> Your ability to understand situations helps teams work better.`;
      break;
    case "D":
      resultText = `Majority of D : Decision-Making<br><br>
        You can quickly look at options and make good choices. <br> <br> Your confidence in action is important in difficult situations.`;
      break;
    case "E":
      resultText =
        "Majority of E : Creativity <br> <br> You have new ideas and think outside the box. <br> <br> Your creativity inspires others and brings fresh solutions.";
  }
  // Afficher les résultats
  resultsContainer.innerHTML = resultText;
  nextButton.style.display = "none";
}

// Mettre à jour la visibilité des boutons
function updateButtonVisibility() {
  previousButton.style.display =
    currentQuestionIndex === 0 ? "none" : "inline-block";
  nextButton.style.display =
    currentQuestionIndex === questions.length - 1 ? "none" : "inline-block";
  resultsButton.style.display =
    currentQuestionIndex === questions.length - 1 ? "inline-block" : "none";
}

// Gestionnaire d'événement pour le bouton "Suivant"
nextButton.addEventListener("click", () => {
  const selectedAnswer = document.querySelector(
    `input[name="q${currentQuestionIndex + 1}"]:checked`
  );

  if (selectedAnswer) {
    // Enregistrer la réponse
    answers[selectedAnswer.value]++;

    // Passer à la question suivante
    currentQuestionIndex++;
    showCurrentQuestion();
  } else {
    alert("Veuillez répondre à cette question avant de passer à la suivante.");
  }
});

// Gestionnaire d'événement pour le bouton "Précédent"
previousButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showCurrentQuestion();
  }
});

// Gestionnaire d'événement pour le bouton "Voir les résultats"
resultsButton.addEventListener("click", () => {
  showResults();
});

// Initialisation
showCurrentQuestion();

function goToHome() {
  // Redirige vers la page d'accueil
  window.location.href = "principale.html"; // Remplacez par le chemin de votre page d'accueil
}

function goToTeamPage() {
  // Redirige vers la page de création des équipes
  window.location.href = "groupe.html"; // Remplacez par le chemin de votre page de création d'équipes
}
