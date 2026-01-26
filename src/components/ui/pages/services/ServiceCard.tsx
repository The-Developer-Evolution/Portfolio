'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
    icon: IconType;
    title: string;
    description: string;
    features: string[];
    color: string;
    index: number;
}

export default function ServiceCard({ 
    icon: Icon, 
    title, 
    description, 
    features, 
    color,
    index 
}: ServiceCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(cardRef.current, {
            y: 60,
            opacity: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top bottom-=100",
                toggleActions: "play none none none",
            }
        });

        // Hover animation
        const card = cardRef.current;
        if (card) {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -10,
                    duration: 0.4,
                    ease: "power2.out"
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out"
                });
            });
        }
    }, { scope: cardRef });

    return (
        <div 
            ref={cardRef}
            className="group relative bg-background border border-foreground/10 rounded-2xl p-8 hover:border-foreground/20 transition-colors duration-300"
        >
            {/* Color accent */}
            <div 
                className="absolute top-0 left-0 w-2 h-full rounded-l-2xl"
                style={{ backgroundColor: color }}
            />

            {/* Icon */}
            <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-3xl"
                style={{ backgroundColor: `${color}20`, color: color }}
            >
                <Icon />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold mb-4">
                {title}
            </h3>

            {/* Description */}
            <p className="text-foreground/60 text-lg mb-6 leading-relaxed">
                {description}
            </p>

            {/* Features */}
            <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground/40 uppercase tracking-wider">
                    Key Features
                </p>
                <ul className="space-y-2">
                    {features.map((feature, idx) => (
                        <li 
                            key={idx}
                            className="flex items-start gap-2 text-foreground/70"
                        >
                            <span 
                                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: color }}
                            />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Hover gradient overlay */}
            <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: color }}
            />
        </div>
    );
}
