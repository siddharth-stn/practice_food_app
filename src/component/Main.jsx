import { RES_LIST_URL } from "../utils/constants";
import useResList from "../utils/useResList";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useBestRestaurant from "../utils/useBestRestaurant";

import { useState, useEffect } from "react";

const Main = () => {
  const [updatedRes, setUpdatedRes] = useState(null);

  const resList = useResList(RES_LIST_URL);

  useEffect(() => {
    setUpdatedRes(resList);
  }, [resList]);

  const filteredResList = useBestRestaurant();

  const findTopRatedRes = () => {
    setUpdatedRes(filteredResList);
  };

  if (updatedRes === null) {
    return <Shimmer />;
  }

  return (
    <div className="bg-yellow-300 pt-8 pb-6 px-32 ">
      <div>
        <button
          onClick={findTopRatedRes}
          className="bg-red-500 text-white p-1 px-3 rounded shadow-xl font-bold hover:border hover:border-solid hover:border-white hover:cursor-pointer"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="pt-8 pb-6 flex flex-wrap gap-10">
        {updatedRes?.map((res) => {
          return (
            <div
              key={res?.info?.id}
              className="p-4 rounded-[8px] bg-orange-500 [box-shadow:8px_8px_16px_#4c4848,_-8px_-8px_16px_#dacccc] text-white w-56"
            >
              <div className="flex flex-col gap-3">
                <div className="">
                  <img
                    src={CDN_URL + res?.info?.cloudinaryImageId}
                    alt="restaurant pic"
                  />
                </div>
                <h3 className="font-bold text-black">
                  Rating: {res?.info?.avgRating}
                </h3>
                <h2 className="font-bold text-black text-xl">
                  {res?.info?.name}
                </h2>
                <h3 className="font-bold text-black">
                  {res?.info?.cuisines.join(", ")}
                </h3>
                <h3 className="font-bold text-black">
                  {res?.info?.costForTwo}
                </h3>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Main;
