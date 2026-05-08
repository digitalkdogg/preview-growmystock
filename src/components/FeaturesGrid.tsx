const features = [
  {
    title: 'AI Prediction Engine',
    description:
      '109-feature ML model with Monte Carlo dropout for multi-horizon price targets and confidence scoring.',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
        <path d="M2 12L6 7l3 3 5-6" stroke="#3a7d44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'DeepMoney Discovery',
    description: 'Recursive news scraping, macro tailwind scoring, and GPS-ranked stock and ETF candidates daily.',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
        <circle cx="8" cy="8" r="5.5" stroke="#3a7d44" strokeWidth="1.5" />
        <path d="M8 5v3.5l2 1.5" stroke="#3a7d44" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '3-Bucket Strategy',
    description:
      'Portfolio, Watchlist, and Discovery signals surfaced on your personalized dashboard every session.',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
        <rect x="2" y="2" width="5" height="5" rx="1" stroke="#3a7d44" strokeWidth="1.5" />
        <rect x="9" y="2" width="5" height="5" rx="1" stroke="#3a7d44" strokeWidth="1.5" />
        <rect x="2" y="9" width="5" height="5" rx="1" stroke="#3a7d44" strokeWidth="1.5" />
        <rect x="9" y="9" width="5" height="5" rx="1" stroke="#3a7d44" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Macro Integration',
    description:
      'World Bank GDP, FDI, inflation, and trade signals baked into every prediction and recommendation.',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
        <path d="M8 2a6 6 0 100 12A6 6 0 008 2z" stroke="#3a7d44" strokeWidth="1.5" />
        <path d="M5 8h6M8 5v6" stroke="#3a7d44" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Hot ETF Module',
    description:
      'AI, Semis, Cloud, and Cyber-focused ETFs filtered by liquidity gates and thematic momentum.',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
        <path d="M3 13V7m3.5 6V4M10 13V9m3-4v8" stroke="#3a7d44" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Regime Detection',
    description:
      'GMM clustering on VIX and credit spreads identifies Risk-On, Risk-Off, and high-volatility regimes.',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
        <path
          d="M13 5l-5 5-3-3-3 3"
          stroke="#3a7d44"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export function FeaturesGrid() {
  return (
    <div id="features" className="px-6 py-12">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#3a7d44' }}>Platform capabilities</p>
        <h2 className="text-2xl font-medium" style={{ color: '#1a1a1a' }}>Everything you need to find alpha</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {features.map((feat, i) => (
          <div key={i} className="rounded-lg p-4 border" style={{ backgroundColor: 'rgba(58, 125, 68, 0.03)', borderColor: 'rgba(58, 125, 68, 0.15)' }}>
            <div className="w-8 h-8 rounded mb-2.5 flex items-center justify-center" style={{ backgroundColor: 'rgba(58, 125, 68, 0.08)' }}>{feat.icon}</div>
            <h3 className="text-sm font-medium mb-1.5" style={{ color: '#1a1a1a' }}>{feat.title}</h3>
            <p className="text-xs leading-relaxed" style={{ color: '#4a5a50' }}>{feat.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
