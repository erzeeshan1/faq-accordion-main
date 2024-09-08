const buttons = document.querySelectorAll(".card-item-btn");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    this.classList.toggle("active");
    const description = this.nextElementSibling;
    const plusIcon = this.querySelector(".plus-icon");
    const minusIcon = this.querySelector(".minus-icon");

    if (description.style.maxHeight) {
      description.style.maxHeight = null;
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      description.style.maxHeight = description.scrollHeight + "px";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }
  });
});
