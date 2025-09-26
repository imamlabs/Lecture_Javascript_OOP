
// Kelas Barang
class Barang { // Deklarasi kelas Barang
  constructor(kode, nama, harga) { // Constructor menerima kode, nama, harga
    this.kode = kode; // Simpan kode
    this.nama = nama; // Simpan nama
    this.harga = harga; // Simpan harga
  } // Tutup constructor
  toString() { // Representasi string
    return `${this.kode} - ${this.nama} (Rp${this.harga})`; // Susun teks
  } // Tutup method toString
} // Tutup class Barang
module.exports = Barang; // Ekspor kelas
