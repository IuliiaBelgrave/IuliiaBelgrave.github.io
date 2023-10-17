document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("changeBgButton");

    const colors = ["#f39f9f", "#89e589", "#8989e5", "#de90de"];

    function changeBackgroundColor() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    }

    button.addEventListener("click", changeBackgroundColor);
});
