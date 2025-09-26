
// Runner Pertemuan 7
const AkunBank = require("./AkunBank.js"); // Import AkunBank
const a = new AkunBank("001", 100000); // Buat akun dengan saldo awal
a.setor(25000); // Setor 25000
a.tarik(5000); // Tarik 5000
a.info(); // Tampilkan saldo
