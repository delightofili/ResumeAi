"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Fill in your details",
    description:
      "Add your personal info, work experience, education, and skills. Our form makes it simple and fast.",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    title: "Let AI improve it",
    description:
      "Click the AI button on any section. GPT-4o rewrites your content to be stronger and more impactful.",
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "03",
    title: "Download and apply",
    description:
      "Preview your beautiful resume, check your ATS score, then download as PDF and start applying.",
    color: "from-pink-500 to-pink-600",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-6">
            Simple process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Three steps to your <span className="gradient-text">dream job</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No design skills needed. No complicated software. Just fill,
            improve, and download.
          </p>
        </motion.div>

        {/* steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* connector line — desktop only */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-gradient-to-r from-blue-500/0 via-purple-500/50 to-pink-500/0" />

          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, delay }: { step: (typeof steps)[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 animate-pulse-glow`}
      >
        {step.number}
      </div>
      <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
        {step.description}
      </p>
    </motion.div>
  );
}
