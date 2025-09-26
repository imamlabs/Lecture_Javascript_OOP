
// File runner untuk Pertemuan 2
const Mahasiswa = require("./Mahasiswa.js"); // Mengimpor kelas Mahasiswa dari file terpisah
const m1 = new Mahasiswa(); // Membuat objek m1
m1.nim = "2312345"; // Mengisi nim
m1.nama = "Budi"; // Mengisi nama
m1.jurusan = "Informatika"; // Mengisi jurusan
const m2 = new Mahasiswa(); // Membuat objek m2
m2.nim = "2312346"; // Mengisi nim
m2.nama = "Siti"; // Mengisi nama
m2.jurusan = "Sistem Informasi"; // Mengisi jurusan
m1.tampilkanInfo(); // Menampilkan info m1
m1.belajar("OOP"); // Memanggil belajar pada m1
console.log(); // Cetak baris kosong
m2.tampilkanInfo(); // Menampilkan info m2
m2.belajar("Struktur Data"); // Memanggil belajar pada m2
