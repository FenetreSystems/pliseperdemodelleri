export default function EuropeSection() {
  const countries = [
    { flag: '🇩🇪', name: 'Almanya', cities: 'Berlin, Hamburg, Münih, Frankfurt, Köln', days: '4–6 gün' },
    { flag: '🇳🇱', name: 'Hollanda', cities: 'Amsterdam, Rotterdam, Den Haag, Utrecht', days: '4–6 gün' },
    { flag: '🇧🇪', name: 'Belçika', cities: 'Brüksel, Gent, Brugge, Antwerp', days: '5–7 gün' },
    { flag: '🇫🇷', name: 'Fransa', cities: 'Paris, Lyon, Marsilya, Toulouse', days: '6–8 gün' },
    { flag: '🇦🇹', name: 'Avusturya', cities: 'Viyana, Graz, Linz, Salzburg', days: '5–7 gün' },
    { flag: '🇨🇭', name: 'İsviçre', cities: 'Zürih, Cenevre, Basel, Bern', days: '5–8 gün' },
    { flag: '🇩🇰', name: 'Danimarka', cities: 'Kopenhag ve tüm şehirler', days: '6–8 gün' },
    { flag: '🇸🇪', name: 'İsveç', cities: 'Stockholm, Göteborg, Malmö', days: '7–9 gün' },
    { flag: '🇳🇴', name: 'Norveç', cities: 'Oslo, Bergen, Trondheim', days: '7–9 gün' },
    { flag: '🇬🇧', name: 'İngiltere', cities: 'Londra, Manchester, Birmingham', days: '6–9 gün' },
    { flag: '🇪🇸', name: 'İspanya', cities: 'Madrid, Barselona, Valencia', days: '7–10 gün' },
    { flag: '🇮🇹', name: 'İtalya', cities: 'Roma, Milano, Napoli', days: '7–10 gün' },
  ]

  const highlights = [
    { label: 'Sigortalı Kargo', desc: 'Tüm gönderiler kapsamlı hasar sigortasıyla çıkar.' },
    { label: 'Takip Numarası', desc: 'Kargo verildiği anda SMS ve e-posta ile iletilir.' },
    { label: 'Darbeye Dayanıklı Paket', desc: 'Köşe korumalı çift katman ambalaj standardımızdır.' },
    { label: 'Kurulum Kılavuzu', desc: 'Türkçe, Almanca ve İngilizce olmak üzere üç dilde.' },
  ]

  return (
    <section id="avrupa" className="py-20 lg:py-28 bg-white" aria-label="Avrupa plise perde teslimatı">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#83bd81', fontFamily: 'var(--font-jakarta)' }}>
              Avrupa Teslimat
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
              Avrupa&apos;ya Kapıya Teslim
            </h2>
            <div className="space-y-3 text-sm leading-relaxed" style={{ color: '#5a6a7e', fontFamily: 'var(--font-jakarta)' }}>
              <p>
                Almanya&apos;dan İskandinav ülkelerine, Fransa&apos;dan İtalya&apos;ya kadar yirmi Avrupa ülkesine
                <strong style={{ color: '#404e5e' }}> kapıya teslim</strong> hizmet sunuyoruz.
                Her sipariş, Gebze atölyesinde üretildikten sonra özel ambalajıyla hazırlanır;
                DHL, DPD veya UPS gibi köklü kargo firmaları aracılığıyla yola çıkar.
              </p>
              <p>
                Paketler <em>demonte</em> hâlde gönderilir; montaj için alet setine ihtiyaç duymadan
                15–20 dakika içinde kurulum tamamlanır.
                <u>Kurulum kılavuzu</u> pakete dahildir; ayrıca WhatsApp üzerinden video destekli montaj rehberi alabilirsiniz.
              </p>
              <p>
                Avrupa genelinde yaşayan Türklerin özel talebi, hizmet ağımızı hızla genişletti.
                Almanya&apos;da yüz binlerce ev, pencere sisteminde kalite tercihini artık farklı yapıyor.
                Ölçüye özel <a href="/" className="text-primary font-medium underline" aria-label="Perde modelleri Avrupa">perde modelleri</a>,
                döviz kurundan bağımsız rekabetçi fiyatlarla Türkiye&apos;den çıkıyor.
              </p>
            </div>
          </div>
          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl p-4"
                style={{ background: '#f2f9f2', border: '1px solid #c5e0c4' }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: '#404e5e', fontFamily: 'var(--font-jakarta)' }}>
                  {h.label}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}>
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Countries Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
          <table className="content-table" aria-label="Ülke bazında teslimat süresi tablosu">
            <thead>
              <tr>
                <th>Ülke</th>
                <th>Başlıca Şehirler</th>
                <th>Tahmini Süre</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((c) => (
                <tr key={c.name}>
                  <td>
                    <span className="flex items-center gap-2" style={{ fontFamily: 'var(--font-jakarta)' }}>
                      <span className="text-xl">{c.flag}</span>
                      <strong>{c.name}</strong>
                    </span>
                  </td>
                  <td style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}>{c.cities}</td>
                  <td>
                    <span
                      className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: '#f2f9f2', color: '#83bd81', fontFamily: 'var(--font-jakarta)' }}
                    >
                      {c.days}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs mt-3" style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}>
          * Teslimat süreleri iş günü bazındadır. Gümrük ve ulusal tatil dönemlerinde ±2 gün sapma olabilir. Tabloda bulunmayan ülkeler için WhatsApp&apos;tan bilgi alın.
        </p>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20Avrupa%27ya%20plise%20perde%20g%C3%B6nderimi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Avrupa teslimatı için WhatsApp iletişim"
          >
            Avrupa Teslimat Detayları İçin Yazın
          </a>
        </div>
      </div>
    </section>
  )
}
