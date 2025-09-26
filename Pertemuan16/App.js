
// Runner Pertemuan 16
const Barang = require("./Barang.js"); // Import Barang
const Keranjang = require("./Keranjang.js"); // Import Keranjang
const katalog = { // Membuat katalog barang (kode→Barang)
  P01: new Barang("P01","Pulpen", 3000), // Item pulpen
  B02: new Barang("B02","Buku Tulis", 7000), // Item buku tulis
  R03: new Barang("R03","Rautan", 2000) // Item rautan
}; // Tutup objek katalog
const k = new Keranjang(); // Buat keranjang
k.tambah(katalog.P01, 2); // Tambah 2 pulpen
k.tambah(katalog.B02, 1); // Tambah 1 buku tulis
console.log("Total belanja: Rp" + k.total(katalog)); // Cetak total belanja
