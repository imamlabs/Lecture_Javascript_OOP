
// Runner Pertemuan 6 (polimorfisme)
const Persegi = require("./Persegi.js"); // Import Persegi
const Segitiga = require("./Segitiga.js"); // Import Segitiga
const data = [ // Array berisi objek turunan BangunDatar
  new Persegi(4), // Persegi sisi 4
  new Segitiga(3,6), // Segitiga alas 3 tinggi 6
  new Persegi(7) // Persegi sisi 7
]; // Tutup array
for (const b of data) { // Loop setiap elemen
  console.log("Luas:", b.hitungLuas()); // Polimorfisme: memanggil implementasi sesuai objek
} // Tutup loop
