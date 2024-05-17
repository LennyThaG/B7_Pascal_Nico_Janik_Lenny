/* JS Code, der nur auf der Start Page verwendet wird */
document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector('.horizontal-scrolling-items');
  
    let startTime = null;
  
    function animateScroll(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
  
      // Berechne den Verschiebungswert basierend auf der Zeit
      const translateX = -50 * (progress / 20000) % 100; // 20s für eine komplette Verschiebung von 50%
  
      // Setze den transform-Wert
      scrollContainer.style.transform = `translateX(${translateX}%)`;
  
      // Weiter animieren
      requestAnimationFrame(animateScroll);
    }
  
    // Starte die Animation
    requestAnimationFrame(animateScroll);
  });
  
