export function NavBar() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-emerald-700 border-b border-emerald-800 px-8 py-3.5">
      <div className="flex justify-between items-center">
        <span className="text-white font-semibold text-lg">GrowMyStock</span>
        <div className="flex gap-8 items-center">
          <button
            onClick={() => handleScroll('features')}
            className="text-emerald-100 text-sm hover:text-white transition"
          >
            Features
          </button>
          <button
            onClick={() => handleScroll('howitworks')}
            className="text-emerald-100 text-sm hover:text-white transition"
          >
            How it works
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="text-emerald-100 text-sm hover:text-white transition"
          >
            Contact
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 rounded text-sm font-medium transition"
          >
            Request Access
          </button>
        </div>
      </div>
    </nav>
  )
}
