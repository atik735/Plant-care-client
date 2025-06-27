import React from "react";
import Marquee from "react-fast-marquee";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    profile: "https://randomuser.me/api/portraits/women/1.jpg",
    reviews:
      "Amazing service! Highly recommend to everyone.",
          rating: 4.3,
  },
  {
    id: 2,
    name: "Bob Smith",
    profile: "https://randomuser.me/api/portraits/men/2.jpg",
    reviews:
      "Professional and timely delivery. Very happy!",
          rating: 4.4,
  },
  {
    id: 3,
    name: "Clara Lee",
    profile: "https://randomuser.me/api/portraits/women/3.jpg",
    reviews:
      "Exceeded my expectations in every way.",
        rating: 4.6,
  },
  {
    id: 4,
    name: "David Kim",
    profile: "https://randomuser.me/api/portraits/men/4.jpg",
    reviews:
      "Great communication and quality work.",
    rating: 4.0,
  },
  {
    id: 5,
    name: "Eva Green",
    profile: "https://randomuser.me/api/portraits/women/5.jpg",
    reviews:
      "Will definitely use again. Five stars!",
      rating: 4.5
  },
];


const Review = () => {
  return (
    <div className="mt-10 mb-10">
      <h2 className="text-center text-[3rem] font-bold ">
            Best Review
      </h2>
      {/* grid */}
        <div
        className="your-card-classes"   >
		 <div className="  ">
        {/*1 */}

      <Marquee pauseOnHover speed={50} gradient={false}>   
        {
            reviews.map(review =>
           <div className=" shadow-2xl  flex flex-col w-full  p-6 mx-auto divide-y rounded-md  bg-gradient-to-r from-white via-gray-50 to-stone-100 text-gray-800">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src={review.profile}
                  alt=""
                  className="object-cover w-12 h-12 rounded-full bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">{review.name}</h4>
                <span className="text-xs text-gray-600">2 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-yellow-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <span className="text-xl font-bold">{review.rating}</span>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm text-gray-600">
            <p>
            {review.reviews}
            </p>
          </div>
        </div>
        )
    }
    </Marquee>
		 </div>
      </div>
     
      
    </div>
  );
};

export default Review;