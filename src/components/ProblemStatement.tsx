import React from 'react';
import { AlertTriangle, TrendingDown, Users, Microscope, Brain, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProblemStatementProps {
  setCurrentPage: (page: string) => void;
}

export default function ProblemStatement({ setCurrentPage }: ProblemStatementProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 hover:py-12 transition-all duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 font-display hover:text-blue-700 transition-all duration-300 transform hover:scale-105">
            {t('problem.title')}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-medium hover:text-gray-800 transition-colors duration-300">
            {t('problem.subtitle')}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl p-10 mb-10 border-2 border-gray-100 hover:border-red-200 transform hover:scale-105 transition-all duration-500">
          <div className="flex items-start mb-6">
            <AlertTriangle className="w-10 h-10 text-red-500 mt-1 mr-6 hover:scale-110 transition-transform duration-300" />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display hover:text-red-700 transition-colors duration-300">The Global Challenge</h2>
              <p className="text-xl text-gray-700 leading-relaxed font-medium hover:text-gray-800 transition-colors duration-300">
                {t('problem.intro')}
              </p>
            </div>
          </div>
        </div>

        {/* Problem Sections */}
        <div className="space-y-8">
          {/* Scale of Problem */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl shadow-lg hover:shadow-2xl p-10 border-2 border-red-100 hover:border-red-200 transform hover:scale-105 transition-all duration-500">
            <div className="flex items-start mb-6">
              <TrendingDown className="w-10 h-10 text-red-600 mt-1 mr-6 hover:scale-110 transition-transform duration-300" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display hover:text-red-700 transition-colors duration-300">
                  {t('problem.section1.title')}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed font-medium hover:text-gray-800 transition-colors duration-300">
                  {t('problem.section1.content')}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg border-2 border-gray-100 hover:border-red-200 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-red-600 mb-4 hover:scale-110 transition-transform duration-300">35%+</div>
                <p className="text-lg text-gray-700 font-medium hover:text-gray-800 transition-colors duration-300">Crop yield destroyed in India annually</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg border-2 border-gray-100 hover:border-orange-200 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-orange-600 mb-4 hover:scale-110 transition-transform duration-300">Manual</div>
                <p className="text-lg text-gray-700 font-medium hover:text-gray-800 transition-colors duration-300">Subjective and error-prone inspections</p>
              </div>
            </div>
          </div>

          {/* Nutrient Deficiency */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl shadow-lg hover:shadow-2xl p-10 border-2 border-yellow-100 hover:border-yellow-200 transform hover:scale-105 transition-all duration-500">
            <div className="flex items-start mb-6">
              <Microscope className="w-10 h-10 text-yellow-600 mt-1 mr-6 hover:scale-110 transition-transform duration-300" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display hover:text-yellow-700 transition-colors duration-300">
                  {t('problem.section2.title')}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed font-medium hover:text-gray-800 transition-colors duration-300">
                  {t('problem.section2.content')}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
              {['N', 'P', 'K', 'Ca', 'Fe'].map((nutrient) => (
                <div key={nutrient} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm hover:shadow-lg border-2 border-gray-100 hover:border-yellow-200 transform hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold text-yellow-600 mb-2 hover:scale-110 transition-transform duration-300">{nutrient}</div>
                  <p className="text-base text-gray-700 font-medium">Critical</p>
                </div>
              ))}
            </div>
          </div>

          {/* Traditional Methods */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl shadow-lg hover:shadow-2xl p-10 border-2 border-gray-100 hover:border-blue-200 transform hover:scale-105 transition-all duration-500">
            <div className="flex items-start mb-6">
              <Users className="w-10 h-10 text-gray-600 mt-1 mr-6 hover:scale-110 transition-transform duration-300" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display hover:text-blue-700 transition-colors duration-300">
                  {t('problem.section3.title')}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed font-medium hover:text-gray-800 transition-colors duration-300">
                  {t('problem.section3.content')}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg text-center border-2 border-gray-100 hover:border-blue-200 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-gray-600 mb-4 hover:scale-110 transition-transform duration-300">💰</div>
                <p className="text-lg text-gray-700 font-medium hover:text-gray-800 transition-colors duration-300">Expensive laboratory tests</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg text-center border-2 border-gray-100 hover:border-blue-200 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-gray-600 mb-4 hover:scale-110 transition-transform duration-300">⏱️</div>
                <p className="text-lg text-gray-700 font-medium hover:text-gray-800 transition-colors duration-300">Time-consuming processes</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg text-center border-2 border-gray-100 hover:border-blue-200 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-gray-600 mb-4 hover:scale-110 transition-transform duration-300">🚫</div>
                <p className="text-lg text-gray-700 font-medium hover:text-gray-800 transition-colors duration-300">Impractical for small farmers</p>
              </div>
            </div>
          </div>

          {/* AI Solution */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl shadow-lg hover:shadow-2xl p-10 border-2 border-green-100 hover:border-green-200 transform hover:scale-105 transition-all duration-500">
            <div className="flex items-start mb-6">
              <Brain className="w-10 h-10 text-green-600 mt-1 mr-6 hover:scale-110 transition-transform duration-300" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display hover:text-green-700 transition-colors duration-300">
                  {t('problem.section4.title')}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed font-medium hover:text-gray-800 transition-colors duration-300">
                  {t('problem.section4.content')}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg border-2 border-gray-100 hover:border-green-200 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-green-600 mb-4 hover:scale-110 transition-transform duration-300">90%+</div>
                <p className="text-lg text-gray-700 font-medium hover:text-gray-800 transition-colors duration-300">AI model accuracy in disease detection</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg border-2 border-gray-100 hover:border-blue-200 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-4 hover:scale-110 transition-transform duration-300">CNN</div>
                <p className="text-lg text-gray-700 font-medium hover:text-gray-800 transition-colors duration-300">Advanced deep learning models</p>
              </div>
            </div>
          </div>

          {/* Our Solution */}
          <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-3xl shadow-lg hover:shadow-2xl p-10 border-2 border-purple-100 hover:border-purple-200 transform hover:scale-105 transition-all duration-500">
            <div className="flex items-start mb-6">
              <Smartphone className="w-10 h-10 text-purple-600 mt-1 mr-6 hover:scale-110 transition-transform duration-300" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display hover:text-purple-700 transition-colors duration-300">Our Proposed Solution</h2>
                <p className="text-xl text-gray-700 leading-relaxed font-medium hover:text-gray-800 transition-colors duration-300">
                  {t('problem.conclusion')}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg text-center border-2 border-gray-100 hover:border-green-200 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-green-200 hover:scale-110 transition-all duration-300">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-display hover:text-green-700 transition-colors duration-300">GenAI-Based</h3>
                <p className="text-base text-gray-700 font-medium hover:text-gray-800 transition-colors duration-300">Advanced AI models for accurate detection</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg text-center border-2 border-gray-100 hover:border-blue-200 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-blue-200 hover:scale-110 transition-all duration-300">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-display hover:text-blue-700 transition-colors duration-300">Mobile-First</h3>
                <p className="text-base text-gray-700 font-medium hover:text-gray-800 transition-colors duration-300">Lightweight web and mobile application</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg text-center border-2 border-gray-100 hover:border-purple-200 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-purple-200 hover:scale-110 transition-all duration-300">
                  <AlertTriangle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-display hover:text-purple-700 transition-colors duration-300">Real-Time</h3>
                <p className="text-base text-gray-700 font-medium hover:text-gray-800 transition-colors duration-300">Instant diagnosis from leaf images</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentPage('home')}
            className="inline-flex items-center px-10 py-5 border-2 border-transparent text-xl font-bold rounded-2xl text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            Experience the Solution
          </button>
        </div>
      </div>
    </div>
  );
}