import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 1L10 6H15L11 9.5L12.5 15L8 12L3.5 15L5 9.5L1 6H6L8 1Z" />
              </svg>
            </div>
            <span className="text-white font-semibold text-sm">
              Del<span className="gradient-text">ResumeAI</span>
            </span>
          </div>

          {/* links */}
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#templates" className="hover:text-white transition-colors">
              Templates
            </a>
            <Link
              href="/builder"
              className="hover:text-white transition-colors"
            >
              Builder
            </Link>
          </div>

          {/* copyright */}
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} DelResumeAI. Built by Delightsome
            Ofili.
          </p>
        </div>
      </div>
    </footer>
  );
}
