import { useState } from "react";
import { Resume } from "./types";

export function useAI() {
  const [loading, setLoading] = useState<string | null>(null);

  async function callAI(type: string, data: Record<string, unknown>) {
    setLoading(type);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, data }),
      });
      const json = await res.json();
      return json.result as string;
    } catch {
      return null;
    } finally {
      setLoading(null);
    }
  }

  async function improveDescription(
    role: string,
    company: string,
    description: string,
  ) {
    return callAI("improve_description", { role, company, description });
  }

  async function generateSummary(
    name: string,
    title: string,
    skills: string[],
    experienceCount: number,
  ) {
    return callAI("generate_summary", {
      name,
      title,
      skills: skills.join(", "),
      experience: experienceCount,
    });
  }

  async function suggestSkills(title: string, industry = "tech") {
    return callAI("suggest_skills", { title, industry });
  }

  async function getATSScore(resume: Resume) {
    const result = await callAI("ats_score", { resume });
    if (!result) return null;
    try {
      return JSON.parse(result) as {
        score: number;
        feedback: string[];
        strengths: string[];
      };
    } catch {
      return null;
    }
  }

  return {
    loading,
    improveDescription,
    generateSummary,
    suggestSkills,
    getATSScore,
  };
}
