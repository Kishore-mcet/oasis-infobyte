import { ArrowRight, CheckCircle2, Zap, Shield, TrendingUp, Star, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Quantum
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors">Testimonials</a>
              <button className="px-5 py-2 text-slate-700 hover:text-slate-900 transition-colors">
                Sign In
              </button>
              <button className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 bg-white">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
                <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
                <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors">Testimonials</a>
                <button className="px-5 py-2 text-slate-700 hover:text-slate-900 transition-colors text-left">
                  Sign In
                </button>
                <button className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <Star className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Trusted by 50,000+ companies worldwide</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Quantum
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              The all-in-one platform that accelerates growth, streamlines operations, and delivers exceptional results for modern teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium hover:shadow-xl hover:shadow-emerald-500/30 transition-all flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 rounded-lg font-medium border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all">
                Watch Demo
              </button>
            </div>

            {/* Hero Image/Dashboard Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent h-32 bottom-0 z-10"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-16">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <div className="h-24 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded mb-4"></div>
                      <div className="h-3 bg-white/20 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-white/20 rounded w-1/2"></div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <div className="h-24 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded mb-4"></div>
                      <div className="h-3 bg-white/20 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-white/20 rounded w-1/2"></div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <div className="h-24 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded mb-4"></div>
                      <div className="h-3 bg-white/20 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-white/20 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Powerful features designed to help your team work smarter, faster, and more efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-xl hover:border-emerald-200 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Experience unmatched performance with our optimized infrastructure. Pages load instantly, actions complete in milliseconds.
              </p>
              <a href="#" className="text-emerald-600 font-medium inline-flex items-center space-x-1 group-hover:space-x-2 transition-all">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-xl hover:border-emerald-200 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Enterprise Security</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Bank-level encryption, SOC 2 compliance, and advanced security protocols keep your data safe and secure at all times.
              </p>
              <a href="#" className="text-emerald-600 font-medium inline-flex items-center space-x-1 group-hover:space-x-2 transition-all">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-xl hover:border-emerald-200 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Scale Effortlessly</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                From startup to enterprise, our platform grows with you. Handle millions of requests without breaking a sweat.
              </p>
              <a href="#" className="text-emerald-600 font-medium inline-flex items-center space-x-1 group-hover:space-x-2 transition-all">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-slate-300">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-slate-300">Uptime SLA</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                150+
              </div>
              <div className="text-slate-300">Countries</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-slate-300">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the perfect plan for your team. All plans include our core features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="p-8 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-slate-900">$29</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">Up to 10 team members</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">5GB storage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">Email support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">Basic analytics</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 hover:shadow-lg transition-all">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white relative transform md:scale-105 shadow-xl">
              <div className="absolute top-0 right-6 -translate-y-1/2">
                <span className="bg-yellow-400 text-slate-900 text-sm font-bold px-4 py-1 rounded-full">
                  POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">$79</span>
                <span className="text-emerald-100">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span>Unlimited team members</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span>50GB storage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span>API access</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-white text-emerald-600 rounded-lg font-medium hover:shadow-xl transition-all">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="p-8 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-slate-900">$199</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">Unlimited everything</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">500GB storage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">24/7 phone support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">Custom integrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">Dedicated manager</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 hover:shadow-lg transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See what our customers have to say about their experience with Quantum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                "Quantum has transformed how our team collaborates. The speed and reliability are unmatched. We've seen a 40% increase in productivity since switching."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-slate-900">Sarah Chen</div>
                  <div className="text-sm text-slate-600">CEO, TechCorp</div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                "The best investment we've made this year. Customer support is exceptional and the platform just works. Highly recommend to any growing business."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-slate-900">Michael Rodriguez</div>
                  <div className="text-sm text-slate-600">CTO, InnovateLabs</div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                "Simple, powerful, and elegant. Quantum makes complex tasks feel effortless. Our entire company now runs on this platform and we couldn't be happier."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-slate-900">Emily Johnson</div>
                  <div className="text-sm text-slate-600">Founder, StartupHub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to transform your workflow?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Join thousands of teams who have already made the switch. Start your free trial today, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium hover:shadow-xl hover:shadow-emerald-500/30 transition-all flex items-center justify-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium border-2 border-white/20 hover:bg-white/20 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white">Quantum</span>
              </div>
              <p className="text-sm leading-relaxed">
                Empowering teams to achieve more through innovative technology and exceptional design.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 Quantum. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
