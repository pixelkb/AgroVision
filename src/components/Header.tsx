import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Globe, LogOut, User, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const { language, setLanguage, t, getLanguageName } = useLanguage();
  const { user, logout } = useAuth();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी (Hindi)' },
    { code: 'es', name: 'Español (Spanish)' },
    { code: 'fr', name: 'Français (French)' },
    { code: 'de', name: 'Deutsch (German)' },
    { code: 'pt', name: 'Português (Portuguese)' },
    { code: 'bn', name: 'বাংলা (Bengali)' },
    { code: 'ta', name: 'தமிழ் (Tamil)' },
    { code: 'te', name: 'తెలుగు (Telugu)' },
    { code: 'mr', name: 'मराठी (Marathi)' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)' },
    { code: 'gu', name: 'ગુજરાતી (Gujarati)' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as any);
    setLangMenuOpen(false);
  };

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
              <div className="w-8 h-8 bg-gradient-to-br from-agri-500 to-agri-600 rounded-lg flex items-center justify-center shadow-leaf">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3C16 6 19 9 19 13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13C5 9 8 6 12 3Z" fill="currentColor"/>
                  <path d="M12 3C9.5 8 9.5 12 12 16C14.5 12 14.5 8 12 3Z" fill="#E09F3E"/>
                </svg>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 font-display">AgroVision</span>
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
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            <div className="flex items-center space-x-4">
              <div className="relative" ref={langMenuRef}>
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-agri-700 bg-gray-50 hover:bg-agri-50 rounded-lg transition-all"
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden lg:inline">{getLanguageName(language as any)}</span>
                  <span className="lg:hidden">{language.toUpperCase()}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 max-h-96 overflow-y-auto">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                      Select Language
                    </div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-agri-50 transition-colors flex items-center justify-between ${
                          language === lang.code ? 'bg-agri-50 text-agri-700 font-medium' : 'text-gray-700'
                        }`}
                      >
                        <span>{lang.name}</span>
                        {language === lang.code && (
                          <span className="text-agri-600">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {user ? (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <User className="w-4 h-4" />
                    <span>{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-sm font-medium text-gray-500 hover:text-agri-700 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>{t('nav.logout')}</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage('login')}
                    className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {t('nav.login')}
                  </button>
                  <button
                    onClick={() => setCurrentPage('signup')}
                    className="bg-agri-600 hover:bg-agri-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-leaf"
                  >
                    {t('nav.signup')}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center space-x-1 px-2 py-1 text-sm font-medium text-gray-700 hover:text-agri-700 bg-gray-50 rounded-lg"
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-agri-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
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
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
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
                    className="flex items-center space-x-2 w-full text-left px-3 py-2 text-base font-medium text-gray-500 hover:text-agri-700 hover:bg-agri-50"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>{t('nav.logout')}</span>
                  </button>
                </div>
              ) : (
                <div className="border-t border-gray-100 pt-2 space-y-1">
                  <button
                    onClick={() => {
                      setCurrentPage('login');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {t('nav.login')}
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage('signup');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium bg-agri-600 hover:bg-agri-700 text-white rounded-lg shadow-leaf"
                  >
                    {t('nav.signup')}
                  </button>
                </div>
              )}

              {langMenuOpen && (
                <div className="border-t border-gray-100 pt-2 mt-2">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Select Language
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-agri-50 transition-colors flex items-center justify-between ${
                          language === lang.code ? 'bg-agri-50 text-agri-700 font-medium' : 'text-gray-700'
                        }`}
                      >
                        <span>{lang.name}</span>
                        {language === lang.code && (
                          <span className="text-agri-600">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}