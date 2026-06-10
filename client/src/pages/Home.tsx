import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, Target, CheckCircle2 } from "lucide-react";

/**
 * Home Page
 * Design: Rebranded for Angels Hill Montessori School
 * Phase 1: Hero Section Rebrand
 */
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      video: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663580544514/cSwMYWXxvJDloazn.mp4",
      title: "Inspiring Young Minds for a Brighter Future",
      subtitle: "Quality Montessori Education from Creche to Junior High School in a Safe and Caring Learning Environment.",
    },
    {
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
      title: "Excellence in Education",
      subtitle: "Nurturing character and lifelong learning in every child.",
    },
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032&auto=format&fit=crop",
      title: "A Safe Learning Environment",
      subtitle: "Providing a secure and caring space for your child to grow.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = ["Creche", "Nursery", "Kindergarten", "Primary", "J.H.S."];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:h-[700px] flex items-center overflow-hidden">
        {/* Background Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.video ? (
              <video
                src={slide.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/30 text-[#F59E0B] mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F59E0B]"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide uppercase">Admissions Open 2025/2026</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed animate-slide-up delay-100">
              {slides[currentSlide].subtitle}
            </p>

            <p className="text-lg text-gray-300 mb-10 max-w-2xl animate-slide-up delay-200">
              Angels Hill Montessori School provides quality education for children at the Creche, Nursery, Kindergarten, Primary and Junior High School levels. We focus on academic excellence, character development, creativity and leadership to prepare learners for a successful future.
            </p>

            {/* Stats/Levels */}
            <div className="flex flex-wrap gap-4 mb-10 animate-slide-up delay-300">
              {stats.map((stat) => (
                <div key={stat} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                  <CheckCircle2 className="w-5 h-5 text-[#F59E0B]" />
                  <span className="text-white font-medium">{stat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400">
              <Link href="/contact">
                <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold px-10 py-4 text-lg rounded-xl shadow-lg shadow-[#F59E0B]/20 transition-all hover:scale-105">
                  Apply for Admission <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-[#0A2540] font-bold px-10 py-4 text-lg rounded-xl transition-all hover:scale-105"
                >
                  Book a School Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 right-10 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index === currentSlide
                  ? "bg-[#F59E0B] w-12"
                  : "bg-white/30 w-6 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Section - Placeholder for Phase 2 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Why Choose Angels Hill Montessori School?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We connect talented professionals with leading employers across
              Ghana, providing comprehensive recruitment and consultancy
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#F59E0B] rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                Quality Recruitment
              </h3>
              <p className="text-gray-600">
                We carefully match qualified candidates with the right job
                opportunities, ensuring the best fit for both employers and job
                seekers.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#F59E0B] rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                Expert Consultancy
              </h3>
              <p className="text-gray-600">
                Our experienced consultants provide strategic advice to help
                businesses build strong teams and develop their human resources.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#F59E0B] rounded-lg flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                Professional Training
              </h3>
              <p className="text-gray-600">
                We offer comprehensive training programs to enhance skills and
                prepare professionals for career advancement and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Job Seekers */}
      <section className="py-16 md:py-24 bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Find Your Dream Job?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Browse our extensive job listings and apply to positions that
                match your skills and career goals. Our team is here to support
                your journey.
              </p>
              <Link href="/job-listings">
                <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold px-8 py-3 text-lg">
                  Explore Jobs <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Latest Opportunities</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F59E0B] rounded-full" />
                  Marketing Manager - Accra
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F59E0B] rounded-full" />
                  Software Developer - Kumasi
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F59E0B] rounded-full" />
                  HR Specialist - Tamale
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F59E0B] rounded-full" />
                  Sales Executive - Multiple Locations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Employers */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-white rounded-lg p-8 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-[#0A2540] mb-4">
                Why Partner With Us?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F59E0B] rounded-full" />
                  Access to pre-screened talent pool
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F59E0B] rounded-full" />
                  Reduced hiring time and costs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F59E0B] rounded-full" />
                  Professional recruitment support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F59E0B] rounded-full" />
                  Ongoing HR consultancy services
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
                Looking for Top Talent?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Post your job openings and reach qualified professionals across
                Ghana. Our team will help you find the perfect candidates for
                your organization.
              </p>
              <Link href="/employers">
                <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold px-8 py-3 text-lg">
                  Post a Job <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#F59E0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
            Have Questions?
          </h2>
          <p className="text-lg text-[#0A2540] mb-8 max-w-2xl mx-auto">
            Get in touch with our team for more information about our services,
            job opportunities, or to discuss your recruitment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#0A2540] hover:bg-[#051d2d] text-white font-semibold px-8 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
            <a
              href="https://wa.me/233243105412"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white font-semibold px-8 py-3 text-lg"
              >
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
