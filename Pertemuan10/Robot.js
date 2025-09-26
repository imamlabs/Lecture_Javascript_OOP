
// Implementasi IMovable oleh Robot (duck-typing)
class Robot { // Deklarasi kelas Robot
  move() { // Method move sesuai "kontrak"
    console.log("Robot berjalan dengan servo motor."); // Cetak perilaku bergerak
  } // Tutup method move
} // Tutup class Robot
module.exports = Robot; // Ekspor kelas
