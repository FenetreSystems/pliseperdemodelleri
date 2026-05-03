import type { Metadata } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Plise Perde Modelleri: Türkiye\'den Avrupa\'ya Teslim',
  description: 'Plise Perde Modelleri: Siparişe özel üretim Türkiye\'nin her iline montajlı, Avrupa\'ya 4-10 günde kapıya teslim. Gece gündüz, blackout, keten, saten, honeycomb çeşitleri için hemen sipariş verin.',
  openGraph: {
    title: 'Plise Perde Modelleri | Fenetre Systems',
    description: 'Siparişe özel plise perde üretimi. Türkiye\'ye montajlı, Avrupa\'ya kapıya teslim.',
    url: 'https://pliseperdemodelleri.com.tr',
    siteName: 'Plise Perde Modelleri — Fenetre Systems',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plise Perde Modelleri | Fenetre Systems',
    description: 'Türkiye\'den Avrupa\'ya plise perde üretimi ve kapıya teslim.',
    site: '@FenetreSystems',
  },
  alternates: {
    canonical: 'https://pliseperdemodelleri.com.tr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pliseperdemodelleri.com.tr/#organization",
      "name": "Fenetre Systems",
      "url": "https://www.fenetresystems.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pliseperdemodelleri.com.tr/logo.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+90-540-336-3873",
        "contactType": "customer service",
        "areaServed": ["TR", "DE", "NL", "BE", "FR", "AT", "CH"],
        "availableLanguage": "Turkish"
      },
      "sameAs": [
        "https://www.facebook.com/FenetreSystems/",
        "https://www.instagram.com/fenetresystems/",
        "https://x.com/FenetreSystems",
        "https://www.linkedin.com/company/fenetresystems/",
        "https://tr.pinterest.com/fenetresystems/",
        "https://www.youtube.com/@FenetreSystems"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://pliseperdemodelleri.com.tr/#localbusiness",
      "name": "Fenetre Systems — Plise Perde Modelleri",
      "description": "Siparişe özel plise perde üretimi; Türkiye genelinde montajlı, Avrupa'ya kapıya teslim.",
      "url": "https://pliseperdemodelleri.com.tr",
      "telephone": "+905403363873",
      "email": "info@fenetresystems.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Cumhuriyet Mah. 2233 Sok. No:4/A",
        "addressLocality": "Gebze",
        "addressRegion": "Kocaeli",
        "postalCode": "41400",
        "addressCountry": "TR"
      },
      "priceRange": "₺₺",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "08:30",
        "closes": "18:30"
      },
      "areaServed": [
        {"@type": "Country", "name": "Türkiye"},
        {"@type": "Country", "name": "Almanya"},
        {"@type": "Country", "name": "Hollanda"},
        {"@type": "Country", "name": "Belçika"},
        {"@type": "Country", "name": "Fransa"},
        {"@type": "Country", "name": "Avusturya"},
        {"@type": "Country", "name": "İsviçre"}
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Plise perde nedir, nasıl çalışır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plise perde, akordeon gibi katlanarak açılıp kapanan, özel dokunmuş kumaştan üretilen modern bir pencere kaplama sistemidir. Yatay pliseler (kıvrımlar) sayesinde perde, yukarı çekildiğinde neredeyse görünmez küçük bir pakete dönüşür; aşağı indirildiğinde ise pencerenin tamamını kapatır. Işık geçirgenliği, seçilen kumaş tipine göre %0 ile %85 arasında değişir."
          }
        },
        {
          "@type": "Question",
          "name": "Gece gündüz plise perde nasıl çalışır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gece gündüz plise perde, tek ray sistemi üzerinde çalışan iki farklı kumaş katmanından oluşur. Şeffaf (tül) katman gündüz doğal ışık alırken mahremiyeti korur; opak (karartma) katman ise gece ya da uyku saatlerinde ışığı tamamen engeller. İki katman bağımsız hareket ederek kullanıcıya tam kontrol sağlar."
          }
        },
        {
          "@type": "Question",
          "name": "Blackout plise perde ne kadar ışık engeller?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fenetre Systems'ın blackout plise perde modelleri, özel çok katmanlı blackout kumaş kullanılarak üretilir ve ışık geçirgenliğini %0-2 düzeyine indirir. Yatak odası, bebek odası ve medya odası gibi tam karanlık gerektiren mekânlarda en çok tercih edilen modeldir."
          }
        },
        {
          "@type": "Question",
          "name": "Avrupa'ya plise perde teslimatı kaç günde tamamlanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Almanya, Hollanda, Belçika, Fransa, Avusturya ve İsviçre başta olmak üzere Avrupa'nın tüm ülkelerine kapıya teslim süremiz 4 ila 10 iş günüdür. Ürünler, darbeye dayanıklı paketleme ile demonte olarak gönderilir; kurulum kılavuzu pakete dahildir."
          }
        },
        {
          "@type": "Question",
          "name": "Türkiye'de montaj dahil mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, Türkiye'nin 81 iline yapılan teslimatların tamamında montaj hizmetimiz dahildir. Uzman ekiplerimiz belirlenen randevu saatinde adresinize gelerek plise perdenizi anında monte eder."
          }
        },
        {
          "@type": "Question",
          "name": "Honeycomb plise perde ısı yalıtımı sağlar mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Honeycomb (petek) plise perde, kumaş içindeki hava kabarcıkları sayesinde güçlü ısı yalıtımı sağlar. Kış aylarında cam yüzeyinden gerçekleşen ısı kaybını önemli ölçüde azaltırken yaz aylarında dışarıdan gelen sıcağı filtreler. Bu özellik, özellikle büyük cam yüzeylere sahip modern yapılarda enerji tasarrufu getirir."
          }
        },
        {
          "@type": "Question",
          "name": "Plise perde ölçüsü nasıl alınır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "İç kasa montajı için pencere iç ölçüsü (en ve yükseklik) mm hassasiyetiyle alınır. Dış kasa montajında ise pencerenin üst ve yan kısımlarına eklenen 5-10 cm'lik taşma payı hesaplanır. WhatsApp hattımızdan fotoğraflı ölçü rehberimizi talep edebilir, teknik ekibimizden ücretsiz ön danışmanlık alabilirsiniz."
          }
        },
        {
          "@type": "Question",
          "name": "Garanti koşulları nelerdir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fenetre Systems ürünleri 3 yıl üretici garantisi kapsamındadır. Ray sistemleri, mekanizma parçaları ve kumaş dikişleri bu garanti dahilindedir. Garanti kapsamı dışındaki hasarlar için yedek parça ve teknik destek ayrıca sağlanmaktadır."
          }
        },
        {
          "@type": "Question",
          "name": "Keten ile saten plise perde arasındaki fark nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Keten plise perde, doğal lif görünümüyle organik ve rustik bir atmosfer yaratır; ışığı yumuşak filtreler. Saten plise perde ise pürüzsüz, hafif parlaklık içeren yüzeyiyle modern ve şık mekânlara uyum sağlar. Keten banyo ve mutfak, saten ise salon ve ofis alanlarında daha sık tercih edilir."
          }
        },
        {
          "@type": "Question",
          "name": "Bayilik almak mümkün mü?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, Türkiye ve Avrupa genelinde bayilik başvuruları kabul edilmektedir. Bayilik detayları için WhatsApp hattımızdan iletişime geçmeniz yeterlidir; ekibimiz kısa sürede size ulaşır."
          }
        }
      ]
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#83bd81" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}
