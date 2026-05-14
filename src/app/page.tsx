import { BackgroundScene } from "@/components/background/BackgroundScene";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Profile } from "@/components/sections/Profile";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { SmoothScroll } from "./SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-neutral-200">
        <div className="aura-page-bg" aria-hidden="true" />
        <BackgroundScene />
        <div className="relative z-10">
          <Hero />
          <SelectedWork />
          <Profile />
          <Process />
          <Services />
        </div>
      </main>
      <Footer />
    </>
  );
}
