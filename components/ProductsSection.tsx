export default function ProductsSection() {
  const mainProducts = [
    {
      name: 'Plise Perde',
      desc: 'Standart tek katmanlı sistem; sade ve zamansız estetik. Geniş renk arşivi ile her mekâna uyum sağlar.',
      tag: 'En Çok Tercih',
      icon: <PlisIcon />,
      light: '%25–60',
    },
    {
      name: 'Gece Gündüz Plise Perde',
      desc: 'Tek ray, çift kumaş mantığıyla çalışır. Gündüz tül katman, gece opak katman devreye girer.',
      tag: 'Çok Yönlü',
      icon: <DayNightIcon />,
      light: '%0–80',
    },
    {
      name: 'Yarı Karartma Plise Perde',
      desc: 'Mahremiyet ile aydınlık dengesini arar. Yatak odası ve çalışma mekânları için biçilmiş kaftan.',
      tag: 'Denge',
      icon: <SemiBlackoutIcon />,
      light: '%8–18',
    },
    {
      name: 'Tam Karartma Plise Perde',
      desc: 'Uyku kalitesini doğrudan etkileyen, ışığı milimetresine kadar kesen mühendislik harikası.',
      tag: 'Premium',
      icon: <BlackoutIcon />,
      light: '%0–2',
    },
    {
      name: 'Blackout Plise Perde',
      desc: 'Çok katmanlı özel dokuma ile ışık sızdırmazlığını garanti altına alır. Bebek ve medya odaları için ideal.',
      tag: 'Sıfır Işık',
      icon: <BlackoutIcon />,
      light: '%0',
    },
    {
      name: 'Saten Plise Perde',
      desc: 'Pürüzsüz yüzeyi ve hafif parıltısıyla dekorasyona ayrıcalık katar. Modern ofis ve salonlarda öne çıkar.',
      tag: 'Lüks',
      icon: <SatenIcon />,
      light: '%20–40',
    },
    {
      name: 'Tül Plise Perde',
      desc: 'Işığı süzerek içeri davet eder; dış görüntüyü perdeler. Mutfak ve oturma odaları için vazgeçilmez.',
      tag: 'Şeffaf',
      icon: <TulIcon />,
      light: '%70–85',
    },
    {
      name: 'Keten Plise Perde',
      desc: 'Doğal lif dokusu, organik renk paletleri. Rustik, boho ve Skandinav tarzlara mükemmel uyum.',
      tag: 'Doğal',
      icon: <LinenIcon />,
      light: '%30–55',
    },
    {
      name: 'Baskılı Plise Perde',
      desc: 'Dijital baskı teknolojisiyle özel motifler, kurumsal logolar ya da kişisel tasarımlar hayat bulur.',
      tag: 'Özel Tasarım',
      icon: <PrintIcon />,
      light: '%20–50',
    },
    {
      name: 'Desenli Plise Perde',
      desc: 'Geometrik, botanik veya soyut; yüzlerce desen seçeneğiyle mekânınız kendi kimliğini kazanır.',
      tag: 'Çeşitli',
      icon: <PatternIcon />,
      light: '%20–50',
    },
  ]

  const otherProducts = [
    { name: 'Sineklik', desc: 'Sabit çerçeveli veya piliseli, tam ölçü üretim.' },
    { name: 'Plise Sineklik', desc: 'Hem sineklik hem perde görevi; uzay tasarrufu.' },
    { name: 'Jaluzi Perde', desc: 'Ahşap, alüminyum veya PVC kanat seçenekleri.' },
    { name: 'Düet Perde', desc: 'Şeffaf ve opak şeritler tek bir sistemde.' },
    { name: 'Honeycomb Plise Perde', desc: 'Petek yapı ile mükemmel ısı yalıtımı.' },
    { name: 'Zip Perde', desc: 'Kenar kanalıyla rüzgar ve ışığa sıfır tolerans.' },
  ]

  return (
    <section id="urunler" className="py-20 lg:py-28 bg-white" aria-label="Plise Perde Ürün Yelpazesi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#83bd81', fontFamily: 'var(--font-jakarta)' }}>
            Ürün Kataloğu
          </p>
          <h2
            className="heading-underline mb-5"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 700,
              color: '#404e5e',
            }}
          >
            Plise Perde Modelleri
          </h2>
          <p className="text-base max-w-2xl" style={{ color: '#5a6a7e', fontFamily: 'var(--font-jakarta)', lineHeight: 1.75 }}>
            Her <a href="/" className="text-primary font-semibold underline decoration-primary/40" aria-label="Plise perde çeşitleri">plise perde çeşidi</a>, farklı bir ihtiyacı karşılar.
            Işık geçirgenliğinden ısı yalıtımına, doğal liflerden dijital baskıya uzanan geniş yelpazede ölçüye özel üretim yapıyoruz.
          </p>
        </div>

        {/* Main products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16">
          {mainProducts.map((p, i) => (
            <article
              key={p.name}
              className="relative bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
              style={{ borderTop: '3px solid #83bd81' }}
            >
              {/* Tag */}
              <span
                className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3"
                style={{ background: '#f2f9f2', color: '#83bd81', fontFamily: 'var(--font-jakarta)' }}
              >
                {p.tag}
              </span>
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: '#f2f9f2' }}>
                {p.icon}
              </div>
              {/* Name */}
              <h3
                className="font-semibold text-sm mb-2 leading-snug"
                style={{ color: '#404e5e', fontFamily: 'var(--font-jakarta)' }}
              >
                {p.name}
              </h3>
              {/* Desc */}
              <p className="text-xs leading-relaxed mb-3" style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}>
                {p.desc}
              </p>
              {/* Light */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs" style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}>Işık:</span>
                <span className="text-xs font-semibold" style={{ color: '#404e5e', fontFamily: 'var(--font-jakarta)' }}>
                  {p.light}
                </span>
              </div>
              {/* Fold corner decoration */}
              <div
                className="absolute bottom-0 right-0 w-6 h-6"
                style={{
                  background: 'linear-gradient(225deg, #f2f9f2 50%, #83bd81 50%)',
                }}
              />
            </article>
          ))}
        </div>

        {/* Other products */}
        <div className="rounded-2xl p-6 lg:p-8" style={{ background: '#f2f9f2' }}>
          <h3
            className="font-semibold mb-6"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', color: '#404e5e' }}
          >
            Diğer Ürünlerimiz
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherProducts.map((op) => (
              <div
                key={op.name}
                className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ background: '#83bd81' }}>
                  <span className="text-white text-xs font-bold">{op.name[0]}</span>
                </div>
                <p className="text-xs font-semibold mb-1" style={{ color: '#404e5e', fontFamily: 'var(--font-jakarta)' }}>
                  {op.name}
                </p>
                <p className="text-xs" style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)', lineHeight: 1.5 }}>
                  {op.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm mb-4" style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}>
            Hangi modelin size uygun olduğundan emin değil misiniz?
          </p>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20hangi%20plise%20perde%20modeli%20bana%20uyar%3F%20Yard%C4%B1mc%C4%B1%20olur%20musunuz%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="WhatsApp üzerinden ücretsiz danışmanlık alın"
          >
            Ücretsiz Danışmanlık Al
          </a>
        </div>
      </div>
    </section>
  )
}

function PlisIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="3" rx="1" fill="#83bd81" />
      <rect x="3" y="8" width="18" height="3" rx="1" fill="#83bd81" opacity="0.7" />
      <rect x="3" y="13" width="18" height="3" rx="1" fill="#83bd81" opacity="0.5" />
      <rect x="3" y="18" width="18" height="3" rx="1" fill="#83bd81" opacity="0.3" />
    </svg>
  )
}
function DayNightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" stroke="#83bd81" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4" fill="#83bd81" opacity="0.7" />
    </svg>
  )
}
function SemiBlackoutIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="#83bd81" opacity="0.2" />
      <rect x="3" y="3" width="9" height="18" rx="3" fill="#83bd81" opacity="0.8" />
    </svg>
  )
}
function BlackoutIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="#404e5e" />
      <path d="M10 9l4 3-4 3V9z" fill="#83bd81" />
    </svg>
  )
}
function SatenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="9" ry="4" fill="#83bd81" opacity="0.6" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" fill="#83bd81" opacity="0.4" transform="rotate(-30 12 12)" />
    </svg>
  )
}
function TulIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="2" fill="#83bd81" opacity="0.4" />
      <circle cx="12" cy="6" r="2" fill="#83bd81" opacity="0.4" />
      <circle cx="18" cy="6" r="2" fill="#83bd81" opacity="0.4" />
      <circle cx="6" cy="12" r="2" fill="#83bd81" opacity="0.4" />
      <circle cx="12" cy="12" r="2" fill="#83bd81" opacity="0.4" />
      <circle cx="18" cy="12" r="2" fill="#83bd81" opacity="0.4" />
      <circle cx="6" cy="18" r="2" fill="#83bd81" opacity="0.4" />
      <circle cx="12" cy="18" r="2" fill="#83bd81" opacity="0.4" />
      <circle cx="18" cy="18" r="2" fill="#83bd81" opacity="0.4" />
    </svg>
  )
}
function LinenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" stroke="#83bd81" strokeWidth="1.5" />
      <line x1="3" y1="10" x2="21" y2="10" stroke="#83bd81" strokeWidth="1.5" opacity="0.7" />
      <line x1="3" y1="14" x2="21" y2="14" stroke="#83bd81" strokeWidth="1.5" opacity="0.5" />
      <line x1="3" y1="18" x2="21" y2="18" stroke="#83bd81" strokeWidth="1.5" opacity="0.3" />
      <line x1="8" y1="3" x2="8" y2="21" stroke="#83bd81" strokeWidth="0.8" opacity="0.5" />
      <line x1="16" y1="3" x2="16" y2="21" stroke="#83bd81" strokeWidth="0.8" opacity="0.5" />
    </svg>
  )
}
function PrintIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="#83bd81" opacity="0.15" stroke="#83bd81" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="2" fill="#83bd81" />
      <rect x="12" y="7" width="6" height="2" rx="1" fill="#83bd81" opacity="0.6" />
      <rect x="6" y="13" width="12" height="2" rx="1" fill="#83bd81" opacity="0.6" />
      <rect x="6" y="17" width="8" height="2" rx="1" fill="#83bd81" opacity="0.4" />
    </svg>
  )
}
function PatternIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12l9-9 9 9" stroke="#83bd81" strokeWidth="1.5" fill="none" />
      <path d="M3 12l9 9 9-9" stroke="#83bd81" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="12" cy="12" r="3" fill="#83bd81" opacity="0.6" />
    </svg>
  )
}
