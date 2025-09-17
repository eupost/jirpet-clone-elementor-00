import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

const DiscountModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Show modal after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsOpen(false);
    
    // Show success message (could be a toast)
    alert("Obrigado! Seu código de 10% de desconto foi enviado para seu email.");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl p-0 bg-white rounded-2xl overflow-hidden border-0">
        <div className="relative">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 text-gray-600 hover:text-gray-800"
          >
            <X className="w-6 h-6" />
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Image */}
            <div className="relative bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center">
                  {/* Cute cat illustration placeholder */}
                  <div className="w-32 h-32 bg-orange-200 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🐱</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-center mb-8">
                <p className="text-gray-600 mb-2">Digite seu email e ganhe</p>
                <h2 className="text-5xl lg:text-6xl font-bold text-jirpet-orange mb-6">
                  10% DE DESCONTO
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Seu Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jirpet-orange focus:border-transparent"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full jirpet-btn-primary text-lg py-3"
                >
                  {isSubmitting ? "Carregando..." : "ENVIAR"}
                </Button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                Ao se inscrever, você concorda em receber emails promocionais. Você pode cancelar a inscrição a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountModal;