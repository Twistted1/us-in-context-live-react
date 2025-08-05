import React, { useState, useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController,
} from 'chart.js';

// Register all the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController
);

// Reusable component for fade-in-on-scroll animations
const AnimatedSection = ({ children, className = '' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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

// The main interactive report component
export default function InteractiveReport({ navigateTo }) {
  const [activeTab, setActiveTab] = useState('shrinkflation');

  const handleBackClick = (e) => {
    e.preventDefault();
    navigateTo('home');
  };

  const chartData = {
    labels: ['2021 Q2', '2022 Q2', '2023 Q2', '2024 Q2 (est.)'],
    datasets: [
      {
        type: 'bar',
        label: 'Profit Contribution to Price Growth',
        data: [94.5, 43.4, 32.3, 33.5],
        backgroundColor: '#005A9C',
        borderColor: '#004C80',
        borderWidth: 1,
      },
      {
        type: 'line',
        label: 'Historical Average (1979-2019)',
        data: [11.5, 11.5, 11.5, 11.5],
        borderColor: '#D32F2F',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointRadius: 0,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Contribution to Price Growth (%)',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + '%';
            }
            return label;
          },
        },
      },
      legend: {
        position: 'bottom',
      },
    },
  };

  const tabContent = {
    shrinkflation: {
      title: 'Paying the Same for Less',
      description: "Shrinkflation is reducing a product's size while keeping its price the same. This increases the unit price without changing the sticker price.",
      examples: [
        { name: 'Doritos', detail: 'Bags were cut from 9.75 ounces to 9.25 ounces.' },
        { name: 'Gatorade', detail: 'A 32oz bottle was replaced by a 28oz version for the same price.' },
        { name: 'Charmin Toilet Paper', detail: "A mega pack's sheet count dropped from 264 to 244 sheets per roll." },
        { name: 'Cocoa Puffs', detail: '"Family size" boxes shrank from 19.3 ounces to 18.1 ounces.' },
      ]
    },
    skimpflation: {
      title: 'Paying the Same for Less *Quality*',
      description: "Skimpflation is reducing the quality of a product or service while maintaining the price, often by using cheaper ingredients.",
       examples: [
        { name: 'Food Ingredients', detail: 'Some granola bars replaced real chocolate with cheaper palm oil coatings.' },
        { name: 'Olive Oil Spread', detail: 'A UK brand reduced its olive oil content from 21% to just 10%.' },
        { name: 'Hotel Services', detail: 'Many hotels have reduced or eliminated daily housekeeping services.' },
        { name: 'Customer Support', detail: 'Companies cut call center staff, leading to longer wait times.' },
      ]
    },
    greedflation: {
      title: 'The Motive Behind the Methods',
      description: "Greedflation is the term for corporations raising prices more than their costs have risen, using economic turmoil as a cover to expand profit margins.",
      quote: {
        text: `"We want to make sure that we're not leaving any pricing on the table."`,
        source: '- Quote from a major consumer goods executive on an earnings call.'
      }
    }
  };

  return (
    <div className="bg-[#F8F7F4] font-['Inter',_sans-serif] text-[#1a1a1a] antialiased">
       <header id="navbar" className="bg-white/95 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" onClick={handleBackClick} className="flex items-center space-x-3">
                <svg className="w-10 h-10" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 13.5C23.9853 13.5 26 11.4853 26 9C26 6.51472 23.9853 4.5 21.5 4.5C19.0147 4.5 17 6.51472 17 9C17 11.4853 19.0147 13.5 21.5 13.5Z" fill="#A9B4C2"/>
                    <path d="M26.6667 35.5C29.4286 35.5 31.6667 30.3741 31.6667 24C31.6667 17.6259 29.4286 12.5 26.6667 12.5C23.9048 12.5 21.6667 17.6259 21.6667 24C21.6667 30.3741 23.9048 35.5 26.6667 35.5Z" fill="#2E3A48"/>
                    <path d="M16.3333 35.5C19.0952 35.5 21.3333 30.3741 21.3333 24C21.3333 17.6259 19.0952 12.5 16.3333 12.5C13.5714 12.5 11.3333 17.6259 11.3333 24C11.3333 30.3741 13.5714 35.5 16.3333 35.5Z" fill="#A9B4C2" fillOpacity="0.8"/>
                </svg>
                <div className="flex flex-col justify-center">
                    <div className="text-xl font-bold text-gray-900 tracking-wide leading-tight">Us In Context</div>
                    <div className="text-[10px] text-gray-500 tracking-widest leading-tight">CONNECTING PERSPECTIVES</div>
                </div>
            </a>
            <a href="#" onClick={handleBackClick} className="text-gray-500 hover:text-black font-semibold">
                &larr; Back to Home
            </a>
        </nav>
    </header>
      <main>
        <section id="intro" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">Your Shopping Cart is Shrinking.</h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">It's not your imagination. This report unpacks the corporate strategies of shrinkflation, skimpflation, and greedflation—the hidden price hikes that impact your wallet every day.</p>
          </div>
        </section>

        <AnimatedSection>
          <section id="definitions" className="py-20 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Decoding the 'Flations'</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">To understand what's happening, you first need to know the playbook.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-center mb-8 bg-gray-200/50 rounded-lg p-1.5 shadow-inner">
                  <button onClick={() => setActiveTab('shrinkflation')} className={`flex-1 py-3 px-4 rounded-md text-lg font-semibold transition-colors duration-300 ${activeTab === 'shrinkflation' ? 'bg-blue-600 text-white shadow' : 'text-gray-700 hover:bg-gray-300/50'}`}>Shrinkflation</button>
                  <button onClick={() => setActiveTab('skimpflation')} className={`flex-1 py-3 px-4 rounded-md text-lg font-semibold transition-colors duration-300 ${activeTab === 'skimpflation' ? 'bg-blue-600 text-white shadow' : 'text-gray-700 hover:bg-gray-300/50'}`}>Skimpflation</button>
                  <button onClick={() => setActiveTab('greedflation')} className={`flex-1 py-3 px-4 rounded-md text-lg font-semibold transition-colors duration-300 ${activeTab === 'greedflation' ? 'bg-blue-600 text-white shadow' : 'text-gray-700 hover:bg-gray-300/50'}`}>Greedflation</button>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg min-h-[350px]">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{tabContent[activeTab].title}</h3>
                    <p className="text-gray-700 mb-6">{tabContent[activeTab].description}</p>
                    {tabContent[activeTab].examples && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        {tabContent[activeTab].examples.map((ex, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <p className="font-semibold text-gray-800">{ex.name}</p>
                            <p className="text-gray-600">{ex.detail}</p>
                            </div>
                        ))}
                        </div>
                    )}
                    {tabContent[activeTab].quote && (
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                            <p className="text-blue-800 italic">"{tabContent[activeTab].quote.text}"</p>
                            <p className="text-sm text-blue-600 mt-2 text-right">{tabContent[activeTab].quote.source}</p>
                        </div>
                    )}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
        
        <AnimatedSection>
            <section id="debate" className="py-20 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Great Debate: Costs vs. Profits</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">Are these hidden hikes a necessary response to rising costs, or are corporations using inflation as a cover to expand profits?</p>
                    </div>
                    <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
                        <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-800 mb-2">Corporate Profits' Contribution to Price Growth</h3>
                        <p className="text-center text-gray-600 mb-6">This chart shows the share of price increases accounted for by rising corporate profits, compared to the historical average.</p>
                        <div className="relative h-[300px] md:h-[400px] max-w-4xl mx-auto">
                            <Bar data={chartData} options={chartOptions} />
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedSection>

      </main>
    </div>
  );
}
