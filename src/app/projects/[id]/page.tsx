import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link href="/projects" className="text-gray-400 hover:text-[var(--primary)] mb-8 inline-flex items-center gap-2 uppercase tracking-widest text-sm font-bold transition-colors">
          &larr; Back to Projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-start">
          <div>
            <p className="text-[var(--primary)] font-bold tracking-widest uppercase mb-4">{project.category}</p>
            <h1 className="text-5xl md:text-7xl font-bold uppercase mb-8 leading-none" style={{ fontFamily: "var(--font-heading)" }}>
              {project.title}
            </h1>
            
            <div className="grid grid-cols-2 gap-8 mb-12 py-8 border-y border-white/10">
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Client</p>
                <p className="font-bold text-xl">{project.client}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Year</p>
                <p className="font-bold text-xl">{project.year}</p>
              </div>
            </div>
            
            <p className="text-xl leading-relaxed text-gray-300 font-light">
              {project.description}
            </p>
          </div>
          
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {project.images.length > 0 && (
          <div className="space-y-16 mt-32">
            {project.images.map((img, idx) => (
              <div key={idx} className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-xl">
                <Image
                  src={img}
                  alt={`${project.title} - ${idx + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
