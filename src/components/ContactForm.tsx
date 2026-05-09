import { useState, FormEvent, useRef } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

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
      <div className="rounded-lg p-5 border" style={{ backgroundColor: 'rgba(58, 125, 68, 0.08)', borderColor: 'rgba(58, 125, 68, 0.2)' }}>
        <div className="rounded p-4 text-center border" style={{ backgroundColor: 'rgba(58, 125, 68, 0.15)', borderColor: 'rgba(58, 125, 68, 0.3)' }}>
          <p className="font-medium text-sm" style={{ color: '#3a7d44' }}>Success!</p>
          <p className="text-xs mt-1" style={{ color: '#4a5a50' }}>We'll be in touch about early access.</p>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="rounded-lg p-5 border" style={{ backgroundColor: 'rgba(58, 125, 68, 0.04)', borderColor: 'rgba(58, 125, 68, 0.15)' }}>
      {status === 'error' && (
        <div className="rounded p-3 mb-4 border" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
          <p className="text-xs" style={{ color: '#dc2626' }}>Something went wrong — please try again.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-2.5">
        <div>
          <label className="text-sm block mb-1" style={{ color: '#3a7d44' }}>Full name :</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border rounded px-2.5 py-2 text-sm placeholder-opacity-50 outline-none transition"
            style={{ backgroundColor: '#ffffff', borderColor: 'rgba(58, 125, 68, 0.2)', color: '#1a1a1a' }}
            placeholder="Jane Smith"
            disabled={status === 'submitting'}
          />
        </div>
        <div>
          <label className="text-sm block mb-1" style={{ color: '#3a7d44' }}>Email address :</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded px-2.5 py-2 text-sm placeholder-opacity-50 outline-none transition"
            style={{ backgroundColor: '#ffffff', borderColor: 'rgba(58, 125, 68, 0.2)', color: '#1a1a1a' }}
            placeholder="jane@acme.com"
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="text-sm block mb-1" style={{ color: '#3a7d44' }}>Message : 
          <span className="text-xs italics ml-1" style={{ color: '#3a7d44' }}><i> Please Note: all serious inquires will be honored</i></span>
        </label>        
        <textarea
          name="message"
          required
          className="w-full border rounded px-2.5 py-2 text-sm placeholder-opacity-50 outline-none transition resize-none h-16"
          style={{ backgroundColor: '#ffffff', borderColor: 'rgba(58, 125, 68, 0.2)', color: '#1a1a1a' }}
          placeholder="Tell us how you plan to utilize the platform..."
          disabled={status === 'submitting'}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full text-white py-2 rounded font-medium text-sm transition"
        style={{ 
          backgroundColor: status === 'submitting' ? 'rgba(58, 125, 68, 0.7)' : '#3a7d44',
          opacity: status === 'submitting' ? 0.7 : 1,
          cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
        }}
      >
        {status === 'submitting' ? 'Sending...' : 'Send request'}
      </button>
    </form>
  );
}
