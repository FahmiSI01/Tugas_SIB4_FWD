export default function Hero() {
  return (
    <>
    <section className="py-5 text-center container">
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
    </>
  )
}