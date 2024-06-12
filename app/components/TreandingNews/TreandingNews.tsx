import React from "react";
import NewsCard from "../Helper/NewsCard";

const TreandingNews = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* heading */}
      <h1 className="heading">Trending News</h1>
      {/* card div */}
      <div className="pt-[2rem] md:pt-[3rem] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
        {/* card 1 */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <NewsCard
            image="/images/n1.jpg"
            date="April 19, 2024"
            title="Whats New In Bangladesh Team"
            height="h-[300px]"
          />
        </div>
        {/* card 2 */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <NewsCard
            image="/images/n2.jpg"
            date="April 20, 2024"
            title="Whats New In Bangladesh Team"
            height="h-[300px]"
          />
        </div>
        {/* card 3 */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <NewsCard
            image="/images/n3.jpg"
            date="April 21, 2024"
            title="Whats New In Bangladesh Team"
            height="h-[300px]"
          />
        </div>
        {/* card 4 */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="600"
        >
          <NewsCard
            image="/images/n4.jpg"
            date="April 22, 2024"
            title="Whats New In Bangladesh Team"
            height="h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TreandingNews;
