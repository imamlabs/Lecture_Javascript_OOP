
// Simulasi enum menggunakan Object.freeze
const Jurusan = { // Objek berisi enumerasi jurusan
  INFORMATIKA: "INFORMATIKA", // Nilai INFORMATIKA
  SISTEM_INFORMASI: "SISTEM_INFORMASI", // Nilai SISTEM_INFORMASI
  TEKNIK_KOMPUTER: "TEKNIK_KOMPUTER" // Nilai TEKNIK_KOMPUTER
}; // Tutup objek Jurusan
Object.freeze(Jurusan); // Membekukan agar tidak bisa diubah
module.exports = Jurusan; // Ekspor "enum" Jurusan
