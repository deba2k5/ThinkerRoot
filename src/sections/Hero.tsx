"use client";
import lenientTreeImage from "@/assets/lenienttree.png";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip bg-white"
      style={{ background: "radial-gradient(ellipse 200% 100% at bottom left, #F2F2F2, #FFFFFF 100%)" }}
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px] text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold font-oswald tracking-tighter text-black mt-6">
              ThinkerRoot IDEATHON 2025
            </h1>
            <p className="text-xl text-black/80 tracking-tight mt-6 font-oswald font-light">
              ThinkerRoot IDEATHON 2025 is a web3 focused idea pitching platform powered by Lenient Tree, created to showcase startups, companies, hackathon winners and students exploring the ideathon and hackathon ecosystem.
            </p>
            <div className="flex justify-center md:justify-start mt-[30px]">
              <button className="btn btn-primary font-oswald tracking-wide">Registration Closed</button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={lenientTreeImage.src}
              alt="Lenient tree"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:left-6 lg:left-0"
              animate={{
                translateY: [-20, 20],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="Noodle image"
              className="hidden lg:block top-[524px] left-[448px] absolute rotate-[30deg] opacity-50"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
