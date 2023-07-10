const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    activeRemoval();

    question.classList.add("active");

    displayAnswer(question);
  });
});

function displayAnswer(question) {
  const answer = question.nextElementSibling;
  answer.classList.remove("hidden");
}

function activeRemoval() {
  const selectedQuestion = document.querySelector(".faq-question.active");
  if (selectedQuestion) {
    selectedQuestion.classList.remove("active");
    const answer = selectedQuestion.nextElementSibling;
    answer.classList.add("hidden");
  }
}
