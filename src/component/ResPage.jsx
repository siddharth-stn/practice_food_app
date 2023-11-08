import React from "react";
import { CDN_URL } from "../utils/constants";
import useResPage from "../utils/useResPage";
import { useParams } from "react-router-dom";

const ResPageWrapper = () => {
  const { resId } = useParams();

  const data = useResPage(resId);
  const { cloudinaryImageId, avgRating, costForTwoMessage, cuisines, name } =
    data == null
      ? { undefined, undefined, undefined, undefined, undefined }
      : data;
  if (data === null) {
    return;
  }
  return (
    <ResPage
      data={{ cloudinaryImageId, avgRating, costForTwoMessage, cuisines, name }}
    />
  );
};

class ResPage extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className="h-full pb-10 bg-yellow-300 flex justify-center">
        <div className="bg-orange-500 h-fit rounded mt-24 w-[250px] p-6 pb-10 flex flex-col gap-4">
          <div className="h-48">
            <img
              src={CDN_URL + data.cloudinaryImageId}
              alt="Restaurant"
              className="rounded h-[100%] w-[100%] object-contain"
            />
          </div>
          <div className="flex flex-col gap-4 text-white">
            <h2 className="font-bold text-lg">{data.name}</h2>
            <h3 className="font-bold text-lg">{data.cuisines}</h3>
            <h3 className="font-bold text-lg">{data.costForTwoMessage}</h3>
            <h3 className="font-bold text-lg">{data.avgRating}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default ResPageWrapper;
