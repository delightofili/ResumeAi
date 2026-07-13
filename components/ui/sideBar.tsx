import { motion } from "framer-motion";

const steps = [
  { id: 0, label: "Personal info", icon: "◉" },
  { id: 1, label: "Experience", icon: "◈" },
  { id: 2, label: "Education", icon: "◆" },
  { id: 3, label: "Skills", icon: "◇" },
  { id: 4, label: "Projects", icon: "◎" },
];

interface SidebarProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  saved: boolean;
  template: "modern" | "minimal";
  setTemplate: (t: "modern" | "minimal") => void;
  completedSteps: number[];
}

export default function SideBar({
  currentStep,
  setCurrentStep,
  saved,
  template,
  setTemplate,
  completedSteps,
}: SidebarProps) {
  const progress = Math.round((completedSteps.length / steps.length) * 100);
  return (
    <aside className="h-full flex flex-col p-5 overflow-y-auto">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-7 h-7 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-white text-xs">✦</span>
        </div>
        <span className="text-white font-semibold text-sm">
          Del
          <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ResumeAI
          </span>
        </span>
      </div>

      {/* progress */}

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-slate-500">Progress</span>
          <span className="text-xs text-slate-400 font-medium">
            {progress}%
          </span>
        </div>
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-linear-to-r from-blue-500 to-purple-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* steps */}

      <div className="flex flex-col gap-1 flex-1">
        {steps.map((step) => {
          const isActive = currentStep === step.id;
          const isDone = completedSteps.includes(step.id);

          return (
            <button
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                  isDone
                    ? "bg-linear-to-br from-blue-500 to-purple-600 text-white"
                    : isActive
                      ? "border border-blue-500 text-blue-400"
                      : "border border-white/10 text-slate-600"
                }`}
              >
                {isDone ? "✓" : step.id + 1}
              </div>
              <span className="text-sm font-medium">{step.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeStep"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* template switcher */}
      <div className="mt-6 pt-6 border-t border-white/5">
        <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider">
          Template
        </p>
        <div className="grid grid-cols-2 gap-2">
          {(["modern", "minimal"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTemplate(t)}
              className={`py-2 rounded-lg text-xs font-medium capitalize transition-all ${
                template === t
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-white/5 text-slate-400 hover:bg-white/10"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* saved indicator */}
      <div
        className={`mt-4 text-center text-xs transition-all duration-300 ${
          saved ? "text-green-400 opacity-100" : "opacity-0"
        }`}
      >
        ✓ Draft saved
      </div>
    </aside>
  );
}
