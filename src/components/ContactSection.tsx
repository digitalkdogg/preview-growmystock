import { ContactForm } from './ContactForm'

export function ContactSection() {
  return (
    <div id="contact" className="w-full border-t py-12" style={{ borderColor: 'rgba(58, 125, 68, 0.2)', backgroundColor: '#f7faf7' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-medium mb-2.5" style={{ color: '#1a1a1a' }}>Request early access</h2>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: '#4a5a50' }}>
              GrowMyStock is in private preview. Leave your details and we&apos;ll be in touch about getting you set up.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-sm" style={{ color: '#4a5a50' }}>
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#3a7d44' }} />
                <span>No credit card required for preview</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm" style={{ color: '#4a5a50' }}>
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#3a7d44' }} />
                <span>Personalized onboarding session</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm" style={{ color: '#4a5a50' }}>
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#3a7d44' }} />
                <span>Priority access for early registrants</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
