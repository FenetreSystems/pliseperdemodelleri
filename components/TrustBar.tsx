export default function TrustBar() {
  const stats = [
    { value: '12.500+', label: 'Tamamlanan Kurulum' },
    { value: '10+', label: 'Yıllık Üretim Deneyimi' },
    { value: '81', label: 'İle Teslimat' },
    { value: '20+', label: 'Avrupa Ülkesi' },
    { value: '3 Yıl', label: 'Üretici Garantisi' },
  ]

  const euroCountries = [
    { flag: '🇩🇪', name: 'Almanya' },
    { flag: '🇳🇱', name: 'Hollanda' },
    { flag: '🇧🇪', name: 'Belçika' },
    { flag: '🇫🇷', name: 'Fransa' },
    { flag: '🇦🇹', name: 'Avusturya' },
    { flag: '🇨🇭', name: 'İsviçre' },
  ]

  return (
    <section id="istatistikler" className="relative" aria-label="Fenetre Systems istatistikleri">
      {/* Stats bar */}
      <div style={{ background: '#404e5e' }} className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${i < stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''}`}
              >
                <span
                  className="font-heading font-bold mb-1"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                    color: '#83bd81',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs tracking-wide uppercase"
                  style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-jakarta)' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Europe countries ticker */}
      <div
        style={{ background: '#83bd81' }}
        className="py-3 overflow-hidden"
        aria-label="Hizmet verilen Avrupa ülkeleri"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span
              className="text-xs font-semibold tracking-widest uppercase text-white/80 mr-2"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Avrupa Teslimat:
            </span>
            {euroCountries.map((country) => (
              <span
                key={country.name}
                className="flex items-center gap-1.5 text-sm font-semibold text-white"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                <span className="text-base">{country.flag}</span>
                {country.name}
              </span>
            ))}
            <span
              className="text-xs font-medium text-white/80"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              + 15 ülke daha
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
