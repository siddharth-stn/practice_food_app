import { useEffect, useState } from "react";

const useResList = (resListUrl) => {
  const [resList, setResList] = useState(null);

  const fetchResList = async (url) => {
    const data = await fetch(url);
    const jsonData = await data.json();
    setResList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchResList(resListUrl);
  }, []);

  return resList;
};

export default useResList;
