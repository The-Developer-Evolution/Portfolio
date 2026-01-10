import React from 'react'
import { RiChat1Line } from "react-icons/ri";
import { RiChat1Fill } from "react-icons/ri";
export default function LetsTalk() {
    return (
        <div className="fixed bottom-0 right-0 cursor-pointer hover:shadow-xl transition-shadow z-50">
            <div className="w-32 h-32 bg-green rounded-tl-full flex items-center justify-center relative">
                <RiChat1Line size={72} className="absolute top-4 -left-6 text-black z-4" />
                <RiChat1Fill size={72} className="absolute top-4 -left-6 text-white" />
                <p className="text-center text-black font-bold text-4xl mt-8 ml-8 font-futura-condensed">
                    {"LET'S"}
                    <br />
                    TALK
                </p>
            </div>
        </div>
    )
}
