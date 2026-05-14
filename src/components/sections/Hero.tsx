"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import {
  fadeUp,
  PrimaryButton,
  SecondaryButton,
  SectionPill,
  SectionShell,
} from "@/components/shared/Primitives";
import { trustLogos } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative pt-24">
      <SectionShell>
        <div className="pb-10 pt-10 md:pb-28 md:pt-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto mb-6 flex w-full items-center justify-center">
              <SectionPill>Agence branding, communication & IA</SectionPill>
            </div>

            <div className="mx-auto max-w-4xl space-y-8 text-center">
              <h1 className="font-display text-5xl font-light leading-[0.95] tracking-normal text-white md:text-7xl lg:text-8xl">
                Strategie de marque augmentee par l&apos;IA
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
                Ashura aide les marques ambitieuses a clarifier leur
                positionnement, creer des campagnes memorables et utiliser
                l&apos;IA comme vecteur strategique.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <PrimaryButton
                  icon={
                    <ArrowRight className="h-6 w-6 transition-transform duration-500 group-hover:translate-x-1" />
                  }
                >
                  Demarrer un brief
                </PrimaryButton>
                <SecondaryButton />
              </div>
            </div>
          </motion.div>

          <div className="relative z-10 pt-8 pb-8 sm:py-24">
            <div className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                Trusted by teams at
              </p>
            </div>

            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <motion.div
                className="flex w-max items-center gap-16 py-2"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {trustLogos.map((logo) => (
                  <span
                    key={logo.id}
                    className="flex h-16 w-24 shrink-0 items-center justify-center text-center text-[11px] font-semibold tracking-[0.18em] text-zinc-400 transition-colors duration-300 hover:text-white"
                  >
                    {logo.label}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
