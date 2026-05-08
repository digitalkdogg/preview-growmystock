const stats = [
  { num: '109+', label: 'Feature columns per prediction' },
  { num: 'v2.3', label: 'DeepMoney engine generation' },
  { num: '4', label: 'Prediction horizons (1d · 1m · 6m · 1y)' },
]

export function StatsRow() {
  return (
    <div className="px-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {stats.map((stat, i) => (
          <div key={i} className="rounded p-3.5 border text-center" style={{ backgroundColor: 'rgba(58, 125, 68, 0.03)', borderColor: 'rgba(58, 125, 68, 0.15)' }}>
            <div className="text-2xl font-medium mb-1" style={{ color: '#3a7d44' }}>{stat.num}</div>
            <div className="text-xs" style={{ color: '#4a5a50' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
