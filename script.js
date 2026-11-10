document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contact-btn');
    
    // Interaksi tombol
    contactBtn.addEventListener('click', () => {
        alert('Terima kasih telah mengunjungi profil saya! Silakan hubungi via tautan sosial media di atas.');
    });

    // Mengubah sapaan otomatis berdasarkan waktu
    const greetingEl = document.getElementById('greeting');
    const hour = new Date().getHours();
    let timeGreeting = "Selamat datang di profil GitHub saya!";
    
    if (hour >= 4 && hour < 11) {
        timeGreeting = "Selamat pagi! Senang melihat Anda berkunjung.";
    } else if (hour >= 11 && hour < 15) {
        timeGreeting = "Selamat siang! Terima kasih sudah mampir.";
    } else if (hour >= 15 && hour < 19) {
        timeGreeting = "Selamat sore! Selamat menjelajahi portofolio saya.";
    } else {
        timeGreeting = "Selamat malam! Terima kasih telah berkunjung.";
    }

    greetingEl.textContent = timeGreeting;
});
