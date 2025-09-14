import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Upload from './components/Upload';
import ProblemStatement from './components/ProblemStatement';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isLoading } = useAuth();

  useEffect(() => {
    // Close mobile menu when page changes
    setMobileMenuOpen(false);
  }, [currentPage]);

  useEffect(() => {
    // Redirect to home if trying to access auth pages while logged in
    if (user && (currentPage === 'login' || currentPage === 'signup')) {
      setCurrentPage('home');
    }
  }, [user, currentPage]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'signup':
        return user ? <Home setCurrentPage={setCurrentPage} /> : <SignUp setCurrentPage={setCurrentPage} />;
      case 'login':
        return user ? <Home setCurrentPage={setCurrentPage} /> : <Login setCurrentPage={setCurrentPage} />;
      case 'upload':
        return user ? <Upload /> : <Login setCurrentPage={setCurrentPage} />;
      case 'problem':
        return <ProblemStatement setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;