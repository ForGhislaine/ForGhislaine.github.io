/* WORD OF THE DAY */
// index.js

// Words and descriptions array
const words = [
    { word: "Expletive", description: "An oath or swear word." },
    { word: "Sangwich", description: "An item of food consisting of two pieces of bread with a filling between them." },
    { word: "Aushwish", description: "A building in Darnall that resembles a concentration camp." },
    { word: "BRATTY", description: "Showing a rude lack of respect or politeness." },
    { word: "Purkulate", description: "XXL Pro Max Dump truck bum bum." },
    { word: "Adjacent", description: "Characterised by some aspects of, or similar to, a specified word/concept." },
    { word: "Ohemaa", description: "Queen (Ghislaine adjacent)." },
    { word: "Miskeen", description: "One who is poor, pathetic, innocent." },
    { word: "EISHHHHH", description: "Used to express a range of emotions, such as surprise, annoyance, or resignation." },
    { word: "Lentils", description: "A high-protein pulse which is dried and then soaked and cooked prior to eating." },
    { word: "Fantastic Feast (FF)", description: "Meat and fruits and rice and spaghetti and beans and everything." },
    { word: "Maffyew", description: "A wasteman/prick/dickhead/twat." },
    { word: "Ndagukunda", description: "I love you." },
    { word: "10/10 bangin", description: "When something looks, tastes, smells, sounds or feels real good" },
    { word: "10/10 minus", description: "Absolutely terrible, horrendous, egregious, sickening, trauma-inducing" },
    { word: "Word Smhurd (and all variations)", description: "What you're saying don't even matter fr" },
    { word: "When?", description: "Did I ask? (got youuuuuu)" },
    { word: "UNCLEEEEEE", description: "Time to SNOGGGGG." },
    { word: "What you on about you?", description: "You're just waffling if we being honest"},
    { word: "Tentative", description: "Not certain or fixed; provisional"},
    { word: "I'm getting fine", description: "You are just getting fine!"},
    
];

// Initialize the current word index
let currentIndex = 0;

// Function to update the displayed word and description
function updateWord(index) {
    document.getElementById('word').textContent = words[index].word;
    document.getElementById('description').textContent = words[index].description;
}

// Function to go to the previous word
function prevWord() {
    currentIndex = (currentIndex - 1 + words.length) % words.length;
    updateWord(currentIndex);
}

// Function to go to the next word
function nextWord() {
    currentIndex = (currentIndex + 1) % words.length;
    updateWord(currentIndex);
}

// Function to select a random word
function randomWord() {
    currentIndex = Math.floor(Math.random() * words.length);
    updateWord(currentIndex);
}

// Initial display
document.addEventListener('DOMContentLoaded', () => {
    updateWord(currentIndex);  // Display the first word on load

    // Attach event listeners to buttons
    document.getElementById('prev-word').addEventListener('click', prevWord);
    document.getElementById('next-word').addEventListener('click', nextWord);
    document.getElementById('random-word').addEventListener('click', randomWord);
});
