"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { fadeUp, SectionShell } from "@/components/shared/Primitives";
import { selectedWork } from "@/lib/data";

export function SelectedWork() {
  return (
    <section id="work" className="relative">
      <SectionShell>
        <div className="pb-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="section-gradient-heading font-display text-3xl font-medium tracking-normal text-white md:text-4xl">
              Territoires de Marque
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-300 md:text-base">
              Des systemes visuels concus pour aligner strategie, imagination
              artificielle et execution campagne.
            </p>
          </motion.div>

          <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
            {selectedWork.map((item, index) => (
              <motion.a
                href="#contact"
                key={item.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="portfolio-card group relative mb-6 block break-inside-avoid overflow-hidden rounded-lg bg-neutral-900/50 ring-1 ring-white/10 transition"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={900}
                  height={1100}
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-[20%]"
                />
                <div className="pointer-events-none absolute inset-x-3 bottom-3">
                  <div className="view-button flex w-full items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-white opacity-0 ring-1 ring-white/20 backdrop-blur transition md:text-sm">
                    Voir le territoire
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
