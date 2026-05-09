import { ContactForm } from './ContactForm'

export function ContactSection() {
  return (
    <section id="contact" className="w-full border-t py-12" style={{ borderColor: 'rgba(58, 125, 68, 0.2)', backgroundColor: '#f7faf7' }} aria-labelledby="contact-heading">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="flex flex-col gap-8">
          <div>
            <h2 id="contact-heading" className="text-xl font-medium mb-2.5" style={{ color: '#1a1a1a' }}>Request early access</h2>
            <p className="text-sm mb-5 leading-relaxed mx-auto max-w-lg" style={{ color: '#4a5a50' }}>
              GrowMyStock is in private preview. Leave your details and we&apos;ll be in touch about getting you set up.
            </p>
          </div>
          <div className="w-full max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
