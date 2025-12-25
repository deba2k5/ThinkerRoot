"use client";
import React from "react";
import Image from "next/image";
import venueImage from "@/assets/venue-partner.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const VenuePartner = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section id="venue" ref={sectionRef} className="bg-white py-24 overflow-hidden">
            <div className="container">
                <div className="flex justify-center mb-16">
                    <div className="tag">Community</div>
                </div>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        style={{ translateY: imageY }}
                        className="flex-1 w-full relative group"
                    >
                        <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 rounded-xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                        <Image
                            src={venueImage}
                            alt="Bridgeon Venue Partner"
                            className="w-full h-auto rounded-xl border-2 border-black bg-white object-cover transition-all duration-500"
                        />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center md:text-left"
                    >
                        <h2 className="text-5xl md:text-7xl font-bold font-oswald mb-8 uppercase tracking-tight">Venue Partner</h2>
                        <div className="w-20 h-1 bg-black mb-8 mx-auto md:mx-0"></div>
                        <p className="text-xl md:text-2xl text-black/70 leading-relaxed font-light font-oswald">
                            &quot;We sincerely thank <span className="text-black font-bold">Bridgeon</span> for providing an offline workspace for our volunteers, ensuring seamless coordination, stable connectivity, and uninterrupted event operations despite the event being conducted online.&quot;
                        </p>

                        <div className="mt-8 flex gap-4 justify-center md:justify-start">
                            <div className="h-3 w-3 rounded-full bg-red-600"></div>
                            <div className="h-3 w-3 rounded-full bg-black"></div>
                            <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
