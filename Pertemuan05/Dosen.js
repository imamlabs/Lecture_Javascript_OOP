
// Kelas Dosen mewarisi Person
const Person = require("./Person.js"); // Import kelas Person
class Dosen extends Person { // Deklarasi subclass Dosen
  constructor(nama, alamat, nidn) { // Constructor menerima tambahan nidn
    super(nama, alamat); // Memanggil constructor induk
    this.nidn = nidn; // Menyimpan nidn
  } // Tutup constructor
  perkenalan() { // Override perkenalan
    console.log("Saya Dosen " + this.nama + " (NIDN: " + this.nidn + ") dari " + this.alamat); // Cetak perkenalan lengkap
  } // Tutup method perkenalan
} // Tutup class Dosen
module.exports = Dosen; // Ekspor kelas
