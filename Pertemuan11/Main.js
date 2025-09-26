
// Runner Pertemuan 11
const Jurusan = require("./Jurusan.js"); // Import enum simulasi
const Mahasiswa = require("./Mahasiswa.js"); // Import kelas Mahasiswa
const a = new Mahasiswa("Ari", Jurusan.INFORMATIKA); // Buat objek a
const b = new Mahasiswa("Nina", Jurusan.SISTEM_INFORMASI); // Buat objek b
a.info(); // Cetak info a
b.info(); // Cetak info b
console.log("Total objek Mahasiswa:", Mahasiswa.COUNTER); // Cetak total objek
