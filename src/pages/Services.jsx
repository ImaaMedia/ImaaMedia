"use client"

import { useState, useEffect } from "react"
import { HiArrowRight, HiCheck, HiPlus } from "react-icons/hi"
import { RiFileTextLine, RiMailLine } from "react-icons/ri"
import { RiCustomerService2Line, RiComputerLine, RiAdvertisementLine, RiLayoutLine } from "react-icons/ri"
import { Link } from "react-router-dom"

const services = [
  {
    title: "Social Media Marketing",
    icon: <RiCustomerService2Line />,
    description: "Grow your audience and engagement with strategic social campaigns.",
    bullets: [
      "Content creation & scheduling",
      "Audience analytics",
      "Brand voice development",
      "Influencer partnerships"
    ]
  },
  {
    title: "Creative Studio",
    icon: <RiComputerLine />,
    description: "Stunning visuals, graphics, and videos to elevate your brand.",
    bullets: [
      "Logo & brand design",
      "Video production",
      "Motion graphics",
      "Photography"
    ]
  },
  {
    title: "Digital Advertising",
    icon: <RiAdvertisementLine />,
    description: "Targeted ads that drive real results across platforms.",
    bullets: [
      "Google & Meta ads",
      "Retargeting campaigns",
      "A/B testing",
      "Performance reporting"
    ]
  },
  {
    title: "Website Designing",
    icon: <RiLayoutLine />,
    description: "Modern, responsive websites that convert visitors into customers.",
    bullets: [
      "UI/UX design",
      "SEO optimization",
      "E-commerce solutions",
      "Maintenance & support"
    ]
  },
  {
    title: "Content Writing",
    icon: <RiFileTextLine />,
    description: "Engaging, SEO-friendly content that builds authority and connects with your audience.",
    bullets: [
      "Blog & article writing",
      "Website copywriting",
      "SEO content optimization",
      "Product descriptions"
    ]
  },
  {
    title: "Email Marketing",
    icon: <RiMailLine />,
    description: "Build relationships and drive conversions with smart email campaigns.",
    bullets: [
      "Campaign setup & automation",
      "Email design & templates",
      "List segmentation",
      "Performance tracking"
    ]
  }
]


