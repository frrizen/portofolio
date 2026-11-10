document.addEventListener('DOMContentLoaded', () => {
    // 1. Efek Typing Text (Teks Mengetik Otomatis)
    const typingText = document.getElementById('typing-text');
    const roles = ['Digital Creator', 'Media Editor', 'Developer & Designer'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000; // Jeda saat kalimat selesai diketik
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }
    typeEffect();

    // 2. Toggle Mode Terang / Gelap (Light / Dark Mode)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    // 3. Tombol Kontak Interaktif
    const contactBtn = document.getElementById('contact-btn');
    contactBtn.addEventListener('click', () => {
        alert('Terima kasih telah berkunjung! Kamu bisa menghubungi saya melalui ikon media sosial di atas.');
    });
});
