import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import f1Dryer from "@/assets/f1-dryer.jpg";
import twinTitan from "@/assets/twin-titan.jpg";
import harmonyDryer from "@/assets/harmony-dryer.jpg";

const ProductFeatures = () => {
  const products = [
    {
      id: "f1",
      name: "Jirpet F1 Pet Dryer Cabin",
      subtitle: "Pioneiro em Pet Grooming Inteligente",
      image: f1Dryer,
      video: "/videos/f1-demo.mp4", // Placeholder para vídeo
      url: "https://jirpetbrasil.com.br/wp/produto/twin-titan-i-high-speed-pet-force-dryer/"
    },
    {
      id: "twin-titan",
      name: "Twin Titan I",
      subtitle: "Sistema Proprietário de Motores Duplos", 
      image: twinTitan,
      video: "/videos/twin-titan-demo.mp4", // Placeholder para vídeo
      url: "https://jirpetbrasil.com.br/wp/produto/f1-pet-hair-dryer-cabin/"
    },
    {
      id: "harmony",
      name: "Jirpet Harmony I",
      subtitle: "Solução Inovadora de Secagem Pet",
      image: harmonyDryer,
      video: "/videos/harmony-demo.mp4", // Placeholder para vídeo
      url: "https://jirpetbrasil.com.br/wp/produto/harmony-i-pet-neck-dryer/"
    }
  ];

  return (
    <section className="jirpet-section bg-gradient-to-b from-gray-50 to-white">
      <div className="jirpet-container">
        {products.map((product, index) => (
          <div 
            key={product.id}
            className={`flex flex-col lg:flex-row items-center gap-12 mb-24 last:mb-0 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-jirpet-dark">
                {product.name}
              </h2>
              <p className="text-xl lg:text-2xl text-jirpet-gray mb-8">
                {product.subtitle}
              </p>
              
              <Button 
                className="jirpet-btn-primary group"
                onClick={() => window.open(product.url, '_blank')}
              >
                Saiba Mais
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Product Visual */}
            <div className="flex-1 relative">
              <Card className="jirpet-card relative overflow-hidden group">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="jirpet-btn-secondary">
                          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                          Assistir Vídeo
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full p-0">
                        <div className="aspect-video w-full">
                          <video
                            className="w-full h-full rounded-lg"
                            controls
                            autoPlay
                            src={product.video}
                          >
                            Seu navegador não suporta vídeo.
                          </video>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </Card>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-jirpet-orange/20 rounded-full animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-jirpet-orange/10 rounded-full animate-float" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFeatures;