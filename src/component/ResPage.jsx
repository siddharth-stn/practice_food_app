import React from "react";

class ResPage extends React.Component {
  render() {
    return (
      <div className="h-screen bg-yellow-300 flex justify-center">
        <div className="bg-red-500 h-fit rounded mt-24 w-[500px] p-6 pb-10 flex flex-col gap-4">
          <div>
            <img
              src="https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2889%2Ftrend20200722152815.jpg"
              alt="Restaurant"
              className="rounded"
            />
          </div>
          <div className="flex flex-col gap-4 text-white">
            <h2 className="font-bold text-lg">Restaurant Name</h2>
            <h3 className="font-bold text-lg">Cuisines</h3>
            <h3 className="font-bold text-lg">Price for two</h3>
            <h3 className="font-bold text-lg">Average Rating</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default ResPage;
