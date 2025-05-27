
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import CarPartCard from '@/components/CarPartCard';
import AuthModal from '@/components/AuthModal';
import CarPartDetails from '@/components/CarPartDetails';
import { carParts, CarPart } from '@/data/carParts';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedPart, setSelectedPart] = useState<CarPart | null>(null);
  const [searchResults, setSearchResults] = useState<CarPart[]>(carParts);
  const [userEmail, setUserEmail] = useState('');

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults(carParts);
      return;
    }

    const filtered = carParts.filter(part =>
      part.name.toLowerCase().includes(query.toLowerCase()) ||
      part.brand.toLowerCase().includes(query.toLowerCase()) ||
      part.partNumber.toLowerCase().includes(query.toLowerCase()) ||
      part.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const handleLogin = (email: string, password: string) => {
    // Simple mock authentication
    if (email && password) {
      setIsAuthenticated(true);
      setUserEmail(email);
      console.log('User logged in:', email);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserEmail('');
    console.log('User logged out');
  };

  const handleViewDetails = (partId: string) => {
    const part = carParts.find(p => p.id === partId);
    if (part) {
      setSelectedPart(part);
      setShowDetailsModal(true);
    }
  };

  const handleLoginPrompt = () => {
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CarParts Pro</h1>
              <p className="text-sm text-gray-600">Professional Car Parts Search</p>
            </div>
            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-700">Welcome, {userEmail}</span>
                  <Button onClick={handleLogout} variant="outline">
                    Logout
                  </Button>
                </div>
              ) : (
                <Button onClick={() => setShowAuthModal(true)} variant="default">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Search Section */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Find Your Car Parts</h2>
            <p className="text-lg text-gray-600">Search for high-quality automotive parts with detailed location information</p>
            <div className="flex justify-center">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">
                Search Results ({searchResults.length})
              </h3>
              {!isAuthenticated && (
                <p className="text-sm text-orange-600">
                  Login to access detailed location information
                </p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((part) => (
                <CarPartCard
                  key={part.id}
                  part={part}
                  isAuthenticated={isAuthenticated}
                  onViewDetails={handleViewDetails}
                  onLogin={handleLoginPrompt}
                />
              ))}
            </div>

            {searchResults.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No parts found matching your search.</p>
                <p className="text-gray-400">Try different keywords or browse all parts.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Modals */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
      />

      <CarPartDetails
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        part={selectedPart}
      />
    </div>
  );
};

export default Index;
