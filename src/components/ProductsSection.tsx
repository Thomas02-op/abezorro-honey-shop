import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import honeyJar from "@/assets/honey-abezorro-jar.png";

const products = [
  {
    name: "Miel de Flores Silvestres",
    description: "Suave y aromática, recolectada de praderas naturales llenas de diversidad floral.",
    price: "€12,90",
    weight: "500g",
    image: honeyJar,
  },
  {
    name: "Miel de Lavanda",
    description: "Delicada y perfumada, con notas florales únicas de los campos de lavanda.",
    price: "€14,90",
    weight: "500g",
    image: honeyJar,
  },
];

const ProductsSection = () => {
  return (
    <section id="productos" className="py-24 md:py-32 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">
            Nuestros Productos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Miel pura, <span className="italic text-primary">de verdad</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
            Cada tarro es una muestra de dedicación artesanal y respeto por las abejas y su entorno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto justify-items-center">
          {products.map((product, i) => (
            <ProductCard key={product.name} {...product} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
