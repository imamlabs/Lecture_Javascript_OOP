
// Implementasi IMovable oleh Mobil (duck-typing)
class Mobil { // Deklarasi kelas Mobil
  move() { // Method move sesuai "kontrak"
    console.log("Mobil bergerak dengan roda."); // Cetak perilaku bergerak
  } // Tutup method move
} // Tutup class Mobil
module.exports = Mobil; // Ekspor kelas
