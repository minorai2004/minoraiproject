import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Nuestra visión
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8">
              Más sobre MINOR.AI
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-2xl md:text-3xl font-display font-semibold mb-8 leading-snug">
              El futuro se construye con inteligencia.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              MINOR.AI es una empresa de tecnología enfocada en crear soluciones avanzadas utilizando inteligencia artificial y tecnologías web modernas. Nuestro objetivo es ayudar a las empresas a evolucionar a través de la automatización, sistemas inteligentes y experiencias digitales de próxima generación.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {["Innovación", "Tecnología", "Inteligencia", "Automatización"].map(
              (word) => (
                <div
                  key={word}
                  className="text-center p-4 rounded-xl border border-border bg-background"
                >
                  <span className="text-sm font-medium font-display tracking-wide">
                    {word}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
