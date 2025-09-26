import React, { useState } from 'react'
import { 
  Leaf, 
  Cloud, 
  Camera, 
  TrendingUp, 
  Users, 
  Globe, 
  Mic, 
  MapPin, 
  Bell, 
  BarChart3,
  Smartphone,
  Shield,
  Heart,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('en')

  const languages = {
    en: {
      nav: {
        home: 'Home',
        features: 'Features',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        title: 'Smart Crop Advisory System',
        subtitle: 'Empowering Small & Marginal Farmers with AI-Powered Agricultural Intelligence',
        description: 'Get personalized, real-time crop advisory services in your native language. Make informed decisions about crop selection, pest control, and fertilizer use.',
        cta: 'Get Started',
        learnMore: 'Learn More'
      },
      features: {
        title: 'Comprehensive Agricultural Solutions',
        subtitle: 'Everything farmers need to increase productivity and reduce costs'
      },
      stats: {
        farmers: '86% of Indian farmers are small or marginal',
        yield: '20-30% yield increase with ICT-based advisories',
        impact: 'Improving livelihoods, sustainability & food security'
      }
    },
    hi: {
      nav: {
        home: 'होम',
        features: 'विशेषताएं',
        about: 'हमारे बारे में',
        contact: 'संपर्क'
      },
      hero: {
        title: 'स्मार्ट फसल सलाहकार प्रणाली',
        subtitle: 'छोटे और सीमांत किसानों को AI-संचालित कृषि बुद्धिमत्ता के साथ सशक्त बनाना',
        description: 'अपनी मातृभाषा में व्यक्तिगत, वास्तविक समय की फसल सलाहकार सेवाएं प्राप्त करें।',
        cta: 'शुरू करें',
        learnMore: 'और जानें'
      }
    }
  }

  const currentLang = languages[selectedLanguage] || languages.en

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-primary-600" />,
      title: "Multilingual Support",
      description: "Native language support for Hindi, Bengali, Tamil, and more regional languages with voice assistance for low-literate users."
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary-600" />,
      title: "Weather-Based Alerts",
      description: "Real-time weather monitoring and predictive insights to help farmers make timely decisions about irrigation and harvesting."
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary-600" />,
      title: "Soil Health Analysis",
      description: "Comprehensive soil health recommendations and personalized fertilizer guidance based on soil type and crop history."
    },
    {
      icon: <Camera className="w-8 h-8 text-primary-600" />,
      title: "Pest Detection",
      description: "AI-powered pest and disease detection through image uploads, providing instant identification and treatment recommendations."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
      title: "Market Price Tracking",
      description: "Real-time market price information to help farmers decide when and where to sell their crops for maximum profit."
    },
    {
      icon: <Mic className="w-8 h-8 text-primary-600" />,
      title: "Voice Support",
      description: "Complete voice interaction support for farmers with low digital literacy, making technology accessible to everyone."
    }
  ]

  const stakeholders = [
    {
      icon: <Users className="w-12 h-12 text-accent-600" />,
      title: "Small & Marginal Farmers",
      description: "Primary beneficiaries receiving personalized agricultural guidance"
    },
    {
      icon: <Shield className="w-12 h-12 text-accent-600" />,
      title: "Agricultural Extension Officers",
      description: "Enhanced tools for better farmer outreach and support"
    },
    {
      icon: <Heart className="w-12 h-12 text-accent-600" />,
      title: "Government & NGOs",
      description: "Data-driven insights for policy making and rural development"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CropAdvisor</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium">
                {currentLang.nav.home}
              </a>
              <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium">
                {currentLang.nav.features}
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium">
                {currentLang.nav.about}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium">
                {currentLang.nav.contact}
              </a>
              
              {/* Language Selector */}
              <select 
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-gray-100 border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
              </select>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700">Home</a>
              <a href="#features" className="block px-3 py-2 text-gray-700">Features</a>
              <a href="#about" className="block px-3 py-2 text-gray-700">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="gradient-bg text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {currentLang.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up max-w-4xl mx-auto">
            {currentLang.hero.subtitle}
          </p>
          <p className="text-lg mb-10 animate-slide-up max-w-3xl mx-auto opacity-90">
            {currentLang.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button className="btn-secondary text-lg px-8 py-4">
              {currentLang.hero.cta}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              {currentLang.hero.learnMore}
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">86%</div>
              <p className="text-gray-600">of Indian farmers are small or marginal (NABARD Report, 2022)</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-accent-600 mb-2">20-30%</div>
              <p className="text-gray-600">yield increase with ICT-based advisories</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">🌱</div>
              <p className="text-gray-600">Sustainable farming for environmental conservation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentLang.features.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentLang.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Challenge We're Solving
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A majority of small and marginal farmers in India rely on traditional knowledge, 
                  local shopkeepers, or guesswork for crop selection, pest control, and fertilizer use.
                </p>
                <p>
                  This often leads to poor yield, excessive input costs, and environmental degradation 
                  due to overuse of chemicals. Language barriers, low digital literacy, and absence 
                  of localized tools further limit their access to modern agri-tech resources.
                </p>
                <p>
                  Our AI-powered solution provides personalized, real-time advisory services that 
                  account for soil type, weather conditions, and crop history, empowering farmers 
                  with scientific insights in their native language.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card text-center">
                <Smartphone className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Mobile First</h4>
                <p className="text-sm text-gray-600">Accessible on any smartphone</p>
              </div>
              <div className="card text-center">
                <Bell className="w-12 h-12 text-accent-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Real-time Alerts</h4>
                <p className="text-sm text-gray-600">Timely notifications</p>
              </div>
              <div className="card text-center">
                <BarChart3 className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Data Driven</h4>
                <p className="text-sm text-gray-600">Scientific insights</p>
              </div>
              <div className="card text-center">
                <MapPin className="w-12 h-12 text-accent-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Location Based</h4>
                <p className="text-sm text-gray-600">Hyper-local recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section id="about" className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Stakeholders & Beneficiaries
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Building an ecosystem that benefits everyone in the agricultural value chain
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stakeholders.map((stakeholder, index) => (
              <div key={index} className="card text-center">
                <div className="mb-6 flex justify-center">{stakeholder.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{stakeholder.title}</h3>
                <p className="text-gray-600">{stakeholder.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Agriculture?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of farmers who are already benefiting from AI-powered crop advisory
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary text-lg px-8 py-4">
              Download App
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Leaf className="h-8 w-8 text-primary-400" />
                <span className="ml-2 text-xl font-bold">Smart Crop Advisory</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering farmers with AI-powered agricultural intelligence for better yields, 
                reduced costs, and sustainable farming practices.
              </p>
              <p className="text-gray-400 text-sm">
                Problem Statement ID: 25010
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@cropAdvisor.com</li>
                <li>Phone: +91-XXXX-XXXXXX</li>
                <li>Address: Agricultural Innovation Hub</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Smart Crop Advisory System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App