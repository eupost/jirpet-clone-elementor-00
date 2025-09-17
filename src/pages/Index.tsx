import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductFeatures from "@/components/ProductFeatures";
import ProductGrid from "@/components/ProductGrid";
import StatsSection from "@/components/StatsSection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import DiscountModal from "@/components/DiscountModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductFeatures />
      <ProductGrid />
      <StatsSection />
      <VideoSection />
      <TestimonialsSection />
      <Footer />
      <DiscountModal />
    </div>
  );
};

export default Index;
