import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroBg}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
      </video>
      <div className="jirpet-hero-overlay" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          Secagem Inteligente.{" "}
          <span className="text-jirpet-orange">Resultados Reais.</span>
        </h1>
        
        <p className="text-xl lg:text-2xl mb-8 text-gray-200 animate-fade-in-up">
          Explore Possibilidades Infinitas no Pet Grooming
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <Button className="jirpet-btn-primary group">
            Explorar Produtos
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button className="jirpet-btn-secondary group">
            <Play className="mr-2 w-5 h-5" />
            Assistir Demo
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;