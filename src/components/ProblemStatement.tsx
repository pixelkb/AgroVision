import React from 'react';
import { AlertTriangle, TrendingDown, Users, Microscope, Brain, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProblemStatementProps {
  setCurrentPage: (page: string) => void;
}

export default function ProblemStatement({ setCurrentPage }: ProblemStatementProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-agri-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('problem.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('problem.subtitle')}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start mb-6">
            <AlertTriangle className="w-8 h-8 text-red-500 mt-1 mr-4" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Global Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('problem.intro')}
              </p>
            </div>
          </div>
        </div>

        {/* Problem Sections */}
        <div className="space-y-8">
          {/* Scale of Problem */}
          <div className="bg-gradient-to-r from-soil-50 to-orange-50 rounded-2xl shadow-lg p-8">
            <div className="flex items-start mb-6">
              <TrendingDown className="w-8 h-8 text-red-600 mt-1 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('problem.section1.title')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('problem.section1.content')}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-soil-600 mb-2">35%+</div>
                <p className="text-gray-700">Crop yield destroyed in India annually</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">Manual</div>
                <p className="text-gray-700">Subjective and error-prone inspections</p>
              </div>
            </div>
          </div>

          {/* Nutrient Deficiency */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-8">
            <div className="flex items-start mb-6">
              <Microscope className="w-8 h-8 text-yellow-600 mt-1 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('problem.section2.title')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('problem.section2.content')}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
              {['N', 'P', 'K', 'Ca', 'Fe'].map((nutrient) => (
                <div key={nutrient} className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-agri-700 mb-1">{nutrient}</div>
                  <p className="text-sm text-gray-700">Critical</p>
                </div>
              ))}
            </div>
          </div>

          {/* Traditional Methods */}
          <div className="bg-gradient-to-r from-gray-50 to-sky-50 rounded-2xl shadow-lg p-8">
            <div className="flex items-start mb-6">
              <Users className="w-8 h-8 text-gray-600 mt-1 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('problem.section3.title')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('problem.section3.content')}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-2xl font-bold text-gray-600 mb-2">💰</div>
                <p className="text-gray-700">Expensive laboratory tests</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-2xl font-bold text-gray-600 mb-2">⏱️</div>
                <p className="text-gray-700">Time-consuming processes</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-2xl font-bold text-gray-600 mb-2">🚫</div>
                <p className="text-gray-700">Impractical for small farmers</p>
              </div>
            </div>
          </div>

          {/* AI Solution */}
          <div className="bg-gradient-to-r from-agri-50 to-sky-50 rounded-2xl shadow-lg p-8">
            <div className="flex items-start mb-6">
              <Brain className="w-8 h-8 text-agri-700 mt-1 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('problem.section4.title')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('problem.section4.content')}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-agri-700 mb-2">90%+</div>
                <p className="text-gray-700">AI model accuracy in disease detection</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-sky-600 mb-2">CNN</div>
                <p className="text-gray-700">Advanced deep learning models</p>
              </div>
            </div>
          </div>

          {/* Our Solution */}
          <div className="bg-gradient-to-r from-purple-50 to-agri-50 rounded-2xl shadow-lg p-8">
            <div className="flex items-start mb-6">
              <Smartphone className="w-8 h-8 text-purple-600 mt-1 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Proposed Solution</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('problem.conclusion')}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-agri-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-agri-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">GenAI-Based</h3>
                <p className="text-sm text-gray-700">Advanced AI models for accurate detection</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Mobile-First</h3>
                <p className="text-sm text-gray-700">Lightweight web and mobile application</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Real-Time</h3>
                <p className="text-sm text-gray-700">Instant diagnosis from leaf images</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentPage('home')}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-agri-600 hover:bg-agri-700 focus:outline-none focus:ring-2 focus:ring-agri-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Experience the Solution
          </button>
        </div>
      </div>
    </div>
  );
}