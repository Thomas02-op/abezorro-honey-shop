import { motion } from "framer-motion";
import heroImage from "@/assets/hero-honey.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Miel artesanal dorada"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-honey-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block text-honey-gold font-body text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Miel artesanal
          </motion.span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-6 text-honey-cream">
            El dulce sabor
            <br />
            <span className="italic text-honey-gold">de la naturaleza</span>
          </h1>

          <p className="text-lg md:text-xl text-honey-warm max-w-lg mb-10 leading-relaxed">
            Cosechamos con amor la miel más pura directamente de nuestros apiarios, 
            preservando todos sus beneficios naturales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#productos"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:bg-accent transition-colors shadow-honey"
            >
              Descubrir productos
            </a>
            <a
              href="#nosotros"
              className="inline-flex items-center justify-center border border-honey-warm/30 text-honey-cream px-8 py-4 rounded-full font-semibold text-base hover:bg-honey-cream/10 transition-colors"
            >
              Nuestra historia
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-honey-warm/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-honey-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
