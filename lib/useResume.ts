import { useEffect, useState } from "react";
import { defaultResume } from "./resumeData";
import { Resume } from "./types";

export function useResume() {
  const [resume, setResume] = useState<Resume>(defaultResume);
  const [currentStep, setCurrentStep] = useState(0);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("delresumeai-draft");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved) setResume(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("delresumeai-draft", JSON.stringify(resume));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSaved(true);
    const timer = setTimeout(() => setSaved(false), 2000);
    return () => clearTimeout(timer);
  }, [resume]);

  function updatePersonal(field: string, value: string) {
    setResume((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));
  }

  function addExperience() {
    setResume((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: crypto.randomUUID(),
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
        },
      ],
    }));
  }

  function updateExperience(
    id: string,
    field: string,
    value: string | boolean,
  ) {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp,
      ),
    }));
  }
  function removeExperience(id: string) {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  }
  function addEducation() {
    setResume((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: crypto.randomUUID(),
          school: "",
          degree: "",
          field: "",
          startDate: "",
          endDate: "",
          gpa: "",
        },
      ],
    }));
  }
  function updateEducation(id: string, field: string, value: string) {
    setResume((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu,
      ),
    }));
  }
  function removeEducation(id: string) {
    setResume((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  }
  function addSkill(skill: string) {
    if (!skill.trim() || resume.skills.includes(skill)) return;
    setResume((prev) => ({ ...prev, skills: [...prev.skills, skill.trim()] }));
  }

  function removeSkill(skill: string) {
    setResume((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  }
  function addProject() {
    setResume((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: crypto.randomUUID(),
          name: "",
          description: "",
          url: "",
          stack: "",
        },
      ],
    }));
  }

  function updateProject(id: string, field: string, value: string) {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.map((p) =>
        p.id === id ? { ...p, [field]: value } : p,
      ),
    }));
  }
  function removeProject(id: string) {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }));
  }

  function setTemplate(template: "modern" | "minimal") {
    setResume((prev) => ({ ...prev, template }));
  }

  function clearResume() {
    setResume(defaultResume);
    localStorage.removeItem("delresumeai-draft");
  }

  return {
    resume,
    currentStep,
    setCurrentStep,
    saved,
    updatePersonal,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    addSkill,
    removeSkill,
    addProject,
    updateProject,
    removeProject,
    setTemplate,
    clearResume,
  };
}
