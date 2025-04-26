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
