"use client";
import { loginFormData } from '@/utils/Login';
import Image from 'next/image';
import { useState } from 'react';

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="h-screen w-full flex justify-center items-center bg-[url('/download1.webp')] bg-cover bg-center px-4">
      <div className="w-[400px]  max-sm:w-full bg-[#111] text-white p-8 max-md:p-6 max-sm:p-4 rounded-lg shadow-lg bg-opacity-90">
        <h2 className="text-2xl max-md:text-xl max-sm:text-lg font-bold mb-6 text-center">{loginFormData.title}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-base max-md:text-sm">{loginFormData.usernamePlaceholder}</label>
            <input 
              type="text" 
              className="w-full p-3 max-md:p-2 max-sm:p-2 rounded bg-[#222] text-white border border-[#333] text-base max-md:text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-base max-md:text-sm">{loginFormData.passwordPlaceholder}</label>
            <input 
              type="password" 
              className="w-full p-3 max-md:p-2 max-sm:p-2 rounded bg-[#222] text-white border border-[#333] text-base max-md:text-sm"
            />
          </div>

          <div className="mb-4 flex items-center">
            <input 
              type="checkbox" 
              checked={rememberMe} 
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            <label className="text-base max-md:text-sm">{loginFormData.rememberMeLabel}</label>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 py-3 max-md:py-2 max-sm:py-2 rounded text-white font-bold text-base max-md:text-sm"
          >
            {loginFormData.signInButton}
          </button>
        </form>

        <div className="my-4 text-center text-gray-400 text-base max-md:text-sm">
          <span>{loginFormData.orLoginWith}</span>
        </div>

        <div className="flex justify-between flex-col max-sm:flex-col max-md:flex-row gap-3">
          <button className="flex items-center justify-center w-full bg-[#222] py-3 max-md:py-2 max-sm:py-2 rounded">
            <Image width={20} height={20} src="/google_icon.svg" alt="Google" className="mr-2" />
            <span className="text-base max-md:text-sm">{loginFormData.googleLabel}</span>
          </button>

          <button className="flex items-center justify-center w-full bg-[#222] py-3 max-md:py-2 max-sm:py-2 rounded">
            <Image width={20} height={20} src="/facebook_icon.svg" alt="Facebook" className="mr-2" />
            <span className="text-base max-md:text-sm">{loginFormData.facebookLabel}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
