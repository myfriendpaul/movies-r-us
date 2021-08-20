import { Link, Route } from "react-router-dom";
import WatchList from "./WatchList";
import CreateaMovie from "./CreateaMovie";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/watchlist">Watch List</Link>
      <Route path="/watchlist">
        <WatchList />
      </Route>
      <Link to="/createamovie">Create-A-Movie</Link>
      <Route path="/createamovie">
        <CreateaMovie />
      </Route>
    </nav>
  );
}

export default Nav;
