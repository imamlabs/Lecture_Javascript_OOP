
// Runner Pertemuan 12 (CLI sederhana), mendukung demo otomatis di CI
const readline = require("readline"); // Mengimpor modul readline untuk input
const Mahasiswa = require("./Mahasiswa.js"); // Import kelas Mahasiswa
const daftar = []; // Array menampung objek Mahasiswa

function runInteractive() { // Fungsi untuk mode interaktif
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); // Buat interface readline
  function menu() { // Fungsi menampilkan menu
    console.log("1. Tambah  2. Hapus  3. Tampil  0. Keluar"); // Cetak menu
    rl.question("", (pilih) => { // Baca pilihan user
      if (pilih === "1") { // Jika tambah
        rl.question("NIM: ", (nim) => { // Tanya NIM
          rl.question("Nama: ", (nama) => { // Tanya Nama
            daftar.push(new Mahasiswa(nim, nama)); // Tambah ke daftar
            menu(); // Kembali ke menu
          }); // Tutup callback input nama
        }); // Tutup callback input nim
      } else if (pilih === "2") { // Jika hapus
        rl.question("Index hapus: ", (idxStr) => { // Tanya index
          const idx = Number(idxStr); // Parse index
          if (idx >= 0 && idx < daftar.length) daftar.splice(idx, 1); // Hapus jika valid
          menu(); // Kembali ke menu
        }); // Tutup callback input index
      } else if (pilih === "3") { // Jika tampil
        daftar.forEach((m, i) => console.log(i + ". " + m.toString())); // Cetak daftar
        menu(); // Kembali ke menu
      } else if (pilih === "0") { // Jika keluar
        rl.close(); // Tutup readline
      } else { // Jika pilihan tidak dikenali
        menu(); // Tampilkan menu lagi
      } // Tutup else
    }); // Tutup rl.question
  } // Tutup fungsi menu
  menu(); // Mulai menu
} // Tutup function runInteractive

if (process.env.DEMO === "1" || !process.stdin.isTTY) { // Jika mode demo atau tidak ada TTY
  daftar.push(new Mahasiswa("2310001", "Ari")); // Tambah data demo 1
  daftar.push(new Mahasiswa("2310002", "Nina")); // Tambah data demo 2
  daftar.forEach((m, i) => console.log(i + ". " + m.toString())); // Cetak daftar
  process.exit(0); // Keluar normal
} else { // Jika interaktif
  runInteractive(); // Jalankan menu interaktif
} // Tutup kondisi utama
