import { useEffect, useMemo, useState } from "react";
import { asset } from "../../utils/assets";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CirclePlay,
  Fingerprint,
  Headphones,
  LockKeyhole,
  MapPinned,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WalletCards,
  TrendingUp,
  UsersRound,
  Building2,
  IndianRupee,
  Zap,
  ReceiptText,
  LifeBuoy,
  Play,
  Plus,
  Minus,
} from "lucide-react";
import { ServiceCatalog } from "./ServiceCatalog.jsx";
import { useTranslation } from "../../i18n/I18nContext";

const states = [
  ["Delhi", "North"],
  ["Haryana", "North"],
  ["Punjab", "North"],
  ["Rajasthan", "West"],
  ["Uttar Pradesh", "North"],
  ["Bihar", "East"],
  ["Jharkhand", "East"],
  ["West Bengal", "East"],
  ["Madhya Pradesh", "Central"],
  ["Gujarat", "West"],
  ["Maharashtra", "West"],
  ["Chhattisgarh", "Central"],
  ["Odisha", "East"],
  ["Telangana", "South"],
  ["Karnataka", "South"],
  ["Tamil Nadu", "South"],
];

export default function HomePage({ onAuth }) {
  const { t } = useTranslation();

  const stories = [
    {
      src: "/media/mehedi-hasan-slpCt9HjKug-unsplash.jpg",
      kicker: t("stories.story1.kicker"),
      title: t("stories.story1.title"),
      copy: t("stories.story1.copy"),
    },
    {
      src: "/media/pexels-sachinmamtora-16244263.jpg",
      kicker: t("stories.story2.kicker"),
      title: t("stories.story2.title"),
      copy: t("stories.story2.copy"),
    },
    {
      src: "/media/pexels-satyabrata-maiti-258455945-19224038.jpg",
      kicker: t("stories.story3.kicker"),
      title: t("stories.story3.title"),
      copy: t("stories.story3.copy"),
    },
  ];

  const faqs = [
    [t("faq.q1.question"), t("faq.q1.answer")],
    [t("faq.q2.question"), t("faq.q2.answer")],
    [t("faq.q3.question"), t("faq.q3.answer")],
    [t("faq.q4.question"), t("faq.q4.answer")],
  ];

  const testimonials = [
    [
      t("testimonials.items.ramesh.name"),
      t("testimonials.items.ramesh.role"),
      t("testimonials.items.ramesh.quote"),
    ],
    [
      t("testimonials.items.sanjay.name"),
      t("testimonials.items.sanjay.role"),
      t("testimonials.items.sanjay.quote"),
    ],
    [
      t("testimonials.items.neha.name"),
      t("testimonials.items.neha.role"),
      t("testimonials.items.neha.quote"),
    ],
  ];
  const heroSlides = [
    {
      image: asset("/banners-v5/hero-rural-bharat.jpg"),
      eyebrow: t("heroSlides.slide1.eyebrow"),
      title: (
        <>
          {t("heroSlides.slide1.title")}{" "}
          <strong>{t("heroSlides.slide1.titleAccent")}</strong>
        </>
      ),
      copy: t("heroSlides.slide1.copy"),
      stat: t("heroSlides.slide1.stat"),
      statCopy: t("heroSlides.slide1.statCopy"),
    },

    {
      image: asset("/banners-v5/hero-women-digital-seva.jpg"),
      eyebrow: t("heroSlides.slide2.eyebrow"),
      title: (
        <>
          {t("heroSlides.slide2.title")}{" "}
          <strong>{t("heroSlides.slide2.titleAccent")}</strong>
        </>
      ),
      copy: t("heroSlides.slide2.copy"),
      stat: t("heroSlides.slide2.stat"),
      statCopy: t("heroSlides.slide2.statCopy"),
    },

    {
      image: asset("/banners-v5/hero-community-banking.jpg"),
      eyebrow: t("heroSlides.slide3.eyebrow"),
      title: (
        <>
          {t("heroSlides.slide3.title")}{" "}
          <strong>{t("heroSlides.slide3.titleAccent")}</strong>
        </>
      ),
      copy: t("heroSlides.slide3.copy"),
      stat: t("heroSlides.slide3.stat"),
      statCopy: t("heroSlides.slide3.statCopy"),
    },
  ];

  const [hero, setHero] = useState(0);
  const [story, setStory] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [stateFilter, setStateFilter] = useState("All");
  const currentHero = heroSlides[hero];
  const currentStory = stories[story];
  const regions = ["All", "North", "West", "Central", "East", "South"];
  const visibleStates = useMemo(
    () =>
      stateFilter === "All"
        ? states
        : states.filter(([, region]) => region === stateFilter),
    [stateFilter],
  );

  useEffect(() => {
    const id = setInterval(
      () => setHero((s) => (s + 1) % heroSlides.length),
      7000,
    );
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    const id = setInterval(
      () => setStory((s) => (s + 1) % stories.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <main id="top">
      <section className="hero-v5">
        <div
          className="hero-v5-media"
          style={{
            backgroundImage: `linear-gradient(90deg,rgba(3,23,39,.95) 0%,rgba(3,23,39,.83) 28%,rgba(3,23,39,.24) 62%,rgba(3,23,39,.1) 100%),url("${currentHero.image}")`,
          }}
        />
        <div className="hero-v5-noise" />
        <div className="container hero-v5-content">
          <div className="hero-v5-copy">
            <span className="hero-kicker">
              <Sparkles size={14} /> {currentHero.eyebrow}
            </span>
            <h1>{currentHero.title}</h1>
            <p>{currentHero.copy}</p>
            <div className="hero-v5-actions">
              <button
                className="btn btn-primary"
                onClick={() => onAuth("signup")}
              >
                {t("hero.primary")} <ArrowRight size={17} />
              </button>
              <button
                className="btn btn-ghost-light"
                onClick={() => setVideoOpen(true)}
              >
                <CirclePlay size={18} /> {t("hero.watchTutorial")}
              </button>
            </div>
            <div className="hero-v5-trust">
              <span>
                <ShieldCheck /> {t("heroTrust.secure")}
              </span>
              <span>
                <UsersRound /> {t("heroTrust.retailer")}
              </span>
              <span>
                <MapPinned /> {t("heroTrust.bharat")}
              </span>
            </div>
          </div>
          <div className="hero-v5-panel">
            <div className="live-pill">
              <i /> {t("heroPanel.experience")}
            </div>
            <div className="hero-panel-stat">
              <span>01</span>
              <b>{currentHero.stat}</b>
              <small>{currentHero.statCopy}</small>
            </div>
            <div className="hero-panel-divider" />
            <div className="mini-service-list">
              <div>
                <Fingerprint />
                <span>AEPS</span>
              </div>
              <div>
                <ReceiptText />
                <span>BBPS</span>
              </div>
              <div>
                <Smartphone />
                <span>Recharge</span>
              </div>
              <div>
                <WalletCards />
                <span>Wallet</span>
              </div>
            </div>
            <button
              className="panel-link"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("heroPanel.explore")} <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
        <div className="container hero-v5-bottom">
          <div className="hero-dots">
            {heroSlides.map((s, i) => (
              <button
                key={s.eyebrow}
                className={i === hero ? "active" : ""}
                onClick={() => setHero(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <span>{String(hero + 1).padStart(2, "0")} / 03 · MANTHAN PAY</span>
        </div>
      </section>

      <section className="service-rail-v5">
        <div className="container rail-inner">
          <div className="rail-intro">
            <small>{t("serviceRail.core")}</small>
            <b>{t("serviceRail.services")}</b>
          </div>
          {[
            "AEPS",
            "DMT",
            "BBPS",
            "Mobile Recharge",
            "DTH",
            "Micro ATM",
            "Insurance",
            "PAN",
            "Utilities",
          ].map((x, i) => (
            <a key={x} href="#services">
              <span className={`rail-icon r${i}`} />
              {x}
            </a>
          ))}
          <a className="rail-more" href="#services">
            {t("serviceRail.viewAll")} <ArrowRight size={14} />
          </a>
        </div>
      </section>

      <section className="trust-strip-v5">
        <div className="container trust-strip-grid">
          <div>
            <ShieldCheck />
            <span>
              <b>{t("trust.secure.title")}</b>
              <small>{t("trust.secure.description")}</small>
            </span>
          </div>
          <div>
            <Zap />
            <span>
              <b>{t("trust.fast.title")}</b>
              <small>{t("trust.fast.description")}</small>
            </span>
          </div>
          <div>
            <Headphones />
            <span>
              <b>{t("trust.support.title")}</b>
              <small>{t("trust.support.description")}</small>
            </span>
          </div>
          <div>
            <TrendingUp />
            <span>
              <b>{t("trust.scale.title")}</b>
              <small>{t("trust.scale.description")}</small>
            </span>
          </div>
        </div>
      </section>

      <section className="section manifesto-v5">
        <div className="container manifesto-grid">
          <div>
            <span className="eyebrow">{t("manifesto.eyebrow")}</span>
            <h2>
              {t("manifesto.title")} <em>{t("manifesto.titleAccent")}</em>
            </h2>
            <p>{t("manifesto.description")}</p>
            <div className="manifesto-points">
              <span>
                <CheckCircle2 /> {t("manifesto.points.partner")}
              </span>
              <span>
                <CheckCircle2 /> {t("manifesto.points.workflow")}
              </span>
              <span>
                <CheckCircle2 /> {t("manifesto.points.validation")}
              </span>
              <span>
                <CheckCircle2 /> {t("manifesto.points.bharat")}
              </span>
            </div>
            <button className="text-link" onClick={() => onAuth("signup")}>
              {t("manifesto.button")} <ArrowRight size={16} />
            </button>
          </div>
          <div className="manifesto-visual">
            <img
              src={asset("/banners-v5/campaign-banking.jpg")}
              alt="Indian retailer serving a customer"
            />
            <div className="floating-note">
              <IndianRupee />
              <b>{t("manifesto.floatingTitle")}</b>
              <small>{t("manifesto.floatingDescription")}</small>
            </div>
          </div>
        </div>
      </section>

      <ServiceCatalog onAuth={onAuth} />

      <section id="tutorial" className="section tutorial-v5">
        <div className="container tutorial-grid-v5">
          <div className="tutorial-video" onClick={() => setVideoOpen(true)}>
            <img
              src={asset("/media/aeps-tutorial-poster.jpg")}
              alt="AEPS tutorial preview"
            />
            <div className="video-shade" />
            <button className="video-play">
              <Play fill="currentColor" size={23} />
            </button>
            <div className="video-meta">
              <span>{t("tutorial.badge")}</span>
              <b>{t("tutorial.videoTitle")}</b>
              <small>{t("tutorial.videoDescription")}</small>
            </div>
          </div>
          <div className="tutorial-copy-v5">
            <span className="eyebrow">{t("tutorial.eyebrow")}</span>
            <h2>
              {t("tutorial.title")} <em>{t("tutorial.titleAccent")}</em>
            </h2>
            <p>{t("tutorial.description")}</p>
            <div className="tutorial-steps">
              <div>
                <span>01</span>
                <b>{t("tutorial.steps.customer.title")}</b>
                <small>{t("tutorial.steps.customer.description")}</small>
              </div>
              <div>
                <span>02</span>
                <b>{t("tutorial.steps.verify.title")}</b>
                <small>{t("tutorial.steps.verify.description")}</small>
              </div>
              <div>
                <span>03</span>
                <b>{t("tutorial.steps.complete.title")}</b>
                <small>{t("tutorial.steps.complete.description")}</small>
              </div>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => setVideoOpen(true)}
            >
              {t("tutorial.button")} <CirclePlay size={17} />
            </button>
          </div>
        </div>
      </section>

      <section className="section footprint-v5" id="network">
        <div className="container">
          <div className="footprint-head">
            <div>
              <span className="eyebrow">{t("network.eyebrow")}</span>
              <h2>
                {t("network.title")} <em>{t("network.titleAccent")}</em>
              </h2>
              <p>{t("network.description")}</p>
            </div>
            <div className="footprint-count">
              <span>16</span>
              <small>featured states</small>
              <b>and growing</b>
            </div>
          </div>
          <div className="footprint-panel">
            <div className="map-v5">
              <div className="map-orbit o1" />
              <div className="map-orbit o2" />
              <img
                src={asset("/images/india-states.png")}
                alt="Stylised India network map"
              />
              {[
                ["Delhi", 52, 24],
                ["Punjab", 45, 18],
                ["Rajasthan", 38, 34],
                ["UP", 59, 33],
                ["Bihar", 70, 37],
                ["Gujarat", 35, 54],
                ["MP", 51, 48],
                ["Maharashtra", 48, 64],
                ["Odisha", 73, 60],
                ["Telangana", 60, 72],
                ["Karnataka", 48, 81],
                ["Tamil Nadu", 57, 91],
              ].map(([name, x, y]) => (
                <span
                  className="map-node-v5"
                  key={name}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  title={name}
                >
                  <i />
                </span>
              ))}
              <div className="map-caption">
                <MapPinned size={15} /> {t("network.growingAcross")}
              </div>
            </div>
            <div className="state-list-v5">
              <div className="state-list-head">
                <span>
                  <Building2 size={15} /> {t("network.view")}
                </span>
                <small>{t("network.manualUpdate")}</small>
              </div>
              <div className="region-tabs">
                {regions.map((r) => (
                  <button
                    key={r}
                    className={r === stateFilter ? "active" : ""}
                    onClick={() => setStateFilter(r)}
                  >
                    {t(`regions.${r.toLowerCase()}`)}
                  </button>
                ))}
              </div>
              <div className="states-grid-v5">
                {visibleStates.map(([name, region]) => (
                  <div className="state-item-v5" key={name}>
                    <i />
                    <div>
                      <b>{name}</b>
                      <small>{t(`regions.${region.toLowerCase()}`)}</small>
                    </div>
                    <CheckCircle2 size={16} />
                  </div>
                ))}
              </div>
              <div className="growth-note">
                <TrendingUp size={18} />
                <span>
                  <b>{t("network.stillGrowing")}</b>
                  <small>{t("network.expansion")}</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section campaign-v5">
        <div className="container">
          <div className="section-head-v5">
            <div>
              <span className="eyebrow">{t("campaign.eyebrow")}</span>
              <h2>
                {t("campaign.title")} <em>{t("campaign.titleAccent")}</em>
              </h2>
            </div>
          </div>
          <div className="campaign-grid-v5">
            <article>
              <img
                src={asset("/banners-v5/campaign-retailer-growth.jpg")}
                alt="Retailer growth in an Indian village"
              />
              <div>
                <span>{t("campaign.card1.eyebrow")}</span>
                <h3>{t("campaign.card1.title")}</h3>
                <button onClick={() => onAuth("signup")}>
                  {t("campaign.card1.button")} <ArrowRight size={15} />
                </button>
              </div>
            </article>
            <article>
              <img
                src={asset("/banners-v5/campaign-trust.jpg")}
                alt="Trust and community"
              />
              <div>
                <span>{t("campaign.card2.eyebrow")}</span>
                <h3>{t("campaign.card2.title")}</h3>
                <button
                  onClick={() =>
                    document
                      .getElementById("stories")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("campaign.card2.button")} <ArrowRight size={15} />
                </button>
              </div>
            </article>
            <article>
              <img
                src={asset("/banners-v5/campaign-digital-bharat.jpg")}
                alt="Digital network across Bharat"
              />
              <div>
                <span>{t("campaign.card3.eyebrow")}</span>
                <h3>{t("campaign.card3.title")}</h3>
                <button
                  onClick={() =>
                    document
                      .getElementById("network")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("campaign.card3.button")} <ArrowRight size={15} />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section stories-v5" id="stories">
        <div className="container">
          <div className="stories-stage">
            <div className="stories-image">
              <img
                src={asset(currentStory.src)}
                alt="Indian community and digital service story"
              />
            </div>
            <div className="stories-copy">
              <span>{currentStory.kicker}</span>
              <h2>{currentStory.title}</h2>
              <p>{currentStory.copy}</p>
              <div className="story-actions">
                <button
                  onClick={() =>
                    setStory((story - 1 + stories.length) % stories.length)
                  }
                  aria-label={t("stories.previous")}
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() => setStory((story + 1) % stories.length)}
                  aria-label={t("stories.next")}
                >
                  <ChevronRight />
                </button>
                <small>
                  {String(story + 1).padStart(2, "0")} /{" "}
                  {String(stories.length).padStart(2, "0")}
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section how-v5">
        <div className="container">
          <div className="section-head-v5">
            <div>
              <span className="eyebrow">{t("howItWorks.eyebrow")}</span>
              <h2>
                {t("howItWorks.title")} <em>{t("howItWorks.titleAccent")}</em>
              </h2>
            </div>
            <p>{t("howItWorks.description")}</p>
          </div>
          <div className="how-grid-v5">
            <div>
              <span>01</span>
              <Smartphone />
              <h3>{t("howItWorks.onboard.title")}</h3>
              <p>{t("howItWorks.onboard.description")}</p>
            </div>
            <div>
              <span>02</span>
              <ShieldCheck />
              <h3>{t("howItWorks.activate.title")}</h3>
              <p>{t("howItWorks.activate.description")}</p>
            </div>
            <div>
              <span>03</span>
              <WalletCards />
              <h3>{t("howItWorks.transact.title")}</h3>
              <p>{t("howItWorks.transact.description")}</p>
            </div>
            <div>
              <span>04</span>
              <ReceiptText />
              <h3>{t("howItWorks.reconcile.title")}</h3>
              <p>{t("howItWorks.reconcile.description")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-v5">
        <div className="container">
          <div className="section-head-v5">
            <div>
              <span className="eyebrow">{t("testimonials.eyebrow")}</span>
              <h2>
                {t("testimonials.title")}{" "}
                <em>{t("testimonials.titleAccent")}</em>
              </h2>
            </div>
          </div>
          <div className="testimonial-grid-v5">
            {testimonials.map(([name, role, quote]) => (
              <article key={name}>
                <div className="quote-mark">“</div>
                <p>{quote}</p>
                <div className="person">
                  <span>
                    {name
                      .split(" ")
                      .map((x) => x[0])
                      .join("")}
                  </span>
                  <div>
                    <b>{name}</b>
                    <small>{role}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-v5">
        <div className="container faq-grid-v5">
          <div>
            <span className="eyebrow">{t("faq.eyebrow")}</span>
            <h2>
              {t("faq.title")} <em>{t("faq.titleAccent")}</em>
            </h2>
            <p>{t("faq.description")}</p>
            <button className="text-link" onClick={() => onAuth("signup")}>
              {t("faq.button")} <ArrowRight size={16} />
            </button>
          </div>
          <div className="faq-list-v5">
            {faqs.map(([q, a], i) => (
              <div
                className={`faq-item-v5 ${openFaq === i ? "open" : ""}`}
                key={q}
              >
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <span>{q}</span>
                  {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                {openFaq === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partner" className="partner-cta-v5">
        <div className="container">
          <div className="partner-cta-inner">
            <div>
              <span className="eyebrow">{t("partnerCta.eyebrow")}</span>
              <h2>
                {t("partnerCta.title")} <em>{t("partnerCta.titleAccent")}</em>
              </h2>
              <p>{t("partnerCta.description")}</p>
              <div className="hero-v5-actions">
                <button
                  className="btn btn-white"
                  onClick={() => onAuth("signup")}
                >
                  {t("partnerCta.becomePartner")} <ArrowRight size={17} />
                </button>
                <button
                  className="btn btn-ghost-light"
                  onClick={() => onAuth("login")}
                >
                  {t("partnerCta.login")}
                </button>
              </div>
            </div>
            <div className="cta-orbit">
              <div className="orbit-card">
                <ShieldCheck />
                <b>{t("partnerCta.orbit.secure.title")}</b>
                <small>{t("partnerCta.orbit.secure.description")}</small>
              </div>
              <div className="orbit-card two">
                <IndianRupee />
                <b>{t("partnerCta.orbit.grow.title")}</b>
                <small>{t("partnerCta.orbit.grow.description")}</small>
              </div>
              <div className="orbit-card three">
                <UsersRound />
                <b>{t("partnerCta.orbit.serve.title")}</b>
                <small>{t("partnerCta.orbit.serve.description")}</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {videoOpen && (
        <div
          className="video-modal-v5"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.target === e.currentTarget && setVideoOpen(false)}
        >
          <div className="video-modal-inner-v5">
            <button
              className="video-close-v5"
              onClick={() => setVideoOpen(false)}
            >
              ×
            </button>
            <video
              src={asset("/media/aeps (2).mp4")}
              poster={asset("/media/aeps-tutorial-poster.jpg")}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </main>
  );
}
