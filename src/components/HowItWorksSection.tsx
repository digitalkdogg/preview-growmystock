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
    <div id="howitworks" className="px-8 py-12 border-t border-slate-700">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">How it works</p>
        <h2 className="text-2xl font-medium text-white">Three-step workflow</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center">
              <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-semibold text-sm mx-auto mb-4">
                {step.num}
              </div>
              <h3 className="text-base font-medium text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400">{step.description}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-700 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
