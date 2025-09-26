
// Kelas Perpustakaan
const Buku = require("./Buku.js"); // Import Buku
const Anggota = require("./Anggota.js"); // Import Anggota
class Perpustakaan { // Deklarasi kelas Perpustakaan
  constructor() { // Constructor tanpa parameter
    this.koleksi = []; // Array buku
    this.anggota = []; // Array anggota
  } // Tutup constructor
  tambahBuku(b) { // Method menambah buku
    this.koleksi.push(b); // Dorong ke koleksi
  } // Tutup method
  tambahAnggota(a) { // Method menambah anggota
    this.anggota.push(a); // Dorong ke daftar
  } // Tutup method
} // Tutup class Perpustakaan
module.exports = Perpustakaan; // Ekspor kelas
