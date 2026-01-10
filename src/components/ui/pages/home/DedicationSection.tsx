import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";

export default function DedicationSection() {
    return (
        <section className="w-full flex justify-center items-center flex-col gap-4 relative overflow-hidden">
            <div className="flex flex-col justify-center items-center w-fit gap-4 text-center py-24 relative">
                <FaArrowDownLong className='absolute top-0 right-0 text-green w-12 md:w-18 h-auto rotate-45'/>
                <FaArrowDownLong className='absolute top-0 left-0 text-green w-12 md:w-18 h-auto -rotate-45'/>
                <FaArrowDownLong className='absolute bottom-0 right-0 text-green w-12 md:w-18 h-auto rotate-135'/>
                <FaArrowDownLong className='absolute bottom-0 left-0 text-green w-12 md:w-18 h-auto -rotate-135'/>
                <h1 className="text-3xl md:text-6xl xl:text-8xl text-white font-futura-condensed font-extrabold leading-6 md:leading-10 xl:leading-20">DEDICATED TO DELIVER RESULTS</h1>
                <h1 className="text-3xl md:text-6xl xl:text-8xl text-white font-futura-condensed font-extrabold leading-6 md:leading-10 xl:leading-20">DEVOTED TO YOUR SUCCESS</h1>
                <h4 className="mt-2 text-md md:text-xl text-gray-400 font-futura-medium w-[70%] text-center leading-8">Collaboration is at the core of everything we do. Your goals shape the strategy, drive our creative innovation, and define success at every stage.</h4>
            </div>
        </section>
    )
}
