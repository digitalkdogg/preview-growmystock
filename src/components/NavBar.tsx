export function NavBar() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: '#2d5a35', borderColor: '#1e3d26' }}>
      <div className="px-8 py-3.5 flex justify-between items-center">
        <span className="text-white font-semibold text-lg">GrowMyStock</span>
        <div className="flex gap-8 items-center">
          <button
            onClick={() => handleScroll('features')}
            className="text-gray-200 text-sm hover:text-white transition"
          >
            Features
          </button>
          <button
            onClick={() => handleScroll('howitworks')}
            className="text-gray-200 text-sm hover:text-white transition"
          >
            How it works
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="text-gray-200 text-sm hover:text-white transition"
          >
            Contact
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="text-white px-4 py-1.5 rounded text-sm font-medium transition border border-white hover:bg-white hover:text-gray-900"
          >
            Request Access
          </button>
        </div>
      </div>
    </nav>
  )
}
