export default function TurkeySection() {
  const regions = [
    {
      name: 'Marmara',
      cities: ['İstanbul', 'Bursa', 'Kocaeli', 'Sakarya', 'Tekirdağ', 'Balıkesir', 'Çanakkale'],
      highlight: 'Aynı gün montaj imkânı',
    },
    {
      name: 'Ege',
      cities: ['İzmir', 'Manisa', 'Uşak', 'Kütahya', 'Afyon', 'Muğla', 'Denizli', 'Aydın'],
      highlight: '1–2 iş günü teslimat',
    },
    {
      name: 'Akdeniz',
      cities: ['Antalya', 'Mersin', 'Adana', 'Hatay', 'Isparta', 'Burdur', 'Osmaniye'],
      highlight: '2–3 iş günü teslimat',
    },
    {
      name: 'İç Anadolu',
      cities: ['Ankara', 'Konya', 'Eskişehir', 'Kayseri', 'Sivas', 'Aksaray', 'Karaman'],
      highlight: '2–3 iş günü teslimat',
    },
    {
      name: 'Karadeniz',
      cities: ['Samsun', 'Trabzon', 'Zonguldak', 'Giresun', 'Rize', 'Ordu', 'Kastamonu'],
      highlight: '2–4 iş günü teslimat',
    },
    {
      name: 'Doğu & G.Doğu Anadolu',
      cities: ['Diyarbakır', 'Gaziantep', 'Erzurum', 'Malatya', 'Şanlıurfa', 'Van', 'Mardin'],
      highlight: '3–5 iş günü teslimat',
    },
  ]

  return (
    <section id="turkiye" className="py-20 lg:py-28" style={{ background: '#f2f9f2' }} aria-label="Türkiye geneli plise perde teslimatı">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#83bd81', fontFamily: 'var(--font-jakarta)' }}>
            Türkiye Hizmet Bölgeleri
          </p>
          <h2
            className="heading-underline mb-5"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              color: '#404e5e',
            }}
          >
            81 İle Montajlı Teslimat
          </h2>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: '#5a6a7e', fontFamily: 'var(--font-jakarta)' }}>
            Türkiye&apos;nin her köşesine, adrese demonte değil — <strong style={{ color: '#404e5e' }}>monte edilmiş hâlde</strong> teslim ediyoruz.
            Uzman montaj ekiplerimiz randevu günü gelir, kurulumu saatler içinde tamamlar.
            Ek montaj ücreti talep etmiyoruz; fiyata dahildir.
          </p>
        </div>

        {/* Regions grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {regions.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3
                  className="font-semibold text-base"
                  style={{ color: '#404e5e', fontFamily: 'var(--font-jakarta)' }}
                >
                  {r.name}
                </h3>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{ background: '#f2f9f2', color: '#83bd81', fontFamily: 'var(--font-jakarta)' }}
                >
                  {r.highlight}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {r.cities.map((city) => (
                  <span
                    key={city}
                    className="text-xs px-2 py-0.5 rounded"
                    style={{ background: '#f4f4f2', color: '#5a6a7e', fontFamily: 'var(--font-jakarta)' }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Info callout */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center shadow-sm">
          <div className="flex-1">
            <h3
              className="font-semibold text-base mb-2"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', color: '#404e5e' }}
            >
              Montaj Detayları
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#5a6a7e', fontFamily: 'var(--font-jakarta)' }}>
              Türkiye genelinde her teslimat; <strong style={{ color: '#404e5e' }}>vida tipi, yapıştırma sistemi ve yaylı kanca</strong> seçeneklerinden
              müşterinin mekânına uygun olanıyla monte edilir.
              Kira evinde yasayan müşterilerimiz için yapıştırma sistemi tercih edilebilir; duvar delinmez.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Vida tipi montaj — maksimum sabite',
                'Yapıştırma sistemi — deliksiz kurulum',
                'Yaylı kanca — hızlı söküp takma',
                'Manyetik sistem — hafif pencereler için',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs" style={{ color: '#5a6a7e', fontFamily: 'var(--font-jakarta)' }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#83bd81' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20Türkiye%27de%20plise%20perde%20montaj%20bilgisi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap"
            aria-label="Türkiye montaj bilgisi için WhatsApp"
          >
            Montaj Bilgisi Al
          </a>
        </div>
      </div>
    </section>
  )
}
