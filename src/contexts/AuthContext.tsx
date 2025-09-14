import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  preferredLanguage: 'en' | 'hi';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, phone: string, password: string, language: 'en' | 'hi') => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, check if user exists in localStorage
      const users: Array<User & { password: string }> = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find((storedUser) => storedUser.email === email && storedUser.password === password);
      
      if (existingUser) {
        const sanitizedUser: User = {
          id: existingUser.id,
          name: existingUser.name,
          email: existingUser.email,
          phone: existingUser.phone,
          preferredLanguage: existingUser.preferredLanguage,
        };
        setUser(sanitizedUser);
        localStorage.setItem('user', JSON.stringify(sanitizedUser));
        return true;
      }
      return false;
    } catch {
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, phone: string, password: string, language: 'en' | 'hi'): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User & { password: string } = {
        id: Date.now().toString(),
        name,
        email,
        phone,
        password,
        preferredLanguage: language
      };

      // Save to localStorage (in a real app, this would be sent to the backend)
      const users: Array<User & { password: string }> = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if user already exists
      if (users.some((storedUser) => storedUser.email === email)) {
        return false;
      }
      
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      // Set current user (without password)
      const sanitizedUser: User = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        preferredLanguage: newUser.preferredLanguage,
      };
      setUser(sanitizedUser);
      localStorage.setItem('user', JSON.stringify(sanitizedUser));
      
      return true;
    } catch {
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}