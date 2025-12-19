let currentScene = 1;
const totalScenes = 7;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateProgressDots();
    createSnowflakes();
});

// Navigate to next scene
function nextScene() {
    if (currentScene < totalScenes) {
        const currentElement = document.querySelector(`.scene-${currentScene}`);
        const nextElement = document.querySelector(`.scene-${currentScene + 1}`);

        // Exit current scene
        currentElement.classList.add('exiting');
        setTimeout(() => {
            currentElement.classList.remove('active', 'exiting');
        }, 500);

        // Enter next scene
        setTimeout(() => {
            currentScene++;
            nextElement.classList.add('active');
            updateProgressDots();
        }, 300);
    }
}

// Navigate to previous scene
function previousScene() {
    if (currentScene > 1) {
        const currentElement = document.querySelector(`.scene-${currentScene}`);
        const prevElement = document.querySelector(`.scene-${currentScene - 1}`);

        currentElement.classList.add('exiting');
        setTimeout(() => {
            currentElement.classList.remove('active', 'exiting');
        }, 500);

        setTimeout(() => {
            currentScene--;
            prevElement.classList.add('active');
            updateProgressDots();
        }, 300);
    }
}

// Restart presentation
function restart() {
    const currentElement = document.querySelector(`.scene-${currentScene}`);
    const firstElement = document.querySelector('.scene-1');

    currentElement.classList.add('exiting');
    setTimeout(() => {
        currentElement.classList.remove('active', 'exiting');
    }, 500);

    setTimeout(() => {
        currentScene = 1;
        firstElement.classList.add('active');
        updateProgressDots();
    }, 300);
}

// Update progress dots
function updateProgressDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index + 1 === currentScene) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        nextScene();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previousScene();
    } else if (e.key === 'Escape' || e.key === 'Home') {
        e.preventDefault();
        restart();
    }
});

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next scene
            nextScene();
        } else {
            // Swipe right - previous scene
            previousScene();
        }
    }
}

// Create falling snowflakes for festive effect
function createSnowflakes() {
    const snowflakeCount = 50;
    const snowflakeChars = ['❄', '❅', '❆'];

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 3 + 7) + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflake.style.opacity = Math.random() * 0.6 + 0.4;
        document.body.appendChild(snowflake);
    }
}

// Optional: Auto-advance after time (commented out by default)
/*
function autoAdvance() {
    const autoAdvanceTime = 5000; // 5 seconds
    setTimeout(() => {
        if (currentScene < totalScenes) {
            nextScene();
            autoAdvance();
        }
    }, autoAdvanceTime);
}
// Uncomment the next line to enable auto-advance
// autoAdvance();
*/
