// Array produk toko
let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

// Fungsi untuk menambahkan produk
function tambahProduk(nama, harga, stok){
    let idBaru = produkToko.length + 1;
    let produkBaru = {id: idBaru,nama: nama,harga: harga,stok: stok};
    produkToko.push(produkBaru);
    console.log(`Produk ${nama} berhasil ditambahkan`);
}

// Fungsi untuk menghapus produk berdasarkan id
function hapusProduk(id){
    for(let i = 0; i < produkToko.length; i++){
        if(produkToko[i].id === id){
            produkToko.splice(i,1);
            console.log(`Produk dengan ID ${id} berhasil dihapus`);
        }
    }
}

// Fungsi untuk menampilkan daftar produk
function tampilkanProduk(){
    console.log("Daftar Produk Toko:");
    for(let i = 0; i < produkToko.length; i++){
        console.log(
            "ID: " + produkToko[i].id +
            ", Nama: " + produkToko[i].nama +
            ", Harga: Rp" + produkToko[i].harga +
            ", Stok: " + produkToko[i].stok
        );
    }
}

// ===============================
// Menjalankan Program
// ===============================

console.log("=== Daftar Produk Awal ===");
tampilkanProduk();

console.log("\n=== Menambahkan Produk ===");
tambahProduk("Webcam",1500000,4);

console.log("\n=== Setelah Tambah Produk ===");
tampilkanProduk();

console.log("\n=== Menghapus Produk ===");
hapusProduk(3);

console.log("\n=== Daftar Produk Terakhir ===");
tampilkanProduk();