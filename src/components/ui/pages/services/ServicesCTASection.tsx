'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { FaArrowDownLong } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesCTASection() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power4.out" },
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                end: "bottom top",
                toggleActions: "restart none restart none",
            }
        });

        tl.from(".cta-title", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            skewY: 7,
            transformOrigin: "left top"
        })
        .from(".cta-subtitle", {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        }, "-=0.8")
        .from(".cta-arrow", {
            y: 50,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out"
        }, "-=0.8");
    }, { scope: containerRef });

    return (
        <section 
            ref={containerRef}
            className="w-full flex justify-center items-center flex-col gap-4 relative overflow-hidden px-6 py-32"
        >
            <div className="flex flex-col justify-center items-center w-fit gap-8 text-center relative">
                {/* Decorative arrows */}
                <FaArrowDownLong className="absolute -top-12 right-0 text-green w-12 md:w-16 h-auto rotate-45 cta-arrow" />
                <FaArrowDownLong className="absolute -top-12 left-0 text-green w-12 md:w-16 h-auto -rotate-45 cta-arrow" />
                
                {/* Main heading */}
                <h2 className="text-4xl md:text-6xl xl:text-8xl text-white font-futura-condensed font-extrabold leading-tight cta-title">
                    READY TO BUILD SOMETHING
                </h2>
                <h2 className="text-4xl md:text-6xl xl:text-8xl font-futura-condensed font-extrabold leading-tight cta-title">
                    <span className="text-pink">GREAT</span>?
                </h2>
                
                {/* Subtitle */}
                <p className="mt-4 text-md md:text-xl text-gray-400 font-futura-medium w-[90%] md:w-[70%] text-center leading-8 cta-subtitle">
                    Let&apos;s collaborate and transform your vision into digital excellence. 
                    Our team is ready to bring your ideas to life.
                </p>

                {/* CTA Button */}
                <Link 
                    href="/contact"
                    className="cta-subtitle mt-4 px-10 py-4 bg-green text-gray font-bold text-lg uppercase tracking-wide hover:bg-pink transition-colors duration-300"
                >
                    Start Your Project
                </Link>

                {/* Bottom arrows */}
                <FaArrowDownLong className="absolute -bottom-12 right-0 text-green w-12 md:w-16 h-auto rotate-135 cta-arrow" />
                <FaArrowDownLong className="absolute -bottom-12 left-0 text-green w-12 md:w-16 h-auto -rotate-135 cta-arrow" />
            </div>
        </section>
    );
}
