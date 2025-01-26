document.addEventListener("DOMContentLoaded", () => {
    const dynamicText = document.querySelector(".dynamic-text");
    const texts = ["Software Developer", "Graphic Designer"];
    let index = 0;

    setInterval(() => {
      dynamicText.style.opacity = 0;
      setTimeout(() => {
        dynamicText.textContent = texts[index];
        dynamicText.style.opacity = 1;
        index = (index + 1) % texts.length;
      }, 500);
    }, 2000);
  });