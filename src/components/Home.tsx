import React from 'react';
import { Upload, Brain, Stethoscope, TrendingUp, Users, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const { t } = useLanguage();
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      setCurrentPage('upload');
    } else {
      setCurrentPage('signup');
    }
  };

  return (
    <div className="min-h-screen bg-agri-gradient bg-field-texture transition-all duration-500">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 hover:py-16 transition-all duration-500">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 font-display hover:text-agri-700 transition-all duration-500 transform hover:scale-105">
            {t('home.title')}
          </h1>
          <p className="text-2xl md:text-3xl text-soil-700 mb-12 max-w-4xl mx-auto font-medium hover:text-soil-800 transition-all duration-300">
            {t('home.subtitle')}
          </p>
          <button
            onClick={handleGetStarted}
            className="inline-flex items-center px-10 py-5 border-2 border-transparent text-xl font-bold rounded-2xl text-white bg-gradient-to-r from-agri-600 to-agri-700 hover:from-agri-700 hover:to-agri-800 focus:outline-none focus:ring-4 focus:ring-agri-300 shadow-leaf hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            <Upload className="w-6 h-6 mr-3" />
            {t('home.cta')}
          </button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white/95 backdrop-blur-sm py-20 hover:bg-white transition-all duration-500 border-y-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display hover:text-agri-700 transition-all duration-300 transform hover:scale-105">
              {t('home.stat.title')}
            </h2>
            <div className="bg-gradient-to-r from-agri-600 via-crop-500 to-agri-700 text-white rounded-3xl p-10 max-w-3xl mx-auto shadow-leaf hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border-2 border-agri-200">
              <div className="text-7xl md:text-8xl font-bold mb-6 hover:scale-110 transition-transform duration-300">20-40%</div>
              <p className="text-2xl font-medium">
                {t('home.stat.description')}
              </p>
              <p className="text-base mt-6 opacity-90 font-medium">
                {t('home.stat.source')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 hover:py-16 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-display hover:text-agri-700 transition-all duration-300 transform hover:scale-105">
              {t('home.howit.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-100 hover:border-agri-200 hover:bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 bg-agri-100 rounded-3xl flex items-center justify-center mx-auto mb-8 hover:bg-agri-200 hover:scale-110 transition-all duration-300">
                <Upload className="w-10 h-10 text-agri-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display hover:text-agri-700 transition-colors duration-300">
                {t('home.howit.step1.title')}
              </h3>
              <p className="text-lg text-soil-700 font-medium hover:text-soil-800 transition-colors duration-300">
                {t('home.howit.step1.desc')}
              </p>
            </div>

            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-100 hover:border-crop-200 hover:bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 bg-crop-100 rounded-3xl flex items-center justify-center mx-auto mb-8 hover:bg-crop-200 hover:scale-110 transition-all duration-300">
                <Brain className="w-10 h-10 text-crop-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display hover:text-crop-700 transition-colors duration-300">
                {t('home.howit.step2.title')}
              </h3>
              <p className="text-lg text-soil-700 font-medium hover:text-soil-800 transition-colors duration-300">
                {t('home.howit.step2.desc')}
              </p>
            </div>

            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-100 hover:border-agri-200 hover:bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 bg-agri-100 rounded-3xl flex items-center justify-center mx-auto mb-8 hover:bg-agri-200 hover:scale-110 transition-all duration-300">
                <Stethoscope className="w-10 h-10 text-agri-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display hover:text-agri-700 transition-colors duration-300">
                {t('home.howit.step3.title')}
              </h3>
              <p className="text-lg text-soil-700 font-medium hover:text-soil-800 transition-colors duration-300">
                {t('home.howit.step3.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50/80 backdrop-blur-sm py-20 hover:bg-gray-100/80 transition-all duration-500 border-y-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-sm hover:shadow-xl border-2 border-gray-100 hover:border-agri-200 transform hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-agri-100 rounded-2xl flex items-center justify-center mb-8 hover:bg-agri-200 hover:scale-110 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-agri-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display hover:text-agri-700 transition-colors duration-300">
                Accurate Detection
              </h3>
              <p className="text-lg text-soil-700 font-medium hover:text-soil-800 transition-colors duration-300">
                AI models with 90%+ accuracy in detecting plant diseases and nutrient deficiencies
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-sm hover:shadow-xl border-2 border-gray-100 hover:border-crop-200 transform hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-crop-100 rounded-2xl flex items-center justify-center mb-8 hover:bg-crop-200 hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-crop-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display hover:text-crop-700 transition-colors duration-300">
                Farmer-Friendly
              </h3>
              <p className="text-lg text-soil-700 font-medium hover:text-soil-800 transition-colors duration-300">
                Simple interface designed for farmers with multilingual support
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-sm hover:shadow-xl border-2 border-gray-100 hover:border-agri-200 transform hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-agri-100 rounded-2xl flex items-center justify-center mb-8 hover:bg-agri-200 hover:scale-110 transition-all duration-300">
                <Shield className="w-8 h-8 text-agri-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display hover:text-agri-700 transition-colors duration-300">
                Real-time Results
              </h3>
              <p className="text-lg text-soil-700 font-medium hover:text-soil-800 transition-colors duration-300">
                Get instant diagnosis and treatment recommendations on your device
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}