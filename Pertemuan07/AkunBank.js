
// Kelas AkunBank
class AkunBank { // Deklarasi kelas AkunBank
  constructor(nomor, saldoAwal) { // Constructor menerima nomor & saldo awal
    this.#nomor = nomor; // Simpan nomor ke field privat
    this.#saldo = Math.max(0, Number(saldoAwal)); // Simpan saldo minimal 0
  } // Tutup constructor
  setor(nominal) { // Method setor menambah saldo
    if (nominal <= 0) throw new Error("Nominal setor harus > 0"); // Validasi nominal
    this.#saldo += nominal; // Tambah saldo
  } // Tutup method setor
  tarik(nominal) { // Method tarik mengurangi saldo
    if (nominal <= 0) throw new Error("Nominal tarik harus > 0"); // Validasi nominal
    if (nominal > this.#saldo) throw new Error("Saldo tidak cukup"); // Cek saldo cukup
    this.#saldo -= nominal; // Kurangi saldo
  } // Tutup method tarik
  info() { // Method info menampilkan status
    console.log(`Akun ${this.#nomor} | Saldo: ${this.#saldo}`); // Cetak nomor & saldo
  } // Tutup method info
  #nomor; // Field privat nomor
  #saldo; // Field privat saldo
} // Tutup class AkunBank
module.exports = AkunBank; // Ekspor kelas
