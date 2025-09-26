
// Kelas Mahasiswa dengan static field dan konstanta kampus
const Jurusan = require("./Jurusan.js"); // Import enum simulasi
class Mahasiswa { // Deklarasi kelas Mahasiswa
  static COUNTER = 0; // Field statik untuk menghitung objek
  static KAMPUS = "Universitas Contoh"; // "Konstanta" kelas (tidak benar-benar const, tapi konvensi)
  constructor(nama, jurusan) { // Constructor menerima nama & jurusan
    this.nama = nama; // Simpan nama
    this.jurusan = jurusan; // Simpan jurusan
    Mahasiswa.COUNTER++; // Tambah penghitung objek
  } // Tutup constructor
  info() { // Method info
    console.log(`${this.nama} - ${this.jurusan} @ ${Mahasiswa.KAMPUS}`); // Cetak informasi
  } // Tutup method info
} // Tutup class Mahasiswa
module.exports = Mahasiswa; // Ekspor kelas
