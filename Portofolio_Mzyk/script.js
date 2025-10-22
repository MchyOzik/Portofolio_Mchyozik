// Data buku
const bookDetails = {
  "mtcna.jpg": {
    title: "Module MTCNA",
    desc: "Buku ini membahas dasar-dasar jaringan MikroTik, meliputi konfigurasi router, manajemen bandwidth, firewall, dan fitur penting lainnya."
  },
  "debian.png": {
    title: "Module Debian 12",
    desc: "Buku ini menjelaskan instalasi, konfigurasi, serta manajemen server berbasis Debian 12 untuk kebutuhan jaringan dan server."
  },
  "ccna.png": {
    title: "Module CCNA",
    desc: "Buku panduan resmi untuk sertifikasi Cisco CCNA. Membahas routing, switching, keamanan jaringan, serta praktik konfigurasi Cisco IOS."
  }
};

// Ambil elemen
const modal = document.getElementById("bookModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close-btn");

// Buka modal dengan data buku
function openBook(fileName) {
  if (bookDetails[fileName]) {
    modalTitle.textContent = bookDetails[fileName].title;
    modalDesc.textContent = bookDetails[fileName].desc;
    modalImg.src = fileName;
  }
  modal.style.display = "flex";
}

// Tutup modal
function closeBook() {
  modal.style.display = "none";
}

// Ganti halaman konten
function showPage(pageId) {
  const pages = document.querySelectorAll(".book-content .page");
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// Tutup modal kalau klik luar area
window.addEventListener("click", (e) => {
  if (e.target === modal) closeBook();
});

// Tombol X
closeBtn.addEventListener("click", closeBook);
