"use client";
import { useResume } from "@/lib/useResume";
import Sidebar from "../../components/ui/sideBar";
import PersonalInfo from "@/components/builder/steps/PersonalInfo";
import ExperienceStep from "@/components/builder/steps/ExperienceStep";
import EducationStep from "@/components/builder/steps/EducationStep";
import SkillStep from "@/components/builder/steps/SkillStep";
import ProjectStep from "@/components/builder/steps/ProjectsStep";
import ResumePreview from "@/components/resume/ResumePreview";

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

  const steps = [
    <PersonalInfo
      key="personal-info"
      resume={resumeHook.resume}
      updatePersonal={resumeHook.updatePersonal}
    />,
    <ExperienceStep
      key="experience"
      resume={resumeHook.resume}
      addExperience={resumeHook.addExperience}
      updateExperience={resumeHook.updateExperience}
      removeExperience={resumeHook.removeExperience}
    />,
    <EducationStep
      key="education"
      resume={resumeHook.resume}
      addEducation={resumeHook.addEducation}
      updateEducation={resumeHook.updateEducation}
      removeEducation={resumeHook.removeEducation}
    />,
    <SkillStep
      key="skills"
      resume={resumeHook.resume}
      addSkill={resumeHook.addSkill}
      removeSkill={resumeHook.removeSkill}
    />,
    <ProjectStep
      key="project"
      resume={resumeHook.resume}
      addProject={resumeHook.addProject}
      updateProject={resumeHook.updateProject}
      removeProject={resumeHook.removeProject}
    />,
  ];

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
      <div className="bg-[#0a0f1e] overflow-y-auto">
        {steps[resumeHook.currentStep]}
        <div className="flex justify-between p-8 pt-0">
          {resumeHook.currentStep > 0 && (
            <button
              onClick={() =>
                resumeHook.setCurrentStep(resumeHook.currentStep - 1)
              }
              className="px-6 py-2.5 rounded-xl border-white/10  text-slate-400 text-sm hover:bg-white/5 transition-all"
            >
              ← Back
            </button>
          )}
          {resumeHook.currentStep < 4 && (
            <button
              onClick={() =>
                resumeHook.setCurrentStep(resumeHook.currentStep + 1)
              }
              className="ml-auto px-6 py-2.5 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-all"
            >
              Next →
            </button>
          )}
        </div>
      </div>
      <div className="bg-[#0d1321] border-l border-white/5 overflow-y-auto">
        <ResumePreview resume={resumeHook.resume} />
      </div>
    </main>
  );
}
