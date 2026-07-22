"use client";
import { Resume } from "@/lib/types";
import { useAI } from "@/lib/useAI";

interface ExperienceStepProps {
  resume: Resume;
  addExperience: () => void;
  updateExperience: (
    id: string,
    field: string,
    value: string | boolean,
  ) => void;
  removeExperience: (id: string) => void;
}

export default function ExperienceStep({
  resume,
  addExperience,
  updateExperience,
  removeExperience,
}: ExperienceStepProps) {
  const { loading, improveDescription } = useAI();
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold text-white mb-1">Work Experience</h2>
      <p className="text-slate-500 text-sm mb-8">
        Add your work history, starting with the most recent.
      </p>

      <div className="flex flex-col gap-6">
        {resume.experience.length === 0 && (
          <div className="border border-dashed border-white/10 rounded-2xl p-8 text-center">
            <p className="text-slate-500 text-sm">No experience added yet.</p>
            <p className="text-slate-600 text-xs mt-1">
              Click the button below to add your first role.
            </p>
          </div>
        )}

        {resume.experience.map((exp, index) => (
          <div
            key={exp.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                Experience {index + 1}
              </span>
              <button
                onClick={() => removeExperience(exp.id)}
                className="text-slate-600 hover:text-red-400 transition-colors text-sm"
              >
                Remove
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Job title
                </label>
                <input
                  type="text"
                  value={exp.role}
                  onChange={(e) =>
                    updateExperience(exp.id, "role", e.target.value)
                  }
                  placeholder="Fullstack Developer"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Company
                </label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) =>
                    updateExperience(exp.id, "company", e.target.value)
                  }
                  placeholder="Google"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Start date
                </label>
                <input
                  type="text"
                  value={exp.startDate}
                  onChange={(e) =>
                    updateExperience(exp.id, "startDate", e.target.value)
                  }
                  placeholder="Jan 2023"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  End date
                </label>
                <input
                  type="text"
                  value={exp.endDate}
                  onChange={(e) =>
                    updateExperience(exp.id, "endDate", e.target.value)
                  }
                  placeholder="Dec 2024"
                  disabled={exp.current}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all disabled:opacity-30"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                id={`current-${exp.id}`}
                checked={exp.current}
                onChange={(e) =>
                  updateExperience(exp.id, "current", e.target.checked)
                }
                className="w-4 h-4 accent-blue-500"
              />
              <label
                htmlFor={`current-${exp.id}`}
                className="text-sm text-slate-400 cursor-pointer"
              >
                I currently work here
              </label>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                Description
              </label>
              <textarea
                value={exp.description}
                onChange={(e) =>
                  updateExperience(exp.id, "description", e.target.value)
                }
                placeholder="Describe your responsibilities and achievements..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all resize-none"
              />
              <button
                type="button"
                onClick={async () => {
                  const improved = await improveDescription(
                    exp.role,
                    exp.company,
                    exp.description,
                  );
                  if (improved)
                    updateExperience(exp.id, "description", improved);
                }}
                disabled={loading === "improve_description"}
                className="mt-2 flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 disabled:opacity-50 transition-colors"
              >
                {loading === "improve_description" ? (
                  <>
                    <span className="w-3 h-3 border border-blue-400 border-t-transparent rounded-full animate-spin" />
                    Improving...
                  </>
                ) : (
                  <>✦ Improve with AI</>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={addExperience}
        className="mt-6 w-full py-3 rounded-xl border border-dashed border-white/20 text-slate-400 text-sm hover:border-blue-500/50 hover:text-blue-400 transition-all"
      >
        + Add experience
      </button>
    </div>
  );
}
