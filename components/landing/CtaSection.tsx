"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30" />
          <div className="absolute inset-0 bg-[#0d1321]/80" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/20 blur-[60px]" />

          <div className="relative p-12 md:p-16 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl mx-auto mb-6 animate-pulse-glow">
              ✦
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to land your{" "}
              <span className="gradient-text">dream job?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
              Join thousands of professionals who built their resume with
              DelResumeAI. Free forever, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/builder"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-base hover:opacity-90 transition-all hover:scale-105"
              >
                Build my resume now — free
              </Link>
              <p className="text-slate-500 text-sm">
                No signup required to start
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
