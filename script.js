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

let nilaiUjian = [85, 62, 91, 74, 56, 92, 68];
let jumlahLulus = 0;
let nilaiTertinggi = 0;
for (let i = 0; i < nilaiUjian.length; i++) {
  let nilai = nilaiUjian[i];
  if (nilai >= 70) {
    console.log("siswa ke-" + (i + 1) + " lulus dengan nilai " + nilai);
    jumlahLulus++;
  } else {
    console.log("siswa ke-" + (i + 1) + " tidak lulus dengan nilai " + nilai);
  }

  if (nilai > nilaiTertinggi) {
    nilaiTertinggi = nilai;
  }
}
console.log("\njumlah siswa yang lulus: " + jumlahLulus);
console.log("nilai tertinggi: " + nilaiTertinggi);
