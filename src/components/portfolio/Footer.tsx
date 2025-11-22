import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[hsl(0,0%,24%)] text-white py-12 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <p className="text-sm">hello@creative-visions.com</p>
            <p className="text-sm mt-1">+1 (555) 123-4567</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[hsl(179,70%,36%)] hover:brightness-90 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-[hsl(179,70%,36%)] hover:brightness-90 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-[hsl(179,70%,36%)] hover:brightness-90 transition-all"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm">© 2024 Creative Visions. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
