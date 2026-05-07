import { useContactForm } from '../hooks/useContactForm'

export function ContactForm() {
  const { fields, setFields, errors, status, submit } = useContactForm()

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 rounded-lg p-5 border border-emerald-200">
        <div className="bg-emerald-700/15 border border-emerald-700/30 rounded p-4 text-center">
          <p className="text-emerald-700 font-medium text-sm">Success!</p>
          <p className="text-emerald-600 text-xs mt-1">We&apos;ll be in touch about early access.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="bg-emerald-50 rounded-lg p-5 border border-emerald-200">
      {status === 'error' && (
        <div className="bg-red-500/20 border border-red-500/30 rounded p-3 mb-4">
          <p className="text-red-400 text-xs">Something went wrong — please try again.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-2.5">
        <div>
          <label className="text-xs text-emerald-700 block mb-1">Full name</label>
          <input
            type="text"
            className={`w-full bg-white border rounded px-2.5 py-2 text-sm text-emerald-950 placeholder-emerald-400 outline-none transition ${
              errors.name ? 'border-red-500' : 'border-emerald-300'
            }`}
            placeholder="Jane Smith"
            value={fields.name}
            onChange={(e) => setFields({ ...fields, name: e.target.value })}
          />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="text-xs text-emerald-700 block mb-1">Email address</label>
          <input
            type="email"
            className={`w-full bg-white border rounded px-2.5 py-2 text-sm text-emerald-950 placeholder-emerald-400 outline-none transition ${
              errors.email ? 'border-red-500' : 'border-emerald-300'
            }`}
            placeholder="jane@acme.com"
            value={fields.email}
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
          />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="mb-2.5">
        <label className="text-xs text-emerald-700 block mb-1">Company (optional)</label>
        <input
          type="text"
          className="w-full bg-white border border-emerald-300 rounded px-2.5 py-2 text-sm text-emerald-950 placeholder-emerald-400 outline-none transition"
          placeholder="Acme Capital"
          value={fields.company}
          onChange={(e) => setFields({ ...fields, company: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="text-xs text-emerald-700 block mb-1">Message</label>
        <textarea
          className={`w-full bg-white border rounded px-2.5 py-2 text-sm text-emerald-950 placeholder-emerald-400 outline-none transition resize-none h-16 ${
            errors.message ? 'border-red-500' : 'border-emerald-300'
          }`}
          placeholder="Tell us how you invest today..."
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
        />
        {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded font-medium text-sm transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send request'}
      </button>
    </form>
  )
}
