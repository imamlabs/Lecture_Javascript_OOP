
// Subclass Persegi implementasi hitungLuas & hitungKeliling
const BangunDatar = require("./BangunDatar.js"); // Import BangunDatar
class Persegi extends BangunDatar { // Deklarasi Persegi
  constructor(sisi) { // Constructor menerima sisi
    super(); // Panggil constructor induk
    this.sisi = sisi; // Simpan sisi
  } // Tutup constructor
  hitungLuas() { // Implementasi luas
    return this.sisi * this.sisi; // Luas persegi
  } // Tutup method
  hitungKeliling() { // Implementasi keliling
    return 4 * this.sisi; // Keliling persegi
  } // Tutup method
} // Tutup class Persegi
module.exports = Persegi; // Ekspor kelas
