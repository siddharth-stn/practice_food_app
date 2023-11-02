import useResList from "./useResList";
import { useState, useEffect } from "react";
import { RES_LIST_URL } from "./constants";

/*
 * Upon clicking the Top Rated Restaurants button
 * Find the restaurants having ratings 4 or more
 * Then make useState() variable and store this list on this variable
 * Now display the list of these restaurants in the UI
 */

const useBestRestaurant = () => {
  const [filteredResList, setFilteredResList] = useState(null);

  const resList = useResList(RES_LIST_URL);

  useEffect(() => {
    if (resList !== null) {
      setFilteredResList(
        resList?.filter((res) => {
          return res?.info?.avgRating >= 4;
        })
      );
    }
  }, [resList]);
  return filteredResList;
};

export default useBestRestaurant;
