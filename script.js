// Variables pour les questions et les résultats
const questions = document.querySelectorAll(".question");
const nextButton = document.getElementById("next-button");
const resultsContainer = document.getElementById("results");
let currentQuestionIndex = 0;
let answers = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
};

// Afficher la question suivante
function showNextQuestion() {
  // Cacher la question actuelle
  questions[currentQuestionIndex].classList.remove("active");

  // Incrémenter l'index de la question
  currentQuestionIndex++;

  // Si toutes les questions ont été répondues, afficher les résultats
  if (currentQuestionIndex === questions.length) {
    showResults();
    return;
  }

  // Afficher la nouvelle question
  questions[currentQuestionIndex].classList.add("active");
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
        You pay attention to details and notice small things. <br> <br> You