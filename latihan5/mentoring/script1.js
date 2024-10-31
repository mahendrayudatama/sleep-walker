let simpanan_wajib = 50000;
let simpanan_sukarela = 30000;
let simpanan_khusus = 20000;
let bunga = 0.05;

let total_simpanan = simpanan_wajib + simpanan_sukarela + simpanan_khusus;
let total_bunga = total_simpanan * bunga;
let total_simpanan_akhir = total_simpanan + total_bunga;

console.log("total simpanan " + total_simpanan);
console.log("total bunga " + total_bunga);
console.log("total simpanan akhir " + total_simpanan_akhir);
