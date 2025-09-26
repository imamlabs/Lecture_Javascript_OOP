
// Enkapsulasi dengan field privat (#) dan getter/setter
class Mahasiswa { // Deklarasi kelas Mahasiswa
  #nim; // Field privat nim
  #nama; // Field privat nama
  constructor() { // Constructor tanpa parameter
    this.#nim = ""; // Inisialisasi nim
    this.#nama = ""; // Inisialisasi nama
  } // Tutup constructor
  get nim() { // Getter nim
    return this.#nim; // Kembalikan nilai nim
  } // Tutup getter nim
  get nama() { // Getter nama
    return this.#nama; // Kembalikan nilai nama
  } // Tutup getter nama
  set nim(val) { // Setter nim dengan validasi
    if (!val || String(val).trim() === "") throw new Error("NIM tidak boleh kosong"); // Validasi kosong
    this.#nim = String(val); // Set nilai nim
  } // Tutup setter nim
  set nama(val) { // Setter nama dengan validasi
    if (!val || String(val).trim().length < 2) throw new Error("Nama minimal 2 karakter"); // Validasi panjang
    this.#nama = String(val); // Set nilai nama
  } // Tutup setter nama
  info() { // Method info untuk menampilkan data
    console.log(this.#nim + " - " + this.#nama); // Cetak nim - nama
  } // Tutup method info
} // Tutup class Mahasiswa
module.exports = Mahasiswa; // Ekspor kelas
