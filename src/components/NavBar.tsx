import { useState } from 'react'

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: '#2d5a35', borderColor: '#1e3d26' }}>
      <div className="px-4 md:px-8 py-3.5 flex justify-between items-center">
        <span className="text-white font-semibold text-lg">GrowMyStock</span>
        
        <div className="flex items-center gap-3 md:gap-8">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => handleScroll('features')}
              className="text-gray-200 text-sm hover:text-white transition cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => handleScroll('howitworks')}
              className="text-gray-200 text-sm hover:text-white transition cursor-pointer"
            >
              How it works
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="text-gray-200 text-sm hover:text-white transition cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Request Access Button - Always Visible */}
          <button
            onClick={() => handleScroll('contact')}
            className="text-white px-3 md:px-4 py-1.5 rounded text-[12px] md:text-sm font-medium transition border border-white hover:bg-white hover:text-gray-900 cursor-pointer whitespace-nowrap"
          >
            Request Access
          </button>

          {/* Hamburger Menu Toggle - Mobile Only */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-1 hover:bg-white/10 rounded transition cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t" style={{ backgroundColor: '#2d5a35', borderColor: '#1e3d26' }}>
          <div className="flex flex-col p-4 gap-4">
            <button
              onClick={() => handleScroll('features')}
              className="text-gray-200 text-left text-sm hover:text-white transition p-2"
            >
              Features
            </button>
            <button
              onClick={() => handleScroll('howitworks')}
              className="text-gray-200 text-left text-sm hover:text-white transition p-2"
            >
              How it works
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="text-gray-200 text-left text-sm hover:text-white transition p-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
