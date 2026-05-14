"use client";

import {
  Lightbulb,
  Phone,
  Play,
  Rocket,
  SlidersHorizontal,
} from "lucide-react";
import { motion } from "motion/react";
import {
  FramedImage,
  PrimaryButton,
  SecondaryButton,
  SectionPill,
  SectionShell,
} from "@/components/shared/Primitives";
import { imageBase, processSteps } from "@/lib/data";

const icons = {
  lightbulb: Lightbulb,
  sliders: SlidersHorizontal,
  rocket: Rocket,
};

export function Process() {
  return (
    <section className="relative">
      <SectionShell>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 items-start gap-8 rounded-2xl bg-neutral-900/50 p-6 pb-6 ring-1 ring-white/10 md:grid-cols-2 md:p-8"
        >
          <FramedImage
            src={`${imageBase}/9ab83c55-bb01-43d7-b04c-23f9c4a252e4_800w.jpg`}
            alt="Design process sketching on paper"
            aspect="aspect-[4/5]"
          />
          <div>
            <SectionPill>Design process</SectionPill>
            <h2 className="mt-4 font-display text-4xl font-light tracking-normal text-white md:text-6xl">
              Process
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-300 md:text-base">
              Crafting bold visuals that inspire and elevate brands through a
              thoughtful, streamlined process.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton icon={<Phone className="h-5 w-5" />}>
                Book a Free Call
              </PrimaryButton>
              <SecondaryButton icon={<Play className="h-4 w-4" />} />
            </div>
            <div className="mt-6 space-y-4">
              {processSteps.map((step, index) => {
                const Icon = icons[step.icon as keyof typeof icons];
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                    className="relative overflow-hidden rounded-2xl bg-neutral-900/60 p-5 ring-1 ring-white/10 md:p-6"
                  >
                    <span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-xs text-neutral-300 ring-1 ring-white/10">
                      {index + 1}
                    </span>
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-9 w-20 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                        <Icon className="h-5 w-5 text-neutral-200" />
                      </span>
                      <div>
                        <h3 className="text-lg font-medium tracking-normal text-white md:text-xl">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-7 text-neutral-300 md:text-base">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </SectionShell>
    </section>
  );
}
