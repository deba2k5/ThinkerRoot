"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import debangshuImage from "@/assets/debangshu-chatterjee.png";
import coreTeam1 from "@/assets/core-team-1.jpeg";

const teamMembers = [
  {
    name: "Debangshu Chatterjee",
    role: "Developer",
    image: debangshuImage,
  },
  {
    name: "Yuvraj Prasad",
    role: "Developer",
    image: coreTeam1,
  },
  {
    name: "Aranya Rath",
    role: "Developer",
    image: coreTeam1,
  },
];

export const DeveloperTeam = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="section-heading mb-12">
          <h2 className="section-title text-6xl md:text-8xl text-center font-oswald uppercase font-bold tracking-tighter">
            Developer Team
          </h2>
          <p className="section-des mt-5 text-center text-xl text-black/70 font-oswald font-light">
            Meet the minds building the future of innovation.
          </p>
        </div>

        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-10 flex-none pr-10"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={index}
                className="relative shrink-0 w-[280px] h-[380px] rounded-2xl overflow-hidden border-[0.5px] border-black/10 group shadow-lg"
              >
                {/* Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-2xl font-oswald font-bold uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-red-500 font-oswald font-medium tracking-tight">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
