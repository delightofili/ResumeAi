"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["Standout", "Professional", "ATS-Ready", "Impressive"];

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-[#0d1321]">
      {/* 1. ADDED z-0 TO THE BACKGROUND CONTAINER */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-600/10 rounded-full blur-[100px]" />
        {/* grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* 2. ADDED z-10 TO THIS CONTENT CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Powered by GPT-4o — 100% free to start
        </div>

        {/* headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-white">
          Build a{" "}
          <span
            className={`gradient-text transition-[opacity,transform] duration-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            } inline-block`}
          >
            {words[currentWord]}
          </span>
          <br />
          Resume in Minutes
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          AI-powered suggestions, live preview, ATS optimization, and beautiful
          templates — everything you need to land your dream job.
        </p>

        {/* cta buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/builder"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-base hover:opacity-90 transition-all hover:scale-105 active:scale-100 animate-pulse-glow"
          >
            Build my resume — it&apos;s free
          </Link>

          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 text-slate-300 font-medium text-base hover:bg-white/5 transition-all"
          >
            See how it works →
          </a>
        </div>

        {/* stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
          {[
            { value: "10,000+", label: "Resumes created" },
            { value: "94%", label: "ATS pass rate" },
            { value: "2 min", label: "Average build time" },
            { value: "Free", label: "No credit card needed" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="gradient-border rounded-2xl p-0.5">
            <div className="bg-[#0d1321] rounded-2xl p-6">
              {/* fake browser chrome */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <div className="flex-1 bg-white/5 rounded-md h-6 mx-4 flex items-center px-3">
                  <span className="text-slate-500 text-xs">
                    delresumeai.vercel.app/builder
                  </span>
                </div>
              </div>

              {/* fake builder UI */}
              <div className="grid grid-cols-5 gap-3 h-48">
                {/* left panel */}
                <div className="col-span-2 bg-[#131c30] rounded-xl p-3 flex flex-col gap-2">
                  {["Personal info", "Experience", "Education", "Skills"].map(
                    (step, i) => (
                      <div
                        key={step}
                        className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs ${
                          i === 1
                            ? "bg-blue-500/20 text-blue-400"
                            : "text-slate-500"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] ${
                            i < 1
                              ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                              : i === 1
                                ? "border border-blue-500 text-blue-400"
                                : "border border-white/10 text-slate-600"
                          }`}
                        >
                          {i < 1 ? "✓" : i + 1}
                        </div>
                        {step}
                      </div>
                    ),
                  )}
                </div>

                {/* right panel - resume preview */}
                <div className="col-span-3 bg-white rounded-xl p-3 overflow-hidden text-left">
                  <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-lg p-2.5 mb-2">
                    <div className="text-white font-bold text-xs">
                      Delightsome Ofili
                    </div>
                    <div className="text-blue-200 text-[9px]">
                      Fullstack Developer
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 bg-slate-200 rounded w-full" />
                    <div className="h-1.5 bg-slate-200 rounded w-4/5" />
                    <div className="h-1.5 bg-slate-100 rounded w-3/5" />
                    <div className="h-1.5 bg-slate-200 rounded w-full mt-2" />
                    <div className="h-1.5 bg-slate-200 rounded w-5/6" />
                    <div className="flex gap-1 mt-2">
                      {["React", "Node.js", "TypeScript"].map((s) => (
                        <span
                          key={s}
                          className="text-[7px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
