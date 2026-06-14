import { Link } from "wouter";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Cakes", href: "#cakes" },
    { name: "Snacks", href: "#snacks" },
    { name: "Pastries", href: "#pastries" },
    { name: "Packs", href: "#packs" },
    { name: "Desserts", href: "#desserts" },
    { name: "Breads", href: "#breads" },
    { name: "Contact", href: "#contact" },
    { name: "About Us", href: "#about" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="hover-trigger flex items-center gap-3">
          <img
            src="/images/images.jpg"
            alt="Morine Bakery Logo"
            className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-primary/50 shadow-lg shadow-primary/20"
          />
          <span className="font-display text-xl md:text-2xl font-bold tracking-wider text-primary">
            MORINE <span className="text-foreground">BAKERY</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors hover-trigger"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-primary">
          <Phone size={18} />
          <span className="font-medium text-sm tracking-wide">+91-84990 81111</span>
        </div>
      </div>
      {scrolled && <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />}
    </motion.header>
  );
}
