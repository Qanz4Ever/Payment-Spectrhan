// Create shooting meteors
function createMeteors() {
    const nightSky = document.querySelector('.night-sky');
    
    for (let i = 0; i < 5; i++) {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        
        // Random position
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        meteor.style.left = `${startX}%`;
        meteor.style.top = `${startY}%`;
        
        // Random delay and duration
        const delay = Math.random() * 20;
        const duration = 2 + Math.random() * 3;
        
        meteor.style.animationDelay = `${delay}s`;
        meteor.style.animationDuration = `${duration}s`;
    }
}

// QRIS Modal functionality
function setupModal() {
    const modal = document.getElementById('qris-modal');
    const btn = document.getElementById('pay-with-qris');
    const span = document.getElementsByClassName('close-modal')[0];
    
    btn.onclick = function(e) {
        e.preventDefault();
        modal.style.display = 'flex';
    }
    
    span.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// Setup one-click copy functionality
function setupAutoCopy() {
    const accountInfos = document.querySelectorAll('.account-info');
    const notification = document.getElementById('copyNotification');
    
    accountInfos.forEach(info => {
        info.addEventListener('click', function() {
            const number = this.getAttribute('data-number');
            
            // Copy to clipboard
            navigator.clipboard.writeText(number).then(() => {
                // Show notification
                notification.style.display = 'block';
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                // Fallback for browsers that don't support clipboard API
                const textarea = document.createElement('textarea');
                textarea.value = number;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                
                // Show notification
                notification.style.display = 'block';
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 2000);
            });
        });
    });
}

// Setup payment buttons
function setupPaymentButtons() {
    // DANA Payment
    document.getElementById('pay-with-dana').addEventListener('click', function() {
        const account = document.querySelector('[data-number="085888113291"]').getAttribute('data-number');
        alert(`Permintaan pembayaran dikirim ke owner ${account}. Silakan periksa aplikasi Anda untuk menyelesaikan pembayaran.`);
    });

    // GoPay Payment
    document.getElementById('pay-with-gopay').addEventListener('click', function() {
        const account = document.querySelector('[data-number="085888113291"]').getAttribute('data-number');
        alert(`Permintaan pembayaran dikirim ke owner ${account}. Silakan periksa aplikasi Anda untuk menyelesaikan pembayaran.`);
    });

    // OVO Payment
    document.getElementById('pay-with-ovo').addEventListener('click', function() {
        alert(`Permintaan pembayaran dikirim ke owner 085888113291. Silakan periksa aplikasi Anda untuk menyelesaikan pembayaran.`);
    });

    // SeaBank Payment
    document.getElementById('pay-with-seabank').addEventListener('click', function() {
        alert(`Permintaan pembayaran dikirim ke owner 085888113291. Silakan periksa aplikasi Anda untuk menyelesaikan pembayaran.`);
    });
    
    // BankMandiri Payment
    document.getElementById('pay-with-bank-mandiri').addEventListener('click', function() {
        alert(`Permintaan pembayaran dikirim ke owner 085888113291. Silakan periksa aplikasi Anda untuk menyelesaikan pembayaran.`);
    });

    // QRIS Confirmation
    document.getElementById('confirm-qris').addEventListener('click', function() {
        alert('Permintaan pembayaran dikirim ke owner 085888113291. Silakan periksa aplikasi Anda untuk menyelesaikan pembayaran.');
        document.getElementById('qris-modal').style.display = 'none';
    });
}

const particlesContainer = document.querySelector('.particles');
for (let i = 0; i < 50; i++) {  // Buat 50 partikel
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';  // Posisi acak
    particle.style.animationDuration = Math.random() * 5 + 5 + 's';  // Durasi acak
    particle.style.width = Math.random() * 3 + 1 + 'px';  // Ukuran acak
    particle.style.height = particle.style.width;
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createMeteors();
    setupModal();
    setupAutoCopy();
    setupPaymentButtons();
    
    // Add animation to payment cards on scroll
    const paymentCards = document.querySelectorAll('.payment-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    paymentCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});