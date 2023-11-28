const purpleButton = document.getElementById("purpleButton");
const borderButton = document.getElementById("borderButton");

borderButton.addEventListener("mouseover", () => {
    borderButton.classList.add("active");
    purpleButton.classList.remove("active");
});

borderButton.addEventListener("mouseout", () => {
    borderButton.classList.remove("active");
    purpleButton.classList.add("active");
});
