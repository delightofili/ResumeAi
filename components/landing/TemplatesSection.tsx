"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TemplatesSection() {
  return (
    <section id="templates" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-sm mb-6">
            2 beautiful templates
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pick your <span className="gradient-text">style</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Both templates are ATS-friendly and professionally designed to make
            hiring managers stop scrolling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* modern template */}
          <TemplateCard
            name="Modern"
            description="Bold gradient header, clean layout. Perfect for tech and creative roles."
            badge="Most popular"
            badgeColor="bg-blue-500/20 text-blue-400 border-blue-500/30"
            delay={0}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-5">
                <div className="text-white font-bold text-base">
                  Nonso Ofili
                </div>
                <div className="text-blue-200 text-xs mt-0.5">
                  Fullstack Developer
                </div>
                <div className="flex gap-3 mt-2">
                  <span className="text-blue-200 text-[10px]">
                    nonso@gmail.com
                  </span>
                  <span className="text-blue-200 text-[10px]">
                    Lagos, Nigeria
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <div className="text-[9px] font-bold text-blue-600 uppercase tracking-wider border-b border-blue-100 pb-1 mb-2">
                    Experience
                  </div>
                  <div className="text-[10px] font-semibold text-slate-800">
                    Fullstack Developer — TechCorp
                  </div>
                  <div className="text-[9px] text-slate-500">
                    2023 – Present
                  </div>
                  <div className="text-[9px] text-slate-600 mt-1">
                    Built scalable web applications using React and Node.js
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-bold text-blue-600 uppercase tracking-wider border-b border-blue-100 pb-1 mb-2">
                    Skills
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {["React", "Node.js", "TypeScript", "PostgreSQL"].map(
                      (s) => (
                        <span
                          key={s}
                          className="text-[8px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded"
                        >
                          {s}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </TemplateCard>

          {/* minimal template */}
          <TemplateCard
            name="Minimal"
            description="Clean typography, subtle accents. Perfect for corporate and traditional roles."
            badge="Clean & elegant"
            badgeColor="bg-purple-500/20 text-purple-400 border-purple-500/30"
            delay={150}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <div className="p-5 border-b-2 border-slate-800">
                <div className="text-slate-900 font-bold text-base">
                  Nonso Ofili
                </div>
                <div className="text-slate-500 text-xs mt-0.5">
                  Fullstack Developer
                </div>
                <div className="flex gap-3 mt-1.5">
                  <span className="text-slate-400 text-[10px]">
                    nonso@gmail.com
                  </span>
                  <span className="text-slate-400 text-[10px]">
                    Lagos, Nigeria
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <div className="text-[9px] font-bold text-slate-900 uppercase tracking-widest mb-2">
                    Experience
                  </div>
                  <div className="text-[10px] font-semibold text-slate-800">
                    Fullstack Developer — TechCorp
                  </div>
                  <div className="text-[9px] text-slate-400">
                    2023 – Present
                  </div>
                  <div className="text-[9px] text-slate-600 mt-1">
                    Built scalable web applications using React and Node.js
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-bold text-slate-900 uppercase tracking-widest mb-2">
                    Skills
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {["React", "Node.js", "TypeScript", "PostgreSQL"].map(
                      (s) => (
                        <span
                          key={s}
                          className="text-[8px] border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded"
                        >
                          {s}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </TemplateCard>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/builder"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-all hover:scale-105"
          >
            Start building for free →
          </Link>
        </div>
      </div>
    </section>
  );
}

function TemplateCard({
  name,
  description,
  badge,
  badgeColor,
  delay,
  children,
}: {
  name: string;
  description: string;
  badge: string;
  badgeColor: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-semibold text-lg">{name}</h3>
          <p className="text-slate-400 text-sm mt-1">{description}</p>
        </div>
        <span className={`text-xs px-3 py-1 rounded-full border ${badgeColor}`}>
          {badge}
        </span>
      </div>
      <div className="scale-[0.85] origin-top">{children}</div>
    </motion.div>
  );
}
