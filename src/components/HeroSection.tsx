export function HeroSection() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="px-6 py-16 text-center border-b relative overflow-hidden"
      aria-label="Hero Introduction"
      style={{
        backgroundColor: '#f7faf7',
        borderColor: '#e8eee8',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='1200' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f7faf7;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f0fdf4;stop-opacity:0.3' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='400' fill='url(%23grad)'/%3E%3Ccircle cx='100' cy='100' r='80' fill='none' stroke='%233a7d44' stroke-width='1' opacity='0.1'/%3E%3Ccircle cx='100' cy='100' r='60' fill='none' stroke='%233a7d44' stroke-width='1' opacity='0.15'/%3E%3Ccircle cx='100' cy='100' r='40' fill='none' stroke='%233a7d44' stroke-width='1' opacity='0.2'/%3E%3Cline x1='200' y1='250' x2='250' y2='180' stroke='%233a7d44' stroke-width='2' opacity='0.4'/%3E%3Cline x1='250' y1='180' x2='300' y2='220' stroke='%233a7d44' stroke-width='2' opacity='0.4'/%3E%3Cline x1='300' y1='220' x2='350' y2='140' stroke='%233a7d44' stroke-width='2' opacity='0.4'/%3E%3Cline x1='350' y1='140' x2='400' y2='200' stroke='%233a7d44' stroke-width='2' opacity='0.4'/%3E%3Cline x1='400' y1='200' x2='450' y2='100' stroke='%233a7d44' stroke-width='2' opacity='0.4'/%3E%3Ccircle cx='200' cy='250' r='4' fill='%233a7d44' opacity='0.5'/%3E%3Ccircle cx='250' cy='180' r='4' fill='%233a7d44' opacity='0.5'/%3E%3Ccircle cx='300' cy='220' r='4' fill='%233a7d44' opacity='0.5'/%3E%3Ccircle cx='350' cy='140' r='4' fill='%233a7d44' opacity='0.5'/%3E%3Ccircle cx='400' cy='200' r='4' fill='%233a7d44' opacity='0.5'/%3E%3Ccircle cx='450' cy='100' r='4' fill='%233a7d44' opacity='0.5'/%3E%3Cline x1='600' y1='300' x2='620' y2='280' stroke='%233a7d44' stroke-width='1' opacity='0.2'/%3E%3Cline x1='620' y1='280' x2='640' y2='290' stroke='%233a7d44' stroke-width='1' opacity='0.2'/%3E%3Cline x1='640' y1='290' x2='660' y2='260' stroke='%233a7d44' stroke-width='1' opacity='0.2'/%3E%3Cline x1='660' y1='260' x2='680' y2='270' stroke='%233a7d44' stroke-width='1' opacity='0.2'/%3E%3Cline x1='680' y1='270' x2='700' y2='240' stroke='%233a7d44' stroke-width='1' opacity='0.2'/%3E%3Cline x1='700' y1='240' x2='720' y2='250' stroke='%233a7d44' stroke-width='1' opacity='0.2'/%3E%3Cline x1='720' y1='250' x2='740' y2='210' stroke='%233a7d44' stroke-width='1' opacity='0.2'/%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="inline-block rounded-full px-3.5 py-1 mb-6 relative z-10 border" style={{ backgroundColor: 'rgba(58, 125, 68, 0.1)', borderColor: 'rgba(58, 125, 68, 0.3)' }}>
        <span style={{ color: '#3a7d44' }} className="text-xs font-medium">AI-Powered Market Intelligence</span>
      </div>
      <h1 className="text-4xl font-medium mb-3 leading-tight relative z-10" style={{ color: '#1a1a1a' }}>
        Invest smarter with<br />
        <span style={{ color: '#3a7d44' }}>AI-driven insights</span>
      </h1>
      <p className="text-sm mx-auto max-w-lg mb-8 leading-relaxed relative z-10" style={{ color: '#4a5a50' }}>
        GrowMyStock's DeepMoney engine surfaces high-potential opportunities using machine learning, macro data, and real-time market signals.
      </p>
      <div className="flex gap-3 justify-center relative z-10">
        <button
          onClick={() => handleScroll('contact')}
          className="text-white px-6 py-2.5 rounded-lg text-sm font-medium transition hover:opacity-90"
          style={{ backgroundColor: '#3a7d44' }}
        >
          Request early access
        </button>
        <button
          onClick={() => handleScroll('features')}
          className="px-6 py-2.5 rounded-lg text-sm font-medium transition hover:opacity-80 border"
          style={{ borderColor: '#3a7d44', color: '#3a7d44' }}
        >
          See how it works
        </button>
      </div>
    </section>
  )
}
