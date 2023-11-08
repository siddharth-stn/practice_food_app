import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { RES_LIST_URL } from "../utils/constants";
import { CDN_URL } from "../utils/constants";

import useResList from "../utils/useResList";
import useBestRestaurant from "../utils/useBestRestaurant";

import Shimmer from "./Shimmer";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [updatedRes, setUpdatedRes] = useState(null);
  const [queryStr, setQueryStr] = useState("");

  const resList = useResList(RES_LIST_URL);

  useEffect(() => {
    setUpdatedRes(resList);
  }, [resList]);

  const filteredResList = useBestRestaurant();

  const findTopRatedRes = () => {
    setUpdatedRes(filteredResList);
  };

  const findQueryRes = () => {
    if (queryStr != null) {
      const someRes = resList.filter((res) => {
        return res?.info?.name.toLowerCase().includes(queryStr.toLowerCase());
      });
      if (someRes.length != 0) {
        setUpdatedRes(someRes);
      } else {
        setUpdatedRes(resList);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key !== "Enter") return;
    if (queryStr != null) {
      const someRes = resList.filter((res) => {
        return res?.info?.name.toLowerCase().includes(queryStr.toLowerCase());
      });
      if (someRes.length != 0) {
        setUpdatedRes(someRes);
      } else {
        setUpdatedRes(resList);
      }
    }
  };

  if (updatedRes === null || updatedRes === undefined) {
    return <Shimmer />;
  }

  return (
    <div className="h-full bg-yellow-300 pt-8 pb-6 px-32 ">
      <div className="flex items-center gap-10 ">
        <div className="flex items-center relative">
          <input
            type="text"
            className="p-1 px-3 pr-7 rounded border-red-500 border-2"
            placeholder="I would eat at..."
            value={queryStr}
            onChange={(event) => {
              setQueryStr(event.target.value);
            }}
            onKeyDown={handleKeyPress}
          />
          <div
            className="relative right-7 hover:cursor-pointer"
            onClick={findQueryRes}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              bounce
              style={{ color: "#db0a34" }}
            />
          </div>
        </div>
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
            <Link key={res?.info?.id} to={`restaurants/${res?.info?.id}`}>
              <div className="p-4 rounded-[8px] bg-orange-500 [box-shadow:8px_8px_16px_#4c4848,_-8px_-8px_16px_#dacccc] text-white w-56">
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
