'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const handleWhatsAppClick = () => {
    // Logic for WhatsApp integration
    // 1. Define the phone number (with country code, no + or -)
    const phoneNumber = '6281234567890'; 
    
    // 2. Define the default message
    const message = 'Halo, saya tertarik dengan paket katering Anda. Bisa minta info lebih lanjut?';
    
    // 3. Construct the URL and redirect
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        
        {/* Global Background Blur Effect */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-200 to-orange-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Grid Layout: Two Columns */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            
            {/* Left Column: Text Section (Plain text, no border) */}
            <div className="lg:col-span-1 lg:sticky lg:top-32 lg:self-start lg:pr-12 pt-8">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                Catering Berkualitas untuk <span className="text-orange-500">Momen Spesial</span> Anda
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-balance">
                Nikmati pilihan paket katering premium yang disiapkan dengan bahan segar dan cita rasa terbaik. Kami siap mengantarkan kelezatan langsung ke lokasi acara Anda, kapan pun dan di mana pun.
              </p>

              {/* Buttons Section */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="#packages"
                  className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3.5 text-base font-semibold text-white shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-200"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  Lihat Paket
                </Link>
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 hover:border-orange-300 transition-all duration-200"
                >
                  <svg className="mr-2 h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Hubungi Kami
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex items-center gap-x-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Terpercaya</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Halal & Higienis</span>
                </div>
              </div>
            </div>

            {/* Right Column: Image Section with Gradient Background */}
            <div className="relative lg:col-span-1 lg:sticky lg:top-32 lg:self-start">
              {/* Gradient Shape Behind Image */}
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-orange-200 via-orange-100 to-yellow-100 opacity-60 blur-2xl transform rotate-3 scale-105"></div>
              
              {/* Image */}
              <img
                src="https://image.qwenlm.ai/public_source/7550f32a-ef1c-48fb-9de8-29f0b0c5e3aa/1931fc0a0-34f7-4e0c-877f-200693310a5e.png"
                alt="Elegant catering food spread"
                className="relative w-full rounded-3xl shadow-2xl ring-1 ring-gray-900/5 object-cover aspect-[4/3] lg:aspect-[3/4]"
                width={800}
                height={1000}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
