/* eslint-disable react/prop-types */
// import React from 'react'
import { useRef } from "react";
import { HiPlus } from "react-icons/hi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  module: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Cart() {
  const carouselRef = useRef();
  const handleNext = () => {
    carouselRef.current.next();
  };
  const handlePrevious = () => {
    carouselRef.current.previous();
  };
  const Card = ({ title, image }) => {
    return (
      <div className="lg:w-[96%] bg-white px-4 py-8 relative">
        <img src="/public/about.png" alt="adidasShoe" className="w-full" />
        <p className="text-2xl font-semibold pb-12">{title}</p>
        <span className="flex justify-between items-center">
          <p className="text-3xl font-semibold">$265</p>
          <button className="bg-black w-12 h-12 rounded-md outline-none border-none cursor-pointer">
            <HiPlus className="text-4xl m-auto inline-block text-[#f5ba6e]" />
          </button>
        </span>
        <img
          src={image}
          alt="adidasShoe"
          className="absolute lg:px-4 bottom-0 w-full h-1/2 opacity-5"
        />
      </div>
    );
  };
  return (
    <div className="pt-16" id="cart">
      <div className="lg:flex items-end justify-between gap-x-16 max-w-[1600px] mx-auto pb-24 lg:h-[40rem]">
        <div className="lg:w-2/3 flex items-center relative h-full">
          <img
            src="/cart.png"
            alt="adidasShoe"
            className="absolute lg:ml-[5%]"
          />
          <img
            src="/logo-black.png"
            alt="logo"
            className=" left-[15%] mx-auto h-full opacity-5"
          />
        </div>
        <div className="lg:w-[30rem] lg:py-0 py-8 lg:px-0 px-4 lg:mr-[10%]">
          <h2 className="lg:text-3xl pb-4 font-semibold">
            Support and Ultralight comfort zone is guaranteed
          </h2>
          <p className="font-semibold leading-8 text-[17px]">
            The Company was started by Adolf Dassler in his mother`s house he
            was joined by his elder brother Rudolf Molded EVA midsole plug.
          </p>
          <h2 className="text-5xl font-bold py-8">$265</h2>
          <button className="bg-black text-[#f5ba6e] lg:w-2/3 h-16 lg:px-0 px-8 text-lg outline-none rounded-md border-none button-hover">
            ADD TO CART
          </button>
        </div>
      </div>
      <section className="background relative py-10 overflow-x-clip">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-center">
          <div className="lg:ml-[5%] lg:px-0 px-8">
            <h2 className="lg:text-4xl font-semibold py-8 lg:w-[600px]">
              Buy the adidas Alphabounce Now!
            </h2>
            <p className="font-semibold leading-8 text-[17px] lg:w-[450px]">
              He was joined by his elder brother Rudolf in 1924 under the foot
              name Dassler Brothers Shoe Factory.
            </p>
            <button className="bg-black text-[#f5ba6e] mt-8 lg:w-1/3 h-16 lg:px-0 px-8 text-lg outline-none rounded-md border-none button-hover">
              SHOP NOW
            </button>
          </div>
          <div className="xl:w-[50rem] lg:w-[40rem] absolute lg:right-[-2rem] top-[2rem] xl:right-3 xl:top-[-5rem] abs-none">
            <img src="/shoeWhite.png" alt="adidasShoe" />
          </div>
          {/* <div className="xl:w-[50rem] lg:w-[45rem] md:w-[35rem] absolute lg:right-[-5rem] lg:top-[-4rem] md:right-[-3rem] md:top-[5rem]">
            <img
              src="/shoeWhite.png"
              alt="adidasShoe"
              className="w-full"
            />
          </div> */}
        </div>
      </section>
      <section className="bg-[#f9f9f9] lg:px-6 lg:py-40 py-16" id="colors">
        <div className="max-w-[1600px] mx-auto">
          <div className="lg:ml-[5%] lg:flex pr-8 lg:px-0 px-8 gap-x-8">
            <div className="lg:w-96">
              <h2 className="lg:text-5xl font-semibold pt-8">
                Colors Availables
              </h2>
              <p className="font-semibold leading-8 text-[17px] py-8">
                The Company was started by Adolf Dassler in his mother`s house
                he was joined there feet.
              </p>
              <span className="flex gap-x-4 mt-8">
                <button
                  onClick={handlePrevious}
                  className="bg-black rounded-full border-none outline-none cursor-pointer w-11 h-11"
                >
                  <IoIosArrowBack className="text-3xl text-[#f5ba6e] m-auto inline-block" />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-black rounded-full border-none outline-none cursor-pointer w-11 h-11"
                >
                  <IoIosArrowForward className="text-3xl text-[#f5ba6e] m-auto inline-block" />
                </button>
              </span>
            </div>
            <div className="w-full lg:pt-0 pt-12 overflow-hidden">
              <Carousel
                swipeable={true}
                draggable={false}
                responsive={responsive}
                ssr={true}
                infinite
                autoPlay={true}
                arrows={false}
                keyBoardControl={true}
                renderButtonGroupOutside={true}
                ref={carouselRef}
              >
                <Card
                  title="Air Retront 1 Retro High Pine Golden"
                  image="/logo-black.png"
                />
                <Card
                  title="Air Retront 1 Retro High Pine Green"
                  image="/logo-black.png"
                />
                <Card
                  title="Air Retront 1 Retro High Pine Red"
                  image="/logo-black.png"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
