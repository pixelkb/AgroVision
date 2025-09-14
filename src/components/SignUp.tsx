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
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    password: string;
    language: 'en' | 'hi';
  }>({
    name: '',
    email: '',
    phone: '',
    password: '',
    language: language as 'en' | 'hi'
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
    <div className="min-h-screen bg-transparent flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-agri-500 to-agri-600 rounded-2xl flex items-center justify-center shadow-leaf">
              <Leaf className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900 font-display">
            {t('auth.signup.title')}
          </h2>
          <p className="mt-2 text-sm text-soil-700">
            {t('auth.signup.subtitle')}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t('auth.name')}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="appearance-none relative block w-full px-3 py-3 border border-agri-200 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-500 focus:border-agri-500 focus:z-10 sm:text-sm bg-white/80"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t('auth.email')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="appearance-none relative block w-full px-3 py-3 border border-agri-200 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-500 focus:border-agri-500 focus:z-10 sm:text-sm bg-white/80"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {t('auth.phone')}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="appearance-none relative block w-full px-3 py-3 border border-agri-200 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-500 focus:border-agri-500 focus:z-10 sm:text-sm bg-white/80"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
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
                  className="appearance-none relative block w-full px-3 py-3 pr-10 border border-agri-200 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-500 focus:border-agri-500 focus:z-10 sm:text-sm bg-white/80"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                {t('auth.language')}
              </label>
              <select
                id="language"
                name="language"
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value as 'en' | 'hi' })}
                className="appearance-none relative block w-full px-3 py-3 border border-agri-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-500 focus:border-agri-500 focus:z-10 sm:text-sm bg-white/80"
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
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-agri-600 hover:bg-agri-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-agri-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-leaf"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                t('auth.signup.button')
              )}
            </button>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setCurrentPage('login')}
              className="text-sm text-agri-700 hover:text-agri-600 transition-colors"
            >
              {t('auth.login.link')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}