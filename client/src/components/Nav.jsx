import { Link } from "react-router-dom";
import "./NavCSS.css";

function Nav() {
  return (
    <nav>
      <ul className="text-temp">
        <li>
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/watchlist" className="nav-links">
            Watch List
          </Link>
        </li>
        <li>
          <Link to="/createamovie" className="nav-links">
            Create-A-Movie
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
