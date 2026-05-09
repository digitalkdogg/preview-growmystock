const steps = [
  {
    num: '1',
    title: 'Discover',
    description: 'AI scans thousands of stocks and ETFs across global markets, ranking candidates by opportunity score.',
  },
  {
    num: '2',
    title: 'Analyze',
    description: 'Multi-horizon predictions (1d, 1m, 6m, 1y) are computed with macro context and regime detection.',
  },
  {
    num: '3',
    title: 'Invest',
    description: 'Personalized dashboard surfaces Portfolio, Watchlist, and Discovery signals every trading session.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="howitworks" className="w-full border-t py-12" style={{ borderColor: 'rgba(58, 125, 68, 0.2)', backgroundColor: '#f7faf7' }} aria-labelledby="how-it-works-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#3a7d44' }}>How it works</p>
          <h2 id="how-it-works-heading" className="text-2xl font-medium" style={{ color: '#1a1a1a' }}>Three-step workflow</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="rounded-lg p-6 border text-center" style={{ backgroundColor: 'rgba(58, 125, 68, 0.03)', borderColor: 'rgba(58, 125, 68, 0.15)' }}>
                <div className="w-10 h-10 text-white rounded-full flex items-center justify-center font-semibold text-sm mx-auto mb-4" style={{ backgroundColor: '#3a7d44' }}>
                  {step.num}
                </div>
                <h3 className="text-base font-medium mb-2" style={{ color: '#1a1a1a' }}>{step.title}</h3>
                <p className="text-sm" style={{ color: '#4a5a50' }}>{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5" style={{ background: 'linear-gradient(to right, rgba(58, 125, 68, 0.3), transparent)' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
