export function HeroSection() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-gradient-to-b from-navy via-navy-mid to-slate-900 px-10 py-16 text-center">
      <div className="inline-block bg-brand-light/15 border border-brand-light/30 rounded-full px-3.5 py-1 mb-6">
        <span className="text-brand text-xs font-medium">AI-Powered Market Intelligence</span>
      </div>
      <h1 className="text-white text-4xl font-medium mb-3 leading-tight">
        Invest smarter with<br />
        <span className="text-brand">AI-driven insights</span>
      </h1>
      <p className="text-slate-400 text-sm mx-auto max-w-lg mb-8 leading-relaxed">
        GrowMyStock's DeepMoney engine surfaces high-potential opportunities using machine learning, macro data, and real-time market signals.
      </p>
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => handleScroll('contact')}
          className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-lg text-sm font-medium transition"
        >
          Request early access
        </button>
        <button
          onClick={() => handleScroll('features')}
          className="border border-slate-600 text-slate-400 hover:text-slate-200 px-6 py-2.5 rounded-lg text-sm font-medium transition"
        >
          See how it works
        </button>
      </div>
    </div>
  )
}
