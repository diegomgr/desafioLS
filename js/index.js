document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("buttonText").addEventListener("click", function () {
        const text = document.getElementById("inputText").value;
        localStorage.setItem("guardar", text);
    });
});

