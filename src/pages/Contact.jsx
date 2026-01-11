import React from 'react';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <div className="min-h-screen bg-stone-50">
            <SEO title="Contact" description="Get in touch with the Daily Globe team." />

            {/* Page Header */}
            <div className="bg-daily-dark text-white py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-black mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-400 font-serif max-w-2xl mx-auto italic">
                        "News is what somebody somewhere wants to suppress; all the rest is advertising."
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl py-20">
                {/* Contact Info - Centered */}
                <div className="bg-white p-12 shadow-sm border border-gray-200 text-center">
                    <h2 className="text-3xl font-bold text-daily-dark font-serif mb-8">Get in Touch</h2>
                    <p className="text-gray-600 mb-12 text-lg leading-relaxed font-serif max-w-2xl mx-auto">
                        For press inquiries, corrections, or tip-offs, please reach out to our editorial team directly.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 font-sans">Address</h3>
                            <p className="text-lg font-serif text-daily-dark">123 Press Plaza<br />New York, NY 10001</p>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 font-sans">General Inquiries</h3>
                            <a href="mailto:info@dailyglobe.local" className="text-lg font-serif text-daily-accent hover:underline">info@dailyglobe.local</a>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 font-sans">Editorial Team</h3>
                            <a href="mailto:editors@dailyglobe.local" className="text-lg font-serif text-daily-accent hover:underline">editors@dailyglobe.local</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
