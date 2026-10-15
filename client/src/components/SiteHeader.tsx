import { ListChecks, Menu, X } from "lucide-react";
import { useState } from "react";
import BrandMark from "./BrandMark";
import InstallAppButton from "./InstallAppButton";

type SiteHeaderProps = { onRequest: () => void; onOpenList: () => void };

const links = [
  ["সেবাসমূহ", "#services"],
  ["গন্তব্য", "#destinations"],
  ["ভিসা সহায়তা", "#visa"],
  ["থাকা ও গাড়ি", "#stays"],
  ["কাজের সুযোগ", "#work"],
];

export default function SiteHeader({ onRequest, onOpenList }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand-link" href="#top" aria-label="EagleSafar হোমে ফিরুন" onClick={closeMenu}>
          <BrandMark />
        </a>
        <div className="header-tools">
          <button className="header-list-button" type="button" onClick={() => { closeMenu(); onOpenList(); }} aria-label="আমার তালিকা খুলুন">
            <ListChecks size={17} /><span>আমার তালিকা</span>
          </button>
          <InstallAppButton />
          <button className="mobile-menu-toggle" type="button" aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <nav className={`primary-nav${open ? " is-open" : ""}`} aria-label="প্রধান নেভিগেশন">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <button className="nav-cta" type="button" onClick={() => { closeMenu(); onRequest(); }}>
            কথা বলি <span aria-hidden="true">↗</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
