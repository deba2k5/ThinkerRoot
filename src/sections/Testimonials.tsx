"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ---------------- DATA ---------------- */

const timelineData = [
  {
    date: "Dec 15",
    title: "Registration closes",
    description: "Last chance to join the innovation journey!",
  },
  {
    date: "Dec 16",
    title: "Idea submission starts",
    description: "Portal opens for submitting your groundbreaking concepts.",
  },
  {
    date: "Dec 20",
    title: "Idea submission ends",
    description: "Final deadline to submit your projects.",
  },
  {
    date: "Dec 21 - 23",
    title: "Preliminary selection",
    description: "Our expert panel reviews all valid entries.",
  },
  {
    date: "Dec 26",
    title: "Final Winner announcement",
    description: "Celebrating the top innovators of 2025!",
  },
];

/* ---------------- MAIN COMPONENT ---------------- */

export default function ThinkerRootTimeline() {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Animate the central vertical line height as the user scrolls
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 70%", // Starts when the top of the timeline is 70% down the viewport
          end: "bottom 80%",
          scrub: 0.5,
        },
      }
    );

    // 2. Animate each node (dot) and its corresponding text card
    timelineData.forEach((_, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRefs.current[i],
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Red Circle "Pop" Animation
      tl.fromTo(
        dotRefs.current[i],
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(2)",
        }
      );

      // Text Fade-in from Left to Right
      tl.fromTo(
        cardRefs.current[i],
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.3" // Slight overlap with the dot animation
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="bg-white py-20 font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* SECTION HEADING */}
        <div className="mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Timeline of <span className="text-red-600">ThinkerRoot</span>
          </h2>
          <div className="mt-4 h-1.5 w-20 bg-red-600 rounded-full" />
        </div>

        {/* TIMELINE TRACK */}
        <div ref={triggerRef} className="relative">
          {/* BACKGROUND TRACK (Gray Line) */}
          <div className="absolute left-[13px] top-0 h-full w-[4px] bg-slate-100 rounded-full" />

          {/* ANIMATED PROGRESS TRACK (Red Line) */}
          <div
            ref={lineRef}
            className="absolute left-[13px] top-0 h-full w-[4px] bg-red-600 origin-top rounded-full shadow-[0_0_8px_rgba(220,38,38,0.3)]"
          />

          {/* TIMELINE ITEMS */}
          <div className="space-y-16">
            {timelineData.map((item, i) => (
              <div key={i} className="relative flex items-start pl-12">
                {/* THE RED NODE (DOT) */}
                <div
                  ref={(el) => {
                    dotRefs.current[i] = el;
                  }}
                  className="absolute left-0 top-1 z-10 flex h-7 w-7 items-center justify-center rounded-full border-[5px] border-white bg-red-600 shadow-md"
                />

                {/* CONTENT CARD */}
                <div
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6"
                >
                  {/* Date Label */}
                  <span className="text-xl font-bold text-slate-900 whitespace-nowrap min-w-[120px]">
                    {item.date} :
                  </span>

                  {/* Text Details */}
                  <div className="max-w-lg">
                    <h3 className="text-xl font-bold text-slate-800 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-base text-slate-500 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
