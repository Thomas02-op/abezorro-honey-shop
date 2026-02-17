import { motion } from "framer-motion";
import { Leaf, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Natural",
    description: "Sin aditivos, sin pasteurizar. Miel cruda tal como la produce la naturaleza.",
  },
  {
    icon: Heart,
    title: "Con Amor",
    description: "Cada colmena recibe atención personalizada para garantizar el bienestar de las abejas.",
  },
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Seleccionamos solo las mejores cosechas para ofrecerte una experiencia única.",
  },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">
              Nuestra Historia
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-card-foreground">
              Tradición que <span className="italic text-primary">endulza</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              En Abezorro, somos una familia apicultora con generaciones de experiencia. 
              Nuestras abejas trabajan en entornos naturales protegidos, produciendo una miel 
              que conserva todas sus propiedades y sabor auténtico.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center p-8 rounded-2xl bg-background border border-border"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                  <feature.icon size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
