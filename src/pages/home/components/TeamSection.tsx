import React from 'react';

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2E2A27' }}
          >
            Folgen Sie uns auf Instagram
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-6"
            style={{ fontFamily: 'Inter, sans-serif', color: '#2E2A27' }}
          >
            Einblicke ins Studio, Vorher/Nachher-Ergebnisse und Schulungs-Impressionen – mehr Inhalte finden Sie auf
            <span className="font-semibold"> @pureluxeberlin</span>.
          </p>
        </div>

        {/* Mobile: horizontal scroll, Desktop: drei Bilder nebeneinander */}
        <div className="-mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto pb-3 sm:overflow-visible sm:grid sm:grid-cols-3 sm:gap-6">
            <div className="min-w-[220px] sm:min-w-0">
              <div className="rounded-3xl overflow-hidden shadow-md">
                <img
                  src="/images/instagram/insta-1.jpg"
                  alt="PURELUXE BERLIN Instagram Impression 1"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="min-w-[220px] sm:min-w-0">
              <div className="rounded-3xl overflow-hidden shadow-md">
                <img
                  src="/images/instagram/insta-2.jpg"
                  alt="PURELUXE BERLIN Instagram Impression 2"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="min-w-[220px] sm:min-w-0">
              <div className="rounded-3xl overflow-hidden shadow-md">
                <img
                  src="/images/instagram/insta-3.jpg"
                  alt="PURELUXE BERLIN Instagram Impression 3"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://instagram.com/pureluxeberlin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#2E2A27] text-[#2E2A27] px-6 py-3 rounded-full font-semibold hover:bg-[#2E2A27] hover:text-white transition"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm8.5 3.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5z"
              />
            </svg>
            Jetzt folgen
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
