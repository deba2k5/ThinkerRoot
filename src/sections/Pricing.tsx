"use client";
import host1 from "@/assets/host 1.jpeg";
import judge1 from "@/assets/judge 1.jpeg";
import judge2 from "@/assets/judge 2.jpeg";
import judge3 from "@/assets/judge 3.jpeg";
import judge4 from "@/assets/judge 4.jpeg";
import judge5 from "@/assets/judge 5.jpeg";
import moderator1 from "@/assets/moderator 1.jpeg";
import moderator2 from "@/assets/moderator 2.jpeg";
import moderator3 from "@/assets/moderator 3.jpeg";
import moderator4 from "@/assets/moderator 4.jpeg";
import moderator5 from "@/assets/moderator 5.jpeg";
import screener1 from "@/assets/screener 1.jpeg";
import screener2 from "@/assets/screener 2.jpeg";
import screener3 from "@/assets/screener 3.jpeg";
import screener4 from "@/assets/screener 4.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";

const judges = [judge1, judge2, judge3, judge4, judge5];
const moderators = [moderator1, moderator2, moderator3, moderator4, moderator5];
const screeners = [screener1, screener2, screener3, screener4];

export const Pricing = () => {
  return (
    <section id="panel" className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title text-6xl md:text-8xl">Meet the Panel</h2>
          <p className="section-des mt-5 text-2xl">
            The brilliant minds behind ThinkerRoot IDEATHON 2025.
          </p>
        </div>

        {/* Host Section */}
        <div className="mt-14 flex flex-col items-center">
          <h3 className="text-5xl font-bold mb-8 bg-gradient-to-b from-black to-darked text-transparent bg-clip-text">Host</h3>
          <div className="p-3 rounded-2xl border-[0.5px] border-black/5 shadow-xl hover:scale-105 transition-transform duration-300 bg-white">
            <Image src={host1} alt="Host" className="rounded-xl h-[400px] w-[300px] object-cover" />
          </div>
        </div>

        {/* Judges Section */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center mb-8 text-black/80">Judges</h3>
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex gap-8 flex-none pr-8"
              animate={{ translateX: "-50%" }}
              initial={{ translateX: "0%" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {[...judges, ...judges].map((judge, index) => (
                <div key={index} className="flex-none p-3 rounded-2xl border-[0.5px] border-black/5 shadow-lg bg-white hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Image
                    src={judge}
                    alt={`Judge ${index + 1}`}
                    className="rounded-xl h-[320px] w-[240px] object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Moderators Section */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center mb-8 text-black/80">Moderators</h3>
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex gap-8 flex-none pr-8"
              animate={{ translateX: "-50%" }}
              initial={{ translateX: "0%" }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {[...moderators, ...moderators].map((mod, index) => (
                <div key={index} className="flex-none p-3 rounded-2xl border-[0.5px] border-black/5 shadow-lg bg-white hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Image
                    src={mod}
                    alt={`Moderator ${index + 1}`}
                    className="rounded-xl h-[320px] w-[240px] object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Screeners Section */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center mb-8 text-black/80">Screeners</h3>
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex gap-8 flex-none pr-8"
              animate={{ translateX: "-50%" }}
              initial={{ translateX: "0%" }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {[...screeners, ...screeners].map((screener, index) => (
                <div key={index} className="flex-none p-3 rounded-2xl border-[0.5px] border-black/5 shadow-lg bg-white hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Image
                    src={screener}
                    alt={`Screener ${index + 1}`}
                    className="rounded-xl h-[320px] w-[240px] object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
