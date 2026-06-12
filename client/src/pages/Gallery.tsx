import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, X } from "lucide-react";
import { updateSEOHead } from "@/components/SEOHead";

/**
 * Gallery Page
 * Design: Modern image gallery showcasing school life and activities
 */
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    updateSEOHead({
      title: "Gallery | Angels Hill Montessori School",
      description: "Explore our gallery showcasing life at Angels Hill Montessori School - classroom learning, creative activities, and student development."
    });
  }, []);

  const galleryImages = [
    {
      src: "/assets/gallery/student-speech.webp",
      alt: "Student Speech",
      title: "Student Speech",
      description: "A student confidently delivering a speech during a school event."
    },
    {
      src: "/assets/gallery/student-group-1.jpg",
      alt: "Students Group",
      title: "Vibrant Student Community",
      description: "Our students enjoying a moment together, showcasing our diverse and friendly environment."
    },
    {
      src: "/assets/gallery/student-group-2.jpg",
      alt: "Students Group Activities",
      title: "Learning and Fun",
      description: "Capturing the joy and camaraderie of our students during school hours."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#0A2540] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Life at Angels Hill Montessori School</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A glimpse into learning, creativity and student development.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-64 md:h-72"
                onClick={() => setSelectedImage(idx)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#F59E0B] transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto rounded-lg"
            />

            <div className="mt-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{galleryImages[selectedImage].title}</h3>
              <p className="text-gray-300">{galleryImages[selectedImage].description}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev! - 1))}
                className="text-white hover:text-[#F59E0B] transition-colors text-lg font-bold"
              >
                ← Previous
              </button>
              <span className="text-white text-sm">
                {selectedImage + 1} / {galleryImages.length}
              </span>
              <button
                onClick={() => setSelectedImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev! + 1))}
                className="text-white hover:text-[#F59E0B] transition-colors text-lg font-bold"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* About Gallery Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
                Capturing Moments of Growth
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our gallery showcases the vibrant learning environment at Angels Hill Montessori School. From classroom activities to creative projects, these images reflect our commitment to providing quality education that nurtures academic excellence, character development, and lifelong learning.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Every moment captured represents our dedication to helping each child discover their unique potential in a safe, supportive, and stimulating environment.
              </p>
              <Link href="/contact">
                <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold px-8 py-4 text-lg rounded-xl transition-all">
                  Schedule a School Visit <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src="/assets/gallery/student-speech.webp" alt="Student Speech" className="rounded-lg shadow-lg h-48 w-full object-cover" />
              <img src="/assets/gallery/student-group-1.jpg" alt="Student Group" className="rounded-lg shadow-lg h-48 w-full object-cover" />
              <img src="/assets/gallery/student-group-2.jpg" alt="Student Group Activities" className="rounded-lg shadow-lg h-48 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Angels Hill Montessori School
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Visit our school to see firsthand the quality learning environment we provide for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold px-10 py-4 text-lg rounded-xl transition-all">
                Book a Visit
              </Button>
            </Link>
            <Link href="/admissions">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A2540] font-bold px-10 py-4 text-lg rounded-xl transition-all"
              >
                Learn About Admissions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
