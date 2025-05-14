// BELAJAR JAVASCRIPT
// DAY 1 = LOOPING
// DAY 2 = DEFINING FUNCTION
// DAY 3 = FUNCTION EXPRESSION
// DAY 4 = ARROW FUNCTION
// DAY 5 = SCOPE
// DAY 6 = LATIHAN FUNCTION
// DAY 7 = OBJECT

// ======= BELAJAR LOOPING =======

// for (let i = 3; i <= 6; i++) {
//   console.log("ini angka x ke- " + i);
// }

// let x = 1;
// while (x <= 5) {
//   console.log("ini angka x ke - " + x);
//   x++;
// }
// let angka = 10;
// for (let i = 1; i <= angka; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (let bintang = 1; bintang <= 5; bintang++) {
//   let hasil = "";
//   for (let bintang2 = 1; bintang2 <= bintang; bintang2++) {
//     hasil += "*";
//   }
//   console.log(hasil);
// }
// for (let bunga = 1; bunga <= 5; bunga++) {
//   console.log("&".repeat(bunga));
// }

// ======= Belajar ARRAY =======

// let nama = ["agung", "dani", "edi", "yusron", "zain"];
// for (let i = 0; i < nama.length; i++) {
//   console.log("nama ke " + (i + 1) + " : " + nama[i]);
// }
// nama.unshift("budi");
// nama.pop();
// console.log("====== setelah dilakukan perubahan ======");
// for (let i = 0; i < nama.length; i++) {
//   console.log("nama ke " + (i + 1) + " : " + nama[i]);
// }

// let nilaiUjian = [85, 62, 91, 74, 56, 92, 68];
// let jumlahLulus = 0;
// let nilaiTertinggi = 0;
// for (let i = 0; i < nilaiUjian.length; i++) {
//   let nilai = nilaiUjian[i];
//   if (nilai >= 70) {
//     console.log("siswa ke-" + (i + 1) + " lulus dengan nilai " + nilai);
//     jumlahLulus++;
//   } else {
//     console.log("siswa ke-" + (i + 1) + " tidak lulus dengan nilai " + nilai);
//   }

//   if (nilai > nilaiTertinggi) {
//     nilaiTertinggi = nilai;
//   }
// }
// console.log("\njumlah siswa yang lulus: " + jumlahLulus);
// console.log("nilai tertinggi: " + nilaiTertinggi);

// let buah = ["apel", "jeruk", "nanas", "mangga", "anggur"];
// buah.forEach(function (item, index) {
//   console.log("buah ke- " + (index + 1) + " : " + item);
// });

// let angka = [2, 4, 6, 8, 10];
// let hasil = angka.map(function (item) {
//   return item * 3;
// });
// console.log(hasil);

// let nilai = [75, 60, 85, 45, 90, 55];
// let jumlahLulus = nilai.filter(function (item) {
//   return item >= 70;
// });
// console.log(jumlahLulus);

// let siswa = [
//   { nama: "agung", nilai: 85 },
//   { nama: "dani", nilai: 62 },
//   { nama: "edi", nilai: 91 },
//   { nama: "yusron", nilai: 45 },
//   { nama: "zain", nilai: 74 },
// ];
// let lulus = siswa.filter(function (item) {
//   return item.nilai >= 70;
// });
// let namaLulus = lulus.map(function (item) {
//   return item.nama;
// });
// let siswaDenganPredikat = siswa.map(function (item) {
//   let predikat;
//   if (item.nilai >= 85) {
//     predikat = "A";
//   } else if (item.nilai >= 70) {
//     predikat = "B";
//   } else {
//     predikat = "C";
//   }
//   return {
//     ...item,
//     predikat: predikat,
//   };
// });
// console.table(siswaDenganPredikat);

//  ======= BELAJAR FUNCTION =======

//  ======= DEFINING FUNCTION / FUNCTION BIASA =======
// function panggilNama(nama) {
//   alert("Hallo " + nama + " selamat pagi");
// }
// panggilNama(prompt("masukkan nama anda :"));

// function tambah(a, b) {
//   return a + b;
// }
// let a = 10;
// let b = 20;
// let hasil = tambah(a, b);
// console.log(hasil);

