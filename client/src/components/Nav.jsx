import { Link, Route } from "react-router-dom";
import WatchList from "./WatchList";
import CreateaMovie from "./CreateaMovie";

function Nav() {
  return (
    <nav>
      <ul>
        <li className="nav-links">
          <Link to="/">Home</Link>
          <Route path="/" exact></Route>
        </li>
        <li>
          <Link to="/watchlist">Watch List</Link>
          <Route path="/watchlist">
            <WatchList />
          </Route>
        </li>
        <li>
          <Link to="/createamovie">Create-A-Movie</Link>
          <Route path="/createamovie">
            <CreateaMovie />
          </Route>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
