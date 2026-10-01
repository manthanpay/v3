import {
  ArrowUpRight,
  Fingerprint,
  ReceiptIndianRupee,
  Smartphone,
  Tv2,
  Zap,
  Send,
  ShieldCheck,
  TrainFront,
  FileBadge2,
  CreditCard,
} from "lucide-react";

const cards = [
  [
    "AEPS",
    "Aadhaar banking",
    Fingerprint,
    "Assisted cash withdrawal, balance enquiry & mini statement",
    "aeps",
  ],
  [
    "DMT",
    "Money transfer",
    Send,
    "Domestic money movement with validated beneficiary details",
    "dmt",
  ],
  [
    "BBPS",
    "Bill payments",
    ReceiptIndianRupee,
    "Electricity, water, gas, broadband and supported billers",
    "bbps",
  ],
  [
    "Recharge",
    "Mobile & DTH",
    Smartphone,
    "Prepaid, postpaid and DTH recharge flows",
    "recharge",
  ],
  [
    "Micro ATM",
    "Assisted banking",
    CreditCard,
    "Extend assisted banking capability to participating outlets",
    "atm",
  ],
  [
    "Insurance",
    "Protection",
    ShieldCheck,
    "Life, health, motor and general insurance facilitation",
    "insurance",
  ],
  [
    "PAN Services",
    "Citizen services",
    FileBadge2,
    "New PAN, correction and reprint assistance",
    "pan",
  ],
  [
    "Utilities",
    "Everyday payments",
    Zap,
    "Utility collections built around simple customer journeys",
    "utility",
  ],
  [
    "Travel",
    "Tickets & journeys",
    TrainFront,
    "Travel services through enabled provider integrations",
    "travel",
  ],
  [
    "DTH",
    "Entertainment",
    Tv2,
    "Recharge major DTH operators from the same workspace",
    "dth",
  ],
];

export function ServiceCatalog({ onAuth }) {
  return (
    <section id="services" className="section services-v5">
      <div className="container">
        <div className="section-head-v5">
          <div>
            <span className="eyebrow">THE SERVICE STACK</span>
            <h2>
              Everything your counter needs,
              <br />
              <em>without the clutter.</em>
            </h2>
          </div>
          <p>
            Organise services the way a real retailer works: banking first,
            payments next, then everyday utility and value-added services.
          </p>
        </div>
        <div className="service-grid-v5">
          {cards.map(([title, sub, Icon, copy, tone], index) => (
            <article className={`service-card-v5 tone-${tone}`} key={title}>
              <div className="service-number">0{index + 1}</div>
              <div className="service-icon-v5">
                <Icon size={23} />
              </div>
              <span>{sub}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <button onClick={() => onAuth("signup")}>
                Explore service <ArrowUpRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
