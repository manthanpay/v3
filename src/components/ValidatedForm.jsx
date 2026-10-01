import { useState } from 'react'
import { Field } from './Field.jsx'

export function ValidatedForm({ fields, submitLabel, onSubmit, extra, className = '' }) {
  const [vals, setVals] = useState({})
  const [errs, setErrs] = useState({})
  const [busy, setBusy] = useState(false)
  const check = (f, v = vals[f.k] ?? '') => f.validate(v, vals)
  const set = (f, v) => {
    setVals((s) => ({ ...s, [f.k]: v }))
    if (errs[f.k]) setErrs((s) => ({ ...s, [f.k]: '' }))
  }
  const submit = async (e) => {
    e.preventDefault()
    const next = {}
    fields.forEach((f) => { const m = check(f); if (m) next[f.k] = m })
    setErrs(next)
    if (Object.keys(next).length) {
      document.getElementById(`field-${fields.find((f) => next[f.k]).k}`)?.focus()
      return
    }
    setBusy(true)
    const err = await onSubmit(vals)
    setBusy(false)
    if (err) setErrs(err)
    else { setVals({}); setErrs({}) }
  }
  return <form className={className} onSubmit={submit} noValidate>
    {fields.map((f) => <Field key={f.k} f={f} value={vals[f.k] ?? ''} error={errs[f.k]} onChange={(v) => set(f, v)} onBlur={() => setErrs((s) => ({ ...s, [f.k]: check(f) }))} />)}
    {extra}
    <button className="btn btn-primary btn-full" disabled={busy}>{busy ? 'Processing…' : submitLabel}</button>
  </form>
}