//  ====== FUNCTION EXPRESSION =======
// function pangkat(a, b) {
//   return Math.pow(a, b);
// }
// let hasil = pangkat(2, 3);
// let hasil2 = pangkat(5, 2);
// console.log(hasil);
// console.log(hasil2);

// const akarKuadrat = function (a) {
//   return Math.sqrt(a);
// };
// let hasil = akarKuadrat(25);
// let hasil2 = akarKuadrat(81);
// console.log(hasil);
// console.log(hasil2);

//  ====== ARROW FUNCTION =======

// const tambah = (a, b) => a + b;
// console.log(tambah(200, 20));

// const kelilingPersegi = (p) => 4 * p;
// console.log(kelilingPersegi(6));

// const konversiJam = (jam, detik) => jam * 3600 + detik;
// console.log(konversiJam(2, 300));

// const selamatUlangTahun = (nama) => "selamat ulang tahun " + nama;
// console.log(selamatUlangTahun("Agung"));

// const genapGanjil = (angka) => (angka % 2 == 0 ? "genap" : "ganjil");
// console.log(genapGanjil(7));

// const salam = (nama, waktu) => {
//   waktu = waktu.toLowerCase();
//   if (waktu == "pagi") return `selamat pagi ${nama}`;
//   else if (waktu == "siang") return `selamat siang ${nama}`;
//   else if (waktu == "malam") return `selamat malam ${nama}`;
//   else return `hallo ${nama}`;
// };
// console.log(salam("agung", "pagi"));

// ======= BELAJAR SCOPE =======

// *** GLOBAL SCOPE ***

// let barang = "sepatu";
// function tampilkanBarang() {
//   console.log(barang);
// }
// tampilkanBarang();

// //  **** FUNCTION SCOPE ****
// function sapa() {
//   let nama = "agung";
//   console.log(`hallo ${nama}`);
// }
// sapa();

// //  *** BLOCK SCOPE ***
// {
//   var nama = 123;
//   console.log(`hallo ${nama}`);
// }

//  (((( LATIHAN SCOPE))))

// let makanan = "nasi goreng";
// function pesanan() {
//   console.log("saya pesan " + makanan);
//   makanan = "sate";
//   console.log("saya akhirnya makan " + makanan);
// }
// pesanan();

// let nama = "agung";
// function salam() {
//   console.log("hallo " + nama);
//   if (true) {
//     var nama = "dani";
//     console.log("di dalam if " + nama);
//   }
//   console.log("setelah if " + nama);
// }
// salam();

//  ===== LATIHAN FUNCTION ======
// const barang = [
//   { nama: "Beras", harga: 15000 },
//   { nama: "Gula", harga: 12000 },
//   { nama: "Minyak", harga: 20000 },
//   { nama: "Telur", harga: 18000 },
// ];
// function tampilkanBarang() {
//   console.log("======= Daftar Barang =======");
//   for (let i = 0; i < barang.length; i++) {
//     console.log(`${i + 1}. ${barang[i].nama} - Rp.${barang[i].harga}`);
//   }
//   console.log("================================");
// }
// function pilihBarang(pilihan) {
//   let barangDipilih = barang.find(
//     (item) => item.nama.toLowerCase() === pilihan.toLowerCase()
//   );
//   if (barangDipilih) {
//     console.log("=============================");
//     console.log("barang: " + barangDipilih.nama);
//     console.log("harga: Rp." + barangDipilih.harga);
//     console.log("=============================");
//     return barangDipilih.harga;
//   } else {
//     console.log("barang tidak ditemukan");
//     return 0;
//   }
// }
// function totalHarga(barang1, barang2) {
//   let total = barang1 + barang2;
//   console.log("harga yang harus di bayar: Rp." + total);
// }
// tampilkanBarang();
// let harga1 = pilihBarang("beras");
// let harga2 = pilihBarang("gula");
// totalHarga(harga1, harga2);

// ======= LATIHAN FUNCTION 2 =======
// function hitungDiskon(harga, diskon) {
//   let totalDiskon = harga * (diskon / 100);
//   let totalHarga = harga - totalDiskon;
//   return totalHarga;
// }
// console.log(hitungDiskon(100000, 20));

