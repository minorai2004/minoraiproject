import { motion } from "framer-motion";
import { Brain, Cpu, Globe } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Inteligencia Artificial Generativa",
    description:
      "Creación de sistemas de IA capaces de generar texto, imágenes y contenido inteligente.",
  },
  {
    icon: Cpu,
    title: "Automatización con IA",
    description:
      "Automatización de flujos de trabajo y procesos digitales utilizando inteligencia artificial.",
  },
  {
    icon: Globe,
    title: "Desarrollo de Páginas Web",
    description:
      "Sitios web modernos, rápidos y optimizados, construidos con las últimas tecnologías.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const Services = () => {
  return (
    <section id="servicios" className="py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Lo que hacemos
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Servicios
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
              className="group relative p-8 rounded-2xl bg-card border border-border hover-lift cursor-default"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-border" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-display font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
