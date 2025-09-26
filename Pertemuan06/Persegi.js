
// Subclass Persegi
const BangunDatar = require("./BangunDatar.js"); // Import BangunDatar
class Persegi extends BangunDatar { // Deklarasi kelas Persegi
  constructor(sisi) { // Constructor menerima sisi
    super(); // Memanggil constructor induk
    this.sisi = sisi; // Menyimpan sisi
  } // Tutup constructor
  hitungLuas() { // Override hitungLuas
    return this.sisi * this.sisi; // Mengembalikan luas persegi
  } // Tutup method
} // Tutup class Persegi
module.exports = Persegi; // Ekspor kelas
