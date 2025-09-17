import { Card } from "@/components/ui/card";
import { Award, MapPin, Users, Heart, Calendar } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: MapPin,
      number: "500+",
      label: "Cidades",
      description: "Disponível em Mais de 500 Cidades no Mundo Todo"
    },
    {
      icon: Users,
      number: "60.000+",
      label: "Pet Shops & Criadores",
      description: ""
    },
    {
      icon: Award,
      number: "52%",
      label: "Funcionários P&D",
      description: ""
    },
    {
      icon: Heart,
      number: "800.000+",
      label: "Atendemos Mais de 800.000 Pets Adoráveis",
      description: ""
    },
    {
      icon: Calendar,
      number: "8 Anos",
      label: "de Inovação",
      description: "8 Anos de Expertise em Soluções High-End de Pet Grooming"
    }
  ];

  return (
    <section className="jirpet-section bg-gradient-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--jirpet-orange)) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, hsl(var(--jirpet-orange)) 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="jirpet-container relative">
        <div className="text-center mb-16">
          <h2 className="jirpet-title text-white mb-4">
            Vendas Globais Nº1 em High-End
          </h2>
          <h2 className="jirpet-title text-jirpet-orange">
            Equipamentos de Pet Grooming
          </h2>
        </div>

        {/* Certificate */}
        <div className="flex justify-center mb-16">
          <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Award className="w-16 h-16 text-jirpet-orange" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-jirpet-orange" />
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-jirpet-orange font-semibold">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-sm text-gray-300">
                    {stat.description}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;