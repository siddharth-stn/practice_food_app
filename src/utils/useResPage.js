import { useEffect, useState } from "react";
import { RES_URL } from "./constants";

const ResPage = (resId) => {
  // get the params
  // use params to search api database and get the details
  // of the restaurant using its id in the params
  // return the data

  const [resData, setResData] = useState();

  const fetchResData = async () => {
    const data = await fetch(RES_URL + resId);
    const jsonData = await data.json();

    setResData(jsonData.data.cards[0].card.card.info);
  };

  useEffect(() => {
    fetchResData();
  }, []);

  return resData;
};

export default ResPage;
