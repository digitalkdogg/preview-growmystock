export function HeroSection() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-white px-10 py-16 text-center border-b-4 border-emerald-500 shadow-sm">
      <div className="inline-block bg-emerald-700/15 border border-emerald-700/30 rounded-full px-3.5 py-1 mb-6">
        <span className="text-emerald-700 text-xs font-medium">AI-Powered Market Intelligence</span>
      </div>
      <h1 className="text-emerald-950 text-4xl font-medium mb-3 leading-tight">
        Invest smarter with<br />
        <span className="text-emerald-600">AI-driven insights</span>
      </h1>
      <p className="text-emerald-700 text-sm mx-auto max-w-lg mb-8 leading-relaxed">
        GrowMyStock's DeepMoney engine surfaces high-potential opportunities using machine learning, macro data, and real-time market signals.
      </p>
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => handleScroll('contact')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition"
        >
          Request early access
        </button>
        <button
          onClick={() => handleScroll('features')}
          className="border border-emerald-300 text-emerald-700 hover:text-emerald-900 px-6 py-2.5 rounded-lg text-sm font-medium transition"
        >
          See how it works
        </button>
      </div>
    </div>
  )
}
