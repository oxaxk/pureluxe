export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Aylin K.',
      rating: 5,
      text: 'Meine Classic Lashes wurden so sauber und fein gesetzt. Genau mein Stil.',
      image: null
    },
    {
      name: 'Svetlana P.',
      rating: 5,
      text: 'Light Volume sieht so feminin aus. Kein Klumpen, kein Ziehen – einfach perfekt.',
      image: null
    },
    {
      name: 'Meryem A.',
      rating: 5,
      text: 'Mega Volume – elegant, dicht, aber trotzdem soft. Beste Lash-Artistin.',
      image: null
    },
    {
      name: 'Lara N.',
      rating: 5,
      text: 'Auffüllung nach 2 Wochen und die Lashes sehen wie neu aus. Studio sehr sauber.',
      image: null
    },
    {
      name: 'Daria S.',
      rating: 5,
      text: 'Volume Set wurde extrem präzise gemacht. Halten viel besser als woanders.',
      image: null
    },
    {
      name: 'Olga M.',
      rating: 5,
      text: 'Meine Augen wirken größer und frischer. Die Technik ist wirklich top.',
      image: null
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F5EDE7' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2E2A27' }}
          >
            Was Kundinnen über ihre Lash-Behandlung sagen
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90"
            style={{ fontFamily: 'Inter, sans-serif', color: '#2E2A27' }}
          >
            Echte Erfahrungen zu Classic, Volume, Mega Volume & Lash-Design – feminine, hochwertige Ergebnisse.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <i className="ri-user-line text-xl text-gray-400"></i>
                  )}
                </div>
                <div>
                  <h4
                    className="font-semibold text-lg md:text-xl"
                    style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2E2A27' }}
                  >
                    {testimonial.name}
                  </h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400"></i>
                    ))}
                  </div>
                </div>
              </div>
              
              <p
                className="opacity-80 italic leading-relaxed text-base md:text-lg"
                style={{ fontFamily: 'Inter, sans-serif', color: '#2E2A27' }}
              >
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
