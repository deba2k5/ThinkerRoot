"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax for cards (Kept as these affect the grid items, not the floating images)
  const cardOneY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const cardTwoY = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const cardThreeY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-light-gray py-24 overflow-x-clip relative"
    >
      <div className="container relative z-10">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">About Us</div>
          </div>

          <h2 className="section-title mt-5">ThinkerRoot IDEATHON 2025</h2>
          <p className="section-des mt-5">
            ThinkerRoot IDEATHON 2025 is a Web3-focused idea pitching platform
            powered by Lenient Tree, built to spotlight innovation across the
            ideathon and hackathon ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <motion.div style={{ translateY: cardOneY }} className="card">
            <h3 className="text-xl font-bold bg-gradient-to-b from-black to-darked text-transparent bg-clip-text">
              Spotlight Innovation
            </h3>
            <p className="text-black mt-2">
              Powered by Lenient Tree, we provide a unified stage to showcase
              bold ideas and ground-breaking solutions.
            </p>
          </motion.div>
          <motion.div style={{ translateY: cardTwoY }} className="card">
            <h3 className="text-xl font-bold bg-gradient-to-b from-black to-darked text-transparent bg-clip-text">
              Unified Stage
            </h3>
            <p className="text-black mt-2">
              Connecting startups, companies, hackathon winners, and student
              innovators in one ecosystem.
            </p>
          </motion.div>
          <motion.div style={{ translateY: cardThreeY }} className="card">
            <h3 className="text-xl font-bold bg-gradient-to-b from-black to-darked text-transparent bg-clip-text">
              Future-Ready Community
            </h3>
            <p className="text-black mt-2">
              Gain visibility and connect with a community driving decentralized
              technologies and real-world impact.
            </p>
          </motion.div>
        </div>
        {/* Floating images and their parallax logic have been removed from here */}
      </div>
    </section>
  );
};
