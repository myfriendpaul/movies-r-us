import { Link, Route } from "react-router-dom";
import CreateaMovie from "./CreateaMovie";
import "./NavCSS.css";
import WatchList from "./WatchList";

function Nav() {
  return (
    <nav className="nav-container">
      <ul className="text-temp">
        <li className="nav-links-container">
          <Link to="/" className="nav-links">
            Home
          </Link>
          <Link to="/watchlist" className="nav-links">
            Watch List
          </Link>
          <Link to="/createamovie" className="nav-links">
            Create-A-Movie
          </Link>
        </li>
        <li>
          <Route path="/watchlist">
            <WatchList />
          </Route>
        </li>
        <li>
          <Route path="/createamovie">
            <CreateaMovie />
          </Route>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
