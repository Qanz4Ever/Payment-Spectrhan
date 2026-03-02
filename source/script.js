document.getElementById('go-to-payment').addEventListener('click', () => {
  const welcome = document.getElementById('welcome-message');
  const main = document.getElementById('main-content');
  const music = document.getElementById("bg-music");
  const musicToggle = document.getElementById("music-toggle");

  welcome.style.display = 'none';
  main.style.display = 'block';
  main.scrollTop = 0;

  music.play().then(() => {
    musicToggle.textContent = "🔊";
    isPlaying = true;
  }).catch(() => {});
});

const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((btn) => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;

    collapsibles.forEach((otherBtn) => {
      const otherContent = otherBtn.nextElementSibling;
      if (otherBtn !== btn) {
        otherBtn.classList.remove('active');
        otherContent.classList.remove('open');
        otherContent.style.maxHeight = null;
      }
    });

    btn.classList.toggle('active');
    content.classList.toggle('open');

    if (content.classList.contains('open')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
});

const copyButtons = document.querySelectorAll('.copy-btn');
copyButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const textToCopy = document.getElementById(targetId).innerText.trim();

    navigator.clipboard.writeText(textToCopy).then(() => {
      btn.innerText = "✔️ Disalin";
      btn.classList.add("copied");

      setTimeout(() => {
        btn.innerText = "📋 Salin";
        btn.classList.remove("copied");
      }, 2000);
    }).catch(() => {});
  });
});

const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicToggle.textContent = "🔇";
    isPlaying = false;
  } else {
    music.play();
    musicToggle.textContent = "🔊";
    isPlaying = true;
  }
});