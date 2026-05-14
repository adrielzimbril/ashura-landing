"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import {
  FramedImage,
  fadeUp,
  Pill,
  SectionShell,
} from "@/components/shared/Primitives";
import { recentProjects } from "@/lib/data";

const skills = [
  "Brand Strategy",
  "Communication",
  "Creative AI",
  "Campaign Design",
  "Content Systems",
  "Market Positioning",
  "Launch Ops",
];

const experience = [
  ["Strategy", "Positioning & message", "Phase 01"],
  ["Creation", "AI direction & identity", "Phase 02"],
  ["Activation", "Campaigns & measurement", "Phase 03"],
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
          className="grid grid-cols-1 items-start gap-8 rounded-2xl bg-neutral-900/80 p-6 ring-1 ring-white/8 backdrop-blur-sm md:grid-cols-2 md:p-8 mb-8"
        >
          {/* Wrap in group so FramedImage hover works */}
          <div className="group">
            <FramedImage
              src="/img/portrait-futuristic-female-humanoid-with-advanced-technology (1).jpg"
              alt="Conceptual portrait representing Ashura AI strategy"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl font-light tracking-normal text-white md:text-6xl">
              An agency built for the post-brief era
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-400 md:text-base">
              Ashura combines strategic planning, brand culture, and
              AI-assisted production. The goal: turn a business intuition into a
              clear, distinctive, and actionable communication system.
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
              <span>Recent activations</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                <ArrowDown className="h-3.5 w-3.5 text-neutral-200" />
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 h-px bg-white/10" />
        <div className="mt-8 grid grid-cols-1 gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-4">
          {recentProjects.map((item, index) => (
            <motion.a
              key={item.src}
              href="#contact"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl ring-1 ring-white/10 transition hover:ring-white/20"
            >
              <FramedImage
                src={item.src}
                alt={item.alt}
                aspect="aspect-[16/11]"
              />
              <div className="pointer-events-none absolute inset-x-3 bottom-3">
                <div className="flex w-full items-center justify-center gap-2 rounded-full bg-black/50 px-4 py-2 text-xs text-white opacity-0 ring-1 ring-white/20 backdrop-blur transition group-hover:opacity-100 md:text-sm">
                  View activation
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
