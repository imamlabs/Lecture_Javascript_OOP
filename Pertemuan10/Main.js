
// Runner Pertemuan 10
require("./IMovable.js"); // Import placeholder interface (opsional untuk dokumentasi)
const Mobil = require("./Mobil.js"); // Import Mobil
const Robot = require("./Robot.js"); // Import Robot
const m1 = new Mobil(); // Buat objek Mobil
const m2 = new Robot(); // Buat objek Robot
m1.move(); // Panggil move pada Mobil
m2.move(); // Panggil move pada Robot
