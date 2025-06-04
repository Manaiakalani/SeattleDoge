/*
 * SeattleDoge JavaScript 🐕
 * such interactive, much wow, very Gen-Z
 * Features: Easter eggs, animations, and Seattle vibes
 */

// State management for easter eggs
let easterEggCount = 0;
let coffeeCount = 0;
const maxEasterEggs = 5;

// Dynamic topography randomization
function randomizeTurbulence() {
    const turbulence = document.getElementById('turbulence');
    if (!turbulence) return;
    
    const baseFrequencyX = (Math.random() * 0.02 + 0.002).toFixed(4);
    const baseFrequencyY = (Math.random() * 0.02 + 0.002).toFixed(4);
    const numOctaves = Math.floor(Math.random() * 3) + 1; 
    const seed = Math.floor(Math.random() * 1000);
    
    turbulence.setAttribute('baseFrequency', `${baseFrequencyX} ${baseFrequencyY}`);
    turbulence.setAttribute('numOctaves', numOctaves);
    turbulence.setAttribute('seed', seed);
    
    // Add some flair when pattern changes
    document.body.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 500);
}

// Initialize on load
randomizeTurbulence();

// Randomize every hour (3600000ms) + add some variance for personality
const randomInterval = 3600000 + (Math.random() * 600000); // ±5 minutes
setInterval(randomizeTurbulence, randomInterval);

// Doge ASCII Art
console.log(`
%c
             ██▄▄▄▄▄▄▄▄▄   
            ▒▒▒▒▒▒▒▒▒▒▓██  
           ▀▀▒▒▒▀▀▒▒▒▓▓▓▓█ 
         ▄▄▄▒▒░    ░░▒▒▒▓█ 
         ▀▀▀▒▄▄▄   ░░▒▒▒▓█ 
           █▄░   ░░▒▒▒▒▓▓█ 
            ▀█▄▄▄▄▄▄▄▄▄▀▀  
        such art
        much console
        wow
`, 'color: #FF6F61; font-family: monospace; font-size: 12px;');

console.log('%c🐕 SeattleDoge Console Easter Egg Unlocked! 🎉', 'color: #ffeb3b; font-size: 16px; font-weight: bold;');
console.log('%cYou found the first easter egg! Keep exploring...', 'color: #0F4C81; font-size: 12px;');

// Interactive easter eggs
function updateEasterEggCounter() {
    const counter = document.getElementById('egg-count');
    const eggCounter = document.getElementById('egg-counter');
    
    if (counter) {
        counter.textContent = easterEggCount;
        eggCounter.classList.add('show');
        
        if (easterEggCount >= maxEasterEggs) {
            setTimeout(() => {
                alert('🎉 Congrats! You found all easter eggs! You\'re officially a SeattleDoge doggo! 🐕');
                console.log('%c🏆 ACHIEVEMENT UNLOCKED: Doggo Hunter! 🏆', 'color: gold; font-size: 20px; font-weight: bold;');
            }, 500);
        }
    }
}

// Title click easter egg
function setupTitleInteraction() {
    const title = document.getElementById('main-title');
    if (title) {
        title.addEventListener('click', () => {
            if (easterEggCount === 0) {
                easterEggCount++;
                updateEasterEggCounter();
                console.log('%c🎯 Easter egg #1 found! Keep clicking around...', 'color: #FF6F61;');
            }
            
            // Add some visual feedback
            title.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                title.style.animation = '';
            }, 500);
        });
    }
}

// Coffee counter easter egg
function setupCoffeeCounter() {
    const coffeeCounter = document.getElementById('coffee-counter');
    if (coffeeCounter) {
        coffeeCounter.addEventListener('click', () => {
            coffeeCount++;
            coffeeCounter.textContent = `☕ ${coffeeCount} cups`;
            
            if (coffeeCount === 5 && easterEggCount < maxEasterEggs) {
                easterEggCount++;
                updateEasterEggCounter();
                console.log('%c☕ Coffee addiction easter egg unlocked! true Seattle vibes', 'color: #8B4513;');
            }
            
            if (coffeeCount >= 10) {
                coffeeCounter.textContent = '☕ too much caffeine 😵';
                setTimeout(() => {
                    coffeeCounter.textContent = `☕ ${coffeeCount} cups`;
                }, 2000);
            }
        });
    }
}

// Background click easter egg
function setupBackgroundInteraction() {
    const topoBackground = document.getElementById('topo-bg');
    if (topoBackground) {
        let clickCount = 0;
        topoBackground.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 3 && easterEggCount < maxEasterEggs) {
                easterEggCount++;
                updateEasterEggCounter();
                randomizeTurbulence(); // Change pattern as reward
                console.log('%c🌄 Background pattern easter egg! The mountains are dancing!', 'color: #939597;');
            }
        });
    }
}

// Konami code easter egg (because why not)
function setupKonamiCode() {
    let konamiCode = [];
    const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konami.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join('') === konami.join('') && easterEggCount < maxEasterEggs) {
            easterEggCount++;
            updateEasterEggCounter();
            document.body.style.animation = 'spin 2s ease-in-out';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 2000);
            console.log('%c🎮 Konami Code easter egg! Such nostalgia, much wow!', 'color: #6667AB;');
        }
    });
}

// Time-based easter egg (for the patient ones)
function setupTimeBasedEgg() {
    setTimeout(() => {
        if (easterEggCount < maxEasterEggs) {
            easterEggCount++;
            updateEasterEggCounter();
            console.log('%c⏰ Patience easter egg unlocked! You stayed for 30 seconds!', 'color: #0F4C81;');
        }
    }, 30000); // 30 seconds
}

// Social link interaction enhancement
function setupSocialInteractions() {
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.filter = 'drop-shadow(0 0 10px currentColor)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.filter = '';
        });
    });
}

// Initialize all interactions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setupTitleInteraction();
    setupCoffeeCounter();
    setupBackgroundInteraction();
    setupKonamiCode();
    setupTimeBasedEgg();
    setupSocialInteractions();
    
    // Initial console message for devs
    console.log('%c👋 Hello fellow developer! Welcome to SeattleDoge!', 'color: #FF6F61; font-size: 14px;');
    console.log('%cThere are 5 easter eggs hidden on this page. Can you find them all?', 'color: #0F4C81;');
    console.log('%c1. Already found! (console doge)', 'color: #888;');
    console.log('%c2. Try clicking the title...', 'color: #ffeb3b;');
    console.log('%c3. Need more coffee? ☕', 'color: #ffeb3b;');
    console.log('%c4. Click the background pattern...', 'color: #ffeb3b;');
    console.log('%c5. Try the Konami code! ↑↑↓↓←→←→BA', 'color: #ffeb3b;');
    console.log('%c6. BONUS: Just wait around for a bit...', 'color: #ffeb3b;');
    
    // Mark console easter egg as found
    easterEggCount = 1;
    updateEasterEggCounter();
});

// Add some CSS animations via JavaScript for extra flair
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .easter-egg-counter {
        animation: fadeIn 0.5s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
