import { useState } from "react";
import { Resume } from "@/lib/types";
import { useAI } from "@/lib/useAI";

interface personalInfoProps {
  resume: Resume;
  updatePersonal: (field: string, value: string) => void;
}

export default function PersonalInfo({
  resume,
  updatePersonal,
}: personalInfoProps) {
  // Local state to hold validation error messages
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validation logic
  const validateField = (field: string, value: string) => {
    let errorMsg = "";

    // Skip validation if the user clears the field
    if (value.trim() !== "") {
      if (field === "github" && !value.toLowerCase().includes("github.com")) {
        errorMsg = "Please enter a valid GitHub link (must include github.com)";
      } else if (
        field === "linkedin" &&
        !value.toLowerCase().includes("linkedin.com")
      ) {
        errorMsg =
          "Please enter a valid LinkedIn link (must include linkedin.com)";
      } else if (field === "website") {
        // Simple URL check for generic websites
        const urlPattern =
          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
        if (!urlPattern.test(value)) {
          errorMsg = "Please enter a valid website URL";
        }
      }
    }

    // Update the error state for this specific field
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (field: string, value: string) => {
    updatePersonal(field, value);
    validateField(field, value);
  };

  const { loading, generateSummary } = useAI();

  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold text-white mb-1">Personal Info</h2>
      <p className="text-slate-500 text-sm mb-8">Add your personal info</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              Full Name
            </label>
            <input
              type="text"
              value={resume.personal.name}
              onChange={(e) => updatePersonal("name", e.target.value)}
              placeholder="placeholder"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
            />
          </div>
          <div>
            <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              Job Title
            </label>
            <input
              type="text"
              value={resume.personal.title}
              onChange={(e) => updatePersonal("title", e.target.value)}
              placeholder="placeholder"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              value={resume.personal.email}
              onChange={(e) => updatePersonal("email", e.target.value)}
              placeholder="placeholder"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
            />
          </div>
          <div>
            <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              Phone
            </label>
            <input
              type="tel"
              value={resume.personal.phone}
              onChange={(e) => updatePersonal("phone", e.target.value)}
              placeholder="placeholder"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              Location
            </label>
            <input
              type="text"
              value={resume.personal.location}
              onChange={(e) => updatePersonal("location", e.target.value)}
              placeholder="placeholder"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
            />
          </div>
          <div>
            <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              Website
            </label>
            <input
              type="text"
              value={resume.personal.website}
              onChange={(e) => handleChange("website", e.target.value)}
              placeholder="placeholder"
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:bg-white/8 transition-all ${
                errors.website
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-white/10 focus:border-blue-500/50"
              }`}
            />
            {errors.website && (
              <p className="text-red-400 text-xs mt-1 px-1">{errors.website}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              Github
            </label>
            <input
              type="text"
              value={resume.personal.github}
              onChange={(e) => handleChange("github", e.target.value)}
              placeholder="placeholder"
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:bg-white/8 transition-all ${
                errors.github
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-white/10 focus:border-blue-500/50"
              }`}
            />
            {errors.github && (
              <p className="text-red-400 text-xs mt-1 px-1">{errors.github}</p>
            )}
          </div>
          <div>
            <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              LinkedIn
            </label>
            <input
              type="text"
              value={resume.personal.linkedin}
              onChange={(e) => handleChange("linkedin", e.target.value)}
              placeholder="placeholder"
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:bg-white/8 transition-all ${
                errors.linkedin
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-white/10 focus:border-blue-500/50"
              }`}
            />
            {errors.linkedin && (
              <p className="text-red-400 text-xs mt-1 px-1">
                {errors.linkedin}
              </p>
            )}
          </div>
        </div>
        <div>
          <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
            Summary
          </label>
          <textarea
            value={resume.personal.summary}
            onChange={(e) => updatePersonal("summary", e.target.value)}
            placeholder="placeholder"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
          />
          <button
            type="button"
            onClick={async () => {
              const summary = await generateSummary(
                resume.personal.name,
                resume.personal.title,
                resume.skills,
                resume.experience.length,
              );
              if (summary) updatePersonal("summary", summary);
            }}
            disabled={loading === "generate_summary"}
            className="mt-2 flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 disabled:opacity-50 transition-colors"
          >
            {loading === "generate_summary" ? (
              <>
                <span className="w-3 h-3 border border-purple-400 border-t-transparent rounded-full animate-spin" />
                Generating...
              </>
            ) : (
              <>✦ Generate with AI</>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
