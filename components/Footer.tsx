export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/FenetreSystems/', icon: <FbIcon /> },
    { name: 'Instagram', href: 'https://www.instagram.com/fenetresystems/', icon: <IgIcon /> },
    { name: 'Twitter/X', href: 'https://x.com/FenetreSystems', icon: <XIcon /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/fenetresystems/', icon: <LiIcon /> },
    { name: 'Pinterest', href: 'https://tr.pinterest.com/fenetresystems/', icon: <PiIcon /> },
    { name: 'YouTube', href: 'https://www.youtube.com/@FenetreSystems', icon: <YtIcon /> },
  ]

  const products = [
    'Plise Perde',
    'Gece Gündüz Plise Perde',
    'Blackout Plise Perde',
    'Saten Plise Perde',
    'Keten Plise Perde',
    'Honeycomb Plise Perde',
    'Sineklik',
    'Zip Perde',
  ]

  return (
    <footer className="pt-16 pb-24 lg:pb-8" style={{ background: '#2e3a48' }} aria-label="Site alt bilgisi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="flex flex-col leading-none mb-2">
                <span
                  className="font-heading font-bold tracking-wider text-xl"
                  style={{ color: '#fff', fontFamily: 'var(--font-cormorant)', fontWeight: 700 }}
                >
                  FENETRE
                </span>
                <span
                  className="text-xs tracking-[0.25em] uppercase font-medium"
                  style={{ color: '#83bd81', fontFamily: 'var(--font-jakarta)' }}
                >
                  systems
                </span>
              </div>
              <p className="text-xs leading-relaxed mt-3" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-jakarta)' }}>
                Gebze, Kocaeli&apos;nden Türkiye ve Avrupa&apos;ya
                ölçüye özel plise perde üretimi ve montajlı teslimat.
              </p>
            </div>
            {/* Social links */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.name}'da Fenetre Systems`}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-primary"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3
              className="font-semibold text-sm mb-5"
              style={{ color: '#fff', fontFamily: 'var(--font-jakarta)' }}
            >
              Ürünlerimiz
            </h3>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p}>
                  <a
                    href="/#urunler"
                    className="text-xs hover:text-primary transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-jakarta)' }}
                    aria-label={p}
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="font-semibold text-sm mb-5"
              style={{ color: '#fff', fontFamily: 'var(--font-jakarta)' }}
            >
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2.5">
              {[
                { text: 'Hakkımızda', href: '#marka' },
                { text: 'Süreç', href: '#surec' },
                { text: 'Avrupa Teslimat', href: '#avrupa' },
                { text: 'Türkiye Teslimat', href: '#turkiye' },
                { text: 'Sık Sorulanlar', href: '#sss' },
                { text: 'İletişim', href: '#iletisim' },
              ].map((l) => (
                <li key={l.text}>
                  <a
                    href={l.href}
                    className="text-xs hover:text-primary transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-jakarta)' }}
                  >
                    {l.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-semibold text-sm mb-5"
              style={{ color: '#fff', fontFamily: 'var(--font-jakarta)' }}
            >
              İletişim
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+905403363873"
                  className="flex items-start gap-2.5 text-xs hover:text-primary transition-colors"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-jakarta)' }}
                  aria-label="Telefon numarası"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.27a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +90 540 336 38 73
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@fenetresystems.com"
                  className="flex items-start gap-2.5 text-xs hover:text-primary transition-colors"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-jakarta)' }}
                  aria-label="E-posta adresi"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  info@fenetresystems.com
                </a>
              </li>
              <li>
                <address
                  className="not-italic flex items-start gap-2.5 text-xs"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-jakarta)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Cumhuriyet Mah. 2233 Sok. No:4/A<br />Gebze / Kocaeli
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-6" style={{ background: 'rgba(255,255,255,0.08)' }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-jakarta)' }}>
          <p>
            © {new Date().getFullYear()} Plise Perde Modelleri — Tüm hakları saklıdır.
          </p>
          <p>
            Üretici:{' '}
            <a
              href="https://www.fenetresystems.com"
              target="_blank"
              rel="dofollow noopener noreferrer"
              className="text-primary hover:underline font-medium"
              aria-label="Fenetre Systems ana sitesi"
            >
              Fenetre Systems
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

function FbIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function IgIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="rgba(255,255,255,0.7)" />
    </svg>
  )
}
function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}
function LiIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function PiIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12c0 5.1 3.1 9.5 7.6 11.4-.1-.9-.2-2.3 0-3.3.2-.9 1.4-5.8 1.4-5.8s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.5-1 3.9-.3 1.2.6 2.1 1.7 2.1 2 0 3.6-2.1 3.6-5.2 0-2.7-1.9-4.6-4.7-4.6-3.2 0-5 2.4-5 4.8 0 .9.4 1.9.8 2.4.1.1.1.2.1.4-.1.3-.3 1.2-.3 1.4-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.6 0-3.8 2.7-7.2 7.8-7.2 4.1 0 7.3 2.9 7.3 6.8 0 4.1-2.6 7.4-6.1 7.4-1.2 0-2.3-.6-2.7-1.3l-.7 2.7c-.3 1-.9 2.2-1.4 3 1 .3 2.1.5 3.2.5 6.6 0 12-5.4 12-12S18.6 0 12 0z"/>
    </svg>
  )
}
function YtIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
    </svg>
  )
}
