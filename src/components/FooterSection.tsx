import { Mail, MapPin, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contacto" className="bg-honey-dark text-honey-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              abe<span className="text-honey-gold">zorro</span>
            </h3>
            <p className="text-honey-warm text-sm leading-relaxed max-w-xs">
              Miel artesanal de la más alta calidad, directamente de nuestros apiarios a tu mesa.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Explora</h4>
            <div className="flex flex-col gap-2.5">
              {["Inicio", "Productos", "Nosotros", "Contacto"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-honey-warm hover:text-honey-gold transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contacto</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-honey-warm">
                <Mail size={16} className="text-honey-gold" />
                hola@abezorro.es
              </div>
              <div className="flex items-center gap-3 text-sm text-honey-warm">
                <Phone size={16} className="text-honey-gold" />
                +34 600 123 456
              </div>
              <div className="flex items-center gap-3 text-sm text-honey-warm">
                <MapPin size={16} className="text-honey-gold" />
                Sierra de Gredos, España
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-honey-warm/20 pt-8 text-center">
          <p className="text-xs text-honey-warm/60">
            © 2025 Abezorro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
