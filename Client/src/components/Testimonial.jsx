/* eslint-disable no-unused-vars */
import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import {motion} from 'framer-motion'
const Testimonial = () => {
    return (
        <motion.div 
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}
        className="flex flex-col justify-center items-center my-20 py-12">
            <h1 className="text-3xl sm:text-4xl font-semibold">Customer Testimonial</h1>
            <p className="text-gray-500 mb-12">What our users are saying</p>

            <div className="flex flex-wrap gap-6">
            {
                testimonialsData.map((items, index) => (
                    <div key={index}
                    className="bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all">
                        <div className="flex flex-col justify-center items-center">
                            <img src={items.image} alt="" className="rounded-full w-14" />
                            <h2 className="text-x1 font-semibold mt-3">{items.name}</h2>
                            <p className="text-gray-500 mb-4">{items.role}</p>
                            <div className="flex mb-4">
                                {Array(items.stars).fill().map((items, index) => (
                                    <img key={index} src={assets.rating_star} />
                                ))}
                            </div>
                        <p className="text-center text-gray-400 text-sm">{items.text}</p>
                        </div>
                </div>
                ))
            }
            </div>
        </motion.div>
    )
}

export default Testimonial;