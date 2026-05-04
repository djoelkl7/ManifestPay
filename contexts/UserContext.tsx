import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface CardDetails {
  number: string;
  expiry: string;
  cvv: string;
  type: string;
  isFrozen: boolean;
}

interface User {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  dob?: string;
  avatar?: string;
  isLocked?: boolean;
  card?: CardDetails;
}

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  login: (userData: User) => void;
  logout: () => void;
  updateUser: (updatedData: Partial<User>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = window.localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          // Default user per request
          const defaultUser: User = {
            name: 'Dolmat Bin Samsudin',
            email: 'myrahyusri@gmail.com',
            phone: '+60 12-345 6789',
            address: '123 Jalan Ampang, Kuala Lumpur, Malaysia',
            dob: '1990-05-15',
            isLocked: true,
            card: {
              number: '4582 9921 0034 1122',
              expiry: '12/26',
              cvv: '123',
              type: 'Platinum Debit',
              isFrozen: false
            }
          };
          setUser(defaultUser);
        }
      } catch (error) {
        console.error('Failed to read user from localStorage', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    try {
      if (user) {
        window.localStorage.setItem('user', JSON.stringify(user));
      } else {
        window.localStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Failed to save user to localStorage', error);
    }
  }, [user, isLoading]);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (updatedData: Partial<User>) => {
    setUser(prevUser => prevUser ? { ...prevUser, ...updatedData } : null);
  };

  return (
    <UserContext.Provider value={{ user, isLoading, login, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};