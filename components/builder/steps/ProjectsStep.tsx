/* Same pattern as experience
Fields: name, description, url, stack (comma separated) */

"use client";

import { Resume } from "@/lib/types";

interface ProjectStepProps {
  resume: Resume;
  addProject: () => void;
  updateProject: (id: string, field: string, value: string) => void;
  removeProject: (id: string) => void;
}

export default function ProjectStep({
  resume,
  addProject,
  updateProject,
  removeProject,
}: ProjectStepProps) {
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold text-white mb-1">Projects</h2>
      <p className="text-slate-500 text-sm mb-8">
        Add the Projects you&apos;ve worked on
      </p>

      <div className="flex flex-col gap-6">
        {resume.projects.length === 0 && (
          <div className="border border-dashed border-white/10 rounded-2xl p-8 text-center">
            <p className="text-slate-500 text-sm">No projects added yet.</p>
            <p className="text-slate-600 text-xs mt-1">
              Click the button below to add your project.
            </p>
          </div>
        )}

        {resume.projects.map((project, index) => (
          <div
            key={project.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                Project {index + 1}
              </span>
              <button
                onClick={() => removeProject(project.id)}
                className="text-slate-600 hover:text-red-400 transition-colors text-sm"
              >
                Remove
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  value={project.name}
                  onChange={(e) =>
                    updateProject(project.id, "name", e.target.value)
                  }
                  placeholder="Food App"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Description
                </label>
                <input
                  type="text"
                  value={project.description}
                  onChange={(e) =>
                    updateProject(project.id, "description", e.target.value)
                  }
                  placeholder="Google"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Url
                </label>
                <input
                  type="text"
                  value={project.url}
                  onChange={(e) =>
                    updateProject(project.id, "url", e.target.value)
                  }
                  placeholder="Jan 2023"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Stack
                </label>
                <input
                  type="text"
                  value={project.stack}
                  onChange={(e) =>
                    updateProject(project.id, "stack", e.target.value)
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
        onClick={addProject}
        className="mt-6 w-full py-3 rounded-xl border border-dashed border-white/20 text-slate-400 text-sm hover:border-blue-500/50 hover:text-blue-400 transition-all"
      >
        + Add Project
      </button>
    </div>
  );
}
