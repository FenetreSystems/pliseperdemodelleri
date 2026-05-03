export default function ApplicationsSection() {
  const areas = [
    {
      title: 'Yatak Odası',
      desc: 'Blackout ve yarı karartma modeller; saat bağımsız kaliteli uyku için. Bebek odalarında özellikle tercih edilir.',
      icon: <BedIcon />,
      tags: ['Blackout', 'Gece Gündüz'],
    },
    {
      title: 'Salon & Oturma Odası',
      desc: "Tül ve saten modeller; gündüz doğal aydınlık, akşam mahremiyet. Minimalist dekorasyonla mükemmel uyum sağlar.",
      icon: <SofaIcon />,
      tags: ['Tül', 'Saten', 'Desenli'],
    },
    {
      title: 'Mutfak',
      desc: 'Yıkanabilir ve yağ tutmayan kumaş seçenekleri. Dar pencerelerde kısmi açılım imkânı sunar.',
      icon: <KitchenIcon />,
      tags: ['Tül', 'Keten'],
    },
    {
      title: 'Ofis & Toplantı Odası',
      desc: "Ekran yansımalarını engelleyen yarı karartma kumaşlar. Kurumsal ortamda saten model tercih edilir.",
      icon: <OfficeIcon />,
      tags: ['Yarı Karartma', 'Saten'],
    },
    {
      title: 'Çatı & Velux Penceresi',
      desc: "Eğimli camlara özel montaj sistemi. Standart plise perdeler yatay olmayan yüzeylerde de mükemmel çalışır.",
      icon: <RoofIcon />,
      tags: ['Standart', 'Blackout'],
    },
    {
      title: 'Cam Balkon & Veranda',
      desc: 'Isı ve UV koruması. Zip sistemle entegre çalışır; rüzgar sızıntısına karşı kenar kanalı desteği.',
      icon: <BalconyIcon />,
      tags: ['Zip Perde', 'UV Koruma'],
    },
  ]

  return (
    <section id="uygulamalar" className="py-20 lg:py-28 bg-primary-bg" aria-label="Plise perde uygulama alanları">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#83bd81', fontFamily: 'var(--font-jakarta)' }}>
            Uygulama Alanları
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              color: '#404e5e',
            }}
          >
            Her Mekâna Uygun Çözüm
          </h2>
          <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}>
            Konuttan kurumsal yapıya, velux pencereden cam balkona kadar
            <a href="/" className="text-primary font-medium underline mx-1" aria-label="Plise perde uygulama örnekleri">plise perde çeşitleri</a>
            her alanda çalışır.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <article
              key={area.title}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: '#f2f9f2' }}
              >
                {area.icon}
              </div>
              <h3
                className="font-semibold text-base mb-2"
                style={{ color: '#404e5e', fontFamily: 'var(--font-jakarta)' }}
              >
                {area.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}>
                {area.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: '#f2f9f2', color: '#83bd81', border: '1px solid #c5e0c4', fontFamily: 'var(--font-jakarta)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Info bar */}
        <div
          className="mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ background: '#404e5e' }}
        >
          <div className="flex-1">
            <p className="font-semibold text-sm text-white mb-1" style={{ fontFamily: 'var(--font-jakarta)' }}>
              Toplu sipariş mi düşünüyorsunuz?
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-jakarta)' }}>
              Otel, hastane, ofis ve apartman projeleri için özel toplu sipariş fiyatlandırması sunuyoruz.
            </p>
          </div>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20toplu%20sipariş%20fiyatı%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm whitespace-nowrap"
            aria-label="Toplu sipariş fiyatı için WhatsApp"
          >
            Toplu Fiyat Al
          </a>
        </div>
      </div>
    </section>
  )
}

function BedIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 7v13M21 7v13M3 13h18M3 7c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="7" y="9" width="10" height="4" rx="1" fill="#83bd81" opacity="0.3" />
    </svg>
  )
}
function SofaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="11" width="18" height="7" rx="2" stroke="#83bd81" strokeWidth="1.5" />
      <path d="M3 11V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" stroke="#83bd81" strokeWidth="1.5" />
      <line x1="6" y1="18" x2="6" y2="21" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="18" x2="18" y2="21" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
function KitchenIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#83bd81" strokeWidth="1.5" />
      <path d="M9 3v18M3 9h6" stroke="#83bd81" strokeWidth="1.5" />
      <circle cx="16" cy="9" r="3" stroke="#83bd81" strokeWidth="1.5" />
    </svg>
  )
}
function OfficeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="#83bd81" strokeWidth="1.5" />
      <line x1="8" y1="21" x2="16" y2="21" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="17" x2="12" y2="21" stroke="#83bd81" strokeWidth="1.5" />
    </svg>
  )
}
function RoofIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12L12 4l9 8" stroke="#83bd81" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 10v10h14V10" stroke="#83bd81" strokeWidth="1.5" />
      <rect x="9" y="14" width="6" height="6" fill="#83bd81" opacity="0.3" />
    </svg>
  )
}
function BalconyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="#83bd81" strokeWidth="1.5" />
      <line x1="4" y1="10" x2="20" y2="10" stroke="#83bd81" strokeWidth="1" opacity="0.5" />
      <line x1="4" y1="16" x2="20" y2="16" stroke="#83bd81" strokeWidth="1" opacity="0.5" />
      <line x1="10" y1="4" x2="10" y2="20" stroke="#83bd81" strokeWidth="1" opacity="0.5" />
      <line x1="16" y1="4" x2="16" y2="20" stroke="#83bd81" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}
