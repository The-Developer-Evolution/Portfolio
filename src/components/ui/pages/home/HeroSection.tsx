import LogoLoop from "@/components/common/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
export default function HeroSection() {
    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    ];
    return (
        <section className="min-h-screen w-full flex justify-center items-center flex-col gap-4">
            <div className="flex flex-col justify-center items-center h-[80vh] w-full gap-4 text-center">
                <h1 className="text-4xl md:text-7xl xl:text-9xl text-white font-futura-condensed font-extrabold leading-6 md:leading-14 xl:leading-26">DEVOTE TO THE VISION</h1>
                <h1 className="text-4xl md:text-7xl xl:text-9xl text-pink font-futura-condensed font-extrabold leading-6 md:leading-14 xl:leading-26">DEVELOP THE INNOVATION</h1>
                <h1 className="text-4xl md:text-7xl xl:text-9xl text-white font-futura-condensed font-extrabold leading-6 md:leading-14 xl:leading-26">DELIVER THE SOLUTION</h1>
                <h4 className="mt-2 text-md md:text-xl text-gray-400 font-futura-medium w-[70%] md:w-1/2 text-center leading-6 md:leading-8">Engineering the future of your business with robust web architecture, next-generation gaming experiences, and reliable tech services that drive digital transformation.</h4>
            </div>
            <div className="w-full h-full">
                <LogoLoop
                    logos={techLogos}
                    speed={60}
                    direction="left"
                    logoHeight={48}
                    gap={80}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#000000"
                    ariaLabel="Technology partners"
                />
            </div>
        </section>
    );
}
