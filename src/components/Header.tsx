import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempted');
    // Add your login logic here
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/images/cysd-logo.png" alt="CYSD Logo" width={100} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              className={`text-gray-600 hover:text-blue-500 ${
                pathname === item.path ? 'font-bold' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button 
            onClick={() => setShowLoginForm(!showLoginForm)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {showLoginForm ? 'Hide Login' : 'Login'}
          </button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-2">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              className={`block py-2 text-gray-600 hover:text-blue-500 ${
                pathname === item.path ? 'font-bold' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button 
            onClick={() => setShowLoginForm(!showLoginForm)}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
          >
            {showLoginForm ? 'Hide Login' : 'Login'}
          </button>
        </nav>
      )}

      {/* Simple Login Form */}
      {showLoginForm && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Login
            </button>
          </form>
        </div>
      )}
    </header>
  );
}