import { Link } from "react-router-dom";

import "./styles.css";

const Header = () => {
  return (
    <main className="container-main">
    <Link to="/">
      <h1>IKI MUSIC</h1>
    </Link>
      <ul>
        <li>
          <Link to="/acoustic">
            <h3>Covers Acústicos</h3>
          </Link>
        </li>
        <li>
          <Link to="/production">
            <h3>Produções Musicais</h3>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <h3>Contato</h3>
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Header;
