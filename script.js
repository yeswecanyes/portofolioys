document.addEventListener("DOMContentLoaded", function() {

    // Fonction pour ouvrir la modale avec l'image en grand
    window.openModal = function(imageSrc) {
        const modal = document.getElementById("imageModal");
        const modalImage = document.getElementById("modalImage");
        modal.style.display = "flex"; // Affiche la modale
        modalImage.src = imageSrc; // Change la source de l'image dans la modale
    };

    // Fonction pour fermer la modale
    window.closeModal = function() {
        const modal = document.getElementById("imageModal");
        modal.style.display = "none"; // Cache la modale
    };

    // Fonction pour le défilement fluide des sections
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 80,  // Décalage pour tenir compte du menu fixe
                behavior: "smooth"
            });
        });
    });
});


