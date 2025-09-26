
// Subclass Segitiga
const BangunDatar = require("./BangunDatar.js"); // Import BangunDatar
class Segitiga extends BangunDatar { // Deklarasi kelas Segitiga
  constructor(alas, tinggi) { // Constructor menerima alas & tinggi
    super(); // Memanggil constructor induk
    this.alas = alas; // Menyimpan alas
    this.tinggi = tinggi; // Menyimpan tinggi
  } // Tutup constructor
  hitungLuas() { // Override hitungLuas
    return 0.5 * this.alas * this.tinggi; // Mengembalikan luas segitiga
  } // Tutup method
} // Tutup class Segitiga
module.exports = Segitiga; // Ekspor kelas
