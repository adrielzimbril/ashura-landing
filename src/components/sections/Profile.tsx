"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import {
  FramedImage,
  fadeUp,
  Pill,
  SectionShell,
} from "@/components/shared/Primitives";
import { imageBase, recentProjects } from "@/lib/data";

const skills = [
  "UI/UX Design",
  "React Development",
  "Design Systems",
  "Prototyping",
  "Web Development",
  "TypeScript",
  "Figma",
];

const experience = [
  ["Senior Designer", "TechFlow Inc", "Currently"],
  ["Product Designer", "PixelCraft Studio", "2022-24"],
  ["UI Designer", "StartupLab", "2020-22"],
];

export function Profile() {
  return (
    <section id="insights" className="relative">
      <SectionShell>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 items-start gap-8 pb-24 md:grid-cols-2"
        >
          <FramedImage
            src={`${imageBase}/b59bad79-703a-4c05-8ed2-fafcc49a7b51_800w.jpg`}
            alt="Professional portrait"
          />
          <div>
            <h2 className="font-display text-4xl font-light tracking-normal text-white md:text-6xl">
              Meet Alex
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300 md:text-base">
              I&apos;m Alex, a creative Digital Product Designer and Front-end
              Developer based in San Francisco. I specialize in creating
              seamless user experiences and innovative digital solutions that
              bridge design and technology to drive business growth.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
            <div className="mt-6 h-px bg-white/10" />
            <div className="mt-6 space-y-4">
              {experience.map(([role, company, period]) => (
                <div
                  key={role}
                  className="grid grid-cols-3 items-baseline gap-3 text-sm md:text-base"
                >
                  <span className="text-neutral-200">{role}</span>
                  <span className="text-neutral-300">{company}</span>
                  <span className="text-right text-neutral-400">{period}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-neutral-300">
              <span>Recent Projects</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                <ArrowDown className="h-3.5 w-3.5 text-neutral-200" />
              </span>
            </div>
          </div>
        </motion.div>

        <div className="h-px bg-white/10" />
        <div className="mt-8 grid grid-cols-1 gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-4">
          {recentProjects.map((item, index) => (
            <motion.a
              key={item.src}
              href="#contact"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg bg-neutral-900/70 ring-1 ring-white/10 transition hover:ring-white/20"
            >
              <FramedImage
                src={item.src}
                alt={item.alt}
                aspect="aspect-[16/11]"
              />
              <div className="pointer-events-none absolute inset-x-3 bottom-3">
                <div className="flex w-full items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-white ring-1 ring-white/20 backdrop-blur md:text-sm">
                  View Project
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
