"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ImageIcon,
  Lightbulb,
  Mail,
  Menu,
  Package,
  PenLine,
  Phone,
  Play,
  Rocket,
  Shapes,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { SmoothScroll } from "./SmoothScroll";

const imageBase =
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets";

const navItems = ["Services", "Work", "Insights", "Contact"];
const trustLogos = [
  { id: "nasa-a", label: "NASA" },
  { id: "spacex-a", label: "SPACEX" },
  { id: "uber-a", label: "UBER" },
  { id: "visa-a", label: "VISA" },
  { id: "grab-a", label: "GRAB" },
  { id: "bose-a", label: "BOSE" },
  { id: "dji-a", label: "DJI" },
  { id: "nikon-a", label: "NIKON" },
  { id: "craftsman-a", label: "CRAFTSMAN" },
  { id: "nasa-b", label: "NASA" },
  { id: "spacex-b", label: "SPACEX" },
  { id: "uber-b", label: "UBER" },
  { id: "visa-b", label: "VISA" },
  { id: "grab-b", label: "GRAB" },
  { id: "bose-b", label: "BOSE" },
  { id: "dji-b", label: "DJI" },
  { id: "nikon-b", label: "NIKON" },
  { id: "craftsman-b", label: "CRAFTSMAN" },
];

const selectedWork = [
  {
    src: `${imageBase}/9e5edfb1-71c0-45ee-851e-b931230335ef_800w.png`,
    alt: "Industrial 3D player render",
  },
  {
    src: `${imageBase}/dda8e6d4-379e-4543-be25-a52f7ddaaf0a_800w.png`,
    alt: "Minimal portrait with headphones",
  },
  {
    src: `${imageBase}/f952d389-43de-4241-860a-7ac1c4efacc5_800w.png`,
    alt: "Cosmetic tube held by hand",
  },
  {
    src: `${imageBase}/ab0ad909-3ead-4caa-a873-7fb9966063f3_800w.png`,
    alt: "Lemon still life on block",
  },
  {
    src: `${imageBase}/6d2bf92d-d36d-45a3-81f2-91fbf415f24c_800w.png`,
    alt: "Stacked visual identity blocks",
  },
  {
    src: `${imageBase}/2e6d8d1b-115f-4e3b-9e0e-0f62391d07cc_800w.png`,
    alt: "Cosmetics on circular plinth",
  },
  {
    src: `${imageBase}/d0b0e741-063f-42e3-aea0-6bbda44c8af1_1600w.png`,
    alt: "Matte coffee bag packaging",
  },
  {
    src: `${imageBase}/c5da4838-3aa6-46dc-a9e9-3cbd28174d22_1600w.png`,
    alt: "Hand holding product bottle",
  },
  {
    src: `${imageBase}/0eb740cc-bb33-4d58-a47f-f8244aa5f47f_800w.png`,
    alt: "Minimal packaging still life",
  },
];

const recentProjects = [
  {
    src: `${imageBase}/7b1b4397-d561-464c-9729-1d5617f66579_800w.jpg`,
    alt: "Dashboard interface design",
  },
  {
    src: `${imageBase}/6dc04406-de49-4988-8d82-e1d9fe1d83c1_800w.jpg`,
    alt: "Mobile app interface",
  },
  {
    src: `${imageBase}/5d1e46f6-6956-44c3-a8b6-ceb2c438c8f5_800w.jpg`,
    alt: "Website design mockup",
  },
  {
    src: `${imageBase}/77827dc5-39e4-4855-bf02-5d844f2cc636_800w.jpg`,
    alt: "Design system components",
  },
];

const services = [
  {
    title: "Brand Identity",
    icon: Sparkles,
    text: "Crafting unique, memorable identities that resonate - from names and logos to flexible systems that scale across every touchpoint.",
  },
  {
    title: "Brand Design",
    icon: Shapes,
    text: "Visual systems and guidelines that keep your brand consistent - typography, colors, components, and motion rules.",
  },
  {
    title: "Package Design",
    icon: Package,
    text: "Shelf-ready packaging that looks premium and prints perfectly - dielines, variants, and compliance handled.",
  },
  {
    title: "Mockup Design",
    icon: ImageIcon,
    text: "High-fidelity mockups for products and campaigns - perfect for pitches, listings, and launch pages.",
  },
];

const process = [
  {
    title: "Define Your Vision",
    icon: Lightbulb,
    text: "Find the perfect plan tailored to your needs, balancing features, flexibility, and value so we can align on goals effortlessly.",
  },
  {
    title: "Submit Your Request",
    icon: SlidersHorizontal,
    text: "Send your requirements via our private portal. We clarify scope, share direction, and translate your vision into precise, actionable work.",
  },
  {
    title: "Project Delivered",
    icon: Rocket,
    text: "Receive polished deliverables in 2-3 days. With an eye for detail and quality, we bring your brand to life on time.",
  },
];

const serviceTags = [
  "Product Design",
  "Brand Identity Design",
  "Branding",
  "Packaging Design",
  "Mockup Design",
];

const tagCloud = [
  "Copy Updates",
  "Brand Migration",
  "Slide Decks",
  "Brand Graphics",
  "Social Media",
  "Icons",
  "Brand Integrations",
  "Optimization",
  "Landing Pages",
];

const footerLinks = {
  Services: [
    "Brand Identity",
    "Product Design",
    "Motion Graphics",
    "Web Development",
    "Design Systems",
  ],
  Company: ["About Us", "Careers", "Our Process", "Case Studies", "Blog"],
  Resources: ["Help Center", "Documentation", "Community", "API Status"],
  Connect: ["Contact Us", "Support", "Partner Program"],
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Logo() {
  return (
    <a href="#top" className="group inline-flex items-center gap-2">
      <span className="grid h-7 w-7 place-items-center rounded-full border border-white/15 bg-white text-[11px] font-semibold text-neutral-950">
        A
      </span>
      <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
        Ashura
      </span>
    </a>
  );
}

function PrimaryButton({
  children,
  icon = <ArrowRight className="h-4 w-4" />,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <a
      href="#contact"
      className="group relative inline-flex rounded-xl p-px text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03] active:scale-95"
    >
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-300 via-sky-500 to-fuchsia-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="relative z-10 inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-5 py-3 ring-1 ring-white/15">
        <span>{children}</span>
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      </span>
    </a>
  );
}

function GhostButton({
  children,
  icon = <Play className="h-4 w-4" />,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <a
      href="#work"
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/10"
    >
      {children}
      {icon}
    </a>
  );
}

function SectionPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      <span className="text-xs text-neutral-200 md:text-sm">{children}</span>
    </div>
  );
}

function FramedImage({
  src,
  alt,
  aspect = "aspect-[4/3]",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  aspect?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-neutral-900/60 ring-1 ring-white/10 ${aspect}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes={sizes}
        className="object-cover grayscale transition duration-700 hover:scale-[1.03] hover:grayscale-[35%]"
      />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-neutral-950 text-neutral-200"
    >
      <SmoothScroll />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.18),transparent_34%),linear-gradient(180deg,rgba(10,10,10,0)_0%,#0a0a0a_72%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.9)_1px,transparent_1px)] [background-size:72px_72px]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex h-[68px] items-center justify-between">
            <Logo />
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-neutral-300 transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/5 text-white ring-1 ring-white/10 md:hidden"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="pb-5 md:hidden"
            >
              <div className="grid gap-2 rounded-2xl bg-neutral-900/80 p-4 ring-1 ring-white/10">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-white/5"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15"
                >
                  <Sparkles className="h-4 w-4" />
                  Request Access
                </a>
              </div>
            </motion.div>
          ) : null}
        </div>
      </header>

      <section className="relative px-6 pb-10 pt-32 md:px-8 md:pb-20 md:pt-40">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 flex justify-center">
            <SectionPill>Crafting distinctive digital identities</SectionPill>
          </div>
          <h1 className="font-display text-5xl font-light leading-[0.94] tracking-normal text-white md:text-7xl lg:text-8xl">
            Branding that truly converts
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
            Elevate your presence with identity systems and product visuals. We
            design for clarity, momentum, and measurable outcomes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton>Get Started Now</PrimaryButton>
            <GhostButton>See Projects</GhostButton>
          </div>
        </motion.div>

        <div className="mx-auto mt-18 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            Trusted by teams at
          </p>
          <motion.div
            className="flex w-max gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {trustLogos.map((logo) => (
              <span
                key={logo.id}
                className="flex h-14 w-[136px] shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-xs font-semibold tracking-[0.24em] text-zinc-400 transition hover:text-white"
              >
                {logo.label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="work" className="px-6 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="font-display text-3xl font-medium tracking-normal text-white md:text-4xl">
              Selected Work
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-300 md:text-base">
              Strategy-led direction and tasteful execution across identity,
              web, and motion.
            </p>
          </motion.div>

          <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {selectedWork.map((item, index) => (
              <motion.a
                key={item.src}
                href="#contact"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.04, duration: 0.55 }}
                whileHover={{ y: -8, rotateX: 4, rotateY: 1 }}
                className="group relative mb-6 block break-inside-avoid overflow-hidden rounded-lg bg-neutral-900/50 ring-1 ring-white/10"
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
                <span className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-4 rounded-full bg-white/10 px-4 py-2 text-center text-xs text-white opacity-0 ring-1 ring-white/20 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:text-sm">
                  View Case Study{" "}
                  <ArrowUpRight className="ml-1 inline h-4 w-4" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="px-6 pb-24 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <FramedImage
              src={`${imageBase}/b59bad79-703a-4c05-8ed2-fafcc49a7b51_800w.jpg`}
              alt="Professional portrait"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="font-display text-4xl font-light tracking-normal text-white md:text-6xl">
              Meet Alex
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300 md:text-base">
              Alex is a creative digital product designer and front-end
              developer based in San Francisco, specializing in seamless user
              experiences and visual systems that bridge design and technology.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "UI/UX Design",
                "React Development",
                "Design Systems",
                "Prototyping",
                "Web Development",
                "TypeScript",
                "Figma",
              ].map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 h-px bg-white/10" />
            <div className="mt-6 space-y-4">
              {[
                ["Senior Designer", "TechFlow Inc", "Currently"],
                ["Product Designer", "PixelCraft Studio", "2022-24"],
                ["UI Designer", "StartupLab", "2020-22"],
              ].map(([role, company, period]) => (
                <div
                  key={role}
                  className="grid grid-cols-[1.1fr_1fr_auto] items-baseline gap-3 text-sm md:text-base"
                >
                  <span className="text-neutral-200">{role}</span>
                  <span className="text-neutral-300">{company}</span>
                  <span className="text-right text-neutral-400">{period}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-neutral-300">
              <span>Recent Projects</span>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
                <ArrowDown className="h-3.5 w-3.5" />
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recentProjects.map((item, index) => (
            <motion.a
              href="#contact"
              key={item.src}
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
              <span className="pointer-events-none absolute inset-x-3 bottom-3 rounded-full bg-white/10 px-4 py-2 text-center text-xs text-white ring-1 ring-white/20 backdrop-blur md:text-sm">
                View Project <ArrowUpRight className="ml-1 inline h-4 w-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 rounded-2xl bg-neutral-900/50 p-6 ring-1 ring-white/10 md:grid-cols-2 md:p-8"
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
              <PrimaryButton icon={<Phone className="h-4 w-4" />}>
                Book a Free Call
              </PrimaryButton>
              <GhostButton>See Projects</GhostButton>
            </div>
            <div className="mt-6 space-y-4">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                    className="relative overflow-hidden rounded-2xl bg-neutral-900/60 p-5 ring-1 ring-white/10 md:p-6"
                  >
                    <span className="absolute right-4 top-4 grid h-6 w-6 place-items-center rounded-full bg-white/5 text-xs text-neutral-300 ring-1 ring-white/10">
                      {index + 1}
                    </span>
                    <div className="flex items-start gap-4">
                      <span className="grid h-9 w-14 shrink-0 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
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
      </section>

      <section id="services" className="px-6 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <SectionPill>Design services</SectionPill>
              <h2 className="mt-4 font-display text-4xl font-light tracking-normal text-white md:text-6xl">
                Services
              </h2>
              <p className="mt-3 text-sm leading-7 text-neutral-300 md:text-base">
                Helping teams stand out with refined identity, product visuals,
                and content updates that captivate and convert.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {serviceTags.map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton icon={<Phone className="h-4 w-4" />}>
                  Book a Free Call
                </PrimaryButton>
                <GhostButton>See Projects</GhostButton>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <FramedImage
                src={`${imageBase}/4e62d3a0-57fa-4882-a644-34db751f6e28_1600w.jpg`}
                alt="Minimal product bottles still life"
                aspect="aspect-[16/10]"
              />
            </motion.div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.48 }}
                  className="rounded-2xl bg-neutral-900/60 p-5 ring-1 ring-white/10 md:p-6"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
                      <Icon className="h-[18px] w-[18px] text-neutral-200" />
                    </span>
                    <div>
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
              <span key={tag} className="pill">
                {index === 0 ? <PenLine className="h-3.5 w-3.5" /> : null}
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-white/10 px-6 py-16 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <Logo />
              <p className="mt-5 max-w-xs text-sm leading-7 text-neutral-400">
                Crafting distinctive brand identities and digital product
                visuals that inspire and convert. Strategy-first design for
                modern teams.
              </p>
              <div className="mt-6 flex items-center gap-4 text-neutral-400">
                {[
                  { label: "X", name: "Twitter" },
                  { label: "IG", name: "Instagram" },
                  { label: "IN", name: "LinkedIn" },
                ].map(({ label, name }) => (
                  <a
                    key={name}
                    href="#contact"
                    aria-label={name}
                    className="grid h-8 w-8 place-items-center rounded-full bg-white/5 text-[11px] font-semibold transition hover:bg-white/10 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-5 text-sm font-medium text-white">{title}</h3>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white"
                      >
                        {link}
                        {link === "Careers" ? (
                          <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] font-medium text-white ring-1 ring-white/20">
                            Hiring
                          </span>
                        ) : null}
                      </a>
                    </li>
                  ))}
                </ul>
                {title === "Connect" ? (
                  <a
                    href="mailto:hello@novalume.studio"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    hello@novalume.studio
                  </a>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              All systems operational
            </div>
            <p className="text-sm text-neutral-400">
              Copyright 2026 Ashura Studio. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-neutral-400">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((link) => (
                <a
                  key={link}
                  href="#contact"
                  className="transition hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
