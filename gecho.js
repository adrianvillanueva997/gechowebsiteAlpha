document.addEventListener('DOMContentLoaded', function () {
  // Create floating blobs in the background
  createPsychedelicBlobs();

  // Audio visualizer effect when music plays (placeholder)
  setupAudioVisualizer();

  // Parallax effect on scroll
  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    // Parallax for header
    document.querySelector('.band-logo').style.transform = `translateY(${scrollPosition * 0.1}px)`;

    // Color shift on scroll
    document.documentElement.style.setProperty('--color-accent-1', `hsl(${300 + scrollPosition * 0.1}, 100%, 50%)`);
    document.documentElement.style.setProperty('--color-accent-2', `hsl(${180 + scrollPosition * 0.1}, 100%, 50%)`);
  });
});

// Create floating psychedelic blob elements
function createPsychedelicBlobs() {
  const container = document.createElement('div');
  container.className = 'psychedelic-blobs';
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    pointer-events: none;
    overflow: hidden;
  `;

  // Create multiple colorful blobs
  for (let i = 0; i < 5; i++) {
    const blob = document.createElement('div');

    // Random size between 200-500px
    const size = Math.random() * 300 + 200;

    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    // Random color
    const hue = Math.random() * 360;

    blob.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}vw;
      top: ${y}vh;
      background: radial-gradient(circle at center,
                  hsla(${hue}, 100%, 70%, 0.2),
                  hsla(${hue + 40}, 100%, 60%, 0.1) 50%,
                  transparent);
      border-radius: 50%;
      filter: blur(50px);
      animation: float-${i} ${Math.random() * 10 + 20}s infinite linear;
    `;

    // Create unique animation for each blob
    const keyframes = `
      @keyframes float-${i} {
        0% { transform: translate(0, 0) rotate(0deg); }
        33% { transform: translate(${Math.random() * 20 - 10}vw, ${Math.random() * 20 - 10}vh) rotate(${Math.random() * 180}deg); }
        66% { transform: translate(${Math.random() * 20 - 10}vw, ${Math.random() * 20 - 10}vh) rotate(${Math.random() * 360}deg); }
        100% { transform: translate(0, 0) rotate(0deg); }
      }
    `;

    const style = document.createElement('style');
    style.textContent = keyframes;
    document.head.appendChild(style);

    container.appendChild(blob);
  }

  document.body.appendChild(container);
}

// Placeholder function for audio visualizer
function setupAudioVisualizer() {
  // This would be connected to actual audio elements
  // when the site has music playing functionality
  console.log('Audio visualizer ready to connect');
}