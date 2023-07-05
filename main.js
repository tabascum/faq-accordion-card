const question = document.querySelectorAll("#faq-question p");
const arrows = document.querySelectorAll("#arrow");
const answers = document.querySelectorAll("#faq-answer");

question.entries();

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

arrows.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("click");
    item.setAttribute("transform", "rotate(-180deg)");
  });
});
