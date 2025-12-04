import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="8" fill="#0A66C2"/>
                <path d="M14 18L18 18L18 30L22 30L22 24L18 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 18L18 18L18 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 18L28 30L32 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M26 24L30 24" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M34 18L34 24C34 26.2091 35.7909 28 38 28C38.5523 28 39 27.5523 39 27" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <div>
                <div className="text-xl font-bold text-gray-900">Kfu Marketing LLC</div>
                <div className="text-xs text-gray-600">Digital Excellence</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Contact Us</a>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t">
              <a href="#home" className="block text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600">About</a>
              <a href="#portfolio" className="block text-gray-700 hover:text-blue-600">Portfolio</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact Us</a>
            </div>
          )}
        </nav>
      </header>

      <main>
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Kfu Marketing LLC
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transforming brands through innovative digital marketing strategies. Based in Sharjah Media City, we deliver excellence across the UAE and beyond.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg flex items-center gap-2">
                    Get Started <ArrowRight size={20} />
                  </a>
                  <a href="#portfolio" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                    View Our Work
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                    <div className="text-white text-4xl font-bold mb-2">500+</div>
                    <div className="text-blue-100">Successful Campaigns</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                    <div className="text-white text-4xl font-bold mb-2">250+</div>
                    <div className="text-blue-100">Happy Clients</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-white text-4xl font-bold mb-2">98%</div>
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital marketing solutions tailored to elevate your brand
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Boost your online visibility and rank higher on search engines with our proven SEO strategies.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    Keyword Research
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    On-Page SEO
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    Link Building
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Marketing</h3>
                <p className="text-gray-600 mb-4">
                  Engage your audience and build a strong brand presence across all social platforms.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    Content Strategy
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    Community Management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    Paid Advertising
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-orange-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Marketing</h3>
                <p className="text-gray-600 mb-4">
                  Create compelling content that resonates with your audience and drives conversions.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                    Blog Writing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                    Video Production
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                    Infographics
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-purple-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">PPC Advertising</h3>
                <p className="text-gray-600 mb-4">
                  Maximize ROI with targeted pay-per-click campaigns on Google Ads and social platforms.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                    Google Ads
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                    Facebook Ads
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                    Campaign Optimization
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-red-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Marketing</h3>
                <p className="text-gray-600 mb-4">
                  Build lasting relationships with personalized email campaigns that convert.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    Campaign Design
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    Automation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    A/B Testing
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-teal-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Strategy</h3>
                <p className="text-gray-600 mb-4">
                  Develop a powerful brand identity that stands out in the competitive UAE market.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                    Brand Positioning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                    Visual Identity
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                    Brand Guidelines
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Kfu Marketing LLC</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Based in the heart of Sharjah Media City, Kfu Marketing LLC is a leading digital marketing agency serving clients across the United Arab Emirates and beyond.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We specialize in creating data-driven marketing strategies that deliver measurable results. Our team of experts combines creativity with analytical precision to help businesses grow their online presence and achieve their marketing goals.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-gray-600">Expert Team</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Proven Track Record</div>
                      <div className="text-blue-100 text-sm">Successfully delivered 500+ campaigns</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Local Expertise</div>
                      <div className="text-blue-100 text-sm">Deep understanding of UAE market</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Data-Driven Approach</div>
                      <div className="text-blue-100 text-sm">Every decision backed by analytics</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Dedicated Support</div>
                      <div className="text-blue-100 text-sm">24/7 customer service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real results for real businesses across the UAE
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl overflow-hidden mb-4 h-64 flex items-center justify-center relative">
                  <div className="text-6xl font-bold text-blue-200">E-com</div>
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce Growth</h3>
                <p className="text-gray-600 mb-4">Increased online sales by 285% in 6 months for a Dubai-based retail brand.</p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">SEO</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">PPC</span>
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl overflow-hidden mb-4 h-64 flex items-center justify-center relative">
                  <div className="text-6xl font-bold text-green-200">B2B</div>
                  <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/10 transition-colors"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lead Generation</h3>
                <p className="text-gray-600 mb-4">Generated 500+ qualified leads for a Sharjah B2B software company.</p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Social</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Content</span>
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl overflow-hidden mb-4 h-64 flex items-center justify-center relative">
                  <div className="text-6xl font-bold text-orange-200">Brand</div>
                  <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/10 transition-colors"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Brand Awareness</h3>
                <p className="text-gray-600 mb-4">Boosted social media reach by 450% for an Abu Dhabi hospitality brand.</p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Social</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">Influencer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ready to take your digital marketing to the next level? Contact us today for a free consultation.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Phone</div>
                      <a href="tel:+971505267271" className="text-gray-600 hover:text-blue-600">+971 505 26 7271</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Email</div>
                      <a href="mailto:info@kfumarketing.ae" className="text-gray-600 hover:text-blue-600">info@kfumarketing.ae</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Address</div>
                      <div className="text-gray-600">مدينة الشارقة للإعلام - إ ع م</div>
                      <div className="text-gray-600">Sharjah, UAE 515000</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="font-semibold text-gray-900 mb-4">Follow Us</div>
                  <div className="flex gap-4">
                    <a href="#" className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                      <Facebook className="text-white" size={20} />
                    </a>
                    <a href="#" className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                      <Instagram className="text-white" size={20} />
                    </a>
                    <a href="#" className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                      <Linkedin className="text-white" size={20} />
                    </a>
                    <a href="#" className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                      <Twitter className="text-white" size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="8" fill="#0A66C2"/>
                  <path d="M14 18L18 18L18 30L22 30L22 24L18 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 18L18 18L18 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 18L28 30L32 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M26 24L30 24" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M34 18L34 24C34 26.2091 35.7909 28 38 28C38.5523 28 39 27.5523 39 27" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <div className="text-lg font-bold">Kfu Marketing LLC</div>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for digital marketing excellence in the UAE.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">SEO Optimization</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Social Media</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Content Marketing</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">PPC Advertising</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>مدينة الشارقة للإعلام - إ ع م<br />Sharjah, UAE 515000</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="flex-shrink-0" />
                  <a href="tel:+971505267271" className="hover:text-white transition-colors">+971 505 26 7271</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="flex-shrink-0" />
                  <a href="mailto:info@kfumarketing.ae" className="hover:text-white transition-colors">info@kfumarketing.ae</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Kfu Marketing LLC. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
