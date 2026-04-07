export default function Contact() {
  return (
    <>
    <section className="py-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-4">Hubungi Kami</h2>
            <p className="text-center text-muted mb-4">
              Kami senang mendengar dari Anda! Jika Anda memiliki pertanyaan, saran atau masalah, silakan menghubungi kami melalui formulir di bawah ini.
            </p>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="card shadow-sm">
                  <div className="card-body">
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
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}