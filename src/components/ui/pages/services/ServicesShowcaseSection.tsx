'use client';

import React from 'react';
import ServiceCard from './ServiceCard';
import { SiReact, SiAndroid, SiUnity } from 'react-icons/si';

export default function ServicesShowcaseSection() {
    const services = [
        {
            icon: SiReact,
            title: "Web Development",
            description: "We focus on making fullstack or static web applications with clean minimalist or robust maximalist design. Capable of using multiple frameworks like Laravel, Next.js, and Vite, along with various libraries—or we can learn them when needed.",
            features: [
                "Fullstack & static web applications",
                "Minimalist or maximalist design approach",
                "Multiple frameworks (Laravel, Next.js, Vite)",
                "Progressive Web Apps (PWA)",
                "E-commerce solutions",
                "API integration & development"
            ],
            color: "#61DAFB"
        },
        {
            icon: SiAndroid,
            title: "Android Development",
            description: "We focus on making Android applications with backend integration using Prisma and Express. Whether it's a small everyday app or a work-like ecommerce application, we deliver with multiple design styles tailored to your needs.",
            features: [
                "Backend integration (Prisma & Express)",
                "Everyday utility apps",
                "E-commerce applications",
                "Multiple design styles",
                "Real-time features & push notifications",
                "Play Store optimization"
            ],
            color: "#3DDC84"
        },
        {
            icon: SiUnity,
            title: "Game Development",
            description: "We focus on making 2D games with multiplayer functionality and backend integration. While we're still learning and expanding our capabilities, we're committed to delivering engaging gaming experiences.",
            features: [
                "2D game development",
                "Multiplayer functionality",
                "Backend integration",
                "Unity engine expertise",
                "Physics & animation systems",
                "Continuous learning & improvement"
            ],
            color: "#000000"
        }
    ];

    return (
        <section className="relative px-6 py-20">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="mb-16 text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        What We <span className="text-green">Offer</span>
                    </h2>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to bring your vision to life
                    </p>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            features={service.features}
                            index={index}
                        />
                    ))}
                </div>

                {/* Coming soon note */}
                <div className="mt-16 text-center">
                    <p className="text-lg text-foreground/40 italic">
                        More services coming soon...
                    </p>
                </div>
            </div>
        </section>
    );
}
