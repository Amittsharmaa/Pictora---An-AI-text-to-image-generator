import React from 'react'
import { assets } from '../assets/assets'
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'
const Description = () => {
  return (
    <motion.div
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
     className='flex flex-col items-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold'>Create AI images</h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

        <div className='flex flex-col justify-center items-center gap-5 md:gap-14 md:flex-row'>
            <img src={assets.img5} alt="" className='w-80 xl:w-96 rounded-lg'/>

            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI powered Text to image Generator</h2>
                <p className='text-gray-600 mb-4'>Easily bring your ideas to life with our free AI image generator. Weather you need stunning visulas for unique imagery, our tool convert text into eye catching images with few clicks. Imagine it, describe it, and watch it come to life instantly</p>
                <p className='text-gray-600'>Simply type in a text promt, and our cutting - edge AI will generate high-quality image in seconds. From product visuals to character design and portraits, even concepts that don't yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative AI technology, the creative possibilities are limitless!</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Description