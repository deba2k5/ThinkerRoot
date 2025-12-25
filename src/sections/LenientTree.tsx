"use client";
import React from "react";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import tree1 from "@/assets/tree1.jpeg";
import tree2 from "@/assets/tree2.jpeg";
import tree3 from "@/assets/tree3.jpeg";
import tree4 from "@/assets/tree4.jpeg";

const images = [tree1, tree2, tree3, tree4, tree1, tree2]; // Duplicated for seamless loop

export const LenientTree = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={sectionRef} className="bg-white py-24 overflow-hidden relative">
            <motion.div style={{ translateY }} className="container mb-16">
                <div className="flex justify-center mb-10">
                    <div className="tag">Our Mission</div>
                </div>
                <h2 className="section-title text-center text-5xl md:text-8xl font-bold font-oswald mb-8 uppercase tracking-tight">
                    Lenient Tree & Our Team
                </h2>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="section-des text-xl md:text-2xl text-black/70 leading-relaxed font-light font-oswald">
                        &quot;Lenient tree is your go to platform for your career growth offering hands on workshops, portfolio help, hackathon preparation , startup support and guidance. We connect students and professionals to real world skills and innovations making the leap from classroom to career smoother , smarter and more exciting. Learn build and grow with us.&quot;
                    </p>
                </div>
            </motion.div>

            {/* Carousel */}
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                    className="flex gap-8 flex-none pr-8"
                    animate={{ translateX: "-50%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}
                >
                    {[...images, ...images].map((img, index) => (
                        <div key={index} className="relative w-[400px] h-[300px] md:w-[600px] md:h-[400px] rounded-2xl overflow-hidden border-[0.5px] border-black flex-shrink-0 group">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                            <Image
                                src={img}
                                alt={`Lenient Tree Team ${index}`}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="flex justify-center mt-10 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>

        </section>
    );
};
