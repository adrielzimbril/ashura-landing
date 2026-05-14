"use client";

import {
  Image as ImageIcon,
  Package,
  PenLine,
  Phone,
  Play,
  Shapes,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import {
  FramedImage,
  Pill,
  PrimaryButton,
  SecondaryButton,
  SectionPill,
  SectionShell,
} from "@/components/shared/Primitives";
import { services, serviceTags, tagCloud } from "@/lib/data";

const icons = {
  sparkles: Sparkles,
  shapes: Shapes,
  package: Package,
  image: ImageIcon,
};

export function Services() {
  return (
    <section id="services" className="relative pt-24">
      <SectionShell>
        <div className="pb-24">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <SectionPill>Services Ashura</SectionPill>
              <h2 className="mt-4 font-display text-4xl font-light tracking-normal text-white md:text-6xl">
                Services
              </h2>
              <p className="mt-3 text-sm leading-7 text-neutral-300 md:text-base">
                Une offre construite pour les marques qui veulent utiliser
                l&apos;IA comme avantage de communication, pas comme simple
                outil de production.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {serviceTags.map((tag) => (
                  <Pill key={tag}>{tag}</Pill>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton icon={<Phone className="h-5 w-5" />}>
                  Demander un diagnostic
                </PrimaryButton>
                <SecondaryButton icon={<Play className="h-4 w-4" />} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="overflow-hidden rounded-xl bg-neutral-900/50 ring-1 ring-white/10"
            >
              <FramedImage
                src="/img/futuristic-representation-robotic-human-heart.jpg"
                alt="Representation visuelle du lien entre strategie de marque et IA"
                aspect="aspect-[16/10]"
                rounded="rounded-xl"
              />
            </motion.div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = icons[service.icon as keyof typeof icons];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.48 }}
                  className="relative overflow-hidden rounded-2xl bg-neutral-900/60 p-5 ring-1 ring-white/10 md:p-6"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                      <Icon className="h-[18px] w-[18px] text-neutral-200" />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium tracking-normal text-white md:text-xl">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-7 text-neutral-300 md:text-base">
                        {service.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {tagCloud.map((tag, index) => (
              <Pill key={tag}>
                {index === 0 ? <PenLine className="h-3.5 w-3.5" /> : null}
                {tag}
              </Pill>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
