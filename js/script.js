const revealButtons = document.querySelectorAll(".reveal-button");

revealButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Find the flower card containing this button

        const flowerCard = button.closest(".flower-card");


        // Check if the card is already active

        const isActive = flowerCard.classList.contains("active");


        // Close all flower cards

        document.querySelectorAll(".flower-card").forEach(function(card) {

            card.classList.remove("active");

            card.querySelector(".reveal-button").innerHTML =
                'Discover <span>♡</span>';

        });


        // Open the selected flower card

       if (!isActive) {
               flowerCard.classList.add("active");
             button.innerHTML = 'Close <span>×</span>';

            createFlowerRain();
}

    });

});

/*
   DIGITAL LETTER INTERACTION
 */


// Get the letter button

const openLetterButton = document.getElementById("openLetter");


// Get the letter content

const letterContent = document.getElementById("letterContent");


// Listen for button clicks

openLetterButton.addEventListener("click", function() {

    // Toggle the letter visibility

    letterContent.classList.toggle("open");


    // Change the button text

    if (letterContent.classList.contains("open")) {

        openLetterButton.innerHTML = "Close your letter ×";

    } else {

        openLetterButton.innerHTML =
            'Open your little letter <span>♡</span>';

    }

});

// TAP TO BLOOM MUSIC

const bloomButton = document.getElementById("bloomButton");
const backgroundMusic = document.getElementById("backgroundMusic");

bloomButton.addEventListener("click", function() {

    backgroundMusic.play()
        .then(function() {
            bloomButton.innerHTML = "♪ Playing for you ♡";
        })
        .catch(function(error) {
            console.log("Music playback failed:", error);
            bloomButton.innerHTML = "Try Again 🌷";
        });

});

// =================================
// NIGHT GARDEN MODE
// =================================

const nightToggle = document.getElementById("nightToggle");

nightToggle.addEventListener("click", function() {

    document.body.classList.toggle("night-mode");

    if (document.body.classList.contains("night-mode")) {
        nightToggle.innerHTML = "☀️";
        nightToggle.title = "Return to Day Garden";
    } else {
        nightToggle.innerHTML = "🌙";
        nightToggle.title = "Enter Night Garden";
    }

});

// =================================
// BLOOMING MOMENTS - FLOWER RAIN
// =================================

function createFlowerRain() {

    const flowers = ["🌸", "🌷", "🌼", "🌺", "💮"];

    for (let i = 0; i < 30; i++) {

        const flower = document.createElement("span");

        flower.classList.add("flower-rain");

        flower.innerHTML =
            flowers[Math.floor(Math.random() * flowers.length)];

        flower.style.left = Math.random() * 100 + "vw";

        flower.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        flower.style.animationDelay =
            (Math.random() * 1.5) + "s";

        flower.style.fontSize =
            (18 + Math.random() * 18) + "px";

        document.body.appendChild(flower);

        setTimeout(function() {
            flower.remove();
        }, 7000);
    }
}

// =================================
// SECRET GARDEN - OPEN THE DOOR
// =================================

const secretDoorButton = document.getElementById("openSecretDoor");
const secretReveal = document.getElementById("secretReveal");
const secretDoor = document.querySelector(".secret-door");

secretDoorButton.addEventListener("click", function() {

    // Animate the door opening
    secretDoor.style.transform = "perspective(800px) rotateY(-65deg)";

    secretDoor.style.transformOrigin = "left center";

    // Hide the button
    secretDoorButton.style.display = "none";

    // Reveal the final message after a short delay
    setTimeout(function() {

        secretReveal.classList.add("show");

    }, 1200);

});