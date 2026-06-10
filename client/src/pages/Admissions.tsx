import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, MapPin, Phone, Shield, Users, BookOpen, Heart, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { updateSEOHead } from "@/components/SEOHead";

/**
 * Admissions Page
 * Design: Admissions information, process, and call-to-action
 */
export default function Admissions() {
  useEffect(() => {
    updateSEOHead({
      title: "Admissions | Angels Hill Montessori School",
      description: "Apply for admission to Angels Hill Montessori School. Quality Montessori education from Creche through J.H.S. in Tamale, Ghana."
    });
  }, []);

  const admissionLevels = ["Creche", "Nursery", "Kindergarten", "Primary", "Junior High School (J.H.S.)"];

  const admissionSteps = [
    {
      step: 1,
      title: "Visit the School",
      description: "Schedule a visit to experience our learning environment firsthand."
    },
    {
      step: 2,
      title: "Obtain Admission Form",
      description: "Receive the admission form and guidance on the application process."
    },
    {
      step: 3,
      title: "Complete Registration Requirements",
      description: "Submit all required documents and complete the registration process."
    },
    {
      step: 4,
      title: "Student Assessment",
      description: "Where applicable, students participate in a brief assessment."
    },
    {
      step: 5,
      title: "Enrolment and Orientation",
      description: "Finalize enrolment and participate in orientation activities."
    }
  ];

  const trustFeatures = [
    {
      title: "Safe Learning Environment",
      description: "A secure, child-friendly space designed for optimal learning and development.",
      icon: <Shield className="w-8 h-8 text-white" />
    },
    {
      title: "Dedicated Teachers",
      description: "Professionally trained educators committed to nurturing each child's potential.",
      icon: <Users className="w-8 h-8 text-white" />
    },
    {
      title: "Strong Academic Foundation",
      description: "Rigorous curriculum preparing learners for success at every level.",
      icon: <BookOpen className="w-8 h-8 text-white" />
    },
    {
      title: "Character Development",
      description: "Focus on moral values, integrity, and leadership skills for lifelong success.",
      icon: <Heart className="w-8 h-8 text-white" />
    },
    {
      title: "Montessori Learning Approach",
      description: "Child-centred methodology encouraging independence and critical thinking.",
      icon: <Lightbulb className="w-8 h-8 text-white" />
    },
    {
      title: "Supportive School Community",
      description: "Collaborative environment where parents, teachers, and students thrive together.",
      icon: <Users className="w-8 h-8 text-white" />
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#0A2540] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions Open</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Begin your child's journey to academic excellence at Angels Hill Montessori School.
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F59E0B]/5 to-[#0A2540]/5 rounded-2xl p-12 border border-[#F59E0B]/20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">Welcome to Angels Hill Montessori School</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We welcome applications from parents seeking quality Montessori education for their children. Our admission process is simple, transparent and designed to help every child transition smoothly into our learning environment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Angels Hill Montessori School provides comprehensive education from Creche through Junior High School, with a focus on academic excellence, character development, and lifelong learning.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Levels */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">Admission Levels</h2>
            <p className="text-gray-600 text-lg">We offer quality education at all levels of early childhood and primary education.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {admissionLevels.map((level, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg hover:border-[#F59E0B] border-2 border-transparent transition-all">
                <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0A2540]">{level}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">Admission Process</h2>
            <p className="text-gray-600 text-lg">A simple, transparent process designed for your convenience.</p>
          </div>

          <div className="space-y-8">
            {admissionSteps.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#F59E0B] text-white font-bold text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-lg">{item.description}</p>
                </div>
                {idx < admissionSteps.length - 1 && (
                  <div className="hidden md:block text-[#F59E0B]">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#F59E0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">Ready to Apply?</h2>
          <p className="text-lg text-[#0A2540] mb-10 max-w-2xl mx-auto font-medium">
            Take the first step towards giving your child a quality Montessori education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#0A2540] hover:bg-[#051d2d] text-white font-bold px-10 py-4 text-lg rounded-xl transition-all">
                Apply for Admission <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white font-bold px-10 py-4 text-lg rounded-xl transition-all"
              >
                Book a School Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Parents Trust Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Why Parents Trust Angels Hill Montessori School
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Committed to helping every child discover their potential through quality education, strong values and a supportive learning environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-[#0A2540] rounded-lg flex items-center justify-center mb-6">
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

      {/* Contact Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A2540] rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-12 md:p-16">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  {/* Location */}
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-[#F59E0B] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Location</h3>
                      <p className="text-gray-300">
                        Malshegu – Kumbuyili Road<br />
                        Opp. St. Victor Major Seminary<br />
                        Tamale, Ghana
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-[#F59E0B] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Phone</h3>
                      <a href="tel:0242367273" className="text-gray-300 hover:text-[#F59E0B] transition-colors">
                        0242367273
                      </a>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold px-8 py-3 rounded-lg transition-all mt-4">
                      Get Directions
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-lg overflow-hidden h-96 md:h-full min-h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2356725698604!2d-0.6149999!3d9.4111111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd4a0000000001%3A0x1234567890abcdef!2sAngels%20Hill%20Montessori%20School!5e0!3m2!1sen!2sgh!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Angels Hill Montessori School Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
