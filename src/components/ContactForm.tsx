import { useState, FormEvent, useRef } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "7719f48a-f889-4f51-bd6f-45c882a3f2e0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success === true) {
        setStatus('success');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 rounded-lg p-5 border border-emerald-200">
        <div className="bg-emerald-700/15 border border-emerald-700/30 rounded p-4 text-center">
          <p className="text-emerald-700 font-medium text-sm">Success!</p>
          <p className="text-emerald-600 text-xs mt-1">We'll be in touch about early access.</p>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="bg-emerald-50 rounded-lg p-5 border border-emerald-200">
      {status === 'error' && (
        <div className="bg-red-500/20 border border-red-500/30 rounded p-3 mb-4">
          <p className="text-red-400 text-xs">Something went wrong — please try again.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-2.5">
        <div>
          <label className="text-sm text-emerald-700 block mb-1">Full name :</label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-white border border-emerald-300 rounded px-2.5 py-2 text-sm text-emerald-950 placeholder-emerald-400 outline-none transition"
            placeholder="Jane Smith"
            disabled={status === 'submitting'}
          />
        </div>
        <div>
          <label className="text-sm text-emerald-700 block mb-1">Email address :</label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-white border border-emerald-300 rounded px-2.5 py-2 text-sm text-emerald-950 placeholder-emerald-400 outline-none transition"
            placeholder="jane@acme.com"
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="text-sm text-emerald-700 block mb-1">Message :  
		<span className = "text-xs text-emerald-700 italics"><i> Please Note: all serious inquires will be honored</i></span>
	</label>        
        <textarea
          name="message"
          required
          className="w-full bg-white border border-emerald-300 rounded px-2.5 py-2 text-sm text-emerald-950 placeholder-emerald-400 outline-none transition resize-none h-16"
          placeholder="Tell us how you plan to utilize the platform..."
          disabled={status === 'submitting'}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded font-medium text-sm transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send request'}
      </button>
    </form>
  );
}
