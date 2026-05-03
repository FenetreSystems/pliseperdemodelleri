export default function MaterialsSection() {
  const materials = [
    { tip: 'Tül Plise', isik: '%70–85', yalitim: 'Düşük', kullanim: 'Mutfak, oturma odası', renk: '#e8f5e9' },
    { tip: 'Standart Plise', isik: '%25–60', yalitim: 'Orta', kullanim: 'Tüm mekânlar', renk: '#c8e6c9' },
    { tip: 'Yarı Karartma', isik: '%8–18', yalitim: 'Orta-İyi', kullanim: 'Yatak, çalışma odası', renk: '#a5d6a7' },
    { tip: 'Tam Karartma', isik: '%0–2', yalitim: 'İyi', kullanim: 'Bebek, medya odası', renk: '#81c784' },
    { tip: 'Blackout', isik: '%0', yalitim: 'İyi', kullanim: 'Sıfır ışık gereken alanlar', renk: '#66bb6a' },
    { tip: 'Honeycomb', isik: '%20–40', yalitim: 'Mükemmel', kullanim: 'Büyük cam yüzeyler', renk: '#4db6ac' },
  ]

  const features = [
    {
      title: 'Alüminyum Ray Sistemi',
      desc: 'Yüzey işlemli alüminyum profil raylar, 10 yıl boyunca sürünme direncini korur. Genişleme payları hesaplı üretilir.',
    },
    {
      title: 'REACH Uyumlu Kumaş',
      desc: 'Tüm kumaşlarımız Avrupa kimyasal yönetmeliğine (REACH) uygundur. Çocuk odası ve hastane projelerinde güvenle kullanılır.',
    },
    {
      title: 'UV Dayanımlı Pigment',
      desc: 'Doğrudan güneş ışığına maruz kalsa bile renk solması yıllarca önlenir. Pigment stabilitesi test sertifikalıdır.',
    },
    {
      title: 'Hassas Pliseleme',
      desc: 'Her kumaş tipi için farklı pliseleme adımı uygulanır. 20 mm ile 25 mm arasında kademeli seçenek mevcuttur.',
    },
  ]

  return (
    <section id="kalite" className="py-20 lg:py-28" style={{ background: '#404e5e' }} aria-label="Malzeme ve kalite bilgisi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#83bd81', fontFamily: 'var(--font-jakarta)' }}>
            Malzeme & Kalite
          </p>
          <h2
            className="heading-underline mb-5"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              color: '#fff',
            }}
          >
            Ürün Kalitesi ve Kumaş Özellikleri
          </h2>
          <p className="text-sm max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-jakarta)' }}>
            Hangi <a href="/" className="text-primary underline font-medium" aria-label="Plise perde modelleri ışık karşılaştırması">plise perde modeli</a> ihtiyacınızı karşılar?
            Aşağıdaki tablo, kumaş tiplerini ışık geçirgenliği ve ısı performansı açısından karşılaştırıyor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="content-table" aria-label="Plise perde kumaş karşılaştırma tablosu">
              <thead>
                <tr>
                  <th>Kumaş Tipi</th>
                  <th>Işık</th>
                  <th>Yalıtım</th>
                  <th>Kullanım</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((m) => (
                  <tr key={m.tip}>
                    <td>
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ background: m.renk }}
                        />
                        <span className="font-medium text-dark" style={{ fontFamily: 'var(--font-jakarta)' }}>{m.tip}</span>
                      </div>
                    </td>
                    <td style={{ fontFamily: 'var(--font-jakarta)' }}>{m.isik}</td>
                    <td style={{ fontFamily: 'var(--font-jakarta)' }}>{m.yalitim}</td>
                    <td style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}>{m.kullanim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs mt-3" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-jakarta)' }}>
              * Işık geçirgenliği değerleri kumaş rengine göre ±5 puan değişebilir.
            </p>
          </div>

          {/* Feature list */}
          <div className="space-y-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl p-5"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ background: '#83bd81' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#fff', fontFamily: 'var(--font-jakarta)' }}>
                      {f.title}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-jakarta)' }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quality guarantee callout */}
            <div
              className="rounded-xl p-5 mt-2"
              style={{ background: 'rgba(131,189,129,0.12)', border: '1px solid rgba(131,189,129,0.25)' }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: '#83bd81', fontFamily: 'var(--font-jakarta)' }}>
                Garanti Kapsamı
              </p>
              <ul className="space-y-1.5">
                {[
                  'Ray ve mekanizma sistemi — 3 yıl',
                  'Kumaş dikiş ve pliseleme — 3 yıl',
                  'Renk kararlılığı — 2 yıl',
                  'Yedek parça temin garantisi — 5 yıl',
                ].map((item) => (
                  <li key={item} className="text-xs flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-jakarta)' }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#83bd81' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
