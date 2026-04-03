import mi from "../../../assets/mi.jpg";
export default function Team() {
  return (
    <>
    <section className="py-5 ">
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
    </>
  )
}