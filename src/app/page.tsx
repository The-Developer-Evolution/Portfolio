import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="min-h-screen w-full flex justify-center items-center flex-col gap-4">
        <h1 className="text-4xl md:text-7xl text-white font-futura-condensed font-extrabold leading-6 md:leading-14">DEVOTE TO THE VISION</h1>
        <h1 className="text-4xl md:text-7xl text-pink font-futura-condensed font-extrabold leading-6 md:leading-14">DEVELOP THE INNOVATION</h1>
        <h1 className="text-4xl md:text-7xl text-white font-futura-condensed font-extrabold leading-6 md:leading-14">DELIVER THE SOLUTION</h1>
        <h4 className="mt-2 text-md md:text-xl text-gray-400 font-futura-medium w-[70%] md:w-1/3 text-center">Engineering the future of your business with robust web architecture, next-generation gaming experiences, and reliable tech services that drive digital transformation.</h4>
      </section>
      <div className="min-h-screen w-screen"></div>
    </main>
  );
}
