
// Kelas Buku
class Buku { // Deklarasi kelas Buku
  constructor(isbn, judul, penulis) { // Constructor menerima data buku
    this.isbn = isbn; // Simpan isbn
    this.judul = judul; // Simpan judul
    this.penulis = penulis; // Simpan penulis
    this.dipinjam = false; // Status pinjam awal false
  } // Tutup constructor
  toString() { // Representasi string
    return `[${this.isbn}] ${this.judul} - ${this.penulis}` + (this.dipinjam ? " (Dipinjam)" : ""); // Susun teks
  } // Tutup method toString
} // Tutup class Buku
module.exports = Buku; // Ekspor kelas
