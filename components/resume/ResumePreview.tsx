"use client";
import { Resume } from "@/lib/types";

interface ResumePreviewProps {
  resume: Resume;
}

export default function ResumePreview({ resume }: ResumePreviewProps) {
  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-slate-500 uppercase tracking-wider">
          Live preview
        </p>
        <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full capitalize">
          {resume.template}
        </span>
      </div>

      {/* resume paper */}
      <div className="flex-1 overflow-y-auto">
        <div
          className="bg-white rounded-xl overflow-hidden shadow-2xl text-slate-900 text-[11px]"
          id="resume-preview"
        >
          {resume.template === "modern" ? (
            <ModernTemplate resume={resume} />
          ) : (
            <MinimalTemplate resume={resume} />
          )}
        </div>
      </div>
    </div>
  );
}

function ModernTemplate({ resume }: { resume: Resume }) {
  const { personal, experience, education, skills, projects } = resume;

  return (
    <div>
      {/* header */}
      <div className="bg-linear-to-r from-blue-600 to-purple-700 p-6 text-white">
        <h1 className="text-xl font-bold">{personal.name || "Your Name"}</h1>
        <p className="text-blue-200 text-xs mt-0.5">
          {personal.title || "Your Title"}
        </p>
        <div className="flex flex-wrap gap-3 mt-3">
          {personal.email && (
            <span className="text-blue-200 text-[10px]">
              ✉ {personal.email}
            </span>
          )}
          {personal.phone && (
            <span className="text-blue-200 text-[10px]">
              ✆ {personal.phone}
            </span>
          )}
          {personal.location && (
            <span className="text-blue-200 text-[10px]">
              ◎ {personal.location}
            </span>
          )}
          {personal.github && (
            <span className="text-blue-200 text-[10px]">
              ⌥ {personal.github}
            </span>
          )}
          {personal.linkedin && (
            <span className="text-blue-200 text-[10px]">
              in {personal.linkedin}
            </span>
          )}
        </div>
      </div>

      <div className="p-6 space-y-5">
        {/* summary */}
        {personal.summary && (
          <Section title="Summary" color="text-blue-700 border-blue-200">
            <p className="text-slate-600 leading-relaxed">{personal.summary}</p>
          </Section>
        )}

        {/* experience */}
        {experience.length > 0 && (
          <Section title="Experience" color="text-blue-700 border-blue-200">
            <div className="space-y-3">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-slate-800">
                        {exp.role || "Role"}
                      </p>
                      <p className="text-slate-500 text-[10px]">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-slate-400 text-[10px] shrink-0">
                      {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                    </p>
                  </div>
                  {exp.description && (
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* education */}
        {education.length > 0 && (
          <Section title="Education" color="text-blue-700 border-blue-200">
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between">
                  <div>
                    <p className="font-semibold text-slate-800">
                      {edu.school || "School"}
                    </p>
                    <p className="text-slate-500 text-[10px]">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-[10px]">
                      {edu.startDate} — {edu.endDate}
                    </p>
                    {edu.gpa && (
                      <p className="text-slate-400 text-[10px]">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* skills */}
        {skills.length > 0 && (
          <Section title="Skills" color="text-blue-700 border-blue-200">
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-[10px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* projects */}
        {projects.length > 0 && (
          <Section title="Projects" color="text-blue-700 border-blue-200">
            <div className="space-y-3">
              {projects.map((project) => (
                <div key={project.id}>
                  <div className="flex justify-between">
                    <p className="font-semibold text-slate-800">
                      {project.name || "Project"}
                    </p>
                    {project.url && (
                      <span className="text-blue-600 text-[10px]">
                        {project.url}
                      </span>
                    )}
                  </div>
                  {project.description && (
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      {project.description}
                    </p>
                  )}
                  {project.stack && (
                    <p className="text-slate-400 text-[10px] mt-0.5">
                      Stack: {project.stack}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
}

function MinimalTemplate({ resume }: { resume: Resume }) {
  const { personal, experience, education, skills, projects } = resume;

  return (
    <div className="p-6">
      {/* header */}
      <div className="border-b-2 border-slate-900 pb-4 mb-5">
        <h1 className="text-xl font-bold text-slate-900">
          {personal.name || "Your Name"}
        </h1>
        <p className="text-slate-500 text-xs mt-0.5">
          {personal.title || "Your Title"}
        </p>
        <div className="flex flex-wrap gap-3 mt-2">
          {personal.email && (
            <span className="text-slate-400 text-[10px]">{personal.email}</span>
          )}
          {personal.phone && (
            <span className="text-slate-400 text-[10px]">{personal.phone}</span>
          )}
          {personal.location && (
            <span className="text-slate-400 text-[10px]">
              {personal.location}
            </span>
          )}
          {personal.github && (
            <span className="text-slate-400 text-[10px]">
              {personal.github}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-5">
        {personal.summary && (
          <MinimalSection title="Summary">
            <p className="text-slate-600 leading-relaxed">{personal.summary}</p>
          </MinimalSection>
        )}

        {experience.length > 0 && (
          <MinimalSection title="Experience">
            <div className="space-y-3">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between">
                    <p className="font-semibold text-slate-800">{exp.role}</p>
                    <p className="text-slate-400 text-[10px]">
                      {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                    </p>
                  </div>
                  <p className="text-slate-500 text-[10px]">{exp.company}</p>
                  {exp.description && (
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </MinimalSection>
        )}

        {education.length > 0 && (
          <MinimalSection title="Education">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between">
                <div>
                  <p className="font-semibold text-slate-800">{edu.school}</p>
                  <p className="text-slate-500 text-[10px]">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </p>
                </div>
                <p className="text-slate-400 text-[10px]">
                  {edu.startDate} — {edu.endDate}
                </p>
              </div>
            ))}
          </MinimalSection>
        )}

        {skills.length > 0 && (
          <MinimalSection title="Skills">
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-slate-200 text-slate-600 px-2 py-0.5 rounded text-[10px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </MinimalSection>
        )}

        {projects.length > 0 && (
          <MinimalSection title="Projects">
            {projects.map((project) => (
              <div key={project.id} className="mb-2">
                <p className="font-semibold text-slate-800">{project.name}</p>
                {project.description && (
                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                )}
                {project.stack && (
                  <p className="text-slate-400 text-[10px]">
                    Stack: {project.stack}
                  </p>
                )}
              </div>
            ))}
          </MinimalSection>
        )}
      </div>
    </div>
  );
}

function Section({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2
        className={`text-[10px] font-bold uppercase tracking-widest border-b pb-1 mb-3 ${color}`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function MinimalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-1 mb-3">
        {title}
      </h2>
      {children}
    </div>
  );
}
