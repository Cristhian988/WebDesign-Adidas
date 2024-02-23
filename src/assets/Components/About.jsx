// import React from 'react'

import { HiCheck } from "react-icons/hi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

const responsive = {
    superLargeDesktop:{
        breakpoint: { max:4000, min:3000},
        items: 3,
    },
    desktop:{
        breakpoint: { max:3000, min:1024},
        items: 3,
    },
    tablet:{
        breakpoint: { max:1024, min:464},
        items: 2,
    },
    module:{
        breakpoint: { max:464, min:0},
        items: 1,
    },
}

// const customDots = ({index, onClick}) = {
//     return 
//     <li onClick={onClick} className="pl-8">
//         {index === 0 && (
//             <button className="rounded-full w-3 h-3 bg-red-500 border border-white border-solid cursor-pointer"></button>
//         )}
//         {index === 1 && (
//             <button className="rounded-full w-3 h-3 bg-yellow-500 border border-white border-solid cursor-pointer"></button>
//         )}
//         {index === 2 && (
//             <button className="rounded-full w-3 h-3 bg-green-500 border border-white border-solid cursor-pointer"></button>
//         )}
//     </li>
// }

export default function About() {
  return (
    <div className="bg-[#f9f9f9]">
        <div className="max-w-[1600px] xl:w-4/5 mx-auto lg:pt-24" id="about">
            <div className="lg:flex items-center justify-center lg:h-[35rem] my-24">
                <div className="bg-white shadow-2xl lg:w-1/3 lg:px-0 px-4 lg:pl-16 h-full flex flex-col justify-center">
                    <h1 className="lg:text-4/1 text-2xl font-semibold py-8">adidas <br />
                    Alphabounce
                    </h1>
                    <span className="flex items-center gap-x-4 py-3">
                        <button className="bg-[#feedd9] border-none outline-none px-2 py-1">
                            <HiCheck className="text-2xl"/>
                        </button>
                        <p className="font-bold text-lg">Torison Control System</p>
                    </span>
                    <span className="flex items-center gap-x-4 py-3">
                        <button className="bg-[#feedd9] border-none outline-none px-2 py-1">
                            <HiCheck className="text-2xl"/>
                        </button>
                        <p className="font-bold text-lg">Segments of Solid Rubber</p>
                    </span>
                    <span className="flex items-center gap-x-4 py-3">
                        <button className="bg-[#feedd9] border-none outline-none px-2 py-1">
                            <HiCheck className="text-2xl"/>
                        </button>
                        <p className="font-bold text-lg">Thin Mesh Sewr panel</p>
                    </span>
                    <span className="flex items-center gap-x-4 py-3">
                        <button className="bg-[#feedd9] border-none outline-none px-2 py-1">
                            <HiCheck className="text-2xl"/>
                        </button>
                        <p className="font-bold text-lg">Molded Sockliner Mimics</p>
                    </span>
                    <span className="flex items-center gap-x-4 py-3">
                        <button className="bg-[#feedd9] border-none outline-none px-2 py-1">
                            <HiCheck className="text-2xl"/>
                        </button>
                        <p className="font-bold text-lg">Waffle Outside Pistons</p>
                    </span>
                </div>
                <div className="lg:w-[50rem] h-full bg-white flex items-center relative">
                    <img src="/public/about.png" alt="shoe3" className="w-full" />
                    <img src="/public/logo-black.png" alt="logo" className="absolute bottom-0 w-full h-full opacity-5"/>
                </div>
            </div>
            <div className="lg:flex max-w-[1600px] lg:w-4/5 m-auto gap-x-8 pb-16 mb-4 px-4">
                <p className="lg:text-[2.1rem] text-2xl lg:pb-0 pb-4 font-bold lg:w-1/2">Adidas Primeknit upper wraps on the foot in adaptive support and ultralight comfort zone guaranteed.</p>
                <p className="lg:w-2/5 text-lg font-semibold">You want that product bad & can`t wait, then purchase immediately at the lowest ask; or make an offer that no seller can refuse.</p>
            </div>
        </div>
        <div className="bg-slide py-24 lg:overflow-hidden" id="features">
            <Carousel 
            swipeable={true}
            draggable={false}
            responsive={responsive}
            ssr={true}
            infinite
            autoPlay={true}
            arrows={false}
            showDots={true}
            // customDot={<CustomDots/>}
            keyBoardControl={true}
            renderButtonGroupOutside={true}
            className="py-12"
            >
                <div className="w-full">
                    <p className="text-[#fcbc6d] lg:text-5xl font-bold absolute lg:top-16 left-8">$240</p>
                    <img src="/public/shoeBlue.png" alt="blueShoe" className="w-full py-8 hoverBtn" />
                </div>
                <div className="w-full py-8 ">
                    <p className="text-[#fcbc6d] lg:text-5xl font-bold absolute lg:top-16 left-8">$280</p>
                    <img src="/public/shoeYellow.png" alt="yellowShoe" className="w-full"/>
                </div>
                <div className="w-full">
                    <p className="text-[#fcbc6d] lg:text-5xl font-bold absolute lg:top-16 left-8">$260</p>
                    <img src="/public/shoeGreen.png" alt="greenShoe" className="w-full py-8 hoverBtn" />
                </div>
            </Carousel>
        </div>
    </div>
  )
}
