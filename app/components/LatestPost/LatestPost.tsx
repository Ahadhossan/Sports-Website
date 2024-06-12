import React from "react";
import PostCard from "./PostCard";

const LatestPost = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* heading */}
      <h1 className="heading">Latest Post</h1>
      <div className="w-[90%] mx-auto mt-[3rem]">
        {/* PostCard */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <PostCard
            title="THE WORLD CUP WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION"
            image="/images/n1.jpg"
            date="16 April 2024"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <PostCard
            title="THE WORLD CUP WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION"
            image="/images/n2.jpg"
            date="17 April 2024"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <PostCard
            title="THE WORLD CUP WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION"
            image="/images/n3.jpg"
            date="18 April 2024"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="600"
        >
          <PostCard
            title="THE WORLD CUP WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION"
            image="/images/n4.jpg"
            date="19 April 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
