import { useEffect, useState } from "react";
import {
  ArrowRight,
  Globe2,
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";
import HomePage from "./features/home/HomePage.jsx";
import AuthModal from "./features/auth/AuthModal.jsx";
import PartnerDashboard from "./features/dashboard/PartnerDashboard.jsx";
import { Brand } from "./components/Brand.jsx";
import { demoAuthService } from "./services/demoAuthService.js";

import { LANGUAGES } from "./i18n/translations";
import { useTranslation } from "./i18n/I18nContext";

import LoginPage from "./features/auth/LoginPage.jsx";
import OnboardingProfilePage from "./features/onboarding/OnboardingProfilePage.jsx";
import OnboardingKycPage from "./features/onboarding/OnboardingKycPage.jsx";


export default function App() {
  const { language, changeLanguage, t } = useTranslation();
  const [user, setUser] = useState(() => demoAuthService.session());
  const [modal, setModal] = useState(null);
  const [menu, setMenu] = useState(false);
  const [toast, setToast] = useState("");

  const save = (u) => {
    setUser(u);
    demoAuthService.update(u);
    demoAuthService.setSession(u);
  };
  const logout = () => {
    demoAuthService.clearSession();
    setUser(null);
  };
  const note = (m) => setToast(m);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(""), 2600);
    return () => clearTimeout(id);
  }, [toast]);
  useEffect(() => {
    if (!user) return;
    let id;
    const reset = () => {
      clearTimeout(id);
      id = setTimeout(() => {
        logout();
        note("Logged out after 5 minutes of inactivity");
      }, 300000);
    };
    const ev = ["click", "keydown", "mousemove", "touchstart"];
    ev.forEach((e) => addEventListener(e, reset));
    reset();
    return () => {
      clearTimeout(id);
      ev.forEach((e) => removeEventListener(e, reset));
    };
  }, [user]);

  const path = window.location.pathname;
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

  if (path === `${basePath}/login`) {
    return <LoginPage onLogin={save} />;
  }
  if (path === `${basePath}/onboarding/profile`) {
    return <OnboardingProfilePage />;
  }
  if (path === `${basePath}/onboarding/kyc`) {
    return <OnboardingKycPage />;
  }

  if (user)
    return (
      <PartnerDashboard
        user={user}
        update={save}
        logout={logout}
        toast={note}
      />
    );

  return (
    <div className="site-shell">
      <div className="topline-v5">
        <div className="container topline-inner">
          <span>
            <i /> Partner onboarding is open · Digital Seva for every
            neighbourhood
          </span>
          <span className="topline-right">
            <Globe2 size={13} /> PAN-India partner ecosystem <b>↗</b>
          </span>
        </div>
      </div>
      <header className="site-header-v5">
        <div className="container nav-v5">
          <a href="#top" className="brand-link-v5">
            <Brand height={65} />
          </a>
          <nav className={menu ? "open" : ""}>
            <a href="#services" onClick={() => setMenu(false)}>
              Services
            </a>
            <a href="#about" onClick={() => setMenu(false)}>
              Why Manthan Pay
            </a>
            <a href="#network" onClick={() => setMenu(false)}>
              Our Network
            </a>
            <a href="#tutorial" onClick={() => setMenu(false)}>
              AEPS Academy
            </a>
            <a href="#partner" onClick={() => setMenu(false)}>
              Partner
            </a>
          </nav>
          <div className="nav-actions-v5">
            <div className="language-v5">
              <Globe2 size={15} />

              <select
                aria-label="Language"
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="nav-login-v5"
              onClick={() => {
                window.location.href = `${import.meta.env.BASE_URL}login`;
              }}
            >
              Partner Login
            </button>
            <button
              className="btn btn-primary nav-start-v5"
              onClick={() => setModal("signup")}
            >
              Get Started <ArrowRight size={15} />
            </button>
            <button
              className="menu-btn-v5"
              onClick={() => setMenu(!menu)}
              aria-label="Menu"
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <HomePage onAuth={setModal} />
      <footer className="footer-v5">
        <div className="container">
          <div className="footer-main-v5">
            <div className="footer-brand">
              <Brand height={65} />
              <p>
                Digital financial services for the people who keep local India
                moving.
              </p>
              <div className="footer-chip">
                <ShieldIcon /> Partner-first platform
              </div>
            </div>
            <div>
              <h4>Platform</h4>
              <a href="#services">AEPS</a>
              <a href="#services">DMT</a>
              <a href="#services">BBPS</a>
              <a href="#services">Recharge</a>
              <a href="#services">Insurance</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#network">Network</a>
              <a href="#tutorial">AEPS Academy</a>
              <a href="#partner">Become a Partner</a>
            </div>
            <div>
              <h4>Support</h4>
              <a href="#partner">Partner Login</a>
              <a href="#partner">Contact team</a>
              <a href="#partner">Help centre</a>
              <span className="footer-note">
                Production integrations are subject to onboarding, KYC, provider
                approval and applicable compliance requirements.
              </span>
            </div>
          </div>
          <div className="footer-bottom-v5">
            <span>
              © {new Date().getFullYear()} Manthan Pay. All rights reserved.
            </span>
            <span>Built for Bharat · Designed for scale</span>
          </div>
        </div>
      </footer>
      {modal && (
        <AuthModal
          start={modal}
          onClose={() => setModal(null)}
          onDone={(u) => {
            setModal(null);
            save(u);
          }}
        />
      )}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

function ShieldIcon() {
  return <span className="shield-icon">✓</span>;
}
