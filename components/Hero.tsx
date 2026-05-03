import { ChevronDown, ArrowRight, Shield, Truck } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream pleat-bg"
      aria-label="Plise Perde Modelleri Ana Bölüm"
    >
      {/* Decorative pleat lines - left side */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary" />
      <div className="absolute left-3 top-0 bottom-0 w-px bg-primary-light opacity-50" />
      <div className="absolute left-5 top-0 bottom-0 w-px bg-primary-light opacity-30" />

      {/* Large decorative number */}
      <span
        className="absolute right-4 top-1/2 -translate-y-1/2 font-heading font-bold leading-none pointer-events-none select-none"
        style={{
          fontSize: 'clamp(10rem, 25vw, 22rem)',
          color: 'rgba(131,189,129,0.06)',
          fontFamily: 'var(--font-cormorant)',
        }}
        aria-hidden="true"
      >
        01
      </span>

      {/* Right decorative window SVG */}
      <div className="absolute right-0 top-0 bottom-0 w-5/12 hidden lg:flex items-center justify-center pr-16">
        <PliseWindowSVG />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pb-0">
        <div className="max-w-2xl lg:max-w-xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className="badge-pulse inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border"
              style={{
                background: 'rgba(131,189,129,0.1)',
                borderColor: '#83bd81',
                color: '#404e5e',
                fontFamily: 'var(--font-jakarta)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              Fenetre Systems — Gebze, Kocaeli
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-heading mb-5 leading-tight"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 700,
              color: '#404e5e',
              letterSpacing: '-0.01em',
            }}
          >
            <span style={{ color: '#83bd81' }}>Plise Perde</span>{' '}
            Modelleri
          </h1>

          {/* Subheading */}
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: '#5a6a7e', fontFamily: 'var(--font-jakarta)', maxWidth: '520px' }}
          >
            Ölçüye özel üretilen <strong>plise perde çeşitleri</strong>, Gebze atölyemizden doğrudan çıkar; Türkiye&apos;nin her şehrine montajlı, Avrupa&apos;ya dört ila on günde kapıya teslim edilir.
          </p>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)', maxWidth: '480px' }}
          >
            Gece gündüz, blackout, keten, saten, honeycomb — her mekâna özel <a href="/" className="underline decoration-primary text-primary font-medium" aria-label="Pliseli perde modelleri hakkında bilgi al">pliseli perde</a> çözümü burada.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20modelleri%20ve%20fiyatlar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm sm:text-base"
              aria-label="WhatsApp'tan plise perde fiyatı alın"
            >
              <WhatsAppIcon />
              WhatsApp ile Fiyat Al
            </a>
            <a
              href="#urunler"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold px-6 py-3 rounded-lg border-2 border-dark text-dark hover:bg-dark hover:text-white transition-all duration-300"
              style={{ fontFamily: 'var(--font-jakarta)' }}
              aria-label="Plise perde modellerini incele"
            >
              Modelleri İncele
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mini trust signals */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Shield size={15} color="#83bd81" />
              <span className="text-xs font-medium text-dark-light" style={{ fontFamily: 'var(--font-jakarta)' }}>
                3 Yıl Garanti
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={15} color="#83bd81" />
              <span className="text-xs font-medium text-dark-light" style={{ fontFamily: 'var(--font-jakarta)' }}>
                Montaj Dahil
              </span>
            </div>
            <div className="flex items-center gap-2">
              <EuroIcon />
              <span className="text-xs font-medium text-dark-light" style={{ fontFamily: 'var(--font-jakarta)' }}>
                Avrupa Standardı
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold rounded-full px-2 py-0.5" style={{ background: '#f2f9f2', color: '#83bd81', border: '1px solid #c5e0c4' }}>
                TR 🇹🇷
              </span>
              <span className="text-xs font-medium text-dark-light" style={{ fontFamily: 'var(--font-jakarta)' }}>
                Yerli Üretim
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#istatistikler"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-80 transition-opacity"
        aria-label="Aşağı kaydır"
      >
        <span className="text-xs font-medium" style={{ color: '#404e5e', fontFamily: 'var(--font-jakarta)' }}>
          Keşfet
        </span>
        <ChevronDown size={18} color="#404e5e" className="animate-bounce" />
      </a>
    </section>
  )
}

function PliseWindowSVG() {
  const slats = Array.from({ length: 22 }, (_, i) => i)
  return (
    <svg
      viewBox="0 0 360 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm opacity-90"
      aria-hidden="true"
      role="img"
    >
      {/* Window frame outer */}
      <rect x="20" y="20" width="320" height="440" rx="8" fill="#404e5e" />
      {/* Window frame inner */}
      <rect x="32" y="32" width="296" height="416" rx="4" fill="#f8f8f6" />
      {/* Plise blind slats */}
      {slats.map((i) => {
        const y = 32 + i * 19
        const isHighlight = i % 3 === 0
        const opacity = 0.82 - i * 0.012
        return (
          <g key={i}>
            <rect
              x="32"
              y={y}
              width="296"
              height="16"
              fill={isHighlight ? '#83bd81' : '#a8d4a6'}
              opacity={opacity}
            />
            {/* Pleat shadow line */}
            <line
              x1="32"
              y1={y + 16}
              x2="328"
              y2={y + 16}
              stroke="#5a9a58"
              strokeWidth="0.6"
              opacity={0.3}
            />
          </g>
        )
      })}
      {/* Window divider vertical */}
      <rect x="178" y="32" width="4" height="416" fill="#404e5e" opacity="0.8" />
      {/* Cord */}
      <line x1="180" y1="32" x2="180" y2="130" stroke="#83bd81" strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />
      {/* Handle */}
      <circle cx="180" cy="135" r="7" fill="#83bd81" opacity="0.8" />
      {/* Window handle right */}
      <rect x="308" y="228" width="22" height="24" rx="6" fill="#5a6a7e" opacity="0.6" />
      {/* Frame bolts decoration */}
      <circle cx="38" cy="38" r="3" fill="#8a9aaa" opacity="0.5" />
      <circle cx="322" cy="38" r="3" fill="#8a9aaa" opacity="0.5" />
      <circle cx="38" cy="442" r="3" fill="#8a9aaa" opacity="0.5" />
      <circle cx="322" cy="442" r="3" fill="#8a9aaa" opacity="0.5" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.1 1.521 5.824L.055 23.077a.75.75 0 0 0 .918.919l5.339-1.455A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.686-.497-5.23-1.366l-.376-.215-3.898 1.062 1.084-3.793-.234-.389A9.961 9.961 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  )
}

function EuroIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#83bd81" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M14.5 9.5A4 4 0 1 0 14.5 14.5" />
      <line x1="8" y1="11" x2="14" y2="11" />
      <line x1="8" y1="13" x2="14" y2="13" />
    </svg>
  )
}
