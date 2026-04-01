// index.mjs
import { index, store, destroy } from "./controller.mjs";

const main = () => {

  // TAMBAH 2 DATA (sesuai soal)
  store({
    nama: "Rina Kartika",
    umur: 30,
    alamat: "Bandung",
    email: "rina@gmail.com"
  });

  store({
    nama: "Agus Setiawan",
    umur: 31,
    alamat: "Makassar",
    email: "agus@gmail.com"
  });

  // TAMPILKAN DATA
  index();

  // HAPUS DATA (contoh hapus index ke-1)
  destroy(1);

  // TAMPILKAN LAGI
  console.log("\nSetelah dihapus:");
  index();
};

main();