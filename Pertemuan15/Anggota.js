
// Kelas Anggota
class Anggota { // Deklarasi kelas Anggota
  constructor(id, nama) { // Constructor
    this.id = id; // Simpan id
    this.nama = nama; // Simpan nama
  } // Tutup constructor
  toString() { // Representasi string
    return this.id + " - " + this.nama; // Susun teks
  } // Tutup method toString
} // Tutup class Anggota
module.exports = Anggota; // Ekspor kelas
