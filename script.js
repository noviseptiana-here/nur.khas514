// Menampilkan pesan saat website dibuka
window.onload = function () {
    alert("Selamat datang di Website Mata Pelajaran Bahasa Indonesia");
};

// Fungsi untuk menampilkan materi
function tampilkanMateri() {
    document.getElementById("materi").style.display = "block";
}

// Fungsi untuk menyembunyikan materi
function sembunyikanMateri() {
    document.getElementById("materi").style.display = "none";
}

// Fungsi menampilkan pesan saat klik menu
function klikMenu(namaMenu) {
    alert("Anda membuka menu: " + namaMenu);
}
