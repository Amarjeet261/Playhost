"use client";
import { formFields } from "@/utils/Register";
import Image from "next/image";


export function RegisterForm() {
  return (
    <section
      className="min-h-[900px] w-full flex justify-center items-center p-4"
      style={{
        background:
          "radial-gradient(circle at right, #ff0080, #302b63, #0f0c29)",
      }}
    >
      <div className="min-h-[650px] bg-[#010314] text-white p-10 max-md:p-6 max-sm:p-4 rounded-2xl shadow-2xl w-full max-w-3xl mt-[70px] ">
        <h2 className="text-2xl max-md:text-xl max-sm:text-lg font-bold mb-2">
          Don&apos;t have an account? Register now.
        </h2>
        <p className="text-sm max-md:text-xs mb-8 text-gray-400">
          Welcome to Plahost. We&apos;re excited to have you on board. By creating
          an account with us, you&apos;ll gain access to a range of benefits and
          convenient features that will enhance your car rental experience.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formFields.map((field) => (
              <div key={field.name}>
                <label className="block mb-1 text-sm max-md:text-xs">{field.label}:</label>
                <input
                  name={field.name}
                  type={field.type}
                  className="w-full p-3 max-md:p-2 max-sm:p-2 rounded-lg bg-[#191926] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm max-md:text-xs"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#5E44E5] text-white py-3 max-md:py-2 max-sm:py-2 px-10 max-md:px-6 max-sm:px-4 rounded-lg text-sm max-md:text-xs font-semibold transition-all duration-300"
            >
              REGISTER NOW
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center my-6">
          <hr className="w-[200px] max-md:w-[100px] max-sm:w-[50px] border-gray-600" />
          <span className="mx-4 text-gray-400 text-sm max-md:text-xs">Or sign up with</span>
          <hr className="w-[200px] max-md:w-[100px] max-sm:w-[50px] border-gray-600" />
        </div>

        <div className="flex justify-center gap-4 flex-col md:flex-row">
          <button className="flex items-center justify-center w-full md:w-auto px-[30px] max-md:px-[20px] max-sm:px-[15px] bg-[#222] py-3 max-md:py-2 max-sm:py-2 rounded hover:bg-[#333] transition">
            <Image
              width={20}
              height={20}
              src="/google_icon.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            <span className="text-sm max-md:text-xs">Google</span>
          </button>

          <button className="flex items-center justify-center w-full md:w-auto px-[30px] max-md:px-[20px] max-sm:px-[15px] bg-[#222] py-3 max-md:py-2 max-sm:py-2 rounded hover:bg-[#333] transition">
            <Image
              width={20}
              height={20}
              src="/facebook_icon.svg"
              alt="Facebook"
              className="w-5 h-5 mr-2"
            />
            <span className="text-sm max-md:text-xs">Facebook</span>
          </button>
        </div>
      </div>
    </section>
  );
}