// function bandingkanAngka(a, b) {
//   if (a > b) {
//     return `${a} lebih besar dari ${b}`;
//   } else if (a < b) {
//     return `${a} lebih kecil dari ${b}`;
//   } else {
//     return `${a} sama dengan ${b}`;
//   }
// }
// console.log(bandingkanAngka(5, 10));

// function buatSalam(nama, waktu) {
//   if (waktu === "pagi") {
//     return ` selamat pagi ${nama}`;
//   } else if (waktu === "siang") {
//     return `selamat siang ${nama}`;
//   } else if (waktu === "malam") {
//     return `selamat malam ${nama}`;
//   } else {
//     return `hallo ${nama}`;
//   }
// }
// let salam1 = buatSalam(`dani`, `malam`);
// console.log(salam1);

//  ======= BELAJAR OBJECT =======

// const buku = {
//   judul: "belajar js",
//   penulis: "agung",
//   tahun: "2024",
// };
// buku.penerbit = "gramedia";
// buku.tahun = 2025;
// console.table(buku);

// function outer() {
//   let count = 0;
//   function inner() {
//     count++;
//     console.log("count sekarang: " + count);
//   }
//   return inner;
// }
// const counter = outer();
// counter();
// counter();
// counter();

// function createUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     sayHi: function () {
//       console.log(`Hai, aku ${name}, umurku ${age} tahun`);
//     },
//   };
// }
// const user1 = createUser("Agung", 20);
// const user2 = createUser("dani", 23);
// user1.sayHi();
// user2.sayHi();

// --- Latihan Factory Function ---

// function createCar(brand, year, age, info) {
//   return {
//     brand: brand,
//     year: year,
//     get age() {
//       return new Date().getFullYear() - this.year;
//     },
//     get info() {
//       return `mobil ${brand} di buat tahun ${year}, dan sekarang berumur ${this.age} tahun`;
//     },
//     honk: function () {
//       console.log("beep! beep!");
//     },
//   };
// }
// const car1 = createCar("toyota", 2020);
// car1.honk();
// console.log(car1.age);
// console.log(car1.info);

// function createStudent(name, scores) {
//   return {
//     name: name,
//     scores: scores,
//     get average() {
//       let total = 0;
//       for (let i = 0; i < this.scores.length; i++) {
//         total += this.scores[i];
//       }
//       return total / this.scores.length;
//     },
//     get introduce() {
//       return `Hallo, nama saya ${this.name}, dan nilai rata-rata saya adalah ${this.average}`;
//     },
//   };
// }
// const student1 = createStudent("alya", [80, 90, 75]);
// console.log(student1.introduce);

// ***** Private variables *****
// function createAccount(name, initialBalance) {
//   let balance = initialBalance;
//   return {
//     checkbalance() {
//       return `saldo terakhir ${name} sebesar Rp.${balance}`;
//     },
//     deposit(amount) {
//       balance += amount;
//       return `terimakasih telah melakukan deposit sebesar Rp.${amount}, dan saldo anda serkarang Rp.${balance}`;
//     },
//     withdraw(amount) {
//       if (amount <= balance) {
//         balance -= amount;
//         return `terimakasih telah melakukan penarikan sebesar Rp.${amount}, sisa saldo anda sekrang Rp.${balance}`;
//       } else {
//         return `maaf sisa saldo anda tidak mencukupi untuk melakukan penarikan sebesar Rp.${amount}, karena sisa saldo anda hanya sebesar Rp.${balance}`;
//       }
//     },
//   };
// }
// const acc1 = createAccount("agung", 1000000);
// console.log(acc1.checkbalance());
// console.log(acc1.deposit(500000));
// console.log(acc1.withdraw(2000000));

//  ----- LATIHAN PRIVATAE VARIABLES -----

// function createCount(initialCount = 0) {
//   let count = initialCount;
//   (increment = function () {
//     count++;
//     return count;
//   }),
//     (decrement = function () {
//       count--;
//       return count;
//     }),
//     (getValue = function () {
//       return count;
//     });
//   return {
//     increment,
//     decrement,
//     getValue,
//   };
// }

// const counter = createCount();
// counter.increment();
// counter.increment();
// console.log(counter.getValue());
// counter.decrement();
// console.log(counter.getValue());
// console.log(counter.count);
