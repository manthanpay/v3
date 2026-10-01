// Manthan Pay domain rules. UI components consume these rules so validation stays
// independent from presentation and can later be backed by real API services.
export const V = {
  required: (l) => (v) => (String(v ?? '').trim() ? '' : `${l} is required`),
  name: (v) => /^[A-Za-z][A-Za-z .]{2,49}$/.test(String(v).trim()) ? '' : 'Enter your full name (letters only, min 3)',
  mobile: (v) => /^[6-9]\d{9}$/.test(String(v)) ? '' : 'Enter a valid 10-digit mobile number starting with 6-9',
  aadhaar: (v) => /^\d{12}$/.test(String(v)) ? '' : 'Aadhaar number must be 12 digits',
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v)) ? '' : 'Enter a valid email address',
  pan: (v) => /^[A-Z]{5}\d{4}[A-Z]$/.test(String(v).toUpperCase()) ? '' : 'PAN format: ABCDE1234F',
  password: (v) => /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(String(v)) ? '' : 'Min 8 characters with a letter and a number',
  mpin: (v) => /^\d{4}$/.test(String(v)) ? '' : 'MPIN must be 4 digits',
  account: (v) => /^\d{9,18}$/.test(String(v)) ? '' : 'Account number must be 9-18 digits',
  ifsc: (v) => /^[A-Z]{4}0[A-Z0-9]{6}$/.test(String(v).toUpperCase()) ? '' : 'IFSC format: SBIN0001234',
  vehicle: (v) => /^[A-Z]{2}\d{1,2}[A-Z]{0,3}\d{4}$/.test(String(v).toUpperCase().replace(/\s/g, '')) ? '' : 'Vehicle format: DL01AB1234',
  digits: (min, max, l) => (v) => new RegExp(`^\\d{${min},${max}}$`).test(String(v)) ? '' : `${l} must be ${min}-${max} digits`,
  amount: (min, max) => (v) => {
    const n = Number(v)
    if (!v) return 'Enter an amount'
    if (!Number.isFinite(n) || n < min) return `Minimum amount is ₹${min}`
    if (n > max) return `Maximum amount is ₹${max.toLocaleString('en-IN')}`
    return ''
  },
}

const amt = (max = 50000, min = 10) => ({ k: 'amount', label: 'Amount (₹)', type: 'num', validate: V.amount(min, max) })

export const SERVICES = {
  AEPS: {
    icon: '🖐️', accent: 'green', category: 'Assisted Banking',
    fields: [
      { k: 'no', label: 'Customer mobile number', type: 'num', max: 10, validate: V.mobile },
      { k: 'aadhaar', label: 'Aadhaar number', type: 'num', max: 12, validate: V.aadhaar },
      { k: 'op', label: 'Bank', options: ['State Bank of India', 'Bank of Baroda', 'HDFC Bank', 'ICICI Bank', 'Canara Bank'], validate: V.required('Bank') },
      amt(10000, 100),
    ],
  },
  'Money Transfer': {
    icon: '💸', accent: 'blue', category: 'Money Movement',
    fields: [
      { k: 'name', label: 'Beneficiary name', validate: V.name },
      { k: 'no', label: 'Account number', type: 'num', max: 18, validate: V.account },
      { k: 'ifsc', label: 'IFSC code', upper: true, max: 11, validate: V.ifsc },
      amt(25000, 100),
    ],
  },
  BBPS: {
    icon: '🧾', accent: 'orange', category: 'Bill Payments',
    fields: [
      { k: 'no', label: 'Consumer / bill number', type: 'num', max: 18, validate: V.digits(6, 18, 'Consumer number') },
      { k: 'op', label: 'Biller category', options: ['Electricity', 'Water', 'Gas', 'Broadband', 'Credit Card', 'Loan EMI'], validate: V.required('Biller category') },
      amt(100000, 10),
    ],
  },
  'Mobile Recharge': {
    icon: '📱', accent: 'orange', category: 'Recharge',
    fields: [
      { k: 'no', label: 'Mobile number', type: 'num', max: 10, validate: V.mobile },
      { k: 'op', label: 'Operator', options: ['Jio', 'Airtel', 'Vi', 'BSNL'], validate: V.required('Operator') },
      amt(5000),
    ],
  },
  DTH: {
    icon: '📡', accent: 'violet', category: 'Recharge',
    fields: [
      { k: 'no', label: 'Subscriber ID', type: 'num', max: 12, validate: V.digits(8, 12, 'Subscriber ID') },
      { k: 'op', label: 'Provider', options: ['Tata Play', 'Dish TV', 'Airtel Digital TV', 'Sun Direct'], validate: V.required('Provider') },
      amt(10000),
    ],
  },
  Electricity: {
    icon: '💡', accent: 'yellow', category: 'Utilities',
    fields: [
      { k: 'no', label: 'Consumer number', type: 'num', max: 14, validate: V.digits(8, 14, 'Consumer number') },
      { k: 'op', label: 'Board', options: ['BSES Rajdhani', 'Tata Power-DDL', 'MSEDCL', 'BESCOM'], validate: V.required('Board') },
      amt(100000, 50),
    ],
  },
  FASTag: {
    icon: '🚗', accent: 'green', category: 'Travel & Mobility',
    fields: [
      { k: 'no', label: 'Vehicle number', upper: true, max: 12, validate: V.vehicle },
      { k: 'op', label: 'Bank', options: ['ICICI', 'HDFC', 'Paytm', 'IDFC First', 'Airtel'], validate: V.required('Bank') },
      amt(10000, 100),
    ],
  },
  Insurance: {
    icon: '🛡️', accent: 'violet', category: 'Protection',
    fields: [
      { k: 'no', label: 'Policy / proposal number', type: 'num', max: 18, validate: V.digits(6, 18, 'Policy number') },
      { k: 'op', label: 'Insurance type', options: ['Life', 'Health', 'Motor', 'General'], validate: V.required('Insurance type') },
      amt(200000, 50),
    ],
  },
  'PAN Services': {
    icon: '🪪', accent: 'blue', category: 'Citizen Services',
    fields: [
      { k: 'name', label: 'Applicant name', validate: V.name },
      { k: 'no', label: 'Mobile number', type: 'num', max: 10, validate: V.mobile },
      { k: 'op', label: 'Request type', options: ['New PAN', 'PAN Correction', 'Reprint'], validate: V.required('Request type') },
      amt(5000, 50),
    ],
  },
}

export const INFO = [
  ['🖐️', 'AEPS', 'Aadhaar-enabled assisted banking at authorised retail touchpoints.'],
  ['💸', 'DMT', 'Domestic money transfer with beneficiary and bank-account validation.'],
  ['🧾', 'BBPS', 'Everyday bill collection across supported utility categories.'],
  ['📱', 'Recharge', 'Mobile and DTH recharge services for major operators.'],
  ['🏧', 'Micro ATM', 'Assisted banking capability for participating retail points.'],
  ['🛡️', 'Insurance', 'Life, health, motor and general insurance facilitation.'],
  ['🪪', 'PAN Services', 'PAN application and correction assistance.'],
  ['✈️', 'Travel', 'Travel and ticketing services through supported partners.'],
]

export const RATE = {
  AEPS: 0.006,
  'Money Transfer': 0.004,
  BBPS: 0.005,
  'Mobile Recharge': 0.025,
  DTH: 0.03,
  Electricity: 0.005,
  FASTag: 0.01,
  Insurance: 0.008,
  'PAN Services': 0.02,
}
