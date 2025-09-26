
// Runner Pertemuan 14
const Perpustakaan = require("./Perpustakaan.js"); // Import Perpustakaan
const Buku = require("./Buku.js"); // Import Buku
const Anggota = require("./Anggota.js"); // Import Anggota
const lib = new Perpustakaan(); // Buat perpustakaan
lib.tambahBuku(new Buku("ISBN001","Pemrograman JS","Andi")); // Tambah buku contoh
lib.tambahAnggota(new Anggota("A01","Siti")); // Tambah anggota contoh
console.log("Draft struktur proyek akhir dibuat."); // Cetak status
