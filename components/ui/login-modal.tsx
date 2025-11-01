"use client";

import { useState, useEffect } from "react";
import { Button } from "./button";
import { X } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onCloseAction: () => void;
}

export default function LoginModal({ isOpen, onCloseAction }: LoginModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-lg shadow-lg w-full max-w-md relative" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Login to LernLive</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onCloseAction} 
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </Button>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="Enter your password"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            
            <a href="#forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot password?
            </a>
          </div>
          
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Login
          </Button>
          
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-sm text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.547-1.387-1.335-1.756-1.335-1.756-1.087-.744.084-.73.084-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.838 2.807 1.305 3.495.997.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.21.69.825.57C20.565 21.797 24 17.303 24 12c0-6.627-5.373-12-12-12"
                  fill="currentColor"
                />
              </svg>
              GitHub
            </Button>
            <Button variant="outline" className="w-full">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.13 1.2 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
                  fill="currentColor"
                />
              </svg>
              Twitter
            </Button>
          </div>
          
          <p className="text-center text-sm text-gray-600 mt-6">
            Don{"'"}t have an account?{" "}
            <a href="#get-started" className="text-blue-600 hover:text-blue-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
