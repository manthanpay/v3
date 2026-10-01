import { useState } from 'react'

export function Field({ f, value, error, onChange, onBlur }) {
  const [show, setShow] = useState(false)
  const id = `field-${f.k}`
  const change = (e) => {
    let v = e.target.value
    if (f.type === 'num') v = v.replace(/\D/g, '')
    if (f.upper) v = v.toUpperCase().replace(/\s/g, '')
    if (f.max) v = v.slice(0, f.max)
    onChange(v)
  }
  return <div className={`field ${error ? 'has-error' : ''}`}>
    <label htmlFor={id}>{f.label}</label>
    <div className="field-control">
      {f.options ? <select id={id} value={value} onBlur={onBlur} onChange={change} aria-invalid={!!error}>
        <option value="">Select {f.label}</option>
        {f.options.map((o) => <option key={o}>{o}</option>)}
      </select> : <input id={id} value={value} onBlur={onBlur} onChange={change} type={f.password && !show ? 'password' : 'text'} inputMode={f.type === 'num' ? 'numeric' : undefined} autoComplete="off" placeholder={f.ph} aria-invalid={!!error} />}
      {f.password && <button type="button" className="field-action" onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>}
    </div>
    {f.k === 'password' && value && <div className="password-meter"><span className={value.length >= 8 ? 'active' : ''}></span><span className={/[A-Z]/.test(value) && /\d/.test(value) ? 'active' : ''}></span><span className={/[^A-Za-z0-9]/.test(value) ? 'active' : ''}></span></div>}
    <div className="field-error" role="alert">{error}</div>
  </div>
}
