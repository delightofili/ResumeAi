"use client";

import { Resume } from "@/lib/types";
import { useAI } from "@/lib/useAI";
import { useState } from "react";

interface skillStepProp {
  resume: Resume;
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
}

export default function SkillStep({
  resume,
  addSkill,
  removeSkill,
}: skillStepProp) {
  const [isAdding, setIsAdding] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const { loading, suggestSkills } = useAI();
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold text-white mb-1">Skills</h2>
      <p className="text-slate-500 text-sm mb-8">Add your skills.</p>

      <div className="flex flex-col gap-6">
        {resume.skills.length === 0 && (
          <div className="border border-dashed border-white/10 rounded-2xl p-8 text-center">
            <p className="text-slate-500 text-sm">No skill added yet.</p>
            <p className="text-slate-600 text-sm mt-1">
              Click the button below to add your skills.
            </p>
          </div>
        )}
        {resume.skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                Skill {index + 1}
              </span>
              <button
                onClick={() => removeSkill(skill)}
                className="text-slate-600 hover:text-red-400 transition-colors text-sm"
              >
                X
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">{skill}</div>
            </div>
            <button
              type="button"
              onClick={async () => {
                const result = await suggestSkills(resume.personal.title);
                if (result) {
                  result.split(",").forEach((skill) => addSkill(skill.trim()));
                }
              }}
              disabled={loading === "suggest_skills"}
              className="mt-4 w-full py-2.5 rounded-xl border border-dashed border-purple-500/30 text-purple-400 text-sm hover:border-purple-500/60 disabled:opacity-50 transition-all"
            >
              {loading === "suggest_skills"
                ? "Getting suggestions..."
                : "✦ Suggest skills with AI"}
            </button>
          </div>
        ))}
        {isAdding ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-6">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="e.g Typescript, Python..."
              className="w-full bg-transparent border border-white/20 rounded-lg p-2 text-white"
            />
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
              onClick={() => {
                if (!newSkill.trim()) return;
                addSkill(newSkill);
                setNewSkill("");
                setIsAdding(false);
              }}
            >
              Save Skill
            </button>
            <button
              className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm"
              onClick={() => {
                setNewSkill("");
                setIsAdding(false);
              }}
            >
              Cancle
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsAdding(true)}
            className="mt-6 w-full py-3 rounded-xl border border-dashed border-white/20 text-slate-400 text-sm hover:border-blue-500/50 hover:text-blue-400 transition-all"
          >
            + Add Skills
          </button>
        )}
      </div>
    </div>
  );
}
