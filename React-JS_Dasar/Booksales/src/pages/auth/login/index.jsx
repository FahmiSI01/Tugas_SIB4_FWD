import { Link } from "react-router";

export default function Login() {
  const styles = {
    card: {
      maxWidth: "400px",
      margin: "auto",
      borderRadius: "20px",
    },
    header: {
      textAlign: "center",
      fontSize: "28px",
      color: "#0d6efd",
    },
    input: {
      borderRadius: "10px",
    },
    button: {
      borderRadius: "10px",
      fontWeight: "bold",
    },
    divider: {
      textAlign: "center",
      margin: "20px 0",
      fontWeight: "bold",
    },
    socialBtn: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      cursor: "pointer",
      fontWeight: "500",
      backgroundColor: "#fff",
    },
    google: {
      border: "1px solid #db4437",
      color: "#db4437",
    },
    facebook: {
      border: "1px solid #1877f2",
      color: "#1877f2",
    },
    github: {
      border: "1px solid #333",
      color: "#333",
    },
    text: {
      textAlign: "center",
      marginTop: "10px",
    },
  };

  return (
    <div className="modal modal-sheet position-static d-block p-4 py-md-5">
      <div className="modal-dialog" style={styles.card}>
        <div className="modal-content shadow">
          <div className="modal-header border-0">
            <h1 className="fw-bold w-100" style={styles.header}>
              Login
            </h1>
          </div>

          <div className="modal-body">
            <form>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" style={styles.input} placeholder="Email" />
                <label>Email</label>
              </div>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" style={styles.input} placeholder="Password" />
                <label>Password</label>
              </div>

              <button className="w-100 btn btn-primary" style={styles.button}>
                Login
              </button>
            </form>

            <div style={styles.divider}>OR</div>

            <button style={{ ...styles.socialBtn, ...styles.google }}>
              Login with Google
            </button>

            <button style={{ ...styles.socialBtn, ...styles.facebook }}>
              Login with Facebook
            </button>

            <button style={{ ...styles.socialBtn, ...styles.github }}>
              Login with GitHub
            </button>

            <p style={styles.text}>
              Belum punya akun? <Link to="/register">Daftar</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}