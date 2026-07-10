import { Resume } from "./types";

export const defaultResume: Resume = {
  personal: {
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    github: "",
    linkedin: "",
    summary: "",
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
  template: "modern",
};
