import { motion } from "framer-motion";
import { Brain, Cpu, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Brain,
    title: "Inteligencia Artificial Generativa",
    description:
      "En MINOR.AI desarrollamos sistemas capaces de generar texto, imágenes y contenido inteligente utilizando modelos de IA modernos. Nuestras soluciones generativas permiten a las empresas crear contenido de alta calidad de forma automatizada, optimizando procesos creativos y mejorando la experiencia del usuario final.",
  },
  {
    icon: Cpu,
    title: "Automatización con IA",
    description:
      "Ayudamos a las empresas a automatizar flujos de trabajo y procesos digitales utilizando herramientas de inteligencia artificial. Desde la gestión de datos hasta la atención al cliente, nuestras soluciones de automatización reducen costes, aumentan la eficiencia y liberan a los equipos para enfocarse en tareas de mayor valor.",
  },
  {
    icon: Globe,
    title: "Desarrollo de Páginas Web",
    description:
      "Construimos sitios web modernos, rápidos y optimizados utilizando las tecnologías más avanzadas. Cada proyecto se diseña con un enfoque en la experiencia del usuario, el rendimiento y la escalabilidad, asegurando una presencia digital profesional y de alto impacto.",
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

const ServiciosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Lo que hacemos
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
              Servicios
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="group relative p-8 rounded-2xl bg-card border border-border hover-lift cursor-default"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-border" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-lg font-display font-semibold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiciosPage;
