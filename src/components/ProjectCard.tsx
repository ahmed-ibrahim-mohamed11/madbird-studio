"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative overflow-hidden bg-neutral-900 rounded-xl"
    >
      <Link href={`/projects/${project.id}`}>
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
  );
}
