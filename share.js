document.getElementById('shareBtn').addEventListener('click', function() {
    // Pesan custom
    var customMessage = "Nih kalingga lagi open pelatihan Gratis!";
    // URL halaman saat ini
    var currentUrl = window.location.href;

    // URL WhatsApp dengan pesan custom dan link
    var whatsappUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(customMessage + " " + currentUrl);

    // Buka URL WhatsApp
    window.open(whatsappUrl, '_blank');
});