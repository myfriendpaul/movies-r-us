import React, { useState, useEffect } from "react";
import axios from "axios";
import { airtableBaseURL, config } from "../services";
import WatchListCards from "./WatchListCards";

function WatchList() {
  const [listItem, setListItem] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  useEffect(() => {
    const getList = async () => {
      const resp = await axios.get(airtableBaseURL, config);
      console.log(resp.data);
      setListItem(resp.data.records);
    };
    getList();
  }, [toggleFetch]);

  return (
    <div>
      {listItem.map((item, index) => (
        <React.Fragment key={index}>
          <WatchListCards item={item} setToggleFetch={setToggleFetch} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default WatchList;
