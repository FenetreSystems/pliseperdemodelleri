export default function CTASection() {
  return (
    <section id="iletisim" className="py-20 lg:py-28" style={{ background: '#404e5e' }} aria-label="İletişim ve sipariş">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Decorative element */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-1 rounded-full" style={{ background: '#83bd81' }} />
        </div>

        <h2
          className="mb-4"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.2,
          }}
        >
          Pencereniz Değişime Hazır mı?
        </h2>

        <p className="text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-jakarta)' }}>
          <a href="/" className="text-primary underline font-medium" aria-label="Plise perde modelleri sipariş">Plise perde modelleri</a> için
          ölçünüzü paylaşın; 24 saat içinde kişisel fiyat teklifiniz hazır olsun.
          Türkiye geneli montajlı, Avrupa geneli kapıya teslim.
        </p>

        {/* Contact options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20fiyat%20teklifi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base"
            aria-label="WhatsApp ile plise perde siparişi"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.1 1.521 5.824L.055 23.077a.75.75 0 0 0 .918.919l5.339-1.455A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.686-.497-5.23-1.366l-.376-.215-3.898 1.062 1.084-3.793-.234-.389A9.961 9.961 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp ile Sipariş
          </a>
          <a
            href="tel:+905403363873"
            className="btn-dark text-base border-2 !border-white/20 !bg-white/10 hover:!bg-white/20"
            aria-label="Telefon ile sipariş"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.27a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            0540 336 38 73
          </a>
          <a
            href="mailto:info@fenetresystems.com"
            className="btn-dark text-base border-2 !border-white/20 !bg-white/10 hover:!bg-white/20"
            aria-label="E-posta ile sipariş"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            E-posta Gönder
          </a>
        </div>

        {/* Address */}
        <div
          className="inline-flex flex-col sm:flex-row items-center gap-4 text-sm rounded-xl px-6 py-4"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#83bd81" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-jakarta)' }}>
              Cumhuriyet Mah. 2233 Sok. No:4/A — Gebze / Kocaeli
            </span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <a
            href="mailto:info@fenetresystems.com"
            className="text-primary hover:underline"
            style={{ fontFamily: 'var(--font-jakarta)' }}
          >
            info@fenetresystems.com
          </a>
        </div>

        {/* Internal links for SEO */}
        <nav className="mt-12 flex flex-wrap gap-3 justify-center" aria-label="Konuya göre iç bağlantılar">
          {[
            { text: 'Plise Perde', href: '/', label: 'Plise perde ana sayfa' },
            { text: 'Pliseli Perde Modelleri', href: '/#urunler', label: 'Pliseli perde modelleri' },
            { text: 'Gece Gündüz Plise Perde', href: '/#urunler', label: 'Gece gündüz plise perde' },
            { text: 'Blackout Plise Perde', href: '/#urunler', label: 'Blackout plise perde' },
            { text: 'Honeycomb Plise Perde', href: '/#urunler', label: 'Honeycomb plise perde' },
            { text: 'Perde Modelleri', href: '/#urunler', label: 'Perde modelleri' },
            { text: 'Avrupa Plise Perde', href: '/#avrupa', label: 'Avrupa plise perde teslimat' },
            { text: 'Türkiye Plise Perde', href: '/#turkiye', label: 'Türkiye plise perde teslimat' },
            { text: 'Keten Plise Perde', href: '/#urunler', label: 'Keten plise perde' },
            { text: 'Saten Plise Perde', href: '/#urunler', label: 'Saten plise perde' },
          ].map((link) => (
            <a
              key={link.text}
              href={link.href}
              aria-label={link.label}
              className="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
              style={{
                background: 'rgba(131,189,129,0.12)',
                color: '#83bd81',
                border: '1px solid rgba(131,189,129,0.25)',
                fontFamily: 'var(--font-jakarta)',
              }}
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}
