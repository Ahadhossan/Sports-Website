import React from 'react'
import NewsCard from '../Helper/NewsCard';
import SmallNewsCard from '../Helper/SmallNewsCard';

const LatestNews = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* heading */}
      <h1 className="heading">Latest News</h1>
      <div className="w-[90%] mx-auto pt-[4rem] grid grid-cols-1 lg:grid-cols-5 gap-[2rem]">
        {/* Big Card */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="col-span-3"
        >
          <NewsCard
            image="/images/n1.jpg"
            date="April 18, 2024"
            title="Whats New In Bangladesh Team"
            height="h-[400px]"
          />
        </div>
        {/* small Card */}
        <div className="col-span-2">
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <SmallNewsCard
              image="/images/n1.jpg"
              date="April 18, 2024"
              title="Whats New In Bangladesh Team"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
            className="mt-[1.4rem] mb-[1.4rem]"
          >
            <SmallNewsCard
              image="/images/n2.jpg"
              date="April 17, 2024"
              title="Whats New In Bangladesh Team"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="600"
            className="mt-[1.4rem] mb-[1.4rem]"
          >
            <SmallNewsCard
              image="/images/n3.jpg"
              date="April 17, 2024"
              title="Whats New In Bangladesh Team"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews
