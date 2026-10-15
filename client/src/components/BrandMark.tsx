import { ArrowUpRight } from "lucide-react";

type BrandMarkProps = {
  light?: boolean;
  compact?: boolean;
};

export default function BrandMark({ light = false, compact = false }: BrandMarkProps) {
  return (
    <span className={`brand-lockup${light ? " brand-lockup-light" : ""}${compact ? " brand-lockup-compact" : ""}`}>
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="25" stroke="currentColor" strokeWidth="1.7" opacity=".5" />
          <ellipse cx="32" cy="32" rx="11" ry="25" stroke="currentColor" strokeWidth="1.2" opacity=".34" />
          <path d="M7.5 32h49M12.4 20.8h39.2M12.4 43.2h39.2" stroke="currentColor" strokeWidth="1.1" opacity=".34" />
          <path d="M8.5 36.2C22 34.3 35.1 25.1 53.4 8.8c-2.4 9.7-7 17.5-13.5 23.4 5.5-1.6 10.5-4.1 15.4-7.7-6.6 14-17.8 21.4-32.6 22.1 4.6 1.3 9.4 1.5 14.5.3-8.7 7.6-19.8 8.6-33.5 3.3 6.5-3.7 8.4-7.7 5.2-12Z" fill="currentColor" />
          <path d="M19 37.4c9.6-3.2 18.2-9.4 26.4-18.5M22.6 43.1c7.9-1.1 14.7-4.3 20.1-9.6" stroke="#f8f7f2" strokeWidth="1.55" strokeLinecap="round" opacity=".9" />
          <circle cx="53.4" cy="8.8" r="2.8" fill="#e4b45e" />
        </svg>
      </span>
      <span className="brand-type">
        <span className="brand-name">Eagle<span>Safar</span></span>
        {!compact && <span className="brand-tagline">Create Today, Beyond Tomorrow</span>}
      </span>
      {compact && <ArrowUpRight className="brand-arrow" aria-hidden="true" size={14} />}
    </span>
  );
}
