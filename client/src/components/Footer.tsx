import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

/**
 * Footer Component
 * Rebranded for Angels Hill Montessori School
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2540] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* School Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/logo.png"
                alt="Angels Hill Montessori School Logo"
                className="h-14 w-auto object-contain"
              />
              <span className="font-bold text-xl tracking-tight leading-tight">
                Angels Hill <br /> Montessori School
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Angels Hill Montessori School is committed to providing quality Montessori education that develops confident, disciplined and academically excellent learners from Creche through Junior High School.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-[#F59E0B] uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/"><a className="text-gray-300 hover:text-[#F59E0B] transition-colors">Home</a></Link></li>
              <li><Link href="/about"><a className="text-gray-300 hover:text-[#F59E0B] transition-colors">About Us</a></Link></li>
              <li><Link href="/academics"><a className="text-gray-300 hover:text-[#F59E0B] transition-colors">Academics</a></Link></li>
              <li><Link href="/admissions"><a className="text-gray-300 hover:text-[#F59E0B] transition-colors">Admissions</a></Link></li>
              <li><Link href="/gallery"><a className="text-gray-300 hover:text-[#F59E0B] transition-colors">Gallery</a></Link></li>
              <li><Link href="/contact"><a className="text-gray-300 hover:text-[#F59E0B] transition-colors">Contact Us</a></Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold mb-4 text-[#F59E0B] uppercase tracking-wider text-sm">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Creche</li>
              <li className="text-gray-300">Nursery</li>
              <li className="text-gray-300">Kindergarten</li>
              <li className="text-gray-300">Primary</li>
              <li className="text-gray-300">J.H.S.</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-[#F59E0B] uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-[#F59E0B]" />
                <span className="text-gray-300">
                  Malshegu – Kumbuyili Road<br />
                  Opp. St. Victor Major Seminary<br />
                  Tamale, Ghana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#F59E0B]" />
                <a href="tel:0242367273" className="text-gray-300 hover:text-[#F59E0B] transition-colors">
                  0242367273
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#F59E0B]" />
                <span className="text-gray-300">info@angelshill.edu.gh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Angels Hill Montessori School. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-white/10 p-2 rounded-full text-white hover:bg-[#1877F2] transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full text-white hover:bg-[#E4405F] transition-all">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
