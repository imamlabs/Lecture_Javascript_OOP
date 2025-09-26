
// Exception handling dengan try/catch/finally
function bagi(a, b) { // Fungsi bagi yang bisa melempar error
  if (b === 0) throw new Error("Tidak bisa membagi dengan nol"); // Validasi pembagi nol
  return Math.trunc(a / b); // Kembalikan hasil pembagian bilangan bulat
} // Tutup fungsi bagi
try { // Mulai blok try
  const x = 10; // Angka pertama contoh
  const y = 2; // Angka kedua contoh
  console.log("Hasil:", bagi(x, y)); // Cetak hasil panggilan bagi
} catch (e) { // Tangkap error
  console.log("Terjadi error:", e.message); // Cetak pesan error
} finally { // Blok finally
  console.log("Selesai."); // Notifikasi selesai
} // Tutup finally
