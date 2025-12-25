"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ---------------- DATA ---------------- */

const timelineData = [
  {
    date: "15th Dec",
    fullDate: "15th December",
    title: "Registration Closes",
    description: "Last chance to join the innovation journey!",
  },
  {
    date: "16th Dec",
    fullDate: "16th December",
    title: "Idea Submission Starts",
    description: "Portal opens for submitting your groundbreaking concepts.",
  },
  {
    date: "20th Dec",
    fullDate: "20th December",
    title: "Idea Submission Ends",
    description: "Final deadline to submit your projects.",
  },
  {
    date: "21–23 Dec",
    fullDate: "21st – 23rd December",
    title: "Preliminary Screening",
    description: "Our expert panel reviews all valid entries.",
  },
  {
    date: "26th Dec",
    fullDate: "26th December",
    title: "Winner Announcement",
    description: "Celebrating the top innovators of 2025!",
  },
];

/* ---------------- CARD ---------------- */

function TimelineItem({ item, top, align, refCb }: any) {
  return (
    <div
      ref={refCb}
      className={`absolute w-full md:w-1/2 ${align}`}
      style={{ top, transform: "translateY(-50%)" }}
    >
      <div
        className={`flex ${
          align === "left-0" ? "justify-end md:pr-10" : "justify-start md:pl-10"
        }`}
      >
        <div className="max-w-[280px] w-full rounded-xl border border-red-200 bg-white p-3 shadow-lg">
          <div className="flex justify-between mb-1">
            <span className="text-[10px] font-bold text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded-full border border-cyan-300">
              {item.date}
            </span>
            <span className="text-[9px] text-red-600">{item.fullDate}</span>
          </div>
          <h3 className="text-sm font-bold text-red-700">{item.title}</h3>
          <p className="text-[10px] text-slate-700">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- MAIN ---------------- */

export default function StrongDiagonalTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleRefs = useRef<(SVGCircleElement | null)[]>([]);

  const itemSpacing = 210;
  const startY = 220;
  const endPadding = 220;

  const svgHeight =
    startY + (timelineData.length - 1) * itemSpacing + endPadding;

  const START_X = -140;
  const END_X = 230;
  const svgWidth = END_X - START_X;

  /* ---------------- PATH ---------------- */

  const curvePath = (() => {
    const zig = 14;
    let d = `M ${START_X} ${startY}`;

    for (let i = 1; i < timelineData.length; i++) {
      const y = startY + i * itemSpacing;
      const prevY = startY + (i - 1) * itemSpacing;
      const t = i / (timelineData.length - 1);
      const x = START_X + (END_X - START_X) * t;
      const z = i % 2 === 0 ? -zig : zig;

      d += ` C ${START_X + z} ${prevY + itemSpacing / 2},
               ${x - z} ${y - itemSpacing / 2},
               ${x} ${y}`;
    }
    return d;
  })();

  /* ---------------- GSAP ---------------- */

  useEffect(() => {
    if (!containerRef.current || !pathRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    gsap.set(cardRefs.current, { opacity: 0, y: 30, scale: 0.95 });
    gsap.set(circleRefs.current, { opacity: 0, scale: 0 });

    const scrollDistance = svgHeight - containerRef.current.clientHeight;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        scroller: containerRef.current,
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: true,
      },
    });

    tl.to(path, { strokeDashoffset: 0, ease: "none" }, 0);

    tl.eventCallback("onUpdate", () => {
      const progress = tl.scrollTrigger!.progress;

      timelineData.forEach((_, i) => {
        const show = progress >= i / (timelineData.length - 1);

        gsap.to(cardRefs.current[i], {
          opacity: show ? 1 : 0,
          y: show ? 0 : 30,
          scale: show ? 1 : 0.95,
          duration: 0.2,
          overwrite: "auto",
        });

        gsap.to(circleRefs.current[i], {
          opacity: show ? 1 : 0,
          scale: show ? 1 : 0,
          duration: 0.2,
          overwrite: "auto",
        });
      });
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [svgHeight]);

  /* ---------------- RENDER ---------------- */

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* -------- HEADING -------- */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Timeline
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-cyan-500" />
          <p className="mt-3 text-sm text-slate-500">
            Key milestones and important dates
          </p>
        </div>

        {/* -------- TIMELINE WINDOW -------- */}
        <div
          ref={containerRef}
          className="relative h-[80vh] overflow-y-auto rounded-2xl border border-red-300 bg-white"
        >
          <div
            ref={contentRef}
            className="relative"
            style={{ height: svgHeight }}
          >
            <svg
              viewBox={`${START_X} 0 ${svgWidth} ${svgHeight}`}
              className="absolute hidden w-full md:block"
              style={{ height: svgHeight }}
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {timelineData.map((_, i) => (
                  <radialGradient
                    key={i}
                    id={`circleGradient-${i}`}
                    cx="30%"
                    cy="30%"
                    r="70%"
                  >
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#e5e7eb" />
                  </radialGradient>
                ))}
              </defs>

              <path
                d={curvePath}
                stroke="#ffffff"
                strokeWidth="4"
                fill="none"
              />

              <path
                ref={pathRef}
                d={curvePath}
                stroke="#ff1744"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                filter="drop-shadow(0 0 20px rgba(255, 23, 68, 0.7))"
              />

              {timelineData.map((_, i) => {
                const t = i / (timelineData.length - 1);
                const x = START_X + (END_X - START_X) * t;

                return (
                  <circle
                    key={i}
                    ref={(el) => {
                      circleRefs.current[i] = el;
                    }}
                    cx={x}
                    cy={startY + i * itemSpacing}
                    r="6"
                    fill={`url(#circleGradient-${i})`}
                    stroke="#06b6d4"
                    strokeWidth="2"
                    filter="url(#glow)"
                  />
                );
              })}
            </svg>

            <div className="relative w-full" style={{ height: svgHeight }}>
              {timelineData.map((item, i) => (
                <TimelineItem
                  key={i}
                  item={item}
                  top={startY + i * itemSpacing}
                  align={i % 2 === 0 ? "left-0" : "right-0"}
                  refCb={(el: HTMLDivElement | null) => {
                    cardRefs.current[i] = el;
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
