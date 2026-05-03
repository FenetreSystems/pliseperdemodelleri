export default function BrandStory() {
  return (
    <section id="marka" className="py-20 lg:py-28 bg-primary-bg" aria-label="Fenetre Systems Marka Hikayesi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Visual */}
          <div className="relative order-2 lg:order-1">
            {/* Large background number */}
            <span
              className="absolute -top-8 -left-4 font-heading font-bold pointer-events-none select-none"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '11rem',
                color: 'rgba(131,189,129,0.1)',
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              10+
            </span>
            {/* Cards grid */}
            <div className="relative grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: '#f2f9f2' }}>
                  <FabricIcon />
                </div>
                <p className="text-sm font-semibold text-dark mb-1" style={{ fontFamily: 'var(--font-jakarta)' }}>
                  REACH Uyumlu Kumaş
                </p>
                <p className="text-xs text-dark-light leading-relaxed" style={{ fontFamily: 'var(--font-jakarta)' }}>
                  Avrupa kimyasal güvenlik standartları çerçevesinde sertifikalı.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: '#f2f9f2' }}>
                  <FactoryIcon />
                </div>
                <p className="text-sm font-semibold text-dark mb-1" style={{ fontFamily: 'var(--font-jakarta)' }}>
                  Gebze Atölyesi
                </p>
                <p className="text-xs text-dark-light leading-relaxed" style={{ fontFamily: 'var(--font-jakarta)' }}>
                  Kocaeli'ndeki tesisimizde sipariş başına üretim.
                </p>
              </div>
              <div className="bg-dark rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(131,189,129,0.2)' }}>
                  <ShipIcon />
                </div>
                <p className="text-sm font-semibold text-white mb-1" style={{ fontFamily: 'var(--font-jakarta)' }}>
                  Avrupa Kargo
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-jakarta)' }}>
                  Sigortalı, takipli, darbeye dayanıklı paketleme.
                </p>
              </div>
              <div className="rounded-2xl p-6 shadow-sm" style={{ background: '#83bd81' }}>
                <p
                  className="font-heading font-bold mb-1"
                  style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.5rem', color: '#fff', lineHeight: 1 }}
                >
                  3 Yıl
                </p>
                <p className="text-sm font-semibold text-white/90" style={{ fontFamily: 'var(--font-jakarta)' }}>
                  Üretici Garantisi
                </p>
                <p className="text-xs text-white/70 mt-1" style={{ fontFamily: 'var(--font-jakarta)' }}>
                  Ray, mekanizma ve dikiş dahil.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#83bd81', fontFamily: 'var(--font-jakarta)' }}>
              Marka Değeri
            </p>
            <h2
              className="heading-underline mb-6"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                color: '#404e5e',
              }}
            >
              Fenetre Systems
            </h2>

            <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#5a6a7e', fontFamily: 'var(--font-jakarta)' }}>
              <p>
                Pencere sistemleri, çoğu zaman arka planda kalır — ama doğru seçimle mekânın karakterini belirler.
                Fenetre Systems, bu gerçekten yola çıkarak <strong style={{ color: '#404e5e' }}>plise perde modelleri</strong> üretimini bir zanaatkâr titizliğiyle sürdürüyor.
                Gebze&apos;deki atölyemiz, her siparişi bağımsız bir proje gibi ele alır; standart ürün stoku yoktur.
              </p>
              <p>
                <em>On yılı aşkın üretim birikimi</em>, bize bir şey öğretti: her pencere farklıdır, her müşterinin beklentisi değişir.
                Bu yüzden katalog ürünü yerine <u>ölçüye özel üretim</u> ilkesinden hiç ödün vermiyoruz.
                Alüminyum ray profillerinden kumaş seçimine kadar her bileşen, sipariş geldiğinde işleme girer.
              </p>
              <p>
                Avrupa pazarına yönelik ihracat serüvenimiz, Almanya&apos;daki Türk diasporası ile başladı.
                Bugün 20&apos;den fazla Avrupa ülkesine hizmet sunuyoruz.
                <strong style={{ color: '#404e5e' }}>Demonte paketleme</strong>, dil seçenekli kurulum kılavuzu ve WhatsApp destek hattı bu sürecin olmazsa olmazları.
              </p>
              <p>
                Türkiye&apos;de ise tablo farklı işler: 81 ile <a href="/" className="text-primary underline font-medium" aria-label="Türkiye geneli plise perde hizmeti">plise perde</a> teslimatı yapıyoruz,
                her teslimatın yanında <strong style={{ color: '#404e5e' }}>profesyonel montaj</strong> da dahil.
                Ürün kapıya gelir, uzman ekibimiz anında monte eder; siz sıfır uğraşla pencerenizin yeni haline şahit olursunuz.
              </p>
            </div>

            {/* Feature list */}
            <ul className="mt-6 space-y-2.5">
              {[
                'Sipariş başına üretim — stok ürün yok',
                'REACH uyumlu, sertifikalı kumaş arşivi',
                'Türkiye&apos;de montaj dahil kapıya teslim',
                'Avrupa&apos;ya 4–10 iş günü sigortalı kargo',
                'WhatsApp destek hattı — Türkçe, 7/24',
                'Bayilik fırsatları — Türkiye ve Avrupa',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ background: '#83bd81' }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                      <path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: '#5a6a7e', fontFamily: 'var(--font-jakarta)' }}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function FabricIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="#83bd81" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 3v18M16 3v18" stroke="#83bd81" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}
function FactoryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 20V10l5-3v3l5-3v3l5-3v13H2z" stroke="#83bd81" strokeWidth="1.5" fill="none" />
      <rect x="9" y="14" width="3" height="6" fill="#83bd81" opacity="0.6" />
      <rect x="14" y="14" width="3" height="6" fill="#83bd81" opacity="0.4" />
    </svg>
  )
}
function ShipIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 17l3-7h12l3 7H3z" stroke="#83bd81" strokeWidth="1.5" fill="none" />
      <path d="M8 10V7l8-3v6" stroke="#83bd81" strokeWidth="1.5" fill="none" />
      <path d="M3 17c0 1.5 1 2 2 2s2-.5 3-2 1.5-2 3-2 2 .5 3 2 1.5 2 3 2 2-.5 2-2" stroke="#83bd81" strokeWidth="1.5" />
    </svg>
  )
}
