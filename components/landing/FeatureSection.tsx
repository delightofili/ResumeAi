"use client";
import { motion } from "framer-motion";

const features = [
  {
    icon: "✦",
    title: "AI-powered suggestions",
    description:
      "GPT-4o rewrites your bullet points to be stronger, more impactful, and keyword-rich for your target role.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "⚡",
    title: "Live preview",
    description:
      "See your resume update in real-time as you type. No more guessing what it will look like when printed.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "◎",
    title: "ATS score checker",
    description:
      "Our AI scores your resume against ATS systems and tells you exactly what to fix to pass the filter.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: "↓",
    title: "One-click PDF download",
    description:
      "Download a pixel-perfect PDF instantly. No watermarks, no subscriptions, completely free.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: "⊞",
    title: "Beautiful templates",
    description:
      "Two professionally designed templates — Modern and Minimal — crafted to impress hiring managers.",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: "♡",
    title: "Share as link",
    description:
      "Get a unique link to your resume you can share anywhere — no PDF attachment needed.",
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm mb-6">
            Everything you need
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="gradient-text">DelResumeAI</span>?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Not just a form. A complete resume building experience powered by
            artificial intelligence.
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  delay,
}: {
  feature: (typeof features)[0];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white text-lg mb-4 group-hover:scale-110 transition-transform`}
      >
        {feature.icon}
      </div>
      <h3 className="text-white font-semibold text-base mb-2">
        {feature.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}
