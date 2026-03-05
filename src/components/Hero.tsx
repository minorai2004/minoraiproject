import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroVisual = () => (
  <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
    <svg viewBox="0 0 400 400" className="w-full max-w-md opacity-80" fill="none">
      {/* Orbital rings */}
      <circle cx="200" cy="200" r="150" stroke="hsl(var(--foreground))" strokeWidth="0.5" opacity="0.15" />
      <circle cx="200" cy="200" r="100" stroke="hsl(var(--foreground))" strokeWidth="0.5" opacity="0.1" />
      <circle cx="200" cy="200" r="50" stroke="hsl(var(--foreground))" strokeWidth="0.5" opacity="0.2" />
      
      {/* Center dot */}
      <circle cx="200" cy="200" r="4" fill="hsl(var(--foreground))" opacity="0.8" />
      
      {/* Nodes */}
      {[
        [200, 50], [320, 130], [340, 260], [200, 350], [60, 260], [80, 130],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="3" fill="hsl(var(--foreground))" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
          </circle>
          <line x1="200" y1="200" x2={cx} y2={cy} stroke="hsl(var(--foreground))" strokeWidth="0.3" opacity="0.1" />
        </g>
      ))}

      {/* Animated orbit dot */}
      <circle r="3" fill="hsl(var(--glow))" opacity="0.8">
        <animateMotion dur="8s" repeatCount="indefinite" path="M200,50 A150,150 0 0,1 350,200 A150,150 0 0,1 200,350 A150,150 0 0,1 50,200 A150,150 0 0,1 200,50" />
      </circle>
    </svg>
  </div>
);

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-muted/50 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/80 blur-3xl" />

      <div className="container relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Artificial Intelligence & Web Development
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6">
              Building the Future
              <br />
              <span className="text-gradient">with Intelligence</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Creamos sistemas inteligentes, soluciones de IA generativa y experiencias digitales modernas para empresas que buscan evolucionar.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity duration-200"
              >
                Ver servicios
                <ArrowRight size={16} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors duration-200"
              >
                Contactar
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
