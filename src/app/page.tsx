import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection"; // <-- 1. IMPORT
import FeaturedPortfolio from "@/components/FeaturedPortfolio";
import FeaturedWorkflow from "@/components/FeatureWorkflow";
import CTASection from "@/components/CTAsection";

export default function Home() {
  return (
    <main>
      <HeroSection />
       <FeaturedPortfolio /> 
       <FeaturedWorkflow />
      <FeaturedSection /> {/* <-- 2. TAMBAHKAN DI SINI */}
      <CTASection />
    </main>
  );
}