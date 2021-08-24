import { Link, Route } from "react-router-dom";
import CreateaMovie from "./CreateaMovie";
import "./NavCSS.css";
import WatchList from "./WatchList";

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
          <Route path="/watchlist">
            <WatchList />
          </Route>
        </li>
        <li>
          <Link to="/createamovie" className="nav-links">
            Create-A-Movie
          </Link>
          <Route path="/createamovie">
            <CreateaMovie />
          </Route>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
