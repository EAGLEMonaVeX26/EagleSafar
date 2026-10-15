import { Download, Share, X } from "lucide-react";
import { useEffect, useState } from "react";

type InstallChoice = { outcome: "accepted" | "dismissed"; platform?: string };
type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<InstallChoice>;
};

export default function InstallAppButton() {
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const [showHelp, setShowHelp] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator && window.isSecureContext) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js", { scope: "/" }).catch(() => undefined);
      }, { once: true });
    }

    const isStandalone = window.matchMedia("(display-mode: standalone)").matches ||
      Boolean((navigator as Navigator & { standalone?: boolean }).standalone);
    setInstalled(isStandalone);

    const handleInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
    };
    const handleInstalled = () => {
      setInstalled(true);
      setInstallPrompt(null);
    };
    window.addEventListener("beforeinstallprompt", handleInstallPrompt);
    window.addEventListener("appinstalled", handleInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", handleInstallPrompt);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  async function install() {
    if (!installPrompt) {
      setShowHelp(true);
      return;
    }
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    if (choice.outcome === "accepted") setInstalled(true);
    setInstallPrompt(null);
  }

  return (
    <>
      <button className="install-app-button" type="button" onClick={install} aria-label={installed ? "EagleSafar app ইতিমধ্যে ইনস্টল করা আছে" : "EagleSafar app ইনস্টল করুন"}>
        <Download size={16} /><span>{installed ? "ইনস্টল হয়েছে" : "অ্যাপ ইনস্টল"}</span>
      </button>
      {showHelp && (
        <div className="install-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setShowHelp(false)}>
          <section className="install-dialog" role="dialog" aria-modal="true" aria-labelledby="install-title">
            <button className="install-close" type="button" aria-label="বন্ধ করুন" onClick={() => setShowHelp(false)}><X size={19} /></button>
            <span className="install-icon"><Download size={22} /></span>
            <p className="eyebrow">EagleSafar · ফোনে ব্যবহার</p>
            <h2 id="install-title">হোম স্ক্রিনে যোগ করুন</h2>
            <div className="install-instructions">
              <article><strong>Android · Chrome</strong><p>উপরের <b>অ্যাপ ইনস্টল</b> চাপুন। অপশন না এলে Chrome-এর ⋮ মেনু থেকে <b>Install app</b> বা <b>Add to Home screen</b> বেছে নিন।</p></article>
              <article><strong>iPhone · Safari</strong><p>Safari-তে লিংক খুলে <Share size={14} aria-label="Share" /> <b>Share</b> চাপুন, তারপর <b>Add to Home Screen</b> বেছে নিন।</p></article>
            </div>
            <p className="install-note">ইনস্টল করলে অ্যাপটি আলাদা আইকন ও পূর্ণ পর্দায় খুলবে। এটি পরীক্ষার PWA; Play Store বা App Store-এর native app নয়।</p>
            <button className="button button-dark install-done" type="button" onClick={() => setShowHelp(false)}>বুঝেছি</button>
          </section>
        </div>
      )}
    </>
  );
}
