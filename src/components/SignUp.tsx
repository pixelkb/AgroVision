import React, { useState } from 'react';
import { Eye, EyeOff, Loader2, Leaf } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

interface SignUpProps {
  setCurrentPage: (page: string) => void;
}

export default function SignUp({ setCurrentPage }: SignUpProps) {
  const { t, language, setLanguage } = useLanguage();
  const { signup, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    language: language
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return;
    }
    
    const success = await signup(
      formData.name,
      formData.email,
      formData.phone,
      formData.password,
      formData.language as 'en' | 'hi'
    );
    
    if (success) {
      setLanguage(formData.language as 'en' | 'hi');
      setCurrentPage('home');
    } else {
      setError('Failed to create account. Email may already exist.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-agri-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-agri-300/60">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-agri-500 to-agri-600 rounded-2xl flex items-center justify-center shadow-leaf hover:shadow-xl transform hover:scale-110 transition-all duration-300">
              <Leaf className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900 font-display tracking-tight">
            {t('auth.signup.title')}
          </h2>
          <p className="mt-2 text-sm text-soil-600 font-medium">
            {t('auth.signup.subtitle')}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium animate-pulse">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-soil-700 mb-2 font-display">
                {t('auth.name')}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="appearance-none relative block w-full px-4 py-3 border-2 border-gray-200 placeholder-soil-400 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-500 focus:border-agri-500 hover:border-agri-300 transition-all duration-300 font-medium bg-white/70 backdrop-blur-sm"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-soil-700 mb-2 font-display">
                {t('auth.email')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="appearance-none relative block w-full px-4 py-3 border-2 border-gray-200 placeholder-soil-400 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-500 focus:border-agri-500 hover:border-agri-300 transition-all duration-300 font-medium bg-white/70 backdrop-blur-sm"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-soil-700 mb-2 font-display">
                {t('auth.phone')}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="appearance-none relative block w-full px-4 py-3 border-2 border-gray-200 placeholder-soil-400 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-500 focus:border-agri-500 hover:border-agri-300 transition-all duration-300 font-medium bg-white/70 backdrop-blur-sm"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-soil-700 mb-2 font-display">
                {t('auth.password')}
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="appearance-none relative block w-full px-4 py-3 pr-12 border-2 border-gray-200 placeholder-soil-400 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-500 focus:border-agri-500 hover:border-agri-300 transition-all duration-300 font-medium bg-white/70 backdrop-blur-sm"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center hover:text-agri-600 transition-colors duration-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-soil-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-soil-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="language" className="block text-sm font-semibold text-soil-700 mb-2 font-display">
                {t('auth.language')}
              </label>
              <select
                id="language"
                name="language"
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                className="appearance-none relative block w-full px-4 py-3 border-2 border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-500 focus:border-agri-500 hover:border-agri-300 transition-all duration-300 font-medium bg-white/70 backdrop-blur-sm cursor-pointer"
              >
                <option value="en">{t('auth.english')}</option>
                <option value="hi">{t('auth.hindi')}</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-4 px-6 border-2 border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r from-agri-600 to-agri-700 hover:from-agri-700 hover:to-agri-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-agri-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-leaf font-display"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                t('auth.signup.button')
              )}
            </button>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setCurrentPage('login')}
              className="text-sm font-semibold text-agri-600 hover:text-agri-700 transition-all duration-200 hover:underline decoration-2 underline-offset-4 font-display"
            >
              {t('auth.login.link')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}