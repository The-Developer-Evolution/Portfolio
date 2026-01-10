import Project from '@/components/common/Project';
import Link from 'next/link';

export default function ProjectsSection() {
  const projects = [
    {
      title: "O-WEEK 2025",
      imageUrl: "/images/projects/oweek-project.webp",
      description: "O-WEEK 2025 is an exciting event organized for new students at Universitas Ciputra. This week-long orientation program aims to welcome and introduce freshmen to campus life, academic culture, and various extracurricular activities. Through engaging sessions, interactive workshops, and fun social events, O-WEEK 2025 helps new students build connections, develop essential skills, and feel a sense of belonging within the university community."
    },
    {
      title: "ENTHUSIAST RUN",
      imageUrl: "/images/projects/enthusiast-project.webp",
      description: "Enthusiast Run is a thrilling running event designed for fitness enthusiasts and athletes of all levels. This event offers participants the opportunity to challenge themselves, improve their endurance, and connect with like-minded individuals who share a passion for running"
    },
    {
      title: "NPLC 2025",
      imageUrl: "/images/projects/nplc-project.webp",
      description: "NPLC 2025 (National Programming and Logic Competition) is an annual coding competition that brings together talented programmers from across the nation. The event aims to foster problem-solving skills, logical thinking, and coding proficiency among participants through a series of challenging programming tasks and algorithmic challenges."
    },
    {
      title: "HACKFEST 2026",
      imageUrl: "/images/projects/hackfest-project.webp",
      description: "Hackfest 2026 is an exhilarating hackathon event that brings together developers, designers, and tech enthusiasts to collaborate and innovate over a set period. Participants form teams to brainstorm, design, and build creative solutions to real-world problems using cutting-edge technologies."
    },
    {
      title: "RECTORCUP 2026",
      imageUrl: "/images/projects/rectorcup-project.webp",
      description: "RectorCup 2026 is an annual sports competition held among universities, fostering camaraderie and healthy competition among students. The event features a variety of sports disciplines, encouraging teamwork, sportsmanship, and physical fitness."
    },
    {
      title: "UC CHAMPIONS",
      imageUrl: "/images/projects/ucchampion-project.webp",
      description: "UC Champions is a prestigious recognition program that celebrates outstanding achievements and contributions of students, faculty, and staff at Universitas Ciputra. The program aims to acknowledge excellence in academics, leadership, community service, and innovation."
    },
    {
      title: "SEMBAKO BAYI PONOROGO",
      imageUrl: "/images/projects/sembakobayi-project.webp",
      description: "Sembako Bayi Ponorogo is a charitable initiative aimed at providing essential food supplies (sembako) to infants and young children in need within the Ponorogo region. This program focuses on improving the nutritional status and overall well-being of vulnerable children by distributing food packages containing staple items such as rice, milk, and other nutritious foods."
    }
  ];
  return (
    <section className="min-h-screen w-full flex justify-center items-center flex-col gap-4 py-20">
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-full ${index % 2 !== 0 ? 'md:mt-24' : 'md:-mt-16'}`}
          >
            <Project
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
            />
          </div>
        ))}
        <div className='flex flex-col gap-4 justify-center p-12 items-center relative w-full aspect-square bg-gray rounded-xl overflow-hidden shadow-lg' style={{borderRadius: '0.75rem'}}>
          <h3 className='text-white font-futura-condensed font-extrabold text-9xl text-start'>WANNA SEE MORE?</h3>
          <p className='text-gray-400 font-futura-medium text-xl'>
            Explore our portfolio and discover what we can achieve for you. Let’s create something extraordinary together.
          </p>
          <Link href="/works" className="bg-green px-4 py-2 text-gray rounded-lg font-bold text-xl font-futura-condensed hover:underline">
            SEE MORE
          </Link>
        </div>
      </div>
    </section>
  )
}
