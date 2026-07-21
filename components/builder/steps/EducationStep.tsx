/* Now your challenge — build EducationStep yourself.
It's almost identical to ExperienceStep. The only differences:

Fields are: school, degree, field, startDate, endDate, gpa
No current checkbox
Props use addEducation, updateEducation, removeEducation
Title is "Education" */

"use client";

import { Resume } from "@/lib/types";

interface EducationStepsProps {
  resume: Resume;
  addEducation: () => void;
  updateEducation: (id: string, field: string, value: string) => void;
  removeEducation: (id: string) => void;
}

export default function EducationStep({
  resume,
  addEducation,
  updateEducation,
  removeEducation,
}: EducationStepsProps) {
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold text-white mb-1">Education</h2>
      <p className="text-slate-500 text-sm mb-8">
        Add your education history, starting with the most recent.
      </p>

      <div className="flex flex-col gap-6">
        {resume.education.length === 0 && (
          <div className="border border-dashed border-white/10 rounded-2xl p-8 text-center">
            <p className="text-slate-500 text-sm">No education added yet.</p>
            <p className="text-slate-600 text-xs mt-1">
              Click the button below to add your education backgrounds.
            </p>
          </div>
        )}

        {resume.education.map((edu, index) => (
          <div
            key={edu.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                Education {index + 1}
              </span>
              <button
                onClick={() => removeEducation(edu.id)}
                className="text-slate-600 hover:text-red-400 transition-colors text-sm"
              >
                Remove
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  School
                </label>
                <input
                  type="text"
                  value={edu.school}
                  onChange={(e) =>
                    updateEducation(edu.id, "school", e.target.value)
                  }
                  placeholder="Fedral University of Technology"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Degree
                </label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) =>
                    updateEducation(edu.id, "degree", e.target.value)
                  }
                  placeholder="Bsc"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Field
                </label>
                <input
                  type="text"
                  value={edu.field}
                  onChange={(e) =>
                    updateEducation(edu.id, "field", e.target.value)
                  }
                  placeholder="Public Health"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Start date
                </label>
                <input
                  type="text"
                  value={edu.startDate}
                  onChange={(e) =>
                    updateEducation(edu.id, "startDate", e.target.value)
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
                  value={edu.endDate}
                  onChange={(e) =>
                    updateEducation(edu.id, "endDate", e.target.value)
                  }
                  placeholder="Dec 2024"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all disabled:opacity-30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Gpa
                </label>
                <input
                  type="text"
                  value={edu.gpa}
                  onChange={(e) =>
                    updateEducation(edu.id, "gpa", e.target.value)
                  }
                  placeholder="Dec 2024"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all disabled:opacity-30"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={addEducation}
        className="mt-6 w-full py-3 rounded-xl border border-dashed border-white/20 text-slate-400 text-sm hover:border-blue-500/50 hover:text-blue-400 transition-all"
      >
        + Add education
      </button>
    </div>
  );
}