export default function Services() {
  const [activeService, setActiveService] = useState(null)
  const [openFAQ, setOpenFAQ] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-zinc-100 to-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 overflow-hidden bg-gradient-to-r from-gray-900 to-black animate-fade-in">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]" />
        <div className="absolute h-full w-full bg-gradient-to-b from-black/0 via-black/0 to-black/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fee302]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fee302]/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#fee302]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
          <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-[#fee302] font-medium mb-6 inline-block border border-white/20">
            Expert Solutions for Your Business
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight animate-fade-in">
            Our <span className="text-[#fee302]">Services</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 font-medium max-w-2xl mx-auto animate-fade-in">
            Our expert team offers savvy solutions at unbeatable rates. Explore our comprehensive range of services
            designed to elevate your brand.
          </p>
        </div>
      </section>


      {/* Services Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 bg-amber-100 text-amber-600 rounded-full text-sm font-medium">
              Our Services
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to boost your brand's online presence and drive growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.2 + i * 0.2}s`, animationFillMode: 'both' }}
              >
                <div className="flex flex-col items-center p-8 pb-0">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-200 mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl text-gray-900">{service.icon}</span>
                  </div>
                  <h3 className="font-bold text-2xl mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white mb-4 text-center">
                    {service.description}
                  </p>
                </div>
                <div className="px-8 pb-8">
                  <ul className="space-y-3 mb-6">
                    {service.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start animate-fade-in"
                        style={{ animationDelay: `${0.3 + j * 0.1}s`, animationFillMode: 'both' }}
                      >
                        <span className="bg-white text-gray-900 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                          <HiCheck className="w-4 h-4" />
                        </span>
                        <span className="text-white">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setActiveService(activeService === i ? null : i)}
                    className="inline-flex items-center font-medium text-gray-800 cursor-pointer transition-colors group/btn px-4 py-2 rounded-full border border-amber-100 bg-white hover:bg-amber-200 shadow-sm"
                  >
                    {activeService === i ? "View Less" : "Learn More"}
                    <HiArrowRight className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  {activeService === i && (
                    <div className="mt-6 pt-4 border-t border-gray-300 animate-fade-in">
                      <p className="text-white">
                        Our {service.title} service is designed to help your business thrive in the digital landscape. With our expert team and proven strategies, we deliver exceptional results that drive growth and increase your brand's visibility.
                      </p>

                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="px-4 py-1.5 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              Our Approach
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-6 text-gray-900">How We Work</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our streamlined process ensures we deliver exceptional results every time.
            </p>
            <div className="w-20 h-1.5 bg-[#fee302] mx-auto rounded-full mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Discovery", desc: "We learn about your business goals and challenges" },
              { number: "02", title: "Strategy", desc: "We develop a tailored plan to achieve your objectives" },
              { number: "03", title: "Execution", desc: "We implement the strategy with precision and creativity" },
              { number: "04", title: "Results", desc: "We measure success and optimize for continuous improvement" },
            ].map((step, i) => (
              <div
                key={step.number}
                className="relative animate-fade-in"
                style={{ animationDelay: `${0.2 + i * 0.2}s`, animationFillMode: 'both' }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-2xl h-full flex flex-col">
                  <div className="text-5xl font-bold text-[#fee302]/60 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <HiArrowRight className="w-8 h-8 text-[#fee302]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-r from-[#fee302] to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to transform your digital presence?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center bg-black text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 text-lg group"
            >
              Get a Free Consultation
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="px-4 py-1.5 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              Questions & Answers
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-6 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Find answers to common questions about our services.</p>
            <div className="w-20 h-1.5 bg-[#fee302] mx-auto rounded-full mt-6" />
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What makes your services different from other agencies?",
                a: "What sets us apart is our nimble, client-focused approach and our commitment to measurable results. As a boutique agency, we’re able to pivot quickly to meet your evolving needs and provide direct, transparent communication throughout every project. We back up our strategies with real, data-proven outcomes and offer niche expertise that many larger agencies can’t match. Our team becomes an extension of yours, delivering creative content, expert community management, and ongoing analytics to ensure your brand doesn’t just keep up—but leads the conversation online",
              },
              {
                q: "How long does it typically take to see results?",
                a: "On average, it takes about six months to start seeing meaningful, trackable results from a new social media strategy, provided you’re following best practices and maintaining regular, authentic engagement. Short-term metrics like likes and follows may increase within the first few months, but deeper outcomes—such as lead generation, website traffic, and sales conversions—require patience and ongoing optimization. For brands starting from scratch, building a strong foundation of followers and engagement may take up to three months before you can really drive results, with the most significant impact usually emerging after the six-month mark.",
              },
              {
                q: "Do you offer packages or custom solutions?",
                a: "Absolutely—we believe that one size doesn’t fit all in social media marketing. That’s why we provide a range of flexible packages for startups, growing brands, and established enterprises, as well as the option for fully customized solutions. Whether you want a basic presence or a comprehensive, multi-platform campaign, we can adapt our offerings to your requirements. Our custom packages are ideal if you have unique goals, require platform-specific strategies, or want measurable outcomes tied directly to your business objectives. We work closely with you to ensure every campaign is crafted for your success.",
              },
              {
                q: "How do you measure success?",
                a: "Success in social media marketing is measured through a blend of quantitative and qualitative metrics tailored to your objectives. We monitor engagement (such as comments, shares, and saves), growth in followers, website visits from social media, and conversion rates to track how well our efforts are moving the needle. Additionally, we assess brand sentiment and share of voice to understand your reputation and visibility compared to competitors. Regular, transparent reporting ensures you always know exactly how your investment is performing and where we’re making the most impact.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in"
                style={{ animationDelay: `${0.2 + i * 0.2}s`, animationFillMode: 'both' }}
              >
                <button
                  className={`w-full px-6 py-4 flex justify-between items-center transition-colors cursor-pointer ${openFAQ === i ? 'bg-amber-50' : 'hover:bg-gray-50'
                    }`}
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                >
                  <h3 className="font-bold text-lg text-gray-900 text-left">{faq.q}</h3>
                  <span className={`transform transition-transform duration-200 ${openFAQ === i ? 'rotate-45' : ''}`}>
                    <HiPlus className={`w-5 h-5 ${openFAQ === i ? 'text-[#fee302]' : 'text-gray-400'}`} />
                  </span>
                </button>
                <div
                  className={`px-6 transition-all duration-200 ease-in-out ${openFAQ === i ? 'max-h-40 py-4' : 'max-h-0'
                    } overflow-hidden`}
                >
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
