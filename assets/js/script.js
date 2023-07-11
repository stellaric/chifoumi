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

//test
// script.js

// script.js

var roundsPlayed = 0;
var playerScore = 0;
var computerScore = 0;

function startNewGame() {
    roundsPlayed = 0;
    playerScore = 0;
    computerScore = 0;
    document.getElementById("round").textContent = roundsPlayed;
    document.getElementById("computer_score").textContent = computerScore;
    document.getElementById("player_score").textContent = playerScore;
    document.getElementById("result").textContent = "";
    document.getElementById("winner").textContent = "";
    document.getElementById("ciseauBtn").disabled = false;
    document.getElementById("pierreBtn").disabled = false;
    document.getElementById("feuilleBtn").disabled = false;
    newSound = document.getElementById("newSound");
    newSound.play();

}

function generateComputerChoice() {
    var choices = ["pierre", "feuille", "ciseau"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function compareChoices(playerChoice, computerChoice) {
    var resultElement = document.getElementById("result");
    var roundElement = document.getElementById("round");
    var computerScoreElement = document.getElementById("computer_score");
    var playerScoreElement = document.getElementById("player_score");

    if (playerChoice === computerChoice) {
        resultElement.textContent = "Égalité !";
    } else if (
        (playerChoice === "pierre" && computerChoice === "ciseau") ||
        (playerChoice === "feuille" && computerChoice === "pierre") ||
        (playerChoice === "ciseau" && computerChoice === "feuille")
    ) {
        resultElement.textContent = "Vous avez gagné !";
        playerScore++;
    } else {
        resultElement.textContent = "L'ordinateur a gagné !";
        computerScore++;

    }

    roundsPlayed++;
    roundElement.textContent = roundsPlayed;
    computerScoreElement.textContent = computerScore;
    playerScoreElement.textContent = playerScore;

    if (roundsPlayed === 3) {
        if (playerScore > computerScore) {
            document.getElementById("winner").textContent = "Vous avez gagné la partie !";
            // Jouer le son de fin de jeu
            var winnerSound = document.getElementById("winnerSound");
            winnerSound.play();
        } else if (playerScore < computerScore) {
            document.getElementById("winner").textContent = "L'ordinateur a gagné la partie !";
            // Jouer le son de défaite
            var loseSound = document.getElementById("loseSound");
            loseSound.play();
        } else {
            document.getElementById("winner").textContent = "La partie est terminée avec une égalité !";
            // Jouer le son de fin de jeu
            var loseSound = document.getElementById("loseSound");
            loseSound.play();
        }


        // Désactiver les boutons après la fin du jeu

        document.getElementById("ciseauBtn").disabled = true;
        document.getElementById("pierreBtn").disabled = true;
        document.getElementById("feuilleBtn").disabled = true;
    }
}

function play(choice) {
    var playerChoiceImage = document.getElementById("player-choice");
    switch (choice) {
        case "pierre":
            playerChoiceImage.src = "../src/img/main/pierre.png";

            break;
        case "feuille":
            playerChoiceImage.src = "../src/img/main/feuille.png";

            break;
        case "ciseau":
            playerChoiceImage.src = "../src/img/main/ciseau.png";

            break;
        default:
            playerChoiceImage.src = "";
            break;
    }

    var computerChoice = generateComputerChoice();
    var computerChoiceImage = document.getElementById("computer-choice");
    switch (computerChoice) {
        case "pierre":
            computerChoiceImage.src = "../src/img/main/pierre.png";
            break;
        case "feuille":
            computerChoiceImage.src = "../src/img/main/feuille.png";
            break;
        case "ciseau":
            computerChoiceImage.src = "../src/img/main/ciseau.png";
            break;
        default:
            computerChoiceImage.src = "";
            break;
    }

    compareChoices(choice, computerChoice);
}

var load;

function loader() {
    load = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    document.getElementsByClassName("footer").style.display = "block";
}