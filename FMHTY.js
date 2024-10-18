// Letter Navigation Logic
const letterPages = document.querySelectorAll('.letter-page');
let currentPageIndex = 0;

function showPage(index) {
    letterPages.forEach((page, i) => {
        page.classList.toggle('active', i === index);
    });
}

// Event listeners for navigation buttons
document.getElementById('prev').addEventListener('click', () => {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        showPage(currentPageIndex);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPageIndex < letterPages.length - 1) {
        currentPageIndex++;
        showPage(currentPageIndex);
    }
});

// Initially show the first page
showPage(currentPageIndex);
