import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-black">
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold uppercase mb-16 text-center" style={{ fontFamily: "var(--font-heading)" }}>
          Our <span className="text-[var(--primary)]">Work</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
