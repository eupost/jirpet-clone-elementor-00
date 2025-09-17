import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { 
  Truck, 
  Shield, 
  CreditCard, 
  Headphones,
  Facebook,
  Youtube,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  const benefits = [
    {
      icon: Truck,
      title: "Entrega Rápida e Grátis",
      description: "Receba todos os seus pedidos com entrega rápida e frete grátis padrão. Entre em contato com o atendimento para detalhes de envio antes da compra."
    },
    {
      icon: Shield,
      title: "Garantia de 1 Ano", 
      description: "Sua tranquilidade é garantida com nosso serviço de garantia de 1 ano. Entre em contato com o atendimento para detalhes da garantia antes da compra."
    },
    {
      icon: CreditCard,
      title: "Financiamento Fácil",
      description: "Aceitamos vários métodos de pagamento, incluindo cartões de crédito/débito, PIX e outras plataformas de pagamento online."
    },
    {
      icon: Headphones,
      title: "Suporte 24/7",
      description: "Obtenha ajuda a qualquer momento via mensagem no site ou contato@jirpet.com.br, responderemos o mais rápido possível."
    }
  ];

  return (
    <footer className="bg-jirpet-dark text-white">
      {/* Benefits Section */}
      <section className="jirpet-section">
        <div className="jirpet-container">
          <div className="text-center mb-16">
            <h2 className="jirpet-title text-white">Por Que Comprar da Jirpet.com.br?</h2>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 text-center p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <benefit.icon className="w-12 h-12 text-jirpet-orange" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
                <div className="flex items-start space-x-4">
                  <benefit.icon className="w-8 h-8 text-jirpet-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-t border-white/10 py-16">
        <div className="jirpet-container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Inscreva-se para novidades de eventos
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Endereço de Email*"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="jirpet-btn-primary">
                Inscrever
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Copyright */}
      <section className="border-t border-white/10 py-8">
        <div className="jirpet-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-jirpet-orange">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-jirpet-orange">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-jirpet-orange">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Jirpet. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-sm">
                Pioneira em Equipamentos Inteligentes de Pet Grooming
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;