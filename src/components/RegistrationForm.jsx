import React, { useState, useEffect } from 'react';
import { 
  User, Mail, Phone, MapPin, GraduationCap, Leaf, Send, 
  Sprout, Sun, CloudRain, Tractor, ChevronRight, Star,
  CheckCircle2, ArrowRight, Users, Award, Globe, CheckCircle, 
  Home, Calendar, MessageCircle, Sparkles
} from 'lucide-react';

export default function EnhancedRegistrationForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    interests: [],
    motivation: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [animateStats, setAnimateStats] = useState(false);

  const farmingInterests = [
    { name: 'Crop Production', icon: Sprout, color: 'bg-green-100 text-green-700' },
    { name: 'Livestock Management', icon: Users, color: 'bg-blue-100 text-blue-700' },
    { name: 'Sustainable Farming', icon: Leaf, color: 'bg-emerald-100 text-emerald-700' },
    { name: 'Precision Agriculture', icon: Globe, color: 'bg-purple-100 text-purple-700' },
    { name: 'Hydroponics', icon: CloudRain, color: 'bg-cyan-100 text-cyan-700' },
    { name: 'Organic Farming', icon: Sun, color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Agricultural Technology', icon: Tractor, color: 'bg-orange-100 text-orange-700' },
    { name: 'Farm Business Management', icon: Award, color: 'bg-red-100 text-red-700' }
  ];

  const stats = [
    { number: '15,000+', label: 'Students Trained', icon: Users },
    { number: '95%', label: 'Success Rate', icon: Award },
    { number: '50+', label: 'Countries', icon: Globe },
    { number: '4.9/5', label: 'Rating', icon: Star }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimateStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Success Page Component
  const SuccessPage = () => {
    const [animate, setAnimate] = useState(false);
    const [confetti, setConfetti] = useState([]);

    useEffect(() => {
      setAnimate(true);
      
      // Create confetti effect
      const confettiArray = [];
      for (let i = 0; i < 30; i++) {
        confettiArray.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 3 + Math.random() * 2
        });
      }
      setConfetti(confettiArray);
    }, []);

    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
        {/* Confetti */}
        {confetti.map((piece) => (
          <div
            key={piece.id}
            className="absolute w-2 h-2 bg-green-500 rounded-full animate-bounce opacity-70"
            style={{
              left: `${piece.x}%`,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
              top: '-10px'
            }}
          />
        ))}

        <div className="container flex items-center justify-center min-h-screen px-4 py-8 mx-auto">
          <div className={`bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center border border-white/20 transform transition-all duration-1000 ${
            animate ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10'
          }`}>
            
            {/* Success Icon */}
            <div className="relative mb-8">
              <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 animate-bounce">
                <Sparkles className="w-8 h-8 text-yellow-500" />
              </div>
            </div>

            {/* Main Message */}
            <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
              Welcome to 
              <span className="block text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
                Academy!
              </span>
            </h1>
            
            <p className="mb-12 text-xl leading-relaxed text-gray-600">
              🎉 Congratulations! Your registration has been successfully submitted. 
              Get ready to transform your agricultural knowledge with our expert team!
            </p>

            {/* What's Next Section */}
            <div className="p-8 mb-8 border border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
              <h3 className="flex items-center justify-center mb-6 text-2xl font-bold text-green-800">
                <Calendar className="w-6 h-6 mr-2" />
                What Happens Next?
              </h3>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 text-lg font-bold text-white bg-green-600 rounded-full">
                    1
                  </div>
                </div>
                <div className="max-w-md mx-auto">
                  <h4 className="mb-3 text-xl font-semibold text-green-800">Our Team Will Contact You</h4>
                  <p className="text-lg text-green-700">
                    Our agricultural education specialists will reach out to you within 24-48 hours 
                    to discuss your learning goals and guide you through the next steps of your farming journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="grid gap-6 mb-8 md:grid-cols-2">
              <div className="p-6 bg-white border border-gray-100 shadow-lg rounded-2xl">
                <Users className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h4 className="mb-2 font-semibold text-gray-800">Join Our Community</h4>
                <p className="text-sm text-gray-600">Connect with 15,000+ students and industry experts</p>
              </div>
              
              <div className="p-6 bg-white border border-gray-100 shadow-lg rounded-2xl">
                <Award className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                <h4 className="mb-2 font-semibold text-gray-800">Certified Learning</h4>
                <p className="text-sm text-gray-600">Earn recognized certifications in modern agriculture</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col justify-center gap-4 mb-8 sm:flex-row">
              <button 
                onClick={() => setShowSuccess(false)}
                className="inline-flex items-center justify-center px-8 py-4 space-x-2 text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl hover:from-green-700 hover:to-emerald-700 hover:scale-105"
              >
                <Home className="w-5 h-5" />
                <span className="font-semibold">Back to Home</span>
              </button>
              
              <a 
                href="mailto:info@agrisiti.com" 
                className="inline-flex items-center justify-center px-8 py-4 space-x-2 text-green-600 transition-all duration-300 transform bg-white border-2 border-green-600 rounded-2xl hover:bg-green-50 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Contact Us</span>
              </a>
            </div>

            {/* Contact Information */}
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h4 className="mb-4 font-semibold text-gray-800">Need immediate assistance?</h4>
              <div className="flex flex-col items-center justify-center space-y-2 text-sm text-gray-600 sm:flex-row sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Live Chat Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>support@agrisiti.com</span>
                </div>
              </div>
            </div>

            {/* Footer Message */}
            <div className="flex items-center justify-center mt-8 space-x-3">
              <div className="flex items-center px-3 py-1 space-x-2 rounded-lg bg-green-50">
                <img 
                  src="https://agrisiti.com/wp-content/uploads/2022/05/Agrisiti-Logo-on-black-1-cropped.svg" 
                  alt="AgriSiti Academy" 
                  className="w-auto h-5"
                />
                <span className="text-xs font-medium text-green-700">Academy</span>
              </div>
              <span className="text-sm font-medium text-green-600">Growing the future of agriculture together</span>
              <div className="flex items-center px-3 py-1 space-x-2 rounded-lg bg-green-50">
                <img 
                  src="https://agrisiti.com/wp-content/uploads/2022/05/Agrisiti-Logo-on-black-1-cropped.svg" 
                  alt="AgriSiti Academy" 
                  className="w-auto h-5"
                />
                <span className="text-xs font-medium text-green-700">Academy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Show success page if registration is complete
  if (showSuccess) {
    return <SuccessPage />;
  }

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://backend.agrisiti.com/api/v1/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          experience_level: formData.experience,
          interests: formData.interests,
          motivation: formData.motivation
        })
      });

      if (response.ok) {
        setShowSuccess(true);
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.location && formData.experience;
      case 3:
        return formData.interests.length > 0;
      default:
        return false;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bg-green-200 rounded-full -top-40 -right-40 w-80 h-80 mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute rounded-full -bottom-40 -left-40 w-80 h-80 bg-emerald-200 mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-green-100 rounded-full opacity-50 top-1/2 left-1/2 w-60 h-60 mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative border-b-4 border-green-800 shadow-2xl bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative px-4 py-6 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center px-6 py-3 space-x-3 transition-all duration-300 shadow-lg bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30">
                <img 
                  src="https://agrisiti.com/wp-content/uploads/2022/05/Agrisiti-Logo-on-black-1-cropped.svg" 
                  alt="AgriSiti Academy" 
                  className="w-auto h-10 transition-transform filter brightness-0 invert hover:scale-105"
                />
                <div className="text-white">
                  <h1 className="text-2xl font-bold tracking-wide">Academy</h1>
                  <p className="text-xs font-medium text-green-100">Modern Agricultural Education</p>
                </div>
              </div>
            </div>
            
            {/* Enhanced Progress Steps */}
            <div className="items-center hidden space-x-4 md:flex">
              {[
                { step: 1, label: 'Personal Info' },
                { step: 2, label: 'Experience' },
                { step: 3, label: 'Interests' }
              ].map((item, index) => (
                <div key={item.step} className="flex items-center">
                  <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-500 shadow-lg ${
                    currentStep >= item.step 
                      ? 'bg-white text-green-600 shadow-white/30' 
                      : 'bg-white/20 text-white/70 shadow-black/20'
                  }`}>
                    {currentStep > item.step ? (
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    ) : (
                      <span className="font-bold">{item.step}</span>
                    )}
                    {currentStep === item.step && (
                      <div className="absolute inset-0 bg-white rounded-xl animate-pulse opacity-30"></div>
                    )}
                  </div>
                  <div className="hidden ml-2 lg:block">
                    <div className={`text-xs font-semibold transition-colors duration-300 ${
                      currentStep >= item.step ? 'text-white' : 'text-white/60'
                    }`}>
                      {item.label}
                    </div>
                  </div>
                  {index < 2 && (
                    <div className={`w-8 h-1 mx-3 rounded-full transition-all duration-500 ${
                      currentStep > item.step ? 'bg-white shadow-lg' : 'bg-white/30'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Progress Indicator */}
            <div className="md:hidden">
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl">
                <div className="text-sm font-semibold text-white">
                  Step {currentStep} of 3
                </div>
                <div className="w-16 h-1 mt-1 rounded-full bg-white/30">
                  <div 
                    className="h-full transition-all duration-500 bg-white rounded-full"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container relative px-4 py-12 mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-green-800 bg-green-100 rounded-full animate-bounce">
            <Sprout className="w-4 h-4 mr-2" />
            Join 15,000+ Future Farmers
          </div>
          
          <h1 className="mb-6 text-6xl font-bold leading-tight text-gray-800 md:text-7xl">
            Cultivate Your
            <span className="block text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text">
              Agricultural Future
            </span>
          </h1>
          
          <p className="max-w-4xl mx-auto mb-12 text-xl leading-relaxed text-gray-600 md:text-2xl">
            Master cutting-edge farming techniques, sustainable practices, and innovative technologies. 
            Transform your passion into expertise with our world-class agricultural education.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6 mb-16 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  animateStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-green-600" />
                <div className="mb-1 text-3xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 border shadow-2xl bg-white/90 backdrop-blur-xl rounded-3xl md:p-12 border-white/20">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h2 className="mb-4 text-4xl font-bold text-gray-800">Begin Your Journey</h2>
              <p className="text-lg text-gray-600">Step {currentStep} of 3 - Let's get to know you better</p>
            </div>

            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-8 animate-fade-in">
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-semibold text-gray-800">Personal Information</h3>
                  <p className="text-gray-600">Tell us about yourself</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="group">
                    <label className="block mb-3 text-sm font-semibold text-gray-700">
                      <User className="inline w-4 h-4 mr-2 text-green-600" />
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 text-lg transition-all duration-300 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-500 group-hover:border-green-300"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div className="group">
                    <label className="block mb-3 text-sm font-semibold text-gray-700">
                      <User className="inline w-4 h-4 mr-2 text-green-600" />
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 text-lg transition-all duration-300 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-500 group-hover:border-green-300"
                      placeholder="Enter your last name"
                    />
                  </div>

                  <div className="group">
                    <label className="block mb-3 text-sm font-semibold text-gray-700">
                      <Mail className="inline w-4 h-4 mr-2 text-green-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 text-lg transition-all duration-300 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-500 group-hover:border-green-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="group">
                    <label className="block mb-3 text-sm font-semibold text-gray-700">
                      <Phone className="inline w-4 h-4 mr-2 text-green-600" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 text-lg transition-all duration-300 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-500 group-hover:border-green-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Location & Experience */}
            {currentStep === 2 && (
              <div className="space-y-8 animate-fade-in">
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-semibold text-gray-800">Location & Experience</h3>
                  <p className="text-gray-600">Where are you located and what's your farming background?</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="group">
                    <label className="block mb-3 text-sm font-semibold text-gray-700">
                      <MapPin className="inline w-4 h-4 mr-2 text-green-600" />
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 text-lg transition-all duration-300 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-500 group-hover:border-green-300"
                      placeholder="City, State/Country"
                    />
                  </div>

                  <div className="group">
                    <label className="block mb-3 text-sm font-semibold text-gray-700">
                      <GraduationCap className="inline w-4 h-4 mr-2 text-green-600" />
                      Experience Level
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 text-lg transition-all duration-300 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-500 group-hover:border-green-300"
                    >
                      <option value="">Select your experience</option>
                      <option value="beginner">🌱 Beginner - New to farming</option>
                      <option value="intermediate">🌿 Intermediate - Some farming experience</option>
                      <option value="advanced">🌳 Advanced - Experienced farmer</option>
                      <option value="professional">🏆 Professional - Agricultural professional</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Interests & Motivation */}
            {currentStep === 3 && (
              <div className="space-y-8 animate-fade-in">
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-semibold text-gray-800">Your Interests</h3>
                  <p className="text-gray-600">What areas of agriculture excite you most?</p>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
                  {farmingInterests.map((interest) => (
                    <label 
                      key={interest.name} 
                      className={`cursor-pointer group relative overflow-hidden rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                        formData.interests.includes(interest.name)
                          ? 'border-green-500 bg-green-50 shadow-lg' 
                          : 'border-gray-200 bg-white hover:border-green-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest.name)}
                        onChange={() => handleInterestChange(interest.name)}
                        className="absolute w-5 h-5 text-green-600 border-gray-300 rounded top-4 right-4 focus:ring-green-500"
                      />
                      <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${interest.color} transition-all duration-300 group-hover:scale-110`}>
                        <interest.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-sm font-semibold leading-tight text-gray-800">{interest.name}</h4>
                    </label>
                  ))}
                </div>

                <div className="group">
                  <label className="block mb-3 text-sm font-semibold text-gray-700">
                    <Leaf className="inline w-4 h-4 mr-2 text-green-600" />
                    Why do you want to learn modern farming? (Optional)
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-6 py-4 text-lg transition-all duration-300 border border-gray-200 resize-none rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-500 group-hover:border-green-300"
                    placeholder="Share your farming goals, dreams, and what motivates you to pursue agricultural education..."
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 mt-12 border-t border-gray-100">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center space-x-2 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  currentStep === 1 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
                <span>Previous</span>
              </button>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className={`flex items-center space-x-2 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isStepValid()
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading || !isStepValid()}
                  className={`flex items-center space-x-2 px-12 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isStepValid() && !isLoading
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-b-2 border-white rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Start Your Journey</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative py-16 mt-20 text-white bg-gradient-to-r from-gray-900 via-green-900 to-emerald-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6 space-x-4">
              <div className="flex items-center px-6 py-3 space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl">
                <img 
                  src="https://agrisiti.com/wp-content/uploads/2022/05/Agrisiti-Logo-on-black-1-cropped.svg" 
                  alt="AgriSiti Academy" 
                  className="w-auto h-8 filter brightness-0 invert"
                />
                <span className="text-2xl font-bold">Academy</span>
              </div>
            </div>
            <p className="mb-8 text-lg text-gray-300">Cultivating the future of sustainable agriculture</p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <span>© 2025 Academy</span>
              <span>•</span>
              <span>Transforming Agriculture</span>
              <span>•</span>
              <span>Growing Tomorrow</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}