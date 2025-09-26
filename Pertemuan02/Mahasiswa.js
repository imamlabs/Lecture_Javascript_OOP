
// Kelas Mahasiswa untuk demonstrasi class & object
class Mahasiswa { // Mendeklarasikan kelas Mahasiswa
  constructor() { // Constructor tanpa parameter
    this.nim = ""; // Properti nim (public)
    this.nama = ""; // Properti nama (public)
    this.jurusan = ""; // Properti jurusan (public)
  } // Tutup constructor
  belajar(materi) { // Method belajar dengan parameter materi
    console.log(this.nama + " sedang belajar " + materi); // Cetak aktivitas
  } // Tutup method belajar
  tampilkanInfo() { // Method menampilkan info mahasiswa
    console.log("NIM     : " + this.nim); // Cetak nim
    console.log("Nama    : " + this.nama); // Cetak nama
    console.log("Jurusan : " + this.jurusan); // Cetak jurusan
  } // Tutup method tampilkanInfo
} // Tutup class Mahasiswa
module.exports = Mahasiswa; // Mengekspor kelas untuk digunakan file lain
