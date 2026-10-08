const whiteUnicorn = document.getElementById("W-unicorn");

const images = [
    "Images/Unicorn Gundam Destroy Mode.jpg.webp",
    "Images/Unicorn Gundam Unicorn Mode.jpg.webp",
    "Images/deactivatedunicorn.jpg.webp",
    "Images/awakenedunicorn.jpg.webp"
];

whiteUnicorn.addEventListener("mouseenter", function() {
    const randomIndex = Math.floor(Math.random() * images.length);
    whiteUnicorn.src = images[randomIndex];
}); //AI-assisted

whiteUnicorn.addEventListener("mouseleave", function() {
    whiteUnicorn.src = "Images/Unicorn Gundam Unicorn Mode.jpg.webp";
}); //AI-assisted
