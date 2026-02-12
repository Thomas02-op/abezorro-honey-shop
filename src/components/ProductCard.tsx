import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  weight: string;
  image: string;
  delay?: number;
}

const ProductCard = ({ name, description, price, weight, image, delay = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-honey-lg transition-all duration-500"
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
        <div className="flex items-center justify-between">
          <span className="text-2xl font-display font-bold text-primary">{price}</span>
          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-colors">
            <ShoppingBag size={14} />
            Añadir
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
