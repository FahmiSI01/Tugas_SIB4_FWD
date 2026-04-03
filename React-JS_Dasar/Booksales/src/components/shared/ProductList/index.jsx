export default function ProductList() {
  return (
    <>
    <section className="py-5">
          <div className="container">
            <div className="row text-center mb-4">
              <div className="col">
                <h2 className="fw-bold">Buku Terpopuler</h2>
                <p className="text-muted">Koleksi terbaru dan rekomendasi editor kami untukmu.</p>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

              {/* Buku 1 */}
              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg" className="card-img-top p-3" alt="Buku 1" style={{ height: "250px", objectFit: "contain" }} />
                  <div className="card-body">
                    <h5 className="card-title">Sisi Tergelap Surga</h5>
                    <p className="card-text text-muted" style={{display: "-webkit-box",WebkitLineClamp: 3,WebkitBoxOrient: "vertical",overflow: "hidden"}}>Jakarta kerap menjadi pelabuhan bagi mereka yang datang membawa sekoper harapan. Mereka yang siap bertaruh dengan nasibnya sendiri-sendiri. Namun, kota ini selalu mampu melumat habis harapan dan menukarnya dengan keputusasaan.</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">Rp79.000</span>
                    <button className="btn btn-sm btn-primary">Beli</button>
                  </div>
                </div>
              </div>

              {/* Buku 2 */}
              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/5/31/3dswgqvlfhavyeenh59ivk.jpg" className="card-img-top p-3" alt="Buku 2" style={{ height: "250px", objectFit: "contain" }}/>
                  <div className="card-body">
                    <h5 className="card-title">How to Win Friends and Influence People</h5>
                    <p className="card-text text-muted" style={{display: "-webkit-box",WebkitLineClamp: 3,WebkitBoxOrient: "vertical",overflow: "hidden"}}>How To Win Friends and Influence People merupakan judul dari sebuah buku yang ditulis oleh Dale Carnegie. Buku ini akan menghadirkan isi tentang bagaimana cara untuk dapat meraih kesuksesan dalam berbisnis maupun kehidupan dengan cara meningkatkan kualitas diri.</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">Rp149.000</span>
                    <button className="btn btn-sm btn-primary">Beli</button>
                  </div>
                </div>
              </div>

              {/* Buku 3 */}
              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/11zb4i2-ea.png" className="card-img-top p-3" alt="Buku 3" style={{ height: "250px", objectFit: "contain" }}/>
                  <div className="card-body">
                    <h5 className="card-title">Teka-Teki Gambar Aneh</h5>
                    <p className="card-text text-muted" style={{display: "-webkit-box",WebkitLineClamp: 3,WebkitBoxOrient: "vertical",overflow: "hidden"}}>Gambar yang dibuat seorang wanita hamil di internet.Gambar yang dibuat seorang anak kecil sebagai hadiah Hari Ibu.Gambar yang dibuat seorang korban pembunuhan di saat-saat terakhirnya.</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">Rp199.000</span>
                    <button className="btn btn-sm btn-primary">Beli</button>
                  </div>
                </div>
              </div>

              {/* Buku 4 */}
              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/kxzgln-d2i.jpg" className="card-img-top p-3" alt="Buku 4" style={{ height: "250px", objectFit: "contain" }}/>
                  <div className="card-body">
                    <h5 className="card-title">Koding & Kecerdasan Artifisial</h5>
                    <p className="card-text text-muted" style={{display: "-webkit-box",WebkitLineClamp: 3,WebkitBoxOrient: "vertical",overflow: "hidden"}}>Dunia berkembang begitu cepat dengan kemajuan teknologi yang begitu pesat. Teknologi telah menjadi salah satu syarat yang harus dikuasai anak anak saat ini, agar dapat memenangkan masa depan yang gemilang bagi Indonesia.</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">Rp129.000</span>
                    <button className="btn btn-sm btn-primary">Beli</button>
                  </div>
                </div>
              </div>

              {/* Buku 5 */}
              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/products/95ob5m98ur.jpg" className="card-img-top p-3" alt="Buku 5" style={{ height: "250px", objectFit: "contain" }}/>
                  <div className="card-body">
                    <h5 className="card-title">Seporsi Mie Ayam Sebelum Mati</h5>
                    <p className="card-text text-muted" style={{display: "-webkit-box",WebkitLineClamp: 3,WebkitBoxOrient: "vertical",overflow: "hidden"}}>Ale, seorang pria berusia 37 tahun memiliki tinggi badan 189 cm dan berat 138 kg. Badannya bongsor, berkulit hitam, dan memiliki masalah dengan bau badan. Sejak kecil, Ale hidup di lingkungan keluarga yang tidak mendukungnya.</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">Rp149.000</span>
                    <button className="btn btn-sm btn-primary">Beli</button>
                  </div>
                </div>
              </div>

              {/* Buku 6 */}
              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/uh0d0g8ukg.jpg" className="card-img-top p-3" alt="Buku 6" style={{ height: "250px", objectFit: "contain" }} />
                  <div className="card-body">
                    <h5 className="card-title">Ronggeng Dukuh Paruk</h5>
                    <p className="card-text text-muted" style={{display: "-webkit-box",WebkitLineClamp: 3,WebkitBoxOrient: "vertical",overflow: "hidden"}}>Semangat Dukuh Paruk kembali menggeliat sejak Srintil dinobatkan menjadi ronggeng baru, menggantikan ronggeng terakhir yang mati dua belas tahun yang lalu. Bagi pedukuhan yang kecil, miskin, terpencil, dan bersahaja itu, ronggeng adalah perlambang.</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">Rp199.000</span>
                    <button className="btn btn-sm btn-primary">Beli</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
    </>
  )
}