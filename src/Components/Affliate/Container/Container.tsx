import { steps } from '@/utils/Container';
import React from 'react';

export default function AffiliateSteps() {
    return (
        <section className="bg-[#010314] min-h-[550px] w-full flex flex-col justify-center items-center py-10 px-4 text-white">
            <div className="max-w-6xl mx-auto flex max-sm:flex-col gap-6 justify-center items-center">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="bg-[#181A47] p-6 rounded-2xl relative w-full h-[250apx]"
                    >
                        <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                        <p className="text-sm leading-relaxed opacity-80">{step.description}</p>
                        <span className="absolute text-[140px] text-[#434EA6] opacity-70 font-bold bottom-0 right-4 select-none">
                            {step.id}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-10 flex justify-center">
                <button className="bg-[#6972F7] px-6 py-3 rounded-xl text-lg font-bold text-white transition duration-300 shadow-md hover:shadow-[0_0_15px_#6972F7]">
                    JOIN TODAY
                </button>

            </div>
        </section>
    );
}
