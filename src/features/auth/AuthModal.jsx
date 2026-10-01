import { useState } from 'react'
import { Brand } from '../../components/Brand.jsx'
import { ValidatedForm } from '../../components/ValidatedForm.jsx'
import { Modal } from '../../components/Modal.jsx'
import { V } from '../../domain/businessRules.js'
import { demoAuthService } from '../../services/demoAuthService.js'

const users = () => demoAuthService.users()
const REG = [
  { k: 'name', label: 'Full name', validate: V.name },
  { k: 'mobile', label: 'Mobile number', type: 'num', max: 10, validate: V.mobile },
  { k: 'email', label: 'Email', validate: V.email },
  { k: 'pan', label: 'PAN number', upper: true, max: 10, ph: 'ABCDE1234F', validate: V.pan },
  { k: 'password', label: 'Password', password: true, validate: V.password },
  { k: 'mpin', label: 'Set 4-digit MPIN', password: true, type: 'num', max: 4, validate: (v) => /^\d{4}$/.test(v) ? '' : 'MPIN must be 4 digits' },
  { k: 'confirm', label: 'Confirm password', password: true, validate: (v, all) => v && v === all.password ? '' : 'Passwords do not match' },
]
const LOGIN = [
  { k: 'mobile', label: 'Mobile number', type: 'num', max: 10, validate: V.mobile },
  { k: 'password', label: 'Password', password: true, validate: V.required('Password') },
]

export default function AuthModal({ start, onClose, onDone }) {
  const [mode, setMode] = useState(start)
  const [agree, setAgree] = useState(false)
  const [agreeErr, setAgreeErr] = useState('')
  const register = async (v) => {
    if (!agree) { setAgreeErr('Accept the terms to continue'); return {} }
    if (users().some((u) => u.mobile === v.mobile)) return { mobile: 'This mobile number is already registered' }
    const u = { name: v.name.trim(), mobile: v.mobile, email: v.email, pan: v.pan.toUpperCase(), password: v.password, mpin: v.mpin, wallet: 500, txns: [] }
    demoAuthService.register(u)
    onDone(u)
  }
  const login = async (v) => {
    const u = users().find((x) => x.mobile === v.mobile)
    if (!u) return { mobile: 'No account found. Please sign up first' }
    if (u.password !== v.password) return { password: 'Incorrect password' }
    onDone(u)
  }
  return <Modal onClose={onClose}>
    <div className="auth-brand"><Brand height={48} /></div>
    <div className="auth-heading"><span>Partner access</span><h2>{mode === 'login' ? 'Welcome back' : 'Build your digital service point'}</h2><p>{mode === 'login' ? 'Continue managing your Manthan Pay business.' : 'Open your free demo partner account in minutes.'}</p></div>
    <div className="auth-tabs">{['login', 'signup'].map((m) => <button key={m} className={mode === m ? 'active' : ''} onClick={() => setMode(m)}>{m === 'login' ? 'Log in' : 'Create account'}</button>)}</div>
    {mode === 'login' ? <ValidatedForm key="login" fields={LOGIN} submitLabel="Log in securely" onSubmit={login} /> : <ValidatedForm key="signup" fields={REG} submitLabel="Create partner account" onSubmit={register} extra={<div className="terms"><label><input type="checkbox" checked={agree} onChange={(e) => { setAgree(e.target.checked); setAgreeErr('') }} /> I agree to the Terms and Privacy Policy</label><div className="field-error">{agreeErr}</div></div>} />}
    <p className="demo-note">Demo mode: accounts are stored in this browser only. New accounts receive ₹500 demo wallet balance.</p>
  </Modal>
}
