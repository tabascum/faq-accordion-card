const question = document.querySelectorAll("#faq-question");
let i;

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    this.classList.add("active");

    let answer = this.nextElementSibling;
    let arrow = this.querySelectorAll("#arrow")[0];

    if (answer.style.display === "block") {
      answer.style.display = "none";
      arrow.classList.remove("arrow-rotate");
    } else {
      answer.style.display = "block";
      arrow.classList.add("arrow-rotate");
    }
  });

  const allQuestion = document.querySelectorAll("#faq-question");
  const allArrow = document.querySelectorAll("#arrow");
}
