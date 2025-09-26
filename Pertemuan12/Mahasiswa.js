
// Kelas Mahasiswa sederhana
class Mahasiswa { // Deklarasi kelas Mahasiswa
  constructor(nim, nama) { // Constructor menerima nim & nama
    this.nim = nim; // Simpan nim
    this.nama = nama; // Simpan nama
  } // Tutup constructor
  toString() { // Representasi string
    return this.nim + " - " + this.nama; // Gabungkan nim dan nama
  } // Tutup method toString
} // Tutup class Mahasiswa
module.exports = Mahasiswa; // Ekspor kelas
