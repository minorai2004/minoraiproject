import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-32 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Ponte en contacto
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8">
              Contacto
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl border border-border bg-card hover-lift"
          >
            <Mail size={20} className="text-muted-foreground" strokeWidth={1.5} />
            <div className="text-left">
              <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground mb-1">Email</p>
              <a
                href="mailto:minor.ai.2004@gmail.com"
                className="text-foreground font-medium hover:text-muted-foreground transition-colors duration-200"
              >
                minor.ai.2004@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
