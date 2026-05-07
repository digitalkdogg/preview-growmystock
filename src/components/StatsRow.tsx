const stats = [
  { num: '109+', label: 'Feature columns per prediction' },
  { num: 'v2.3', label: 'DeepMoney engine generation' },
  { num: '4', label: 'Prediction horizons (1d · 1m · 6m · 1y)' },
]

export function StatsRow() {
  return (
    <div className="px-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {stats.map((stat, i) => (
          <div key={i} className="bg-emerald-50 rounded p-3.5 border border-emerald-200 text-center">
            <div className="text-2xl font-medium text-emerald-600 mb-1">{stat.num}</div>
            <div className="text-xs text-emerald-700">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
