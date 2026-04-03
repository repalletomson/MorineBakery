import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-[#0a0704] pt-20 pb-10 border-t border-primary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1 */}
          <div>
            <h3 className="font-display text-2xl text-primary mb-6">Get In Touch</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p>
                  <strong className="text-foreground block mb-1">Branch 1 — Main Store:</strong>
                  #12-2-719/1, Nanal Nagar, Mehdipatnam,<br />Hyderabad, Telangana-08
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p>2351 0000, 2352 1111</p>
              </div>
              
              <div className="flex items-start gap-3 mt-6">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p>
                  <strong className="text-foreground block mb-1">Branch 2 — Narsingi:</strong>
                  #131/P, Narsingi, Gandipet Road,<br />Hyderabad, Telangana-75
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p>+91 91 60000 391, 91 60000 392</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-display text-2xl text-primary mb-6">Categories</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {['Cakes', 'Snacks', 'Pastries', 'Packs', 'Desserts', 'Breads'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors hover-trigger inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-display text-2xl text-primary mb-6">Useful Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {['About Us', 'Privacy Policy', 'Terms & Conditions', 'Return & Refund Policy', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors hover-trigger inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-display text-2xl text-primary mb-6">Social</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Follow us on social media for updates, fresh bakes, and sweet moments.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all hover-trigger">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all hover-trigger">
                <SiWhatsapp size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all hover-trigger">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
        </div>

        <div className="text-center pt-8 border-t border-primary/10">
          <p className="text-xs text-muted-foreground">
            Copyright © Morine Bakery 2024. All rights reserved. Designed & Developed by Media Wagon.
          </p>
        </div>
      </div>
    </footer>
  );
}
