import { BookOpen, CheckCircle, GraduationCap, Microscope, Palette, Users, Brain, Heart, Star, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

/**
 * Academics Page
 * Design: Detailed academic programs from Creche to J.H.S.
 */
export default function Academics() {
  const programs = [
    {
      title: "Creche",
      description: "A warm, caring and secure environment where infants and toddlers receive attentive care while developing early social, emotional and motor skills.",
      image: "/assets/programs/creche.jpg",
      features: [
        "Safe and nurturing environment",
        "Early childhood care",
        "Social development",
        "Guided play activities"
      ],
      icon: <Heart className="w-8 h-8 text-[#F59E0B]" />
    },
    {
      title: "Nursery",
      description: "Our Nursery programme introduces young learners to structured learning through fun, creativity and exploration.",
      image: "/assets/programs/nursery.jpg",
      features: [
        "Early literacy development",
        "Numeracy foundations",
        "Interactive learning",
        "Creative play"
      ],
      icon: <Palette className="w-8 h-8 text-[#F59E0B]" />
    },
    {
      title: "Kindergarten",
      description: "Children build confidence, independence and readiness for primary education through engaging Montessori activities.",
      image: "/assets/programs/kindergarten.jpg",
      features: [
        "Reading readiness",
        "Writing preparation",
        "Problem-solving skills",
        "Confidence building"
      ],
      icon: <Brain className="w-8 h-8 text-[#F59E0B]" />
    },
    {
      title: "Primary School",
      description: "Our Primary School provides a strong academic foundation while promoting discipline, leadership and critical thinking.",
      image: "/assets/programs/primary.jpg",
      features: [
        "Strong academic curriculum",
        "Leadership development",
        "Character formation",
        "Practical learning experiences"
      ],
      icon: <BookOpen className="w-8 h-8 text-[#F59E0B]" />
    },
    {
      title: "Junior High School (J.H.S.)",
      description: "Our J.H.S. programme prepares learners academically and socially for higher education and future success.",
      image: "/assets/programs/jhs.jpg",
      features: [
        "Examination preparation",
        "Science and technology learning",
        "Critical thinking development",
        "Leadership and responsibility"
      ],
      icon: <Microscope className="w-8 h-8 text-[#F59E0B]" />
    }
  ];

  const highlights = [
    { title: "Montessori Learning Approach", icon: <Target className="w-6 h-6" /> },
    { title: "Child-Centred Teaching", icon: <Users className="w-6 h-6" /> },
    { title: "Experienced Educators", icon: <Star className="w-6 h-6" /> },
    { title: "Character Development", icon: <Heart className="w-6 h-6" /> },
    { title: "Academic Excellence", icon: <GraduationCap className="w-6 h-6" /> },
    { title: "Supportive Learning Environment", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#0A2540] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Academic Programs</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Providing quality Montessori education at every stage of a child's development.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {programs.map((program, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                    />
                    <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                      {program.icon}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
                    {program.title}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {program.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {program.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              What Makes Our Learning Unique
            </h2>
            <div className="w-24 h-1 bg-[#F59E0B] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex items-center gap-6">
                <div className="w-14 h-14 bg-[#F59E0B]/10 rounded-full flex items-center justify-center text-[#F59E0B] flex-shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A2540]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A2540] rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F59E0B]/10 skew-x-12 transform translate-x-1/2"></div>
            <div className="relative z-10 p-12 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Admissions Open
                </h2>
                <p className="text-xl text-gray-300 mb-0">
                  Join Angels Hill Montessori School and give your child a strong foundation for lifelong success.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Link href="/contact">
                  <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold px-8 py-4 text-lg rounded-xl transition-all hover:scale-105">
                    Apply for Admission
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#0A2540] font-bold px-8 py-4 text-lg rounded-xl transition-all">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
