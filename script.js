function randomizeTurbulence() {
    const turbulence = document.getElementById('turbulence');
    const baseFrequencyX = (Math.random() * 0.02 + 0.002).toFixed(4);
    const baseFrequencyY = (Math.random() * 0.02 + 0.002).toFixed(4);
    const numOctaves = Math.floor(Math.random() * 3) + 1; 
    const seed = Math.floor(Math.random() * 1000);
    turbulence.setAttribute('baseFrequency', `${baseFrequencyX} ${baseFrequencyY}`);
    turbulence.setAttribute('numOctaves', numOctaves);
    turbulence.setAttribute('seed', seed);
}

// Randomize on load
randomizeTurbulence();

// Optional: Randomize on an interval
setInterval(randomizeTurbulence, 3600000); // Change every 5 seconds