"use client";
import { useEffect, useState } from "react";

const CONSENT_KEY = "nalgoova_consent_v1";

function loadGA(gaId) {
  if (!gaId) return;

  // evita doppio caricamento
  if (window.__gaLoaded) return;
  window.__gaLoaded = true;

  // GA script
  const s1 = document.createElement("script");
  s1.async = true;
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(s1);

  const s2 = document.createElement("script");
  s2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    // Consent Mode: default denied
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied'
    });

    // config (no cookies finché non accetti)
    gtag('config', '${gaId}', { anonymize_ip: true });
  `;
  document.head.appendChild(s2);
}

function applyConsent(consent, gaId) {
  // carica GA (se non caricato) e poi applica consenso
  loadGA(gaId);

  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export default function CookieBanner() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    // carica stato salvato
    try {
      const saved = localStorage.getItem(CONSENT_KEY);
      if (!saved) {
        setOpen(true);
        return;
      }
      const consent = JSON.parse(saved);
      // se ha già accettato analytics, applica
      if (consent?.analytics) applyConsent(consent, gaId);
    } catch {
      setOpen(true);
    }
  }, [gaId]);

  const save = (consent) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    applyConsent(consent, gaId);
    setOpen(false);
    setShowSettings(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[999] px-4 pb-4">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-white/15 bg-black/70 backdrop-blur-xl p-4 md:p-5 text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="text-sm text-white/80">
            <div className="font-semibold text-white">Privacy & Cookies</div>
            <p className="mt-1">
              We use strictly necessary cookies to run the site. With your permission, we also use analytics cookies
              to understand site usage (no advertising cookies).
              {" "}
              <a href="/privacy" className="underline text-white">Privacy Policy</a>.
            </p>
          </div>

          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <button
              className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold hover:bg-white/10"
              onClick={() => setShowSettings((v) => !v)}
            >
              Settings
            </button>
            <button
              className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold hover:bg-white/10"
              onClick={() => save({ necessary: true, analytics: false })}
            >
              Reject
            </button>
            <button
              className="rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-95"
              onClick={() => save({ necessary: true, analytics: true })}
            >
              Accept
            </button>
          </div>
        </div>

        {showSettings && (
          <div className="mt-4 rounded-xl border border-white/15 bg-white/5 p-4">
            <div className="text-sm font-semibold">Cookie preferences</div>

            <div className="mt-3 flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">Strictly necessary</div>
                <div className="text-xs text-white/70">Always on (website functionality).</div>
              </div>
              <div className="text-xs text-white/70 font-semibold">ON</div>
            </div>

            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">Analytics</div>
                <div className="text-xs text-white/70">Helps us understand site usage (GA4).</div>
              </div>

              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                <span className="text-white/80">Enable</span>
              </label>
            </div>

            <button
              className="mt-4 w-full rounded-full bg-white text-black py-2 text-sm font-semibold hover:opacity-95"
              onClick={() => save({ necessary: true, analytics })}
            >
              Save preferences
            </button>
          </div>
        )}
      </div>
    </div>
  );
}