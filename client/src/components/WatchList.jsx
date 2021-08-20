import { useState, useEffect } from "react";
import axios from "axios";
// import { airtableBaseURL, config } from "../services";

function WatchList() {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const resp = await axios.get(
        `https://api.airtable.com/v0/appLmgdIGJJj2W1cx/movies?api_key=keyvJmv6c4xbWL05d`
      );
      console.log(resp.data);
      setListItem(resp.data);
    };
    getList();
  }, []);

  return (
    <>
      <h1>This is watch list component</h1>
      <h1></h1>
    </>
  );
}

export default WatchList;
