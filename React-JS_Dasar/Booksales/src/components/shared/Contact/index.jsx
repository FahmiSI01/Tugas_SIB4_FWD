export default function Contact() {
  return (
    <>
    <section className="py-5">
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
    </>
  )
}