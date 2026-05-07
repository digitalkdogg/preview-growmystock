import { ContactForm } from './ContactForm'

export function ContactSection() {
  return (
    <div id="contact" className="px-8 py-12 border-t border-emerald-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-medium text-emerald-950 mb-2.5">Request early access</h2>
          <p className="text-sm text-emerald-700 mb-5 leading-relaxed">
            GrowMyStock is in private preview. Leave your details and we&apos;ll be in touch about getting you set up.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-sm text-emerald-700">
              <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0" />
              <span>No credit card required for preview</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-emerald-700">
              <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0" />
              <span>Personalized onboarding session</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-emerald-700">
              <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0" />
              <span>Priority access for early registrants</span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
