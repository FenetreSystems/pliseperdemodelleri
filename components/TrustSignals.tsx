export default function TrustSignals() {
  const testimonials = [
    {
      text: "Frankfurt'taki dairemi döşerken Türkiye'den sipariş verdim. Paketi 6 günde aldım; kurulum o kadar basitti ki elektrikçi bile aramadım.",
      name: 'Ahmet K.',
      location: 'Frankfurt, Almanya',
      rating: 5,
    },
    {
      text: "Hem gece gündüz hem de blackout model aldım. Fiyat-kalite oranı düşündürücü. Bir arkadaşım daha sipariş verdi benim üzerinden.",
      name: 'Elif B.',
      location: 'İstanbul, Türkiye',
      rating: 5,
    },
    {
      text: 'Çatı pencereme plise perde konusunda başka yerden cevap alamadım. Fenetre Systems tam ölçüye yaptı, mükemmel oturdu.',
      name: 'Serap Ö.',
      location: 'Antalya, Türkiye',
      rating: 5,
    },
  ]

  const certs = [
    { label: 'REACH Uyumlu', sub: 'Kumaş Sertifikası' },
    { label: 'ISO Kalite', sub: 'Üretim Standardı' },
    { label: '3 Yıl Garanti', sub: 'Tüm Ürünlerde' },
    { label: 'Sigortalı Kargo', sub: 'DHL / DPD / UPS' },
  ]

  return (
    <section id="guven" className="py-20 lg:py-28 bg-white" aria-label="Güven kanıtları ve müşteri yorumları">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#83bd81', fontFamily: 'var(--font-jakarta)' }}>
            Güven Kanıtları
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              color: '#404e5e',
            }}
          >
            Müşterilerimiz Ne Diyor?
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3" aria-label={`${t.rating} yıldız`}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} style={{ color: '#83bd81', fontSize: '1rem' }} aria-hidden="true">★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: '#5a6a7e', fontFamily: 'var(--font-jakarta)' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <footer>
                <cite className="not-italic">
                  <p className="text-xs font-semibold" style={{ color: '#404e5e', fontFamily: 'var(--font-jakarta)' }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}>
                    {t.location}
                  </p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Certs / badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((c) => (
            <div
              key={c.label}
              className="flex flex-col items-center text-center p-5 rounded-2xl"
              style={{ background: '#f2f9f2', border: '1px solid #c5e0c4' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                style={{ background: '#83bd81' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-sm font-semibold mb-0.5" style={{ color: '#404e5e', fontFamily: 'var(--font-jakarta)' }}>
                {c.label}
              </p>
              <p className="text-xs" style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}>
                {c.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Bayilik CTA */}
        <div
          className="mt-12 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row gap-5 items-center"
          style={{ background: 'linear-gradient(135deg, #404e5e, #2e3a48)' }}
        >
          <div className="flex-1 text-center sm:text-left">
            <p
              className="font-heading font-semibold mb-2 text-white"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem' }}
            >
              Bayi Olmak İster misiniz?
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-jakarta)' }}>
              Türkiye ve Avrupa&apos;da <a href="/" className="text-primary underline font-medium" aria-label="Plise perde bayilik">plise perde</a> bayilik başvuruları açık.
              Özel fiyatlandırma ve satış desteği için WhatsApp&apos;tan yazın.
            </p>
          </div>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20bayilik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap"
            aria-label="Bayilik için WhatsApp"
          >
            Bayilik Başvurusu
          </a>
        </div>
      </div>
    </section>
  )
}
