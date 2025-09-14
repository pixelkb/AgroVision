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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            {t('home.subtitle')}
          </p>
          <button
            onClick={handleGetStarted}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <Upload className="w-5 h-5 mr-2" />
            {t('home.cta')}
          </button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('home.stat.title')}
            </h2>
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="text-6xl font-bold mb-4">20-40%</div>
              <p className="text-xl">
                {t('home.stat.description')}
              </p>
              <p className="text-sm mt-4 opacity-90">
                {t('home.stat.source')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.howit.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('home.howit.step1.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.howit.step1.desc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('home.howit.step2.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.howit.step2.desc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('home.howit.step3.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.howit.step3.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Accurate Detection
              </h3>
              <p className="text-gray-600">
                AI models with 90%+ accuracy in detecting plant diseases and nutrient deficiencies
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Farmer-Friendly
              </h3>
              <p className="text-gray-600">
                Simple interface designed for farmers with multilingual support
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Real-time Results
              </h3>
              <p className="text-gray-600">
                Get instant diagnosis and treatment recommendations on your device
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}