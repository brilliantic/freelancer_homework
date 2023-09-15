// Отримати кнопку "Навчання" і випадаючий список
const dropdownTrigger = document.getElementById("dropdown-trigger");
const dropdownContent = dropdownTrigger.querySelector(".dropdown-content");

// Додати обробник подій для кнопки "Навчання"
dropdownTrigger.addEventListener("click", function () {
    dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
});
