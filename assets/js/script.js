// formulaire regex

function validateForm(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Récupération des valeurs des champs du formulaire
    var nom = document.getElementById("nom").value.trim();
    var prenom = document.getElementById("prenom").value.trim();
    var email = document.getElementById("email").value.trim();
    var sujet = document.getElementById("sujet").value.trim();
    var message = document.getElementById("message").value.trim();

    // Expression régulière pour vérifier le format de l'email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Vérification des champs du formulaire avec les expressions régulières
    if (nom === "" || prenom === "" || email === "" || sujet === "" || message === "") {
        alert("Veuillez remplir tous les champs du formulaire.");
    } else if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
    } else {
        // Le formulaire est valide, afficher une alerte pour dire que le message a été envoyé
        alert("Votre message a été envoyé !");
        // Réinitialisation du formulaire
        document.getElementById("contactForm").reset();
    }
}