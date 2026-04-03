import { NavLink, Link } from "react-router";

export default function Header() {
  const styles = {
    active: {
      color: "#000",
      fontWeight: "bold",
    },
    normal: {
      color: "#0d6efd",
    },
  };

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      
      <div className="col-md-3 mb-2 mb-md-0">
        <Link to="/" className="d-inline-flex align-items-center text-decoration-none">
          <i className="fa-solid fa-book fa-2xl" style={{ color: "#0066ff" }}></i>
          <span className="ms-2 fs-4 fw-bold" style={{ color: "#0066ff" }}>
            Bookstore
          </span>
        </Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        
        <li>
          <NavLink
            to="/"
            className="nav-link px-2"
            style={({ isActive }) =>
              isActive ? styles.active : styles.normal
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/books"
            className="nav-link px-2"
            style={({ isActive }) =>
              isActive ? styles.active : styles.normal
            }
          >
            Books
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/team"
            className="nav-link px-2"
            style={({ isActive }) =>
              isActive ? styles.active : styles.normal
            }
          >
            Team
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className="nav-link px-2"
            style={({ isActive }) =>
              isActive ? styles.active : styles.normal
            }
          >
            Contact
          </NavLink>
        </li>

      </ul>

      <div className="col-md-3 text-end">
        <Link to="/login">
          <button className="btn btn-outline-primary me-2">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-primary">Register</button>
        </Link>
      </div>

    </header>
  );
}