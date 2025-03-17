// Initialize particles
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#8a2be2' }, // Purple particles
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 2, direction: 'none', random: true }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

async function snapSpeed() {
    const url = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');

    if (!url || !url.startsWith('http')) {
        resultDiv.innerHTML = '<span style="color: #ff6b6b;">Please enter a valid URL (e.g., https://example.com)</span>';
        return;
    }

    resultDiv.innerHTML = 'Snapping speed...';

    try {
        const startTime = performance.now(); // Start timer
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        
        const endTime = performance.now(); // End timer
        const loadTime = (endTime - startTime).toFixed(2); // Calculate time in ms

        if (response.ok) {
            resultDiv.innerHTML = `<span style="color: #00ff9f;">${url} loaded in ${loadTime} ms!</span>`;
        } else {
            resultDiv.innerHTML = `<span style="color: #ff6b6b;">${url} failed to load. Time: ${loadTime} ms.</span>`;
        }
    } catch (error) {
        resultDiv.innerHTML = `<span style="color: #ff6b6b;">Error: Could not snap ${url}.</span>`;
    }
}