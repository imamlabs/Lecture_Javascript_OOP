
// Kelas dasar Person
class Person { // Mendefinisikan kelas Person
  constructor(nama, alamat) { // Constructor menerima nama & alamat
    this.nama = nama; // Menyimpan nama
    this.alamat = alamat; // Menyimpan alamat
  } // Tutup constructor
  perkenalan() { // Method perkenalan umum
    console.log("Saya " + this.nama + " dari " + this.alamat); // Cetak perkenalan
  } // Tutup method perkenalan
} // Tutup class Person
module.exports = Person; // Ekspor kelas
