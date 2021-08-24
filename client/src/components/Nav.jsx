import { Link, Route } from "react-router-dom";
import WatchList from "./WatchList";
import CreateaMovie from "./CreateaMovie";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
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
