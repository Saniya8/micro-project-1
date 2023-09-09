const formTitle = document.getElementById("title-above-form");
const thankyou = document.getElementById("thank-you");
const formttoFill = document.getElementById("form");

formttoFill.addEventListener("submit", (e) => {
    e.preventDefault();
    formTitle.style.display = "none";
    thankyou.style.display = "block";
    formttoFill.style.display = "none";
});
