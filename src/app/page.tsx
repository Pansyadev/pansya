import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection"; // <-- 1. IMPORT

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedSection /> {/* <-- 2. TAMBAHKAN DI SINI */}
    </main>
  );
}