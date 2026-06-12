import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Heart, Trophy, CheckCircle2, CheckCircle, ChevronLeft, ChevronRight, Play } from "lucide-react";

/**
 * Home Page
 * Design: Rebranded for Angels Hill Montessori School
 */
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const slides = [
    {
      image: "/assets/hero-graduation.webp",
      title: "Inspiring Young Minds for a Brighter Future",
      subtitle: "Quality Montessori Education from Creche to Junior High School in a Safe and Caring Learning Environment.",
    },
    {
      video: "/assets/teaching-palindromes.mp4",
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

  const testimonials = [
    {
      text: "Angels Hill Montessori School has helped my child become more confident and independent. The teachers are caring and dedicated.",
      author: "Parent",
      role: "Parent of Kindergarten Student"
    },
    {
      text: "The school's learning environment is excellent and the academic progress of my child has been remarkable.",
      author: "Parent",
      role: "Parent of Primary Student"
    },
    {
      text: "We appreciate the discipline, quality teaching and personal attention given to every child.",
      author: "Parent",
      role: "Parent of Nursery Student"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

  const levels = ["Creche", "Nursery", "Kindergarten", "Primary", "J.H.S."];

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

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

      {/* Video Showcase Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A2540] via-[#1a4d7a] to-[#0A2540] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/30 text-[#F59E0B] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F59E0B]"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide uppercase">Video Gallery</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Experience Life at Angels Hill Montessori
            </h2>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Watch our students engaged in meaningful learning, creative activities, and meaningful interactions with our dedicated educators. See the difference quality Montessori education makes.
            </p>
          </div>

          {/* Featured Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Rose Flower Class Learning",
                description: "Our Basic 1 class engaged in interactive Montessori activities",
                image: "/assets/gallery/classroom-learning.jpg",
                category: "Classroom"
              },
              {
                title: "Teaching Palindromes",
                description: "Creative language arts lesson with our dedicated educators",
                image: "/assets/gallery/teacher-interaction.jpg",
                category: "Language"
              },
              {
                title: "Progress & Growth",
                description: "Witness the remarkable journey of our students as they grow and excel",
                image: "/assets/gallery/group-activity.jpg",
                category: "Student Growth"
              }
            ].map((video, idx) => (
              <Link key={idx} href="/videos">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-64">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="bg-[#F59E0B]/20 border border-[#F59E0B]/30 text-[#F59E0B] px-3 py-1 rounded-full text-xs font-bold uppercase mb-3 w-fit">
                      {video.category}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{video.title}</h3>
                    <p className="text-gray-200 text-sm">{video.description}</p>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 bg-[#F59E0B] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-6 h-6 text-black fill-black" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link href="/videos">
              <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold px-10 py-4 text-lg rounded-xl shadow-lg shadow-[#F59E0B]/20 transition-all hover:scale-105">
                Watch All Videos <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A2540] rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F59E0B] rounded-full blur-3xl opacity-10 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F59E0B] rounded-full blur-3xl opacity-10 -ml-20 -mb-20"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Join Our Learning Community?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Admissions are currently open for the 2025/2026 academic year. Give your child the gift of a Montessori education at Angels Hill.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#F59E0B]/20 transition-all hover:scale-105">
                      Apply Now
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[#0A2540] font-bold px-8 py-4 rounded-xl transition-all hover:scale-105">
                      Contact Admissions
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Admission Facts</h3>
                <ul className="space-y-4">
                  {[
                    "Creche to J.H.S. Levels",
                    "Holistic Montessori Curriculum",
                    "Safe & Secure Environment",
                    "Highly Qualified Educators",
                    "Modern Learning Facilities"
                  ].map((fact, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-200">
                      <CheckCircle2 className="w-6 h-6 text-[#F59E0B]" />
                      <span className="text-lg">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              What Our Parents Say
            </h2>
            <div className="w-20 h-1.5 bg-[#F59E0B] mx-auto rounded-full"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Cards */}
            <div className="relative h-[300px] md:h-[250px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 transform ${
                    index === currentTestimonial
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-4xl text-black font-serif leading-none mt-4">"</span>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-600 italic mb-8 leading-relaxed">
                      {testimonial.text}
                    </p>
                    <div>
                      <h4 className="text-lg font-bold text-[#0A2540]">{testimonial.author}</h4>
                      <p className="text-[#F59E0B] font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handlePrevTestimonial}
                className="p-3 rounded-full bg-white shadow-md hover:bg-[#F59E0B] hover:text-white transition-all text-[#0A2540]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="p-3 rounded-full bg-white shadow-md hover:bg-[#F59E0B] hover:text-white transition-all text-[#0A2540]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
