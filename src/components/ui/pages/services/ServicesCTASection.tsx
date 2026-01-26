'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesCTASection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".cta-content", {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom-=100",
                toggleActions: "play none none none",
            }
        });
    }, { scope: containerRef });

    return (
        <section 
            ref={containerRef}
            className="relative px-6 py-20"
        >
            <div className="max-w-5xl mx-auto">
                {/* CTA card */}
                <div className="cta-content relative bg-gradient-to-br from-pink/10 via-green/10 to-pink/5 border border-foreground/10 rounded-3xl p-12 md:p-16 overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-green/20 rounded-full blur-3xl" />
                    
                    {/* Content */}
                    <div className="relative z-10 text-center space-y-8">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            Ready to Start Your{' '}
                            <span className="text-pink">Project</span>?
                        </h2>
                        
                        <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto">
                            Let&apos;s collaborate and turn your ideas into reality. 
                            Get in touch with us today!
                        </p>

                        {/* CTA buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <Link 
                                href="/contact"
                                className="group relative px-8 py-4 bg-pink text-gray font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105"
                            >
                                <span className="relative z-10">Get Started</span>
                                <div className="absolute inset-0 bg-green transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                                <span className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Get Started
                                </span>
                            </Link>
                            
                            <Link 
                                href="/about"
                                className="px-8 py-4 border-2 border-foreground/20 text-foreground font-bold text-lg rounded-full hover:border-foreground/40 transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Additional info */}
                        <div className="pt-8 flex flex-wrap justify-center gap-8 text-foreground/60">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green" />
                                <span>Fast Delivery</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-pink" />
                                <span>Quality Assured</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green" />
                                <span>24/7 Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
