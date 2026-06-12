import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Play, X, Heart } from "lucide-react";
import { updateSEOHead } from "@/components/SEOHead";

/**
 * Videos Page
 * Design: Beautiful video gallery showcasing school activities and student learning
 */
export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [likedVideos, setLikedVideos] = useState<Set<number>>(new Set());

  useEffect(() => {
    updateSEOHead({
      title: "Videos | Angels Hill Montessori School",
      description: "Watch videos of Angels Hill Montessori School - student learning, classroom activities, creative projects, and school events."
    });
  }, []);

  const videos = [
    {
      id: 1,
      src: "/assets/videos/rose-flower-class.mp4",
      thumbnail: "/assets/gallery/classroom-learning.jpg",
      title: "Rose Flower Class Learning",
      description: "Our Basic 1 class named after the beautiful Rose Flower - students engaged in interactive Montessori learning activities.",
      category: "Classroom Learning",
      date: "2025"
    },
    {
      id: 2,
      src: "/assets/teaching-palindromes.mp4",
      thumbnail: "/assets/gallery/teacher-interaction.jpg",
      title: "Teaching Palindromes",
      description: "An engaging lesson on palindromes with our dedicated educators guiding students through creative learning.",
      category: "Language Arts",
      date: "2025"
    },
    {
      id: 3,
      src: "/assets/gallery/group-activity.jpg",
      thumbnail: "/assets/gallery/group-activity.jpg",
      title: "Group Activities & Collaboration",
      description: "Students working together in collaborative group activities that foster teamwork and social skills.",
      category: "Social Development",
      date: "2025"
    },
    {
      id: 4,
      src: "/assets/gallery/creative-activity.jpg",
      thumbnail: "/assets/gallery/creative-activity.jpg",
      title: "Creative Expression Workshop",
      description: "Students exploring their creativity through hands-on art and craft activities in our well-equipped studios.",
      category: "Creative Arts",
      date: "2025"
    },
    {
      id: 5,
      src: "/assets/gallery/reading-session.jpg",
      thumbnail: "/assets/gallery/reading-session.jpg",
      title: "Reading & Literacy Sessions",
      description: "Fostering a love for reading and language development in our vibrant library environment.",
      category: "Literacy",
      date: "2025"
    },
    {
      id: 6,
      src: "/assets/gallery/school-environment.jpg",
      thumbnail: "/assets/gallery/school-environment.jpg",
      title: "School Environment Tour",
      description: "A glimpse into our safe, modern, and welcoming learning spaces designed for optimal child development.",
      category: "School Tour",
      date: "2025"
    }
  ];

  const toggleLike = (videoId: number) => {
    const newLiked = new Set(likedVideos);
    if (newLiked.has(videoId)) {
      newLiked.delete(videoId);
    } else {
      newLiked.add(videoId);
    }
    setLikedVideos(newLiked);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0A2540] via-[#1a4d7a] to-[#0A2540] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/30 text-[#F59E0B] mb-6">
            <Play className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">Video Gallery</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Life at Angels Hill Montessori School
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Experience the vibrant learning environment through our video gallery. Watch our students engaged in classroom learning, creative activities, and meaningful interactions with our dedicated educators.
          </p>
        </div>
      </section>

      {/* Video Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Featured Videos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the magic of Montessori education through real moments from our classrooms and school activities.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-100"
              >
                {/* Video Thumbnail */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-gray-200">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Play Button */}
                  <button
                    onClick={() => setSelectedVideo(idx)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="Play video"
                  >
                    <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-8 h-8 text-black fill-black" />
                    </div>
                  </button>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#F59E0B] text-black px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {video.category}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2 line-clamp-2 group-hover:text-[#F59E0B] transition-colors">
                    {video.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>

                  {/* Footer with Like and Play */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <button
                      onClick={() => toggleLike(video.id)}
                      className={`flex items-center gap-2 transition-all duration-300 ${
                        likedVideos.has(video.id)
                          ? "text-[#F59E0B]"
                          : "text-gray-400 hover:text-[#F59E0B]"
                      }`}
                      aria-label="Like video"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          likedVideos.has(video.id) ? "fill-current" : ""
                        }`}
                      />
                      <span className="text-xs font-semibold">{likedVideos.has(video.id) ? "Liked" : "Like"}</span>
                    </button>

                    <button
                      onClick={() => setSelectedVideo(idx)}
                      className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <Play className="w-4 h-4 fill-black" />
                      <span className="text-sm">Watch</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#F59E0B] transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video Player */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <video
                src={videos[selectedVideo].src}
                controls
                autoPlay
                className="w-full h-auto max-h-[70vh]"
                controlsList="nodownload"
              />
            </div>

            {/* Video Info */}
            <div className="mt-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{videos[selectedVideo].title}</h3>
                  <div className="flex items-center gap-4 text-gray-300">
                    <span className="text-sm bg-[#F59E0B]/20 text-[#F59E0B] px-3 py-1 rounded-full">
                      {videos[selectedVideo].category}
                    </span>
                    <span className="text-sm">{videos[selectedVideo].date}</span>
                  </div>
                </div>
                <button
                  onClick={() => toggleLike(videos[selectedVideo].id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    likedVideos.has(videos[selectedVideo].id)
                      ? "bg-[#F59E0B] text-black"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      likedVideos.has(videos[selectedVideo].id) ? "fill-current" : ""
                    }`}
                  />
                </button>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {videos[selectedVideo].description}
              </p>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t border-white/20">
                <button
                  onClick={() => setSelectedVideo((prev) => (prev === 0 ? videos.length - 1 : prev! - 1))}
                  className="text-white hover:text-[#F59E0B] transition-colors text-lg font-bold flex items-center gap-2"
                >
                  <span>←</span> Previous
                </button>
                <span className="text-white text-sm bg-white/10 px-4 py-2 rounded-lg">
                  {selectedVideo + 1} / {videos.length}
                </span>
                <button
                  onClick={() => setSelectedVideo((prev) => (prev === videos.length - 1 ? 0 : prev! + 1))}
                  className="text-white hover:text-[#F59E0B] transition-colors text-lg font-bold flex items-center gap-2"
                >
                  Next <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Watch Our Videos Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
                See What Makes Us Special
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Real Learning Moments",
                    description: "Authentic footage of our students engaged in meaningful Montessori learning experiences."
                  },
                  {
                    title: "Quality Education in Action",
                    description: "Watch how our teachers implement child-centered learning that nurtures independence and creativity."
                  },
                  {
                    title: "Safe & Supportive Environment",
                    description: "See our modern facilities and caring educators creating a space where every child can thrive."
                  },
                  {
                    title: "Character Development",
                    description: "Observe how we foster leadership, integrity, and social responsibility in our students."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                      <Play className="w-6 h-6 text-black fill-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0A2540] mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/gallery/classroom-learning.jpg"
                  alt="Classroom"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div>
                    <p className="text-white text-lg font-semibold mb-2">Experience Quality Education</p>
                    <p className="text-gray-200">Watch our videos to see the difference Montessori education makes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Link Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0A2540] to-[#1a4d7a] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to See More?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Explore our photo gallery for more moments from school life, or schedule a visit to experience Angels Hill Montessori School in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/gallery">
                <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold px-10 py-4 text-lg rounded-xl transition-all hover:scale-105">
                  View Photo Gallery <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#0A2540] font-bold px-10 py-4 text-lg rounded-xl transition-all hover:scale-105"
                >
                  Schedule a Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Angels Hill Montessori School?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Enroll your child in a school that prioritizes quality education, character development, and holistic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold px-10 py-4 text-lg rounded-xl transition-all hover:scale-105">
                Apply for Admission <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A2540] font-bold px-10 py-4 text-lg rounded-xl transition-all hover:scale-105"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
