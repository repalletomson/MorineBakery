import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { CustomCursor } from "@/components/cursor";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TiltCard } from "@/components/3d-card";
import { Button } from "@/components/ui/button";

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
          }}
        />
      ))}
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-16">
      <div className="w-1/2 max-w-md shimmer-divider" />
    </div>
  );
}

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const [activeBurgerMenu, setActiveBurgerMenu] = useState(false);
  const [hoveredDessert, setHoveredDessert] = useState<number | null>(null);

  const getImg = (path: string, fallback: string = "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=60") => {
    return path; 
  }

  const cakes = [
    { name: "Classic Sponge", desc: "Plain elegant", img: "/images/cake-classic.png" },
    { name: "Cool Cake", desc: "Chilled cream cake", img: "/images/cake-cool.png" },
    { name: "Fancy Cake", desc: "Designer celebration cake", img: "/images/cake-fancy.png" },
    { name: "Plum Cake", desc: "Rich dark fruit cake", img: "/images/cake-plum.png" },
    { name: "Shop Cake", desc: "Bakery-style display cake", img: "/images/cake-shop.png" },
  ];

  const pastries = [
    { name: "Black Forest", desc: "Dark cherry & cream", img: "/images/pastry-blackforest.jpg" },
    { name: "Chocolate Walnut", desc: "Rich chocolate layered", img: "/images/pastry-chocowalnut.png" },
    { name: "Pineapple", desc: "Light yellow cream", img: "/images/pastry-pineapple.png" },
    { name: "Pista", desc: "Green pistachio cream", img: "/images/pastry-pista.png" },
    { name: "Strawberry", desc: "Pink, fresh look", img: "/images/pastry-strawberry.jpg" },
  ];

  const packs = [
    "Chand Biscuits", "Badam Biscuits", "Osmania Biscuits", "Fruit Biscuits",
    "Kaju Biscuits", "Pista Biscuits", "Salt Biscuit", "Chocolate Kaju"
  ];
  
  const breads = [
    { name: "Bread", desc: "Classic white loaf", img: "/images/bread-loaf.jpg" },
    { name: "Toast", desc: "Multigrain sliced", img: "/images/bread-toast.png" },
    { name: "Bun", desc: "Sesame bun", img: "/images/bread-bun.jpg" },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary/30 selection:text-primary">
      <CustomCursor />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="/images/hero-bg.png" 
            alt="Morine Bakery Interior" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <Particles />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/40 glass text-primary font-serif text-sm tracking-widest uppercase"
          >
            50+ Years of Deliciousness
          </motion.div>
          
          <motion.h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-primary/80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafted With Love
          </motion.h1>
          
          <motion.p 
            className="font-serif text-xl md:text-2xl text-muted-foreground mb-10 italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Since 1971 — Hyderabad's Most Coveted Bakery
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#menu">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-secondary rounded-none px-8 py-6 text-lg font-serif tracking-wider hover-trigger hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(200,134,10,0.3)] border-none">
                Explore Our Menu
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY CAROUSEL */}
      <section id="menu" className="py-20 relative z-10 bg-background border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            {['Cakes', 'Snacks', 'Pastries', 'Packs', 'Desserts'].map((cat, i) => (
              <motion.a
                href={`#${cat.toLowerCase()}`}
                key={cat}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center justify-center p-6 border border-primary/20 rounded-xl bg-card/50 backdrop-blur-sm hover:border-primary hover:shadow-[0_0_15px_rgba(200,134,10,0.2)] transition-all hover-trigger group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full border border-primary/30 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-primary/10" />
                </div>
                <h3 className="font-serif text-lg text-primary group-hover:text-secondary transition-colors">{cat}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CAKES */}
      <section id="cakes" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">Signature Cakes</h2>
            <p className="font-serif text-xl text-muted-foreground italic">Baked to perfection for every celebration</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cakes.map((cake, i) => (
              <motion.div
                key={cake.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={i === 3 ? "lg:col-span-2 lg:col-start-1" : i === 4 ? "lg:col-span-1" : ""}
              >
                <TiltCard className="h-full">
                  <div className="bg-card border border-primary/20 rounded-xl overflow-hidden h-full group hover:border-primary/50 transition-colors">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                      <img 
                        src={getImg(cake.img)} 
                        alt={cake.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-4 left-4 z-20" style={{ transform: "translateZ(30px)" }}>
                        <h3 className="font-display text-2xl text-white mb-1">{cake.name}</h3>
                        <p className="font-serif text-primary/90 text-sm">{cake.desc}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SNACKS */}
      <section id="snacks" className="py-20 bg-[#120c08] relative border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <motion.div 
              className="md:w-1/3 sticky top-32"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">Savory Snacks</h2>
              <p className="font-serif text-xl text-muted-foreground italic mb-8">Perfect bites for your cravings</p>
              
              <div className="space-y-4">
                {['Sandwiches', 'Chinese', 'Rolls', 'Pizza', 'Puffs'].map(snack => (
                  <div key={snack} className="border-b border-primary/20 pb-4">
                    <h3 className="font-display text-xl text-foreground hover:text-primary transition-colors cursor-pointer hover-trigger">{snack}</h3>
                  </div>
                ))}
                <div className="border-b border-primary/20 pb-4">
                  <button 
                    onClick={() => setActiveBurgerMenu(!activeBurgerMenu)}
                    className="flex justify-between items-center w-full font-display text-xl text-foreground hover:text-primary transition-colors hover-trigger"
                  >
                    Burger
                    <span className="text-primary text-sm">{activeBurgerMenu ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence>
                    {activeBurgerMenu && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pl-4 space-y-3">
                          <div className="flex justify-between text-sm font-serif group cursor-pointer hover-trigger"><span className="text-muted-foreground group-hover:text-foreground transition-colors">Veg Crispy Burger</span> <span className="text-primary">₹120</span></div>
                          <div className="flex justify-between text-sm font-serif group cursor-pointer hover-trigger"><span className="text-muted-foreground group-hover:text-foreground transition-colors">Chicken Crispy Burger</span> <span className="text-primary">₹140</span></div>
                          <div className="flex justify-between text-sm font-serif group cursor-pointer hover-trigger"><span className="text-muted-foreground group-hover:text-foreground transition-colors">Veg Burger</span> <span className="text-primary">₹120</span></div>
                          <div className="flex justify-between text-sm font-serif group cursor-pointer hover-trigger"><span className="text-muted-foreground group-hover:text-foreground transition-colors">Paneer Burger</span> <span className="text-primary">₹120</span></div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: "Gourmet Burgers", img: "/images/burger-chicken.jpg", span: "sm:col-span-2" },
                { name: "Flaky Puffs", img: "/images/snack-puffs.jpg", span: "" },
                { name: "Bakery Pizza", img: "/images/snack-pizza.png", span: "" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className={`relative rounded-xl overflow-hidden aspect-square ${item.span} group hover-trigger`}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                  <img src={getImg(item.img)} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <h3 className="absolute bottom-6 left-6 font-display text-2xl text-white z-20">{item.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* PASTRIES */}
      <section id="pastries" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">Artisan Pastries</h2>
            <p className="font-serif text-xl text-muted-foreground italic">Delicate layers of indulgence</p>
          </motion.div>
        </div>

        <div className="w-full overflow-x-auto hide-scrollbar pb-10 pl-4 md:pl-20">
          <div className="flex gap-8 w-max pr-8">
            {pastries.map((pastry, i) => (
              <motion.div
                key={pastry.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="w-72 md:w-80 group hover-trigger"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-primary/20 bg-card mb-6 group-hover:border-primary/60 group-hover:shadow-[0_0_30px_rgba(200,134,10,0.15)] transition-all duration-500 transform group-hover:-translate-y-4">
                  <img src={getImg(pastry.img)} alt={pastry.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a06] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="font-display text-2xl text-white mb-2">{pastry.name}</h3>
                    <div className="h-[1px] w-10 bg-primary mb-3 transition-all duration-300 group-hover:w-full" />
                    <p className="font-serif text-muted-foreground text-sm">{pastry.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKS & DESSERTS MIX */}
      <section className="py-20 relative bg-[#0a0704] border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Packs */}
            <div id="packs">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl text-primary mb-10"
              >
                Premium Packs
              </motion.h2>
              <div className="grid grid-cols-2 gap-4">
                {packs.map((pack, i) => (
                  <motion.div
                    key={pack}
                    initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="relative group hover-trigger cursor-pointer"
                    style={{ perspective: "1000px" }}
                  >
                    <div className="bg-card border border-primary/20 p-6 rounded-lg flex flex-col items-center justify-center text-center h-full transition-transform duration-500 group-hover:rotate-y-12 group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:shadow-[5px_5px_15px_rgba(200,134,10,0.1)]">
                      <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-4 bg-[#110b06] shadow-inner group-hover:bg-primary/10 transition-colors">
                        <div className="w-6 h-6 rounded-full border-2 border-primary/40 border-dashed" />
                      </div>
                      <h4 className="font-serif text-foreground group-hover:text-primary transition-colors">{pack}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desserts */}
            <div id="desserts" className="flex flex-col">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl text-primary mb-10"
              >
                Decadent Desserts
              </motion.h2>
              
              <div className="flex-1 flex flex-col md:flex-row gap-4 h-[500px]">
                {[
                  { name: "Cup Cakes", desc: "Dark exquisite muffins", img: "/images/dessert-cupcake.jpg", idx: 0 },
                  { name: "Brownies", desc: "Caramel-topped indulgence", img: "/images/dessert-brownie.jpg", idx: 1 }
                ].map((dessert) => (
                  <motion.div 
                    key={dessert.idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: dessert.idx * 0.2 }}
                    onHoverStart={() => setHoveredDessert(dessert.idx)}
                    onHoverEnd={() => setHoveredDessert(null)}
                    className="relative rounded-xl overflow-hidden group hover-trigger flex-1 transition-all duration-500 ease-out cursor-pointer border border-primary/10"
                    style={{
                      flexGrow: hoveredDessert === dessert.idx ? 1.5 : hoveredDessert !== null ? 0.5 : 1
                    }}
                  >
                    <img src={getImg(dessert.img)} alt={dessert.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="font-display text-2xl md:text-3xl text-white mb-2 whitespace-nowrap">{dessert.name}</h3>
                      <p className="font-serif text-primary text-sm md:text-lg whitespace-nowrap">{dessert.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* BREADS */}
      <section id="breads" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">Fresh Breads</h2>
            <p className="font-serif text-xl text-muted-foreground italic">Everyday staples, extraordinary taste</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {breads.map((bread, i) => (
              <motion.div
                key={bread.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="group hover-trigger cursor-pointer rounded-xl overflow-hidden border border-primary/20 bg-card">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={getImg(bread.img)} 
                      alt={bread.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors mb-2">{bread.name}</h3>
                    <p className="font-serif text-muted-foreground text-sm">{bread.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ABOUT US & LOCATIONS */}
      <section className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-20 text-center"
          >
            <h2 className="font-serif italic text-3xl md:text-5xl text-primary mb-8 leading-snug">
              "Sweet moments are saved as memories."
            </h2>
            <div className="space-y-6 font-sans text-muted-foreground leading-relaxed text-lg mb-8">
              <p>
                Founded in 1971 by Mr. Moosa Khan and passed to his son Mr. Parvez Khan, 
                Morine Bakery has grown to become the most coveted bakery in Hyderabad.
              </p>
              <p>
                A registered brand crafting baked goods with ultra-modern machinery from Taiwan 
                and master craftsmen with over 35 years of experience. Our commitment to quality 
                and taste has remained unchanged for over five decades.
              </p>
            </div>
            <div className="w-12 h-[1px] bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-primary/20 py-16 bg-card/30 backdrop-blur-sm mb-20">
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl md:text-6xl text-primary mb-2 flex items-center">
                <CountUp end={50} />+
              </span>
              <span className="font-serif text-muted-foreground uppercase tracking-widest text-xs md:text-sm">Years of Legacy</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl md:text-6xl text-primary mb-2 flex items-center">
                <CountUp end={2} />
              </span>
              <span className="font-serif text-muted-foreground uppercase tracking-widest text-xs md:text-sm">Branches</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl md:text-6xl text-primary mb-2 flex items-center">
                <CountUp end={35} />+
              </span>
              <span className="font-serif text-muted-foreground uppercase tracking-widest text-xs md:text-sm">Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl md:text-6xl text-primary mb-2 flex items-center">
                <CountUp end={100} />%
              </span>
              <span className="font-serif text-muted-foreground uppercase tracking-widest text-xs md:text-sm">Hygienic</span>
            </div>
          </div>

          {/* Locations */}
          <div id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-primary/20 p-8 rounded-xl relative overflow-hidden group hover-trigger"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px]" />
              <h3 className="font-display text-2xl text-primary mb-6">Branch 1 — Main Store</h3>
              <div className="space-y-4 text-muted-foreground font-serif">
                <p>#12-2-719/1, Nanal Nagar, Mehdipatnam,<br />Hyderabad, Telangana-08</p>
                <p className="text-foreground pt-4">Phone: 2351 0000, 2352 1111</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-primary/20 p-8 rounded-xl relative overflow-hidden group hover-trigger"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px]" />
              <h3 className="font-display text-2xl text-primary mb-6">Branch 2 — Narsingi</h3>
              <div className="space-y-4 text-muted-foreground font-serif">
                <p>#131/P, Narsingi, Gandipet Road,<br />Hyderabad, Telangana-75</p>
                <p className="text-foreground pt-4">Phone: +91 91 60000 391, 91 60000 392</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
