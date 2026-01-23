
import HeroSection from "./components/HeroSection";
import RsvpSection from "./components/RsvpSection";
import EventSection from "./components/EventSection";
import StatementSection from "./components/StatementSection";
import ExperienceSection from "./components/ExperienceSection";
import FeaturesSection from "./components/FeatureSection";
import PricingSection from "./components/PricingSection";
import CtaSection from "./components/CtaSection";
import Navbar from "./components/NavBar";
import InvitationGallery from "./components/InvitationGallery";
import { invitations } from "./datos/invitations";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F2E4DC] text-[#9295A6]">
      <Navbar/>
      <HeroSection />
      <ExperienceSection />
      <FeaturesSection />
      <EventSection />
      <RsvpSection />
      <StatementSection />
      <PricingSection />
      <InvitationGallery items={invitations} />
      <CtaSection/>
    </main >
  );
}