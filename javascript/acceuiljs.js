document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.1 };
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  
 
    window.addEventListener('scroll', () => {
      const offset = window.scrollY;
      document.body.style.backgroundPositionY = `${offset * 0.4}px`;
    });
  

    
    const images = document.querySelectorAll('.image-produit img');
    images.forEach((img, i) => {
      img.style.opacity = '0';
      img.style.transform = 'translateY(30px)';
      setTimeout(() => {
        img.style.transition = 'all 0.6s ease';
        img.style.opacity = '1';
        img.style.transform = 'translateY(0)';
      }, i * 150);
    });
  
   
    const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
  panel.addEventListener('mouseenter', (event) => {
    panels.forEach(p => p.classList.remove('active'));
    panel.classList.add('active');
  });
});
  });