import { useState } from 'react'
import { ArrowDownToLine, ArrowUpRight, BadgeIndianRupee, Bell, ChevronRight, CircleUserRound, CreditCard, LayoutDashboard, LogOut, Plus, ReceiptText, ShieldCheck, WalletCards, X, CheckCircle2 } from 'lucide-react'
import { ValidatedForm } from '../../components/ValidatedForm.jsx'
import { Modal } from '../../components/Modal.jsx'
import { SERVICES, RATE, V } from '../../domain/businessRules.js'
import { demoTransactionService } from '../../services/demoTransactionService.js'

const inr = (n) => '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: 2 })

export default function PartnerDashboard({ user, update, logout, toast }) {
  const [tab, setTab] = useState('Mobile Recharge')
  const [pending, setPending] = useState(null)
  const [receipt, setReceipt] = useState(null)
  const svc = SERVICES[tab]
  const review = async (v) => {
    const a = Number(v.amount)
    if (a > user.wallet) return { amount: `Insufficient wallet balance (${inr(user.wallet)}). Add money first.` }
    setPending({ ...v, a, service: tab, commission: demoTransactionService.commission(a, RATE[tab]) })
  }
  const confirm = async () => {
    await new Promise((r) => setTimeout(r, 800))
    const p = pending
    const tx = demoTransactionService.create({ service: p.service, to: p.no, amount: p.a, commission: p.commission })
    update({ ...user, wallet: demoTransactionService.walletAfterPayment(user.wallet, p.a, p.commission), txns: [tx, ...user.txns] })
    setPending(null); setReceipt(tx)
  }
  const addMoney = async (v) => { await new Promise((r) => setTimeout(r, 600)); update({ ...user, wallet: user.wallet + Number(v.amount) }); toast(`${inr(v.amount)} added to wallet`) }
  const mpin = [{ k: 'mpin', label: 'Enter your 4-digit MPIN', password: true, type: 'num', max: 4, validate: (v) => !/^\d{4}$/.test(v) ? 'MPIN must be 4 digits' : user.mpin && v !== user.mpin ? 'Incorrect MPIN' : '' }]
  return <div className="dashboard-shell">
    <aside className="dash-sidebar"><div className="dash-brand"><img src="/logo.png" alt="Manthan Pay" /></div><div className="dash-nav"><button className="active"><LayoutDashboard /> Overview</button><button><CreditCard /> Services</button><button><ReceiptText /> Transactions</button><button><WalletCards /> Wallet</button><button><ShieldCheck /> Security</button></div><button className="logout-btn" onClick={logout}><LogOut /> Log out</button></aside>
    <div className="dash-main"><header className="dash-header"><div><span className="eyebrow">PARTNER CONSOLE</span><h1>Namaste, {user.name.split(' ')[0]} <span>👋</span></h1><p>{user.mobile} · PAN {user.pan}</p></div><div className="dash-actions"><button className="icon-btn"><Bell size={19} /></button><div className="avatar"><CircleUserRound size={21} /></div></div></header>
      <div className="dash-content"><section className="wallet-hero"><div><span>Available wallet balance</span><strong>{inr(user.wallet)}</strong><small>Demo partner balance</small></div><div className="wallet-actions"><button><Plus size={17} /> Add money</button><button className="light"><ArrowUpRight size={17} /> View ledger</button></div></section>
        <div className="dash-stats"><div><span>Transactions</span><b>{user.txns.length}</b><small>This account</small></div><div><span>Commission earned</span><b>{inr(user.txns.reduce((s, x) => s + x.commission, 0))}</b><small>All time</small></div><div><span>Account status</span><b className="status"><CheckCircle2 size={17} /> Active</b><small>Ready to transact</small></div></div>
        <div className="dash-layout"><section className="dash-panel payment-panel"><div className="panel-title"><div><span className="eyebrow">QUICK TRANSACTION</span><h2>Make a payment</h2></div><span className="secure-chip"><ShieldCheck size={15} /> Secure</span></div><div className="service-tabs">{Object.keys(SERVICES).map((k) => <button key={k} className={tab === k ? 'active' : ''} onClick={() => setTab(k)}><span>{SERVICES[k].icon}</span>{k}</button>)}</div><ValidatedForm key={tab} fields={svc.fields} submitLabel="Review payment" onSubmit={review} /></section>
          <aside className="dash-right"><section className="dash-panel"><div className="panel-title"><div><span className="eyebrow">WALLET</span><h2>Add money</h2></div><BadgeIndianRupee /></div><ValidatedForm fields={[{ k: 'amount', label: 'Amount (₹)', type: 'num', validate: V.amount(100, 50000) }]} submitLabel="Add to wallet" onSubmit={addMoney} /></section><section className="dash-panel"><div className="panel-title"><div><span className="eyebrow">ACTIVITY</span><h2>Recent transactions</h2></div><ArrowDownToLine /></div>{user.txns.length === 0 ? <div className="empty-state"><ReceiptText size={30} /><p>No transactions yet.</p><span>Your completed payments will appear here.</span></div> : <ul className="transaction-list">{user.txns.slice(0, 6).map((x) => <li key={x.id}><span className="txn-icon">{SERVICES[x.service]?.icon || '₹'}</span><div><b>{x.service}</b><small>{x.to} · {x.date}</small></div><div className="txn-amount"><b>-{inr(x.amount)}</b><small>+{inr(x.commission)}</small></div></li>)}</ul>}</section></aside></div>
      </div>
    </div>
    {pending && <Modal onClose={() => setPending(null)}><div className="confirm-modal"><span className="eyebrow">REVIEW TRANSACTION</span><h2>Ready to send?</h2><p>Check the details before confirming with your MPIN.</p><dl className="summary"><dt>Service</dt><dd>{pending.service}</dd><dt>To</dt><dd>{pending.no}</dd><dt>Amount</dt><dd>{inr(pending.a)}</dd><dt>Your commission</dt><dd className="positive">+{inr(pending.commission)}</dd></dl><ValidatedForm fields={mpin} submitLabel="Confirm & pay" onSubmit={confirm} extra={<button type="button" className="btn btn-light btn-full" onClick={() => setPending(null)}><X size={17} /> Cancel</button>} /></div></Modal>}
    {receipt && <Modal onClose={() => setReceipt(null)}><div className="receipt-modal"><div className="success-mark"><CheckCircle2 size={35} /></div><span className="eyebrow">PAYMENT COMPLETE</span><h2>Transaction successful</h2><p>Your payment has been recorded in the demo ledger.</p><dl className="summary"><dt>Service</dt><dd>{receipt.service}</dd><dt>To</dt><dd>{receipt.to}</dd><dt>Amount</dt><dd>{inr(receipt.amount)}</dd><dt>Commission</dt><dd className="positive">+{inr(receipt.commission)}</dd><dt>Reference</dt><dd>{receipt.id}</dd></dl><button className="btn btn-primary btn-full" onClick={() => setReceipt(null)}>Done <ChevronRight size={17} /></button></div></Modal>}
  </div>
}
