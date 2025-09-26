
// Kelas "abstrak": method melempar error jika belum di-override
class BangunDatar { // Deklarasi kelas dasar
  hitungLuas() { // Method yang "wajib" di-override
    throw new Error("hitungLuas() harus di-override"); // Lempar error saat dipanggil di base
  } // Tutup method
  hitungKeliling() { // Method yang "wajib" di-override
    throw new Error("hitungKeliling() harus di-override"); // Lempar error saat dipanggil di base
  } // Tutup method
  info() { // Method konkrit menampilkan hasil
    console.log("Luas:", this.hitungLuas()); // Cetak luas via override
    console.log("Keliling:", this.hitungKeliling()); // Cetak keliling via override
  } } // Tutup class BangunDatar
module.exports = BangunDatar; // Ekspor kelas
