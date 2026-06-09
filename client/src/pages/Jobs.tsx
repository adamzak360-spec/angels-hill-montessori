import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Clock } from "lucide-react";

/**
 * Jobs Page
 * Design: Job listings with search and filtering
 */
interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  description: string;
}

const staticJobsData: Job[] = [
  {
    id: "posted-1",
    title: "Drivers",
    company: "ANGELS HILL MONTESSORI Recruitment Limited",
    location: "Tamale",
    salary: "Very Attractive",
    type: "Full-time",
    posted: "Today",
    description:
      "Our client in a logistic business seeks reliable Drivers to operate buses. Responsible for safe transportation of staff/clients.",
  },
  {
    id: "posted-2",
    title: "Domestic Workers",
    company: "ANGELS HILL MONTESSORI Recruitment Limited",
    location: "Tamale",
    salary: "Competitive",
    type: "Full-time",
    posted: "Today",
    description:
      "Domestic workers needed to manage day-to-day activities in the home including cleaning, cooking, and childcare.",
  },
  {
    id: "posted-3",
    title: "Teachers (Pre-school & Basic School)",
    company: "ANGELS HILL MONTESSORI Recruitment Limited",
    location: "Kalpohini Yapalsi - Tamale",
    salary: "Competitive",
    type: "Full-time",
    posted: "Today",
    description:
      "Openings for Pre-school and Basic School Teachers in Tamale. Requires Diploma in Basic Education or SHS graduate.",
  },
  {
    id: "posted-4",
    title: "Accounts Officers",
    company: "ANGELS HILL MONTESSORI Recruitment Limited",
    location: "Tamale",
    salary: "GHS 5,500",
    type: "Full-time",
    posted: "Today",
    description:
      "The Finance Officer will manage daily financial operations, maintain accurate bookkeeping, process transactions, and support basic financial reporting.",
  },
  {
    id: "posted-5",
    title: "Personal Assistant",
    company: "ANGELS HILL MONTESSORI Recruitment Limited",
    location: "Tamale",
    salary: "Competitive",
    type: "Full-time",
    posted: "Today",
    description:
      "Professional Personal Assistant needed to provide high-level administrative support and manage daily schedules.",
  },
];

export default function Jobs() {
  const [jobsData, setJobsData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    // Load static jobs
    let allJobs = [...staticJobsData];

    // Load and merge uploaded jobs from localStorage
    const employerPostings = JSON.parse(
      localStorage.getItem("employerSubmissions") || "[]"
    );
    const adminPostings = JSON.parse(
      localStorage.getItem("adminJobs") || "[]"
    );

    // Convert uploaded jobs to match the Job interface
    const uploadedJobs = [...adminPostings, ...employerPostings].map((job: any) => ({
      id: job.id?.toString() || Date.now().toString(),
      title: job.positionRequired || job.title || "Untitled Position",
      company: job.organizationName || job.company || "Unknown Company",
      location: job.location || "Not specified",
      salary: job.remuneration || job.salary || "Competitive",
      type: job.contractType || job.type || "Full-time",
      posted: job.submittedAt ? new Date(job.submittedAt).toLocaleDateString() : "Recently",
      description: job.jobDescription || job.description || "No description provided",
    }));

    // Combine all jobs, with uploaded jobs appearing first
    allJobs = [...uploadedJobs, ...allJobs];
    setJobsData(allJobs);
  }, []);

  const locations = [
    "All",
    ...Array.from(new Set((jobsData || []).map((job) => job.location).filter(Boolean))),
  ];
  const types = [
    "All",
    ...Array.from(new Set((jobsData || []).map((job) => job.type).filter(Boolean))),
  ];

  const filteredJobs = (jobsData || []).filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation =
      selectedLocation === "All" || job.location.includes(selectedLocation);
    const matchesType = selectedType === "All" || job.type === selectedType;

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#0A2540] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Job Opportunities
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Browse our latest job openings and find your perfect career match.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 md:py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-4 md:gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Jobs
              </label>
              <input
                type="text"
                placeholder="Job title or company"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none"
              />
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Job Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-end">
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-lg text-[#0A2540]">
                  {filteredJobs.length}
                </span>
                <span> jobs found</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A2540] hover:text-[#F59E0B] transition-colors cursor-pointer">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 font-medium mb-3">
                        {job.company}
                      </p>
                      <p className="text-gray-700 mb-4">{job.description}</p>

                      {/* Job Details */}
                      <div className="flex flex-wrap gap-6 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 text-[#F59E0B]" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Briefcase className="w-4 h-4 text-[#F59E0B]" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <span className="text-[#F59E0B] font-bold">GHC</span>
                          {job.salary}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4 text-[#F59E0B]" />
                          {job.posted}
                        </div>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="flex-shrink-0">
                      <a
                        href="https://wa.me/233243105412"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold px-6 py-2 w-full md:w-auto">
                          Apply Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">
                No jobs found matching your criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedLocation("All");
                  setSelectedType("All");
                }}
                variant="outline"
                className="border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-black"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't see what you're looking for?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to job alerts or contact us to discuss your career goals.
          </p>
          <a
            href="https://wa.me/233243105412"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold px-8 py-3 text-lg">
              Contact Us
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
