const whiteUnicorn = document.getElementById("W-unicorn");
const blackUnicorn = document.getElementById("B-unicorn");
const goldUnicorn = document.getElementById("G-unicorn");

whiteUnicorn.addEventListener("mouseenter", function() {
    whiteUnicorn.src = "Images/Unicorn Gundam Destroy Mode.jpg.webp";
});

whiteUnicorn.addEventListener("mouseleave", function() {
    whiteUnicorn.src = "Images/Unicorn Gundam Unicorn Mode.jpg.webp";
});


blackUnicorn.addEventListener("mouseenter", function() {
    blackUnicorn.src = "Images/Banshee Destroy Mode.jpg.webp";
});

blackUnicorn.addEventListener("mouseleave", function() {
    blackUnicorn.src = "Images/Banshee unicorn Mode.jpg.webp";
});


goldUnicorn.addEventListener("mouseenter", function() {
    goldUnicorn.src = "Images/Phenex Destroy Mode.jpg.webp";
});

goldUnicorn.addEventListener("mouseleave", function() {
    goldUnicorn.src = "Images/Phenex Unicorn Mode.jpg.webp";
});