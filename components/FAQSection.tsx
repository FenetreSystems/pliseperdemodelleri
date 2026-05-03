'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Plise perde nedir, diğer perde türlerinden farkı ne?',
    a: 'Plise perde, yatay akordeon kıvrımlarından oluşan özel dokuma kumaşın alüminyum ray sistemi içinde hareket ettiği bir pencere kaplama çözümüdür. Stor ve jaluzi perdelerden farklı olarak kumaş, tamamen katlandığında neredeyse görünmez bir paket boyutuna ulaşır. Bu özellik, hem dar hem geniş pencerelerde üstün estetik sunar. Ekstra ince profil yapısı sayesinde pencere kasasının içine kusursuz yerleşir.',
  },
  {
    q: 'Hangi pencere tiplerine plise perde uygulanabilir?',
    a: 'Standart dikdörtgen pencerelerden eğimli çatı (velux) camlarına, cam balkonlardan kapı üstü pencerelerine kadar geniş bir yelpazede uygulama yapılır. Trapez, üçgen ya da yay formlu pencereler için özel üretim seçeneği mevcuttur. Montaj öncesi teknik ekibimiz ölçüyü onaylar.',
  },
  {
    q: 'Blackout ile tam karartma plise perde arasındaki fark nedir?',
    a: 'İkisi de ışık geçirgenliğini minimize eder; ancak uygulamada ince bir ayrım vardır. Tam karartma modeller tek katman özel kumaşla %0–2 ışık geçirgenliği sağlar. Blackout modeller ise çok katmanlı doku ve kenar sızdırmazlık bantı kombinasyonuyla sıfıra yakın bir karanlık ortam yaratır. Bebek odası, sinema odası ve gece vardiyası çalışanları için blackout tercih edilir.',
  },
  {
    q: 'Gece gündüz plise perde nasıl çalışır, hangi mekânlara uygundur?',
    a: 'Tek ray üzerinde iki bağımsız kumaş panelinden oluşur: tül (şeffaf) ve opak. Gündüz tül paneli aşağı indirilerek içeriye doğal ışık alınırken dışarıdan görüntü engellenir. Akşam opak panel devreye girerek mahremiyet ve ışık kontrolü bir arada sağlanır. Salon, mutfak ve çalışma odaları için en çok tercih edilen kombinasyondur.',
  },
  {
    q: 'Honeycomb plise perde gerçekten ısı tasarrufu sağlar mı?',
    a: 'Evet, sağlar; ve bu bir pazarlama iddiası değil ölçülmüş bir performans değeridir. Hücre yapısı içindeki hareketsiz hava tabakası, cam yüzeyinden gerçekleşen ısı iletimini yavaşlatır. Bağımsız testlerde honeycomb perdeli pencerelerde kış ısı kaybının %15–30 arasında azaldığı belgelenmiştir. Büyük cam cephelerde fatura farkı belirgin biçimde hissedilir.',
  },
  {
    q: 'Ölçüyü nasıl almalıyım, mm hassasiyeti şart mı?',
    a: 'Evet, mm hassasiyeti kritiktir. İç kasa montajı için cam fitilinden cam fitiline kadar olan net genişlik ve yükseklik alınır. Dış kasa montajında kasa kenarından 5–10 cm taşma payı eklenir. WhatsApp hattımızdan fotoğraflı ölçü rehberini talep edebilirsiniz; video görüşmesiyle uzaktan ölçü kontrolü de yapıyoruz.',
  },
  {
    q: 'Türkiye genelinde montaj ekibiniz var mı?',
    a: 'Türkiye\'nin 81 ilinde anlaşmalı montaj ekiplerimiz görev yapar. Kocaeli, İstanbul ve Marmara bölgesinde aynı gün ya da ertesi gün montaj mümkün olabilir. Diğer illerde ürün teslimatıyla eş zamanlı randevu planlanır. Montaj ücreti fiyata dahildir; ek ödeme talep edilmez.',
  },
  {
    q: 'Avrupa\'ya gönderimde gümrük sorunu yaşanır mı?',
    a: "Hayır, Türkiye'den AB ülkelerine yapılan plise perde ihracatı rutin bir prosedürdür. Gönderiler tekstil ve pencere aksesuarı kodu altında beyan edilir; gümrük belgelerini biz hazırlarız. Alıcı ek belge sunmak zorunda kalmaz. Nadiren yaşanan gecikmelerde müşteriye anlık bilgi verilir.",
  },
  {
    q: 'Keten ve saten kumaş arasında seçim yapamıyorum; ne önerirsiniz?',
    a: 'Keten, mat ve doğal dokusunca öne çıkar; ışığı yumuşak dağıtır, organik bir hava yaratır. Banyo, mutfak ve doğal malzeme ağırlıklı dekorasyonlarda mükemmeldir. Saten ise hafif parlaklık içeren pürüzsüz yüzeyiyle daha modern ve kurumsal bir his verir. Yönünüzü belirlemekte zorlanıyorsanız WhatsApp\'tan fotoğraflı mekânınızı paylaşın; önerimizi iletir, gerekirse numune göndeririz.',
  },
  {
    q: 'Perdelerin temizliği ve bakımı nasıl yapılır?',
    a: 'Rutin bakım için nemli, yumuşak bez yeterlidir; kıvrımlar boyunca yavaşça silinir. Derin temizlikte ürünü raydan sökerek ılık suya ve hafif deterjanın karışımına daldırılabilir; sıkılmadan asılarak kurutulur. Kuru temizleme önerilmez. Ülser etkisi yapabilecek çözücü bazlı ürünlerden kaçınılmalıdır.',
  },
  {
    q: 'Toplu sipariş ve kurumsal proje desteği veriyor musunuz?',
    a: "Otel, hastane, ofis binası ve toplu konut projeleri için özel fiyatlandırma ve proje yönetimi sunuyoruz. Aynı anda farklı ölçü ve renk kombinasyonlarını içeren büyük siparişler atölyemizde öncelikli sıraya alınır. Proje müdürü atamasıyla süreç baştan sona takip edilir.",
  },
  {
    q: 'Baskılı ve desenli plise perde siparişi nasıl verilirim?',
    a: 'Fenetre Systems, dijital baskı teknolojisiyle özel desen ve logo baskısı yapabilmektedir. Baskılı sipariş için tercih ettiğiniz görseli yüksek çözünürlüklü (min 300 dpi) olarak WhatsApp veya e-posta yoluyla iletin. Teknik ekibimiz kumaşa uygunluğunu değerlendirip fiyat teklifi sunar.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="sss" className="py-20 lg:py-28 bg-cream" aria-label="Sıkça sorulan sorular">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#83bd81', fontFamily: 'var(--font-jakarta)' }}>
            SSS
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              color: '#404e5e',
            }}
          >
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}>
            <a href="/" className="text-primary underline font-medium" aria-label="Plise perde hakkında sıkça sorulan sorular">Plise perde</a> seçiminden
            Avrupa teslimatına, montajdan bakıma kadar merak ettiğiniz her şey burada.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{ border: '1px solid', borderColor: open === i ? '#83bd81' : '#e8e8e6', background: '#fff' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span
                  className="text-sm font-semibold leading-snug pr-2"
                  style={{ color: '#404e5e', fontFamily: 'var(--font-jakarta)' }}
                >
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300"
                  style={{
                    background: open === i ? '#83bd81' : '#f2f9f2',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                  }}
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <line x1="6" y1="2" x2="6" y2="10" stroke={open === i ? 'white' : '#83bd81'} strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="2" y1="6" x2="10" y2="6" stroke={open === i ? 'white' : '#83bd81'} strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div
                  id={`faq-answer-${i}`}
                  className="px-5 pb-5"
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#5a6a7e', fontFamily: 'var(--font-jakarta)' }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center">
          <p className="text-sm mb-4" style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}>
            Cevabını bulamadınız mı?
          </p>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20hakk%C4%B1nda%20sorum%20var."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Soru sormak için WhatsApp"
          >
            WhatsApp&apos;ta Sorun
          </a>
        </div>
      </div>
    </section>
  )
}
