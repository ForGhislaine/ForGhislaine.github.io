
    document.addEventListener("DOMContentLoaded", function () {
        const letters = document.querySelectorAll(".letter");
        let currentIndex = 0;

        // Function to show the current letter and hide others
        function showLetter(index) {
            letters.forEach((letter, i) => {
                letter.style.display = i === index ? "block" : "none";
            });
        }

        // Navigation buttons
        const prevButton = document.getElementById("prev-letter");
        const nextButton = document.getElementById("next-letter");

        prevButton.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                showLetter(currentIndex);
            }
        });

        nextButton.addEventListener("click", () => {
            if (currentIndex < letters.length - 1) {
                currentIndex++;
                showLetter(currentIndex);
            }
        });

        // Initial display
        showLetter(currentIndex);
    });

