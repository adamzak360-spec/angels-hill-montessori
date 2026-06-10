import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * FAQ Page
 * Design: Frequently asked questions about Angels Hill Montessori School
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What classes does the school offer?",
      answer: "Angels Hill Montessori School offers quality education across five levels: Creche, Nursery, Kindergarten, Primary, and Junior High School (J.H.S.). Each level is designed to provide age-appropriate learning experiences that support the child's developmental needs."
    },
    {
      question: "How can I apply for admission?",
      answer: "To apply for admission, parents are welcome to visit the school to learn more about our programs and facilities. You can contact us at 0242367273 or visit our Contact page to schedule a school visit. Our admissions team will guide you through the application process and answer any questions you may have."
    },
    {
      question: "Can parents schedule a school visit?",
      answer: "Yes. Parents are encouraged to visit the school and learn more about our facilities and programmes. We welcome prospective parents to tour our classrooms, meet our teachers, and experience the Montessori learning environment firsthand. Please contact us to arrange a convenient time for your visit."
    },
    {
      question: "What is the Montessori approach?",
      answer: "The Montessori approach is a child-centred educational method that emphasizes independence, self-directed learning, and hands-on exploration. Our teachers act as guides, helping each child develop at their own pace while fostering critical thinking, creativity, and a love for learning."
    },
    {
      question: "What are the school hours?",
      answer: "School hours vary by level to accommodate the developmental needs of each age group. For specific information about school hours for your child's level, please contact us at 0242367273 or visit our Contact page."
    },
    {
      question: "Does the school provide transportation?",
      answer: "For information about transportation services, please contact the school directly at 0242367273. Our administration team will be happy to discuss any transportation arrangements or recommendations."
    },
    {
      question: "What is the teacher-to-student ratio?",
      answer: "Angels Hill Montessori School maintains small class sizes and a favorable teacher-to-student ratio to ensure personalized attention and quality instruction. This allows our teachers to understand each child's unique learning style and provide appropriate support."
    },
    {
      question: "Are there extracurricular activities?",
      answer: "Yes, we offer various extracurricular activities including cultural and creative activities, sports, and educational excursions. These programs are designed to develop well-rounded learners and provide opportunities for students to explore their interests and talents."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#0A2540] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about Angels Hill Montessori School, our programs, and admission process.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 md:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#0A2540] text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-[#F59E0B] flex-shrink-0 ml-4 transition-transform duration-300 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 md:py-6 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 bg-gradient-to-r from-[#F59E0B] to-[#D97706] rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-4">
              Still Have Questions?
            </h2>
            <p className="text-[#0A2540] mb-6 max-w-2xl mx-auto font-medium">
              We're here to help! Contact us directly and our team will be happy to answer any questions you may have about our school.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0242367273"
                className="inline-block bg-[#0A2540] hover:bg-[#051d2d] text-white font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Call Us: 0242367273
              </a>
              <a
                href="mailto:info@angelshill.edu.gh"
                className="inline-block bg-white hover:bg-gray-100 text-[#0A2540] font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
