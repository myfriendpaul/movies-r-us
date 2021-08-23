import React, { useState, useEffect } from "react";
import axios from "axios";
import { airtableBaseURL, config } from "../services";

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
          <h1>{list.fields.title}</h1>
          <img
            className="movie-posters"
            alt="poster"
            src={list.fields.poster_path}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default WatchList;
