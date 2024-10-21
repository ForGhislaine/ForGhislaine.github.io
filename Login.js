window.onload = function() {
    console.log(localStorage.getItem('authenticated'));
    // If the user is not authenticated, redirect to login page
    if (!localStorage.getItem('authenticated')) {
        window.location.href = 'index.html';
    }
}

function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'Sangwich'; // Replace with your password

    if (password === correctPassword) {
        localStorage.setItem('authenticated', true); // Save token in localStorage
        window.location.href = 'Home.html'; // Redirect to your main page
    } else {
        alert('Incorrect password, please try again.');
    }
}

// Function to generate hearts at random positions
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Random position on the screen
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random float time
    
    document.querySelector('.heart-background').appendChild(heart);

    // Remove the heart after it completes its animation
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Generate hearts periodically
setInterval(createHeart, 500); // Generates a heart every 0.5 second