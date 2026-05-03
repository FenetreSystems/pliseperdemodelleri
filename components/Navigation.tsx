'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Ürünler', href: '#urunler' },
    { label: 'Hakkımızda', href: '#marka' },
    { label: 'Avrupa Teslimat', href: '#avrupa' },
    { label: 'Sık Sorulanlar', href: '#sss' },
    { label: 'İletişim', href: '#iletisim' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group" aria-label="Plise Perde Modelleri - Ana Sayfa">
            <div className="flex flex-col leading-none">
              <span
                className="font-heading font-700 tracking-wider text-xl"
                style={{ color: '#404e5e', fontFamily: 'var(--font-cormorant)', fontWeight: 700 }}
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
            <div className="hidden sm:block w-px h-8 bg-gray-200 mx-2" />
            <span
              className="hidden sm:block text-xs font-medium tracking-wide"
              style={{ color: '#8a9aaa', fontFamily: 'var(--font-jakarta)' }}
            >
              Plise Perde Modelleri
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Ana navigasyon">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-[#83bd81]"
                style={{ color: scrolled ? '#404e5e' : '#404e5e', fontFamily: 'var(--font-jakarta)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+905403363873"
              className="flex items-center gap-2 text-sm font-medium text-[#404e5e] hover:text-[#83bd81] transition-colors"
              style={{ fontFamily: 'var(--font-jakarta)' }}
              aria-label="Hemen Ara"
            >
              <Phone size={15} />
              <span>0540 336 38 73</span>
            </a>
            <a
              href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20modelleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm !py-2"
              aria-label="WhatsApp'tan Fiyat Al"
            >
              Fiyat Al
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç/kapat"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} color="#404e5e" /> : <Menu size={22} color="#404e5e" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-2 text-sm font-medium text-[#404e5e] hover:text-[#83bd81] border-b border-gray-50 transition-colors"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="tel:+905403363873"
                className="btn-dark justify-center"
              >
                <Phone size={16} />
                Hemen Ara
              </a>
              <a
                href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20modelleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                WhatsApp ile Fiyat Al
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
