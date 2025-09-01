"use client"

import { useEffect } from "react"
import { HiMail, HiExclamation } from "react-icons/hi"
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"


const contactInfo = [
  {
    icon: <HiMail className="text-[#555553] text-2xl" />,
    label: "Email",
    value: "imaamedia101@gmail.com",
    href: "mailto:imaamedia101@gmail.com",
  }
]

const socialLinks = [
  { icon: <FaFacebook size={20} />, href: "#", label: "Facebook" },
  { icon: <FaInstagram size={20} />, href: "#", label: "Instagram" },
  { icon: <FaLinkedin size={20} />, href: "#", label: "LinkedIn" },
  { icon: <FaTiktok size={20} />, href: "#", label: "TikTok" },
]

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-zinc-100 to-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 overflow-hidden bg-gradient-to-r from-gray-900 to-black animate-fade-in">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fee302]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fee302]/50 to-transparent" />

        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#fee302]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
          <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-[#fee302] font-medium mb-6 inline-block border border-white/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Get in Touch
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Let's <span className="text-[#fee302]">Talk!</span>
          </h1>

          <p className="text-xl text-white/80 mb-6 font-medium max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Ready to dive into a world of tailored solutions? Reach out to us and let's make magic happen!
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="w-full py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-10">
            
            {/* Contact Info - Full width */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full max-w-4xl mx-auto">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80"
                    alt="Contact"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={info.label}
                        href={info.href}
                        className="flex items-center gap-4 text-gray-900 transition-all duration-300 p-3 rounded-lg group hover:translate-x-2"
                        style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                      >
                        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">{info.label}</div>
                          <div className="font-medium">{info.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-8 pt-3 border-t border-gray-100">
                    <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#fee302] hover:text-black transition-all duration-300 hover:scale-110"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Email Notice */}
      <section className="w-full py-10 px-4 shdow-3xl bg-gray-50">
        <div className="max-w-4xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-r-4 border-[#fee302]">
            <div className="flex items-center justify-center mb-2">
              <HiExclamation className="text-red-800 font-bold text-xl mr-2" />
              <h3 className="font-semibold text-gray-900">Important Notice</h3>
            </div>
            <p className="text-black">
              We are currently experiencing issues with our primary email. Please use{" "}
              <a href="mailto:imaamedia101@gmail.com" className="text-yellow-500 font-semibold hover:underline">
                imaamedia101@gmail.com
              </a>{" "}
              for all inquiries. Thank you for your patience!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
