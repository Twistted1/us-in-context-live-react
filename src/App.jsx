import React, { useEffect } from 'react';

const AnimatedSection = ({ children, className = '' }) => {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-700 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-5'
      }`}
    >
      {children}
    </div>
  );
};

export default function UsInContextPage() {
    useEffect(() => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const handleMenuToggle = () => mobileMenu.classList.toggle('hidden');

        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', handleMenuToggle);
        }

        return () => {
            if (mobileMenuButton) {
                mobileMenuButton.removeEventListener('click', handleMenuToggle);
            }
        };
    }, []);

    return (
        <div className="bg-white font-sans text-[#111827] antialiased">
            <header id="navbar" className="bg-white/95 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" className="flex items-center space-x-3">
                        <img src="/logo.jpg" alt="Novus Exchange Logo" className="w-20 h-20 object-contain" />
                        <div className="flex flex-col justify-center">
                            <div className="text-xl font-bold text-gray-900 tracking-wide leading-tight">Novus Exchange</div>
                            <div className="text-[10px] text-gray-500 tracking-widest leading-tight">CONNECTING PERSPECTIVES</div>
                        </div>
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="nav-link text-gray-500 hover:text-black">About</a>
                        <a href="#latest" className="nav-link text-gray-500 hover:text-black">Latest Articles</a>
                        <a href="#premium" className="nav-link text-gray-500 hover:text-black font-medium">Premium</a>
                        <a href="#contact" className="nav-link text-gray-500 hover:text-black">Contact</a>
                    </div>
                    <button id="mobile-menu-button" className="md:hidden text-gray-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </nav>
                <div id="mobile-menu" className="hidden md:hidden border-t border-gray-200">
                    <a href="#about" className="block py-3 px-6 text-sm hover:bg-gray-50">About</a>
                    <a href="#latest" className="block py-3 px-6 text-sm hover:bg-gray-50">Latest Articles</a>
                    <a href="#premium" className="block py-3 px-6 text-sm hover:bg-gray-50 font-medium">Premium</a>
                    <a href="#contact" className="block py-3 px-6 text-sm hover:bg-gray-50">Contact</a>
                </div>
            </header>

            <main>
                <section id="home" className="relative py-24 md:py-40 text-white">
    <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: 'url(/hero-bg-clean.png)',
        }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
    <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto font-serif">Insightful Analysis for the Engaged Citizen.</h1>
        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">We move beyond the headlines to explore the underlying systems shaping our society with clarity and realism.</p>
        <div className="mt-8 space-x-4">
            <a href="#latest" className="inline-block bg-orange-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-orange-700 transition-colors">READ MORE</a>
            <a href="#premium" className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition-colors">Go Premium</a>
        </div>
    </div>
</section>

                <AnimatedSection>
                    <section id="latest" className="py-20 md:py-28 bg-white">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif">Latest Analysis</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <a href="#" className="article-card block bg-white rounded-lg overflow-hidden border border-gray-200">
                                    <div className="overflow-hidden"><img src="https://images.unsplash.com/photo-1503252947299-4193b6d69526?q=80&w=1920&auto=format&fit=crop" alt="Industrial smokestacks" className="w-full h-48 object-cover" /></div>
                                    <div className="p-6">
                                        <p className="text-sm font-semibold text-blue-600 mb-2">ECONOMIC COMMENTARY</p>
                                        <h3 className="text-xl font-bold mb-3 font-serif">The Hidden Costs of Unchecked Corporate Power</h3>
                                        <p className="text-gray-600">An examination of how profit-driven strategies impact society beyond the balance sheet.</p>
                                    </div>
                                </a>
                                <a href="#" className="article-card block bg-white rounded-lg overflow-hidden border border-gray-200">
                                    <div className="overflow-hidden"><img src="https://images.unsplash.com/photo-1555848962-6e79363bfa19?q=80&w=1920&auto=format&fit=crop" alt="Government building" className="w-full h-48 object-cover" /></div>
                                    <div className="p-6">
                                        <p className="text-sm font-semibold text-purple-600 mb-2">POLITICAL INSIGHTS</p>
                                        <h3 className="text-xl font-bold mb-3 font-serif">The Erosion of Democratic Norms</h3>
                                        <p className="text-gray-600">Delving into the subtle and overt shifts threatening the foundations of governance.</p>
                                    </div>
                                </a>
                                <a href="#" className="article-card block bg-white rounded-lg overflow-hidden border border-gray-200">
                                    <div className="overflow-hidden"><img src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?q=80&w=1920&auto=format&fit=crop" alt="Wind turbines at sunset" className="w-full h-48 object-cover" /></div>
                                    <div className="p-6">
                                        <p className="text-sm font-semibold text-orange-600 mb-2">SOCIAL RESPONSIBILITY</p>
                                        <h3 className="text-xl font-bold mb-3 font-serif">Corporate Accountability in Climate Action</h3>
                                        <p className="text-gray-600">Who is truly responsible for protecting our planet, and who is prioritizing profit?</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                </AnimatedSection>
                
                <AnimatedSection>
                    <section id="premium" className="py-20 md:py-28 bg-gray-50">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Go Premium. Get Deeper Insights.</h2>
                            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Support independent analysis and unlock exclusive content, in-depth reports, and direct access to our research.</p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                <div className="tier-card border border-gray-200 rounded-lg p-8">
                                    <h3 className="text-xl font-bold mb-2 font-serif">Supporter</h3>
                                    <p className="text-4xl font-bold mb-4">£5<span className="text-lg font-medium text-gray-500">/month</span></p>
                                    <ul className="text-left space-y-3 text-gray-600 mb-8">
                                        <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Access to all articles</li>
                                        <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Supporter newsletter</li>
                                    </ul>
                                    <a href="#" className="w-full inline-block bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-md hover:bg-gray-300 transition-colors">Choose Supporter</a>
                                </div>
                                <div className="tier-card border-2 border-blue-600 rounded-lg p-8 relative">
                                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                                    <h3 className="text-xl font-bold mb-2 font-serif">Premium</h3>
                                    <p className="text-4xl font-bold mb-4">£10<span className="text-lg font-medium text-gray-500">/month</span></p>
                                    <ul className="text-left space-y-3 text-gray-600 mb-8">
                                        <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Everything in Supporter</li>
                                        <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Exclusive in-depth reports</li>
                                        <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Access to data sets</li>
                                    </ul>
                                    <a href="#" className="w-full inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">Choose Premium</a>
                                </div>
                                <div className="tier-card border border-gray-200 rounded-lg p-8">
                                    <h3 className="text-xl font-bold mb-2 font-serif">Partner</h3>
                                    <p className="text-4xl font-bold mb-4">£25<span className="text-lg font-medium text-gray-500">/month</span></p>
                                    <ul className="text-left space-y-3 text-gray-600 mb-8">
                                        <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Everything in Premium</li>
                                        <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Monthly Q&A sessions</li>
                                        <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Early access to content</li>
                                    </ul>
                                    <a href="#" className="w-full inline-block bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-md hover:bg-gray-300 transition-colors">Choose Partner</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </AnimatedSection>
                
                <AnimatedSection>
                    <section id="about" className="py-20 md:py-28 bg-white">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">About Novus Exchange</h2>
                            <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-4">
                                <p>People deserve more than just headlines. Novus Exchange was founded to provide the full story, challenging conventional narratives and exposing the complexities of pressing issues.</p>
                                <p>Our mission is to inform, provoke thought, and foster discussion by shining a light on the injustices and abuses of power impacting individuals and society.</p>
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection>
                    <section id="contact" className="py-20 md:py-28 bg-gray-50">
                        <div className="container mx-auto px-6">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="text-left">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Stay Informed.</h2>
                                    <p className="text-gray-600 mb-8 text-lg">Subscribe to our newsletter for the latest public insights, or reach out for partnerships and inquiries.</p>
                                    <div className="space-y-4 text-gray-700">
                                        <p className="flex items-center"><svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>contact@usincontext.com</p>
                                    </div>
                                </div>
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <form className="space-y-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                            <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your@email.com" />
                                        </div>
                                        <button type="submit" className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </AnimatedSection>
            </main>
        </div>
     );
}
