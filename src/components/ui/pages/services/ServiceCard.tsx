'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { IconType } from 'react-icons';
import { FaArrowDownLong } from 'react-icons/fa6';

interface ServiceCardProps {
    icon: IconType;
    title: string;
    description: string;
    features: string[];
    index: number;
}

export default function ServiceCard({ 
    icon: Icon, 
    title, 
    description, 
    features, 
    index 
}: ServiceCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(cardRef.current, {
            y: 80,
            opacity: 0,
            duration: 1.2,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top bottom-=50",
                toggleActions: "play none none none",
            }
        });
    }, { scope: cardRef });

    return (
        <div 
            ref={cardRef}
            className="relative border-t border-foreground/10 pt-8"
        >
            {/* Number and arrow */}
            <div className="flex items-start justify-between mb-6">
                <h3 className="text-7xl md:text-8xl font-black text-white">
                    0{index + 1}.
                </h3>
                <FaArrowDownLong className="text-green w-8 h-8 rotate-135" />
            </div>

            {/* Title */}
            <div className="flex items-center gap-4 mb-6">
                <Icon className="text-4xl text-foreground" />
                <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                    {title}
                </h4>
            </div>

            {/* Description */}
            <p className="text-foreground/60 text-base md:text-lg leading-relaxed mb-6">
                {description}
            </p>

            {/* Features list */}
            <ul className="space-y-2">
                {features.map((feature, idx) => (
                    <li 
                        key={idx}
                        className="text-foreground/70 text-sm md:text-base"
                    >
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}
