document.addEventListener('DOMContentLoaded', () => {
    // Glow effect on scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('glow');
        } else {
            nav.classList.remove('glow');
        }
    });

    // Typewriter effect
    const typewriterText = document.querySelector('.typewriter-text');
    if (typewriterText) {
        const text = typewriterText.textContent;
        typewriterText.textContent = '';
        let i = 0;
        const speed = 100; // Speed of typing effect
        function type() {
            if (i < text.length) {
                typewriterText.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // 3D effect toggle for timeline items and service items
    const items = document.querySelectorAll('.timeline-item, .service-item');
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('hover');
        });
    });
});
