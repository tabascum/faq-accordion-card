const question = document.querySelectorAll("#faq-question p");
const arrows = document.querySelectorAll("#arrow");
const answers = document.querySelectorAll("#faq-answer");

question.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.parentNode.classList.contains("active")) {
      item.parentNode.classList.toggle("active");
    } else {
      item.parentNode.classList.remove("active");
      item.parentNode.classList.add("active");
      console.log(item);
    }
  });
});
