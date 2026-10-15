import { ArrowLeft, ArrowUpRight, Check, LockKeyhole, X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

export type RequestService = "trip" | "stay" | "visa" | "work" | "vehicle";

type InquiryDialogProps = {
  open: boolean;
  service: RequestService;
  initialMessage?: string;
  onClose: () => void;
};

const serviceLabels: Record<RequestService, string> = {
  trip: "প্যাকেজ ট্যুর",
  stay: "হোটেল / থাকার ব্যবস্থা",
  visa: "ভিসা সহায়তা",
  work: "কাজের সুযোগ",
  vehicle: "গাড়ি / ভেহিকেল",
};

export default function InquiryDialog({ open, service, initialMessage = "", onClose }: InquiryDialogProps) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState(initialMessage);

  useEffect(() => {
    if (open) {
      setSent(false);
      setName("");
      setContact("");
      setMessage(initialMessage);
    }
  }, [open, initialMessage, service]);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="inquiry-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <button type="button" className="dialog-close" onClick={onClose} aria-label="ফর্ম বন্ধ করুন"><X size={21} /></button>
        {sent ? (
          <div className="dialog-success">
            <span className="success-icon"><Check size={22} /></span>
            <p className="eyebrow">অনুরোধের খসড়া তৈরি</p>
            <h2 id="dialog-title">শুরুটা হয়ে গেল।</h2>
            <p>এটি এখনো SafarBD টিমের কাছে পাঠানো হয়নি। যোগাযোগের ইনবক্স যুক্ত হলে তবেই অনুরোধ পাঠানো যাবে।</p>
            <button className="button button-dark" type="button" onClick={onClose}>ঠিক আছে <ArrowUpRight size={16} /></button>
          </div>
        ) : (
          <>
            <button className="dialog-back" type="button" onClick={onClose}><ArrowLeft size={15} /> ফিরে যান</button>
            <p className="eyebrow">আপনার পরবর্তী পদক্ষেপ</p>
            <h2 id="dialog-title">একটু বলুন,<br />কীভাবে পাশে থাকব?</h2>
            <p className="dialog-intro">আপনার অনুরোধ: <strong>{serviceLabels[service]}</strong></p>
            <form className="inquiry-form" onSubmit={handleSubmit}>
              <label>আপনার নাম <span>*</span><input required maxLength={80} autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="যে নামে আপনাকে ডাকব" /></label>
              <label>ফোন বা ইমেইল <span>*</span><input required maxLength={120} autoComplete="email" value={contact} onChange={(event) => setContact(event.target.value)} placeholder="যে মাধ্যমে যোগাযোগ সুবিধা" /></label>
              <label>আরও কিছু জানাতে চান? <small>ঐচ্ছিক</small><textarea maxLength={500} rows={3} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="গন্তব্য বা আপনার পরিকল্পনা লিখুন" /></label>
              <p className="privacy-note"><LockKeyhole size={14} /> এখানে পাসপোর্ট, জাতীয় পরিচয়পত্র বা পেমেন্টের তথ্য দেবেন না। এই ডেমো ফর্ম তথ্য সংরক্ষণ বা পাঠায় না।</p>
              <button className="button button-dark form-submit" type="submit">অনুরোধ প্রস্তুত করুন <ArrowUpRight size={17} /></button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
