// Lógica para verificar as respostas
const checkAnswersBtn = document.getElementById("checkAnswersBtn");
const resultDiv = document.getElementById("result");
const trueFalseForm = document.getElementById("trueFalseForm");

checkAnswersBtn.addEventListener("click", () => {
  let correctAnswers = 0;

  // Verificar respostas
  if (document.getElementById("q1_true").checked) correctAnswers++;
  if (document.getElementById("q2_false").checked) correctAnswers++;
  if (document.getElementById("q3_true").checked) correctAnswers++;

  // Exibir gabarito com base nas respostas
  resultDiv.classList.remove("hidden");

  // Mostrar o número de respostas corretas
  resultDiv.innerHTML += `<p><strong>Você acertou ${correctAnswers} de 3 respostas.</strong></p>`;
});

// Substituir dentro do clique
document.getElementById("answerKey").style.display = "block";
setTimeout(() => {
  document.getElementById("answerKey").classList.add("show");
}, 50);