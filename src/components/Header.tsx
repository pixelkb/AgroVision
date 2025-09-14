import React from 'react';
import { Menu, X, Globe, LogOut, User, Leaf } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const { user, logout } = useAuth();

  const navigation = user ? [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.upload'), id: 'upload' },
    { name: t('nav.problem'), id: 'problem' },
  ] : [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.problem'), id: 'problem' },
  ];

  const handleLogout = () => {
    logout();
    setCurrentPage('home');
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur border-b border-agri-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-9 h-9 bg-gradient-to-br from-agri-600 to-crop-500 rounded-xl flex items-center justify-center shadow-elevated">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-2xl font-bold font-display tracking-tight text-agri-800">AgroVision</span>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-agri-700 border-b-2 border-agri-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'हिं' : 'EN'}</span>
              </button>

              {user ? (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <User className="w-4 h-4" />
                    <span>{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>{t('nav.logout')}</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage('login')}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t('nav.login')}
                  </button>
                  <button
                    onClick={() => setCurrentPage('signup')}
                    className="bg-agri-600 hover:bg-agri-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
                  >
                    {t('nav.signup')}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'हिं' : 'EN'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-agri-100 bg-white/90 backdrop-blur">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-agri-700 bg-agri-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {user ? (
                <div className="border-t border-gray-100 pt-2">
                  <div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700">
                    <User className="w-4 h-4" />
                    <span>{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>{t('nav.logout')}</span>
                  </button>
                </div>
              ) : (
                <div className="border-t border-agri-100 pt-2 space-y-1">
                  <button
                    onClick={() => {
                      setCurrentPage('login');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {t('nav.login')}
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage('signup');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium bg-agri-600 hover:bg-agri-700 text-white rounded-lg"
                  >
                    {t('nav.signup')}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}