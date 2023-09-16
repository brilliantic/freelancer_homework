const link = document.getElementById("#myLink");

// Додаємо подію для відображення tooltip при наведенні на посилання
link.addEventListener("mouseover", () => {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");

    const image = document.createElement("img");
    image.src = "your-image.jpg";
    image.alt = "Зображення";

    const text = document.createTextNode("Текст у tooltip");

    tooltip.appendChild(image);
    tooltip.appendChild(text);

    link.appendChild(tooltip);
    
});

// Видаляємо tooltip при знятті курсора
link.addEventListener("mouseout", () => {
    const tooltip = link.querySelector(".tooltip");
    if (tooltip) {
        link.removeChild(tooltip);
    }
});

