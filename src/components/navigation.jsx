import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link
            className="navbar-brand page-scroll"
            to="/"
            style={{ color: "#455d9f" }}
          >
            NUVIA
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {isHome && (
              <>
                <li>
                  <a
                    href="#about"
                    className="page-scroll"
                    style={{ color: "#455d9f" }}
                  >
                    <b>About</b>
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="page-scroll"
                    style={{ color: "#455d9f" }}
                  >
                    <b>Products</b>
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="page-scroll"
                    style={{ color: "#455d9f" }}
                  >
                    <b>Gallery</b>
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="page-scroll"
                    style={{ color: "#455d9f" }}
                  >
                    <b>Testimonials</b>
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="page-scroll"
                    style={{ color: "#455d9f" }}
                  >
                    <b>Team</b>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="page-scroll"
                    style={{ color: "#455d9f" }}
                  >
                    <b>Contact</b>
                  </a>
                </li>
              </>
            )}
            <li>
              <Link to="/career" style={{ color: "#455d9f" }}>
                <b>Career</b>
              </Link>
            </li>
            <li>
              <Link to="/glow-journal" style={{ color: "#455d9f" }}>
                <b>Glow Journal</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
