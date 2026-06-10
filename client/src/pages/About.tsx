import { CheckCircle, GraduationCap, Heart, Lightbulb, Users, Trophy, Users2 } from "lucide-react";

/**
 * About Page
 * Design: Angels Hill Montessori School information with vision, mission, and values
 */
export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#0A2540] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Learn more about Angels Hill Montessori School and our commitment to excellence
          </p>
        </div>
      </section>

      {/* School Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
                About Angels Hill Montessori School
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Angels Hill Montessori School is a child-centred institution dedicated to providing quality education in a safe, nurturing and stimulating environment. Located at Malshegu on the Kumbuyili Road in Tamale, the school serves learners from Creche through Junior High School.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our Montessori-based approach encourages independent thinking, creativity, confidence and academic excellence while developing strong moral values and leadership skills. We believe every child has unique potential and deserves the opportunity to grow academically, socially and emotionally.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/assets/about/classroom-1.jpg" 
                alt="Children learning in Montessori classroom" 
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F59E0B] p-8 rounded-lg hidden md:block">
                <p className="text-black font-bold text-xl text-center">
                  Est. Since <br /> 2015
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#F59E0B]">
              <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide quality Montessori education that nurtures academic excellence, character development, creativity and lifelong learning in every child.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#F59E0B]">
              <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become a leading Montessori institution recognized for developing confident, responsible and innovative learners who positively impact society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] text-center mb-16">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="w-8 h-8 text-white" />,
                value: "Academic Excellence",
                description: "Commitment to high-quality teaching and learning.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-white" />,
                value: "Integrity",
                description: "Promoting honesty, discipline and responsibility.",
              },
              {
                icon: <Heart className="w-8 h-8 text-white" />,
                value: "Respect",
                description: "Valuing every learner, parent and staff member.",
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-white" />,
                value: "Creativity",
                description: "Encouraging innovation and independent thinking.",
              },
              {
                icon: <Users className="w-8 h-8 text-white" />,
                value: "Leadership",
                description: "Developing confident future leaders.",
              },
              {
                icon: <Users2 className="w-8 h-8 text-white" />,
                value: "Teamwork",
                description: "Working together for the success of every child.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-[#F59E0B] transition-colors group text-center">
                <div className="w-16 h-16 bg-[#0A2540] group-hover:bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                  {item.value}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-[#0A2540] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Parents Choose Angels Hill Montessori School
            </h2>
            <div className="w-24 h-1 bg-[#F59E0B] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Qualified and Dedicated Teachers",
              "Safe and Child-Friendly Environment",
              "Montessori-Based Learning Approach",
              "Strong Moral and Character Development",
              "Modern Teaching Methods",
              "Programs from Creche to J.H.S.",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <CheckCircle className="w-6 h-6 text-[#F59E0B] flex-shrink-0" />
                <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Overview Statistics */}
      <section className="py-16 md:py-24">
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
              <div key={idx} className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h4 className="text-2xl font-bold text-[#0A2540] mb-2">{stat.label}</h4>
                <p className="text-gray-600 font-medium">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview / Visuals */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="/assets/about/teacher-student.jpg" alt="Teacher-student interactions" className="rounded-xl h-64 w-full object-cover shadow-lg" />
            <img src="/assets/about/activities.jpg" alt="Educational activities" className="rounded-xl h-64 w-full object-cover shadow-lg" />
            <img src="/assets/about/montessori-env.jpg" alt="Montessori learning environments" className="rounded-xl h-64 w-full object-cover shadow-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Target(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
