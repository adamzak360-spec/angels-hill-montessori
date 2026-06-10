import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Heart, Trophy, CheckCircle2, CheckCircle } from "lucide-react";

/**
 * Home Page
 * Design: Rebranded for Angels Hill Montessori School
 */
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/assets/hero-graduation.webp",
      title: "Inspiring Young Minds for a Brighter Future",
      subtitle: "Quality Montessori Education from Creche to Junior High School in a Safe and Caring Learning Environment.",
    },
    {
      video: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663580544514/cSwMYWXxvJDloazn.mp4",
      title: "Excellence in Education",
      subtitle: "Nurturing character and lifelong learning in every child.",
    },
    {
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
      title: "Celebrating Student Success",
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

  const levels = ["Creche", "Nursery", "Kindergarten", "Primary", "J.H.S."];

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
              {levels.map((level) => (
                <div key={level} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                  <CheckCircle2 className="w-5 h-5 text-[#F59E0B]" />
                  <span className="text-white font-medium">{level}</span>
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

      {/* Why Parents Trust Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Why Parents Trust Angels Hill Montessori School
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Dedicated to nurturing young minds through a holistic approach that combines Montessori principles with modern educational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Qualified Teachers",
                description: "Our dedicated educators are professionally trained to nurture and guide every child's unique potential.",
                icon: <Users className="w-8 h-8 text-white" />
              },
              {
                title: "Safe Environment",
                description: "A child-friendly, secure, and stimulating space where learners can grow with confidence.",
                icon: <Heart className="w-8 h-8 text-white" />
              },
              {
                title: "Montessori Approach",
                description: "A child-centred method that encourages independent thinking, creativity, and self-discipline.",
                icon: <GraduationCap className="w-8 h-8 text-white" />
              },
              {
                title: "Character Development",
                description: "Focusing on strong moral values, integrity, and leadership skills for lifelong success.",
                icon: <Trophy className="w-8 h-8 text-white" />
              },
              {
                title: "Modern Methods",
                description: "Integrating contemporary teaching techniques with traditional Montessori foundations.",
                icon: <CheckCircle className="w-8 h-8 text-white" />
              },
              {
                title: "Comprehensive Programs",
                description: "Quality education pathways serving learners from Creche through to Junior High School.",
                icon: <ArrowRight className="w-8 h-8 text-white" />
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-[#F59E0B] rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Overview Statistics */}
      <section className="py-16 md:py-24 bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: "Creche to J.H.S.",
                title: "Comprehensive Education",
                icon: <GraduationCap className="w-10 h-10 text-[#F59E0B]" />,
              },
              {
                label: "Child-Centred Learning",
                title: "Montessori Approach",
                icon: <Users className="w-10 h-10 text-[#F59E0B]" />,
              },
              {
                label: "Safe Environment",
                title: "Supportive Learning Community",
                icon: <Heart className="w-10 h-10 text-[#F59E0B]" />,
              },
              {
                label: "Academic Excellence",
                title: "Preparing Future Leaders",
                icon: <Trophy className="w-10 h-10 text-[#F59E0B]" />,
              },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-8 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h4 className="text-2xl font-bold mb-2">{stat.label}</h4>
                <p className="text-gray-300 font-medium">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Call-to-Action Section */}
      <section className="py-16 md:py-24 bg-[#F59E0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
            Give Your Child the Best Start in Life
          </h2>
          <p className="text-lg text-[#0A2540] mb-8 max-w-2xl mx-auto font-medium">
            At Angels Hill Montessori School, we are committed to helping every child discover their potential through quality education, strong values and a supportive learning environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button className="bg-[#0A2540] hover:bg-[#051d2d] text-white font-bold px-10 py-4 text-lg rounded-xl transition-all">
                Apply for Admission
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white font-bold px-10 py-4 text-lg rounded-xl transition-all"
              >
                Contact the School
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
