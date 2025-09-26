
// Kelas Keranjang
const Barang = require("./Barang.js"); // Import Barang (untuk dokumentasi/IDE hints)
class Keranjang { // Deklarasi kelas Keranjang
  constructor() { // Constructor tanpa parameter
    this.items = new Map(); // Map kode → qty
  } // Tutup constructor
  tambah(barang, qty) { // Tambah item ke keranjang
    const lama = this.items.get(barang.kode) || 0; // Ambil qty sebelumnya
    this.items.set(barang.kode, lama + qty); // Simpan qty baru
  } // Tutup method tambah
  total(katalog) { // Hitung total berdasar katalog (obj kode→Barang)
    let sum = 0; // Inisialisasi total
    for (const [kode, qty] of this.items) { // Loop setiap entri keranjang
      sum += katalog[kode].harga * qty; // Tambah subtotal (harga*qty)
    } // Tutup loop
    return sum; // Kembalikan total
  } // Tutup method total
} // Tutup class Keranjang
module.exports = Keranjang; // Ekspor kelas
