export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Ölçü Alın',
      desc: 'Pencerenizin iç ya da dış kasasından mm hassasiyetiyle ölçü alın. WhatsApp üzerinden fotoğraflı ölçü rehberini talep edebilirsiniz.',
      detail: 'İç kasa: cam fitilinden cam fitiline / Dış kasa: kasa üstü dahil',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="#fff" strokeWidth="1.5" />
          <line x1="7" y1="7" x2="7" y2="17" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="7" y1="7" x2="17" y2="7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="7" x2="12" y2="9" stroke="#fff" strokeWidth="1" />
          <line x1="7" y1="12" x2="9" y2="12" stroke="#fff" strokeWidth="1" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Model Seçin',
      desc: 'Blackout, gece gündüz, keten ya da honeycomb — ihtiyaca göre kumaş tipi ve renk kartelasını inceliyorsunuz. Numune talep edebilirsiniz.',
      detail: '200+ renk seçeneği, 10 farklı kumaş tipi',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="8" r="4" stroke="#fff" strokeWidth="1.5" />
          <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 12l2 2 4-4" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Üretim Başlıyor',
      desc: 'Gebze atölyesinde siparişe özel üretim başlar. Ortalama 3 ila 5 iş günü içinde ürün tamamlanır, kalite testinden geçirilir.',
      detail: 'Ortalama üretim süresi: 3–5 iş günü',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="10" width="18" height="11" rx="2" stroke="#fff" strokeWidth="1.5" />
          <path d="M8 10V6a4 4 0 0 1 8 0v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="15.5" r="1.5" fill="#83bd81" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Kapıya Teslim',
      desc: "Türkiye'ye montajlı, Avrupa'ya darbeye dayanıklı demonte paketle kargoluyoruz. Kargo takip numarası anında iletilir.",
      detail: 'Türkiye: montaj dahil / Avrupa: 4–10 iş günü',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 9l9-6 9 6v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" stroke="#fff" strokeWidth="1.5" />
          <path d="M9 21V12h6v9" stroke="#fff" strokeWidth="1.5" />
        </svg>
      ),
    },
  ]

  return (
    <section id="surec" className="py-20 lg:py-28 bg-white" aria-label="Sipariş süreci adımları">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#83bd81', fontFamily: 'var(--font-jakarta)' }}>
            Nasıl Çalışıyoruz
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              color: '#404e5e',
            }}
          >
            4 Adımda Kapınızda
          </h2>
          <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}>
            <a href="/" className="text-primary font-medium underline" aria-label="Plise perde sipariş süreci">Pliseli perde</a> siparişi vermek; ölçü almaktan montaj tamamlanmasına kadar dört net adıma sığar.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(100%-8px)] w-8 h-px z-10"
                  style={{ background: 'linear-gradient(to right, #83bd81, rgba(131,189,129,0.2))' }}
                />
              )}
              {/* Card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300 h-full">
                {/* Step number decoration */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: '#404e5e' }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="font-heading font-bold"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '2.5rem',
                      color: 'rgba(131,189,129,0.2)',
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    {step.num}
                  </span>
                </div>
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ color: '#404e5e', fontFamily: 'var(--font-jakarta)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}>
                  {step.desc}
                </p>
                <span
                  className="inline-block text-xs font-medium px-2 py-1 rounded-md"
                  style={{ background: '#f2f9f2', color: '#83bd81', fontFamily: 'var(--font-jakarta)' }}
                >
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm mt-10" style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}>
          Tüm süreç boyunca <strong style={{ color: '#404e5e' }}>WhatsApp destek hattımız</strong> aktif — soru işareti bırakmıyoruz.
        </p>
      </div>
    </section>
  )
}
