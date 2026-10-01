export function Modal({ children, onClose, wide = false }) {
  return <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
    <div className={`modal-card ${wide ? 'modal-wide' : ''}`} role="dialog" aria-modal="true">
      <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
      {children}
    </div>
  </div>
}
