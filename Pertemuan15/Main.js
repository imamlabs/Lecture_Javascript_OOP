
// Runner Pertemuan 15
const Perpustakaan = require("./Perpustakaan.js"); // Import Perpustakaan
const Buku = require("./Buku.js"); // Import Buku
const Anggota = require("./Anggota.js"); // Import Anggota
const lib = new Perpustakaan(); // Buat perpustakaan
lib.tambahBuku(new Buku("B001","JS Dasar","Andi")); // Tambah buku 1
lib.tambahBuku(new Buku("B002","Struktur Data","Budi")); // Tambah buku 2
lib.tambahAnggota(new Anggota("AG01","Rina")); // Tambah anggota 1
lib.tambahAnggota(new Anggota("AG02","Tono")); // Tambah anggota 2
lib.tampilkan(); // Tampilkan awal
console.log("-- Pinjam B001 --", lib.pinjam("B001") ? "Sukses" : "Gagal"); // Uji pinjam
lib.tampilkan(); // Tampilkan setelah pinjam
console.log("-- Kembali B001 --", lib.kembali("B001") ? "Sukses" : "Gagal"); // Uji kembali
lib.tampilkan(); // Tampilkan setelah kembali
