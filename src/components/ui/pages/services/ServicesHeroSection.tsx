'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesHeroSection() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power4.out" },
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",         
                end: "bottom top",            
                toggleActions: "restart none restart none", 
            }
        });

        tl.from(".services-hero-title", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            skewY: 7,
            transformOrigin: "left top"
        })
        .from(".services-hero-subtitle", {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        }, "-=0.8")
        .from(".services-hero-description", {
            y: 30,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out"
        }, "-=0.6");
        
    }, { scope: containerRef });

    return (
        <section 
            ref={containerRef}
            className="relative min-h-[80vh] flex items-center justify-center px-6 py-20 overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto w-full">
                <div className="space-y-8">
                    {/* Main heading */}
                    <div className="space-y-4">
                        <h1 className="services-hero-title text-7xl md:text-8xl lg:text-9xl font-black tracking-tight">
                            Our{' '}
                            <span className="text-pink">Services</span>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <p className="services-hero-subtitle text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/80 max-w-3xl">
                        Transforming ideas into digital reality
                    </p>

                    {/* Description */}
                    <p className="services-hero-description text-lg md:text-xl text-foreground/60 max-w-2xl leading-relaxed">
                        We specialize in creating exceptional digital experiences across web, mobile, and gaming platforms. 
                        Our team delivers innovative solutions tailored to your unique needs.
                    </p>
                </div>
            </div>
        </section>
    );
}
