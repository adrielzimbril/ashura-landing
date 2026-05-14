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
  ["Strategie", "Positionnement & message", "Phase 01"],
  ["Creation", "Direction IA & identite", "Phase 02"],
  ["Activation", "Campagnes & mesure", "Phase 03"],
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
            src="/img/portrait-futuristic-female-humanoid-with-advanced-technology (1).jpg"
            alt="Portrait conceptuel representant la strategie IA Ashura"
          />
          <div>
            <h2 className="font-display text-4xl font-light tracking-normal text-white md:text-6xl">
              Une agence pensee pour l&apos;apres-brief
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300 md:text-base">
              Ashura combine planning strategique, culture de marque et
              production assistee par IA. L&apos;objectif: transformer une
              intuition business en systeme de communication clair, distinctif
              et activable.
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
              <span>Activations recentes</span>
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
                  Voir l&apos;activation
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
