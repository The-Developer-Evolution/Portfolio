'use client';

import React from 'react';
import ServiceCard from './ServiceCard';
import { SiReact, SiAndroid, SiUnity } from 'react-icons/si';

export default function ServicesShowcaseSection() {
    const services = [
        {
            icon: SiReact,
            title: "Web Development",
            description: "Create powerful, responsive, and scalable web applications that deliver exceptional user experiences across all devices.",
            features: [
                "Modern responsive design",
                "Progressive Web Apps (PWA)",
                "E-commerce solutions",
                "Custom CMS development",
                "API integration & development",
                "Performance optimization"
            ],
            color: "#61DAFB"
        },
        {
            icon: SiAndroid,
            title: "Android Development",
            description: "Build native Android applications with cutting-edge technology, ensuring smooth performance and intuitive user interfaces.",
            features: [
                "Native Android apps",
                "Material Design implementation",
                "Real-time features & push notifications",
                "Offline-first architecture",
                "Play Store optimization",
                "Cross-device compatibility"
            ],
            color: "#3DDC84"
        },
        {
            icon: SiUnity,
            title: "Game Development",
            description: "Craft immersive gaming experiences with stunning visuals, engaging gameplay mechanics, and seamless performance.",
            features: [
                "2D & 3D game development",
                "Cross-platform deployment",
                "Multiplayer functionality",
                "In-game monetization",
                "Physics & animation systems",
                "Performance optimization"
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
                            color={service.color}
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
