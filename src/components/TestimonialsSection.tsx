import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Manuel Martinez",
      role: "Tosador Profissional",
      quote: "A Jirpet Me Ajuda A Alternar Entre Ser Um Tosador de Salão E Um Participante, Lidando Com Ambos Com Fluidez Sem Esforço.",
      image: "/images/testimonial-1.jpg", // Placeholder
      isActive: true
    },
    {
      id: 2,
      name: "Ashley Pacini",
      role: "Proprietária de Salão",
      quote: "Como Competidora Internacional de Exposições Caninas E Proprietária de Salão, Uso Secadores Jirpet Para Gatos, Coelhos, Cães Idosos Sensíveis ao Ruído.",
      image: "/images/testimonial-2.jpg", // Placeholder
      isActive: false
    },
    {
      id: 3,
      name: "Johnathan Pires",
      role: "Tosador de Competição",
      quote: "A Jirpet Consistentemente Entrega Inovação, Como Íons Negativos, Elevando Meus Resultados de Pet Grooming Ao Próximo Nível.",
      image: "/images/testimonial-3.jpg", // Placeholder
      isActive: false
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="jirpet-section bg-gradient-to-b from-gray-50 to-white">
      <div className="jirpet-container">
        <div className="text-center mb-16">
          <h2 className="jirpet-title text-jirpet-dark">Escolha Profissional</h2>
          <p className="jirpet-subtitle text-jirpet-gray">Voz do Tosador</p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial Content */}
            <div className="space-y-8">
              <Card className="jirpet-card relative">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-jirpet-orange opacity-50" />
                <div className="pt-8">
                  <p className="text-xl lg:text-2xl text-jirpet-dark mb-6 leading-relaxed">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-jirpet-dark text-lg">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-jirpet-gray">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={prevTestimonial}
                        className="w-10 h-10 rounded-full border-jirpet-orange text-jirpet-orange hover:bg-jirpet-orange hover:text-white"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={nextTestimonial}
                        className="w-10 h-10 rounded-full border-jirpet-orange text-jirpet-orange hover:bg-jirpet-orange hover:text-white"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Testimonial Navigation */}
              <div className="flex space-x-4">
                {testimonials.map((testimonial, index) => (
                  <Button
                    key={testimonial.id}
                    variant={index === activeTestimonial ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTestimonial(index)}
                    className={index === activeTestimonial ? "jirpet-btn-primary" : "border-jirpet-orange text-jirpet-orange hover:bg-jirpet-orange hover:text-white"}
                  >
                    {testimonial.name.split(' ')[0]}
                  </Button>
                ))}
              </div>
            </div>

            {/* Product Image */}
            <div className="relative">
              <Card className="jirpet-card overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-jirpet-orange/10 to-jirpet-orange/5 flex items-center justify-center">
                  <div className="w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-jirpet-orange">Jirpet</span>
                  </div>
                </div>
              </Card>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-jirpet-orange/20 rounded-full animate-pulse-glow" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-jirpet-orange/10 rounded-full animate-float" />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="jirpet-card">
              <div className="space-y-6">
                {/* Product Image */}
                <div className="aspect-video bg-gradient-to-br from-jirpet-orange/10 to-jirpet-orange/5 rounded-lg flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <span className="font-bold text-jirpet-orange">Jirpet</span>
                  </div>
                </div>
                
                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-jirpet-orange opacity-50" />
                  <p className="text-lg text-jirpet-dark leading-relaxed pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                {/* Author */}
                <div className="text-center">
                  <h4 className="font-bold text-jirpet-dark">{testimonial.name}</h4>
                  <p className="text-jirpet-gray text-sm">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;