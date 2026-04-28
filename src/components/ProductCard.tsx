import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  weight: string;
  image: string;
  delay?: number;
}

const WHATSAPP_NUMBER = "34600000000"; // Reemplaza por el número real de Abezorro

const ProductCard = ({ name, description, price, weight, image, delay = 0 }: ProductCardProps) => {
  const message = encodeURIComponent(
    `Hola Abezorro, me interesa la ${name} de ${weight}.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-honey-lg transition-all duration-500 w-full max-w-sm"
    >
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold text-primary tracking-widest uppercase">
          {weight}
        </span>
        <h3 className="font-display text-xl font-semibold mt-1 mb-2 text-card-foreground">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between gap-3">
          <span className="text-2xl font-display font-bold text-primary">{price}</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[hsl(var(--whatsapp))] text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-[hsl(var(--whatsapp-dark))] transition-colors shadow-md"
          >
            <MessageCircle size={16} />
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
