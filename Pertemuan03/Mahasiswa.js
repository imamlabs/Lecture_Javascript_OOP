
// Constructor dan keyword this
class Mahasiswa { // Mendeklarasikan kelas Mahasiswa
  constructor(nim = "", nama = "Tanpa Nama", jurusan = "-") { // Constructor dengan nilai default
    this.nim = nim; // Mengisi properti nim
    this.nama = nama; // Mengisi properti nama
    this.jurusan = jurusan; // Mengisi properti jurusan
  } // Tutup constructor
  info() { // Method info untuk ringkasan data
    console.log(`(${this.nim}) ${this.nama} - ${this.jurusan}`); // Cetak format (nim) nama - jurusan
  } // Tutup method info
} // Tutup class Mahasiswa
module.exports = Mahasiswa; // Ekspor kelas
