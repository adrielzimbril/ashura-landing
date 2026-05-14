"use client";

import GradientBlinds from "@/components/background/GradientBlinds";
import LightRays from "@/components/background/LightRays";
import PixelBlast from "@/components/background/PixelBlast";

export function BackgroundScene() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[820px] opacity-85 [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <GradientBlinds
          gradientColors={["#f8fafc", "#38bdf8", "#8b5cf6", "#111827"]}
          angle={18}
          noise={0.18}
          blindCount={14}
          blindMinWidth={72}
          spotlightRadius={0.62}
          spotlightSoftness={1.05}
          spotlightOpacity={0.68}
          distortAmount={0.08}
          mixBlendMode="screen"
        />
      </div>
      <div className="absolute inset-x-0 top-0 h-[900px] opacity-60">
        <LightRays
          raysOrigin="top-center"
          raysColor="#dbeafe"
          raysSpeed={0.55}
          lightSpread={0.84}
          rayLength={1.75}
          fadeDistance={0.95}
          saturation={0.82}
          followMouse
          mouseInfluence={0.06}
          noiseAmount={0.02}
          distortion={0.08}
        />
      </div>
      <div className="absolute inset-0 opacity-[0.22]">
        <PixelBlast
          variant="square"
          pixelSize={2}
          color="#ffffff"
          patternScale={1.35}
          patternDensity={0.42}
          enableRipples
          rippleSpeed={0.28}
          rippleThickness={0.13}
          rippleIntensityScale={0.55}
          speed={0.018}
          transparent
          edgeFade={0.35}
        />
      </div>
    </div>
  );
}
