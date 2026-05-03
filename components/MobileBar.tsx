export default function MobileBar() {
  return (
    <div
      className="mobile-bar fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      style={{ background: '#fff', borderTop: '1px solid rgba(64,78,94,0.08)', boxShadow: '0 -4px 24px rgba(0,0,0,0.08)' }}
      aria-label="Mobil iletişim çubuğu"
    >
      <div className="flex">
        <a
          href="tel:+905403363873"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 transition-colors duration-200 active:bg-gray-50"
          style={{ color: '#404e5e' }}
          aria-label="Hemen ara: 0540 336 38 73"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.27a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="text-xs font-medium" style={{ fontFamily: 'var(--font-jakarta)' }}>
            Hemen Ara
          </span>
        </a>

        <div className="w-px" style={{ background: 'rgba(64,78,94,0.08)' }} />

        <a
          href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20modelleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 transition-colors duration-200 active:opacity-90"
          style={{ background: '#83bd81', color: '#fff' }}
          aria-label="WhatsApp ile yazın"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.1 1.521 5.824L.055 23.077a.75.75 0 0 0 .918.919l5.339-1.455A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.686-.497-5.23-1.366l-.376-.215-3.898 1.062 1.084-3.793-.234-.389A9.961 9.961 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          <span className="text-xs font-semibold" style={{ fontFamily: 'var(--font-jakarta)' }}>
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  )
}
