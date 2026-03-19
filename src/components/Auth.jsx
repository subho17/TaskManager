import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Lock, User, ArrowRight } from 'lucide-react';

export function Auth({ onLogin }) {
  // determines which panel is active
  const [isSignUP, setIsSignUP] = useState(false);

  // Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    if (onLogin) onLogin();
  };

  return (
    <div className="flex justify-center items-center min-h-[85vh] w-full p-4 overflow-hidden relative">
      {/* Main Container */}
      <div className="relative w-full max-w-[850px] min-h-[600px] md:min-h-[550px] bg-white rounded-3xl md:rounded-[40px] shadow-2xl overflow-hidden flex">
        
        {/* Sign In Container */}
        <div
          className={`absolute top-0 left-0 w-full md:w-1/2 h-full flex flex-col items-center justify-center p-8 md:p-12 transition-all duration-700 ease-in-out ${
            isSignUP ? '-translate-x-full md:translate-x-[100%] opacity-0 z-10 pointer-events-none' : 'translate-x-0 opacity-100 z-20'
          }`}
        >
          <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Sign in</h1>
            <div className="flex gap-4 mb-6 md:mb-8">
              <SocialButton Icon={GoogleIcon} />
              <SocialButton Icon={Github} />
              <SocialButton Icon={Linkedin} />
            </div>
            <span className="text-gray-400 text-sm mb-4 md:mb-6">or use your account</span>
            
            <Input Icon={Mail} type="email" placeholder="Email" />
            <Input Icon={Lock} type="password" placeholder="Password" />
            
            <a href="#" className="text-gray-400 text-sm mt-2 mb-4 md:mb-6 hover:text-gray-900 transition-colors">
              Forgot your password?
            </a>
            
            <button
              type="submit"
              className="bg-[#7c3aed] text-white rounded-full font-bold text-sm px-10 md:px-12 py-3 tracking-widest uppercase hover:scale-105 transition-transform duration-300 shadow-[0_4px_15px_rgba(124,58,237,0.4)]"
            >
              Sign In
            </button>

            {/* Mobile Toggle */}
            <p className="md:hidden mt-6 text-sm text-gray-600">
              Don't have an account?{' '}
              <button type="button" onClick={() => setIsSignUP(true)} className="text-[#7c3aed] font-bold">
                Sign Up
              </button>
            </p>
          </form>
        </div>

        {/* Sign Up Container */}
        <div
          className={`absolute top-0 left-0 w-full md:w-1/2 h-full flex flex-col items-center justify-center p-8 md:p-12 transition-all duration-700 ease-in-out ${
            isSignUP ? 'translate-x-0 md:translate-x-[100%] opacity-100 z-20' : 'translate-x-full md:translate-x-[50%] opacity-0 z-10 pointer-events-none'
          }`}
        >
          <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Create Account</h1>
            <div className="flex gap-4 mb-6 md:mb-8">
              <SocialButton Icon={GoogleIcon} />
              <SocialButton Icon={Github} />
              <SocialButton Icon={Linkedin} />
            </div>
            <span className="text-gray-400 text-sm mb-4 md:mb-6">or use your email for registration</span>
            
            <Input Icon={User} type="text" placeholder="Name" />
            <Input Icon={Mail} type="email" placeholder="Email" />
            <Input Icon={Lock} type="password" placeholder="Password" />
            
            <button
              type="submit"
              className="mt-4 md:mt-6 bg-[#7c3aed] text-white rounded-full font-bold text-sm px-10 md:px-12 py-3 tracking-widest uppercase hover:scale-105 transition-transform duration-300 shadow-[0_4px_15px_rgba(124,58,237,0.4)]"
            >
              Sign Up
            </button>

            {/* Mobile Toggle */}
            <p className="md:hidden mt-6 text-sm text-gray-600">
              Already have an account?{' '}
              <button type="button" onClick={() => setIsSignUP(false)} className="text-[#7c3aed] font-bold">
                Sign In
              </button>
            </p>
          </form>
        </div>

        {/* Overlay Container (The shifting Red part) - Hidden on Mobile */}
        <div
          className={`hidden md:block absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-[100] ${
            isSignUP ? '-translate-x-full' : 'translate-x-0'
          }`}
        >
          <div
            className={`bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] text-white relative -left-full h-full w-[200%] transition-transform duration-700 ease-in-out ${
              isSignUP ? 'translate-x-1/2' : 'translate-x-0'
            }`}
          >
            {/* Overlay Left (Shown on Sign Up view) */}
            <div
              className={`absolute top-0 flex flex-col items-center justify-center w-1/2 h-full px-12 text-center transition-transform duration-700 ease-in-out ${isSignUP ? 'translate-x-0' : '-translate-x-[20%]'
                }`}
            >
              <h1 className="text-4xl font-black mb-6">Welcome Back!</h1>
              <p className="text-sm font-medium leading-relaxed mb-8 opacity-90 max-w-[250px]">
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => setIsSignUP(false)}
                className="bg-transparent border-2 border-white rounded-full font-bold text-sm px-12 py-3 tracking-widest uppercase hover:bg-white hover:text-[#7c3aed] transition-colors duration-300"
              >
                Sign In
              </button>
            </div>

            {/* Overlay Right (Shown on Sign In view) */}
            <div
              className={`absolute top-0 right-0 flex flex-col items-center justify-center w-1/2 h-full px-12 text-center transition-transform duration-700 ease-in-out ${
                isSignUP ? 'translate-x-[20%]' : 'translate-x-0'
              }`}
            >
              <h1 className="text-4xl font-black mb-6">Hello, Friend!</h1>
              <p className="text-sm font-medium leading-relaxed mb-8 opacity-90 max-w-[250px]">
                Enter your personal details and start journey with us
              </p>
              <button
                onClick={() => setIsSignUP(true)}
                className="bg-transparent border-2 border-white rounded-full font-bold text-sm px-12 py-3 tracking-widest uppercase hover:bg-white hover:text-[#7c3aed] transition-colors duration-300"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

// Subcomponents for cleaner code
function SocialButton({ Icon }) {
  return (
    <button type="button" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors">
      <Icon size={18} />
    </button>
  );
}

function Input({ Icon, ...props }) {
  return (
    <div className="w-full relative mb-3">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
        <Icon size={18} />
      </div>
      <input
        {...props}
        className="w-full bg-[#f0f2f5] border-none text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-[#7c3aed]/50 block pl-11 p-3.5 transition-all outline-none"
      />
    </div>
  );
}

function GoogleIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}
