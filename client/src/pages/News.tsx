import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

/**
 * News & Events Page
 * Design: School news and upcoming events
 */
export default function News() {
  const events = [
    {
      title: "Admissions Open for New Students",
      description: "We are now accepting applications for the 2025/2026 academic year across all levels. Visit our admissions page to learn more about the application process.",
      date: "Ongoing",
      image: "https://images.unsplash.com/photo-1427504494785-cdde41707539?q=80&w=2070&auto=format&fit=crop",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Parent-Teacher Meeting",
      description: "Join us for our quarterly parent-teacher meetings to discuss your child's progress, achievements, and areas for growth.",
      date: "Scheduled Monthly",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Academic Excellence Awards",
      description: "Celebrating outstanding academic achievements and recognizing students who have demonstrated excellence in their studies and character.",
      date: "End of Term",
      image: "https://images.unsplash.com/photo-1523050854058-7df90110b8f7?q=80&w=2070&auto=format&fit=crop",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Cultural and Creative Activities Day",
      description: "A vibrant celebration of our students' talents through music, drama, art, and cultural performances showcasing creativity and diversity.",
      date: "Quarterly",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Educational Excursions",
      description: "Engaging field trips and educational excursions designed to enhance classroom learning and provide real-world experiences for our students.",
      date: "Throughout the Year",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#0A2540] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">School News & Events</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and activities happening at Angels Hill Montessori School.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Upcoming Events & News
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover what's happening at our school and mark your calendar for important dates and activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-[#F59E0B] text-[#0A2540] p-3 rounded-full">
                    {event.icon}
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#F59E0B] font-semibold mb-4">
                    <Calendar className="w-5 h-5" />
                    <span>{event.date}</span>
                  </div>
                  <Button className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-[#0A2540] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Know More?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our school events, programs, and how to get involved in our school community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold px-10 py-4 text-lg rounded-xl">
                Contact Us
              </Button>
            </Link>
            <Link href="/admissions">
              <Button
                variant="outline"
                className="border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-black font-bold px-10 py-4 text-lg rounded-xl"
              >
                Apply for Admission
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
