"use client";
import { useResume } from "@/lib/useResume";
import Sidebar from "../../components/ui/sideBar";

export default function BuilderPage() {
  const resumeHook = useResume();

  const completedSteps = [
    resumeHook.resume.personal.name && resumeHook.resume.personal.email
      ? 0
      : -1,
    resumeHook.resume.experience.length > 0 ? 1 : -1,
    resumeHook.resume.education.length > 0 ? 2 : -1,
    resumeHook.resume.skills.length > 0 ? 3 : -1,
    resumeHook.resume.projects.length > 0 ? 4 : -1,
  ].filter((s) => s !== -1);

  return (
    <main className="h-screen bg-[#0a0f1e] text-white overflow-hidden grid grid-cols-[280px_1fr_380px]">
      <div className="bg-[#0d1321] border-r border-white/5">
        <Sidebar
          currentStep={resumeHook.currentStep}
          setCurrentStep={resumeHook.setCurrentStep}
          saved={resumeHook.saved}
          template={resumeHook.resume.template}
          setTemplate={resumeHook.setTemplate}
          completedSteps={completedSteps}
        />
      </div>
      <div className="bg-[#0a0f1e] overflow-y-auto">middle</div>
      <div className="bg-[#0d1321] border-l border-white/5 overflow-y-auto">
        preview
      </div>
    </main>
  );
}
