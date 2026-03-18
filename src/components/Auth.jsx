import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Github, Linkedin, Mail, Lock, User, ArrowRight } from 'lucide-react';

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
      <div className="relative w-full max-w-[850px] min-h-[550px] bg-white rounded-[40px] shadow-2xl overflow-hidden flex">
        
        {/* Sign In Container */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-12 transition-all duration-700 ease-in-out ${
            isSignUP ? 'translate-x-[100%] opacity-0 z-10' : 'translate-x-0 opacity-100 z-20'
          }`}
        >
          <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-black text-gray-900 mb-6">Sign in</h1>
            <div className="flex gap-4 mb-8">
              <SocialButton Icon={Facebook} />
              <SocialButton Icon={Github} />
              <SocialButton Icon={Linkedin} />
            </div>
            <span className="text-gray-400 text-sm mb-6">or use your account</span>
            
            <Input Icon={Mail} type="email" placeholder="Email" />
            <Input Icon={Lock} type="password" placeholder="Password" />
            
            <a href="#" className="text-gray-400 text-sm mt-4 mb-6 hover:text-gray-900 transition-colors">
              Forgot your password?
            </a>
            
            <button
              type="submit"
              className="bg-[#7c3aed] text-white rounded-full font-bold text-sm px-12 py-3 tracking-widest uppercase hover:scale-105 transition-transform duration-300 shadow-[0_4px_15px_rgba(124,58,237,0.4)]"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Sign Up Container */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-12 transition-all duration-700 ease-in-out ${
            isSignUP ? 'translate-x-0 opacity-100 z-20' : 'translate-x-0 opacity-0 z-10'
          }`}
          style={{ transform: isSignUP ? 'translateX(0)' : 'translateX(100%)' }}
        >
          <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-black text-gray-900 mb-6">Create Account</h1>
            <div className="flex gap-4 mb-8">
              <SocialButton Icon={Facebook} />
              <SocialButton Icon={Github} />
              <SocialButton Icon={Linkedin} />
            </div>
            <span className="text-gray-400 text-sm mb-6">or use your email for registration</span>
            
            <Input Icon={User} type="text" placeholder="Name" />
            <Input Icon={Mail} type="email" placeholder="Email" />
            <Input Icon={Lock} type="password" placeholder="Password" />
            
            <button
              type="submit"
              className="mt-6 bg-[#7c3aed] text-white rounded-full font-bold text-sm px-12 py-3 tracking-widest uppercase hover:scale-105 transition-transform duration-300 shadow-[0_4px_15px_rgba(124,58,237,0.4)]"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Overlay Container (The shifting Red part) */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-[100] ${
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
              className={`absolute top-0 flex flex-col items-center justify-center w-1/2 h-full px-12 text-center transition-transform duration-700 ease-in-out ${
                isSignUP ? 'translate-x-0' : '-translate-x-[20%]'
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
