import logo from "@/assets/logo-minor-ai.png";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Más sobre MINOR.AI", href: "#about" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <img src={logo} alt="MINOR.AI" className="h-8 mb-3" />
            <p className="text-sm text-muted-foreground">
              Artificial Intelligence & Web Development
            </p>
          </div>
          <div className="flex gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MINOR.AI — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
