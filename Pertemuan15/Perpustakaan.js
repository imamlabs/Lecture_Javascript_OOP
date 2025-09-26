
// Kelas Perpustakaan dengan fitur pinjam/kembali
const Buku = require("./Buku.js"); // Import Buku
const Anggota = require("./Anggota.js"); // Import Anggota
class Perpustakaan { // Deklarasi kelas Perpustakaan
  constructor() { // Constructor
    this.koleksi = []; // List buku
    this.anggota = []; // List anggota
  } // Tutup constructor
  tambahBuku(b) { // Tambah buku
    this.koleksi.push(b); // Dorong ke koleksi
  } // Tutup method
  tambahAnggota(a) { // Tambah anggota
    this.anggota.push(a); // Dorong ke daftar
  } // Tutup method
  pinjam(isbn) { // Pinjam buku berdasarkan ISBN
    const b = this.koleksi.find(x => x.isbn === isbn && !x.dipinjam); // Cari buku tersedia
    if (!b) return false; // Jika tidak ada, gagal
    b.dipinjam = true; // Tandai dipinjam
    return true; // Berhasil
  } // Tutup method pinjam
  kembali(isbn) { // Kembalikan buku
    const b = this.koleksi.find(x => x.isbn === isbn && x.dipinjam); // Cari buku dipinjam
    if (!b) return false; // Jika tidak ada, gagal
    b.dipinjam = false; // Tandai kembali
    return true; // Berhasil
  } // Tutup method kembali
  tampilkan() { // Tampilkan data
    console.log("== Koleksi =="); // Header koleksi
    this.koleksi.forEach(b => console.log(b.toString())); // Cetak setiap buku
    console.log("== Anggota =="); // Header anggota
    this.anggota.forEach(a => console.log(a.toString())); // Cetak setiap anggota
  } // Tutup method tampilkan
} // Tutup class Perpustakaan
module.exports = Perpustakaan; // Ekspor kelas
