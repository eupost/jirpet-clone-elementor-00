import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="jirpet-container">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl lg:text-3xl font-bold text-jirpet-orange">
              Jirpet
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="font-medium hover:text-jirpet-orange transition-colors">
              LOJA
            </a>
            <a href="#" className="font-medium hover:text-jirpet-orange transition-colors">
              SOBRE NÓS
            </a>
            <a href="#" className="font-medium hover:text-jirpet-orange transition-colors">
              JUNTE-SE A NÓS
            </a>
            <a href="#" className="font-medium hover:text-jirpet-orange transition-colors">
              CONTATO
            </a>
            <a href="#" className="font-medium hover:text-jirpet-orange transition-colors">
              BLOG
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span className="font-medium">Entrar</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-medium">R$ 0,00</span>
            </div>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="font-medium hover:text-jirpet-orange transition-colors">
                LOJA
              </a>
              <a href="#" className="font-medium hover:text-jirpet-orange transition-colors">
                SOBRE NÓS
              </a>
              <a href="#" className="font-medium hover:text-jirpet-orange transition-colors">
                JUNTE-SE A NÓS
              </a>
              <a href="#" className="font-medium hover:text-jirpet-orange transition-colors">
                CONTATO
              </a>
              <a href="#" className="font-medium hover:text-jirpet-orange transition-colors">
                BLOG
              </a>
              <div className="flex items-center space-x-2 pt-2">
                <User className="w-5 h-5" />
                <span className="font-medium">Entrar</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;