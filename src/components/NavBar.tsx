export function NavBar() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-navy border-b border-slate-700 px-8 py-3.5">
      <div className="flex justify-between items-center">
        <span className="text-brand font-semibold text-lg">GrowMyStock</span>
        <div className="flex gap-8 items-center">
          <button
            onClick={() => handleScroll('features')}
            className="text-slate-400 text-sm hover:text-slate-200 transition"
          >
            Features
          </button>
          <button
            onClick={() => handleScroll('howitworks')}
            className="text-slate-400 text-sm hover:text-slate-200 transition"
          >
            How it works
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="text-slate-400 text-sm hover:text-slate-200 transition"
          >
            Contact
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="bg-brand hover:bg-brand-dark text-white px-4 py-1.5 rounded text-sm font-medium transition"
          >
            Request Access
          </button>
        </div>
      </div>
    </nav>
  )
}
