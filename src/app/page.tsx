import { DeveloperTeam } from "@/sections/DeveloperTeam";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import Testimonials from "@/sections/Testimonials";

import { VenuePartner } from "@/sections/VenuePartner";
import { LenientTree } from "@/sections/LenientTree";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <VenuePartner />
      <LenientTree />
      <DeveloperTeam />
      <Footer />
    </div>
  );
}
