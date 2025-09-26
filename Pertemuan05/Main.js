
// Runner Pertemuan 5
const Person = require("./Person.js"); // Import Person
const Dosen = require("./Dosen.js"); // Import Dosen
const p = new Person("Andi","Tangerang"); // Buat objek Person
const d = new Dosen("Imam","Jakarta","1234567890"); // Buat objek Dosen
p.perkenalan(); // Panggil perkenalan Person
d.perkenalan(); // Panggil perkenalan Dosen (override)
