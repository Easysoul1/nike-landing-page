import React from "react";
import Button from "../component/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../component/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = React.useState(bigShoe1);

  const changeBigShoeImage = (newImage) => {
    setBigShoeImg(newImage);
  };

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:[82px] font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3"> Nike</span> Shoes
        </h1>
        <p className="text-slate-600 font-montserrat text-xl leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative xl:w-3/5 flex justify-center gap-5 items-center w-full max-xl:padding-x">
        <img src={bigShoeImg} alt="Big Shoe" className="w-full h-auto mb-8 mr-2"/>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-4 p-4 ">
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              imgURL={shoe}
              changeBigShoeImage={changeBigShoeImage}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;