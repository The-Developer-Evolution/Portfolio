'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownRight } from 'lucide-react'; // Using lucide-react as seen in your Footer

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Animation for the Hero Title
        const tl = gsap.timeline({
        defaults: { ease: "power4.out" }
        });

        tl.from(".about-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        skewY: 5,
        transformOrigin: "left top"
        })
        .from(".about-desc", {
        y: 30,
        opacity: 0,
        duration: 1,
        }, "-=0.8");

        // Scroll Trigger for the Values Grid
        const cards = gsap.utils.toArray('.value-card');
        cards.forEach((card: any, index) => {
        gsap.from(card, {
            scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1
        });
        });

        // Image Parallax Effect
        gsap.to(".parallax-img", {
        scrollTrigger: {
            trigger: ".image-container",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        },
        y: -50,
        scale: 1.1
        });

    }, { scope: containerRef });

    const values = [
        { title: "INNOVATION", desc: "We don't just follow trends; we set them. Merging code and creativity to build the future." },
        { title: "PRECISION", desc: "Every pixel matters. Every line of code counts. We deliver flawless digital experiences." },
        { title: "PASSION", desc: "Driven by a love for technology and a commitment to solving complex problems." },
        { title: "COLLABORATION", desc: "Your vision is our blueprint. We work alongside you to turn ideas into reality." },
    ];

    return (
        <main ref={containerRef} className="bg-gray min-h-screen w-full text-white overflow-hidden pt-24 md:pt-32">
        
        {/* --- HERO SECTION --- */}
        <section className="px-6 md:px-12 lg:px-24 mb-24">
            <div className="border-b border-gray-700 pb-12">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-futura-condensed font-extrabold leading-[0.85] tracking-tight uppercase">
                <span className="block about-title overflow-hidden">We Are</span>
                <span className="block about-title text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                The Devo
                </span>
                <span className="block about-title text-green">Collective</span>
            </h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start mt-12 gap-12">
            <div className="w-full md:w-1/3 about-desc">
                <h3 className="text-2xl font-futura-condensed text-gray-400 uppercase tracking-widest">
                Who We Are
                </h3>
            </div>
            <div className="w-full md:w-2/3 about-desc">
                <p className="text-xl md:text-3xl font-futura-medium leading-relaxed text-white">
                We are a team of digital architects, engineers, and visionaries. 
                We believe that <span className="text-green">great design</span> meets <span className="text-pink">robust code</span>. 
                Inspired by the rapid evolution of the web, we build platforms that are fast, secure, and undeniably unique.
                </p>
            </div>
            </div>
        </section>

        {/* --- IMAGE / CULTURE SECTION --- */}
        <section className="w-full h-[60vh] md:h-[80vh] overflow-hidden relative image-container mb-24">
            {/* Placeholder image - Replace with your own team photo or office shot */}
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <Image 
            src="/images/projects/oweek-project.webp" // Used one of your existing images as a placeholder
            alt="Office Culture"
            fill
            className="object-cover parallax-img opacity-60"
            />
            <div className="absolute bottom-12 left-6 md:left-12 z-20">
                <h2 className="text-6xl md:text-8xl font-futura-condensed font-bold text-white uppercase mix-blend-overlay">
                    Culture & <br/> Craft
                </h2>
            </div>
        </section>

        {/* --- VALUES GRID --- */}
        <section className="px-6 md:px-12 lg:px-24 pb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {values.map((item, idx) => (
                    <div key={idx} className="value-card border-t border-gray-700 pt-6 group hover:border-green transition-colors duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-4xl md:text-5xl font-futura-condensed font-bold uppercase text-white group-hover:text-green transition-colors">
                                0{idx + 1}. {item.title}
                            </h3>
                            <ArrowDownRight className="text-gray-500 group-hover:text-green transform group-hover:rotate-[-45deg] transition-all duration-300" size={32} />
                        </div>
                        <p className="text-lg text-gray-400 font-futura-medium w-[90%]">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
        </main>
    );
}