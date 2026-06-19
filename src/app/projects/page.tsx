"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-black">
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold uppercase mb-16 text-center" style={{ fontFamily: "var(--font-heading)" }}>
          Our <span className="text-[var(--primary)]">Work</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden bg-neutral-900 rounded-xl"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="text-[var(--primary)] font-bold text-xs tracking-widest uppercase mb-1">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>{project.title}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
