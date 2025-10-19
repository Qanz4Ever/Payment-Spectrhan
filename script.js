// Tombol "Masuk" (welcome → main)
document.getElementById('go-to-payment').addEventListener('click', () => {
  const welcome = document.getElementById('welcome-message');
  const main = document.getElementById('main-content');
  welcome.style.display = 'none';
  main.style.display = 'block';
  main.scrollTop = 0; // biar mulai dari atas
});

// Sistem Collapsible (hanya satu terbuka)
const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((btn) => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;

    // Tutup semua bar lain
    collapsibles.forEach((otherBtn) => {
      const otherContent = otherBtn.nextElementSibling;
      if (otherBtn !== btn) {
        otherBtn.classList.remove('active');
        otherContent.classList.remove('open');
        otherContent.style.maxHeight = null;
      }
    });

    // Toggle bar yang diklik
    btn.classList.toggle('active');
    content.classList.toggle('open');

    // Efek animasi buka/tutup
    if (content.classList.contains('open')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
});

// QRIS fullscreen system
const qrisImage = document.getElementById('qris-image');
const qrOverlay = document.getElementById('fullscreen-qr');

if (qrisImage && qrOverlay) {
  qrisImage.addEventListener('click', () => {
    qrOverlay.classList.remove('hidden');
  });

  qrOverlay.addEventListener('click', () => {
    qrOverlay.classList.add('hidden');
  });
}

// Fitur salin nomor
const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const textToCopy = document.getElementById(targetId).innerText.trim();

    // Salin ke clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Ganti jadi centang
      btn.innerText = "✅ Disalin";
      btn.classList.add("copied");

      // Balik ke normal setelah 2 detik
      setTimeout(() => {
        btn.innerText = "📋 Salin";
        btn.classList.remove("copied");
      }, 2000);
    }).catch((err) => {
      console.error("Gagal menyalin:", err);
    });
  });
});