const question = document.querySelectorAll(".faq-question");
let i;

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    let answer = this.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
      this.classList.remove("active");
    } else {
      answer.style.display = "block";
      answer.style;
      this.classList.add("active");
    }
  });
}
