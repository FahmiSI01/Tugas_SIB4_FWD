import mi from "./assets/mi.jpg";
function App() {
  return (
    <>
      <div className="container">

        {/* ===== HEADER ===== */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#0066ff" }}></i>
              <span className="ms-2 fs-4 fw-bold" style={{ color: "#0066ff" }}>Bookstore</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-2 link-dark">Home</a></li>
            <li><a href="#products" className="nav-link px-2 link-dark">Books</a></li>
            <li><a href="#team" className="nav-link px-2 link-dark">Team</a></li>
            <li><a href="#contact" className="nav-link px-2 link-dark">Contact</a></li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* ===== HERO ===== */}
        <section id="home" className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            
            {/* TEXT */}
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                Temukan Buku Favoritmu di Bookstore
              </h1>
              <p className="lead">
                Nikmati pengalaman membaca terbaik dengan koleksi buku lengkap dari berbagai genre.
                Mulai dari novel, pengembangan diri, hingga buku teknologi untuk menunjang belajar kamu.
              </p>

              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                  Belanja Sekarang
                </button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                  Lihat Koleksi
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                className="rounded-lg-3"
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
                alt="Buku"
                width="720"
              />
            </div>

          </div>
        </section>

        {/* ===== PRODUCTS LIST ===== */}
        <section id="products" className="py-5">
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

        {/* ===== TEAM ===== */}
        <section id="team" className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="fw-bold mb-3">Tim Bookstore</h2>
            <p className="text-muted mb-4">Tim kami yang berdedikasi untuk membantu menemukan buku terbaik untukmu.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4">

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="card-img-top img-fluid rounded-circle mx-auto mt-3"
                      alt="Tim 1"
                      style={{ width: "200px", height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">Andi</h5>
                    <p className="text-muted">Pakar Kurasi Buku</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src={mi}
                      className="card-img-top img-fluid rounded-circle mx-auto mt-3"
                      alt="Tim 2"
                      style={{ width: "200px", height: "200px", objectFit: "cover" }} 
                    />
                  <div className="card-body">
                    <h5 className="card-title">Muhammad Fahmi</h5>
                    <p className="text-muted">CEO Bookstore</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="card-img-top img-fluid rounded-circle mx-auto mt-3"
                      alt="Tim 3"
                      style={{ width: "200px", height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">Citra</h5>
                    <p className="text-muted">Spesialis Komunitas Pembaca</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="py-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-4">Hubungi Kami</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input type="text" className="form-control" placeholder="Tulis namamu..." />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Alamat emailmu..." />
              </div>
              <div className="mb-3">
                <label className="form-label">Pesan</label>
                <textarea className="form-control" rows="4" placeholder="Tulis pesanmu..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Kirim Pesan</button>
            </form>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <div className="container">
          <footer className="py-3 my-4 border-top">
            
            <p className="text-center text-dark mb-0">
              © 2026 Bookstore - Muhammad Fahmi
            </p>

          </footer>
        </div>

      </div>
    </>
  )
}

export default App