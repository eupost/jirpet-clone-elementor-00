import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import f1Dryer from "@/assets/f1-dryer.jpg";
import twinTitan from "@/assets/twin-titan.jpg";
import harmonyDryer from "@/assets/harmony-dryer.jpg";
import familyProducts from "@/assets/family-products.jpg";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "F1 Dryer Cabin",
      description: "Secagem Rápida | Operação Silenciosa",
      image: f1Dryer,
      price: "R$ 17.299",
      originalPrice: "R$ 20.199"
    },
    {
      id: 2,
      name: "Twin Titan I",
      description: "Secador de Força Pet",
      image: twinTitan,
      price: "R$ 10.999",
      originalPrice: "R$ 12.709"
    },
    {
      id: 3,
      name: "Harmony I",
      description: "Secador Pet de Pescoço",
      image: harmonyDryer,
      price: "R$ 5.199",
      originalPrice: "R$ 6.359"
    }
  ];

  return (
    <section className="jirpet-section bg-white">
      <div className="jirpet-container">
        <div className="text-center mb-16">
          <h2 className="jirpet-title text-jirpet-dark">Nossos Produtos</h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="jirpet-card group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-jirpet-dark">{product.name}</h3>
                <p className="text-jirpet-gray">{product.description}</p>
                
                
                <Button 
                  className="w-full jirpet-btn-primary group"
                  onClick={() => window.open('https://jirpetbrasil.com.br/wp/loja/', '_blank')}
                >
                  <ShoppingCart className="mr-2 w-5 h-5" />
                  COMPRAR AGORA
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="jirpet-card">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full sm:w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-jirpet-dark">{product.name}</h3>
                  <p className="text-jirpet-gray text-sm">{product.description}</p>
                  
                  
                  <Button 
                    className="jirpet-btn-primary"
                    onClick={() => window.open('https://jirpetbrasil.com.br/wp/loja/', '_blank')}
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Family Section */}
        <div className="py-16">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-jirpet-dark mb-8 text-center">
              Família Jirpet
            </h2>
            
            {/* Family Products Image - Full Width */}
            <div className="relative w-full">
              <img 
                src={familyProducts}
                alt="Família completa de produtos Jirpet"
                className="w-full h-[400px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
              
              {/* Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  className="jirpet-btn-primary text-lg px-8 py-4 shadow-lg hover:scale-105 transition-transform"
                  onClick={() => window.open('https://jirpetbrasil.com.br/wp/loja/', '_blank')}
                >
                  Saiba mais
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;