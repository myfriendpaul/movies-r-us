import React, { useState, useEffect } from "react";
import axios from "axios";
import { airtableBaseURL, config } from "../services";
import WatchListCards from "./WatchListCards";

function WatchList() {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const resp = await axios.get(airtableBaseURL, config);
      console.log(resp.data);
      setListItem(resp.data.records);
    };
    getList();
  }, []);

  return (
    <div>
      {listItem.map((list, index) => (
        <React.Fragment key={index}>
          <WatchListCards list={list} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default WatchList;
