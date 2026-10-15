import { useState, type ReactNode } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, BookOpenCheck, BriefcaseBusiness,
  Building2, CalendarDays, CarFront, Check, ChevronDown, Compass, FileCheck2,
  Globe2, GraduationCap, HeartHandshake, Hotel, House, LockKeyhole, MapPin,
  PlaneTakeoff, Search, ShieldCheck, Sparkles, UsersRound, WalletCards,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import InquiryDialog, { type RequestService } from "@/components/InquiryDialog";
import BrandMark from "@/components/BrandMark";

type SearchService = RequestService;

const serviceTabs: { id: SearchService; label: string; Icon: typeof PlaneTakeoff }[] = [
  { id: "trip", label: "ট্যুর", Icon: Compass },
  { id: "stay", label: "থাকা", Icon: Hotel },
  { id: "visa", label: "ভিসা", Icon: FileCheck2 },
  { id: "work", label: "কাজ", Icon: BriefcaseBusiness },
  { id: "vehicle", label: "গাড়ি", Icon: CarFront },
];

const serviceTiles: { id: SearchService; title: string; detail: string; Icon: typeof PlaneTakeoff; tint: string; tag: string }[] = [
  { id: "trip", title: "প্যাকেজ ট্যুর", detail: "আপনার সময়, পছন্দ আর বাজেট ঘিরে ভ্রমণ পরিকল্পনা।", Icon: Compass, tint: "sage", tag: "ঘুরে দেখুন" },
  { id: "stay", title: "হোটেল ও থাকা", detail: "মালয়েশিয়ার ফ্ল্যাট থেকে হোটেল—থাকার বিকল্প খুঁজুন।", Icon: House, tint: "sand", tag: "আরামে থাকুন" },
  { id: "visa", title: "ভিসা সহায়তা", detail: "প্রস্তুতি, কাগজপত্র ও পরবর্তী ধাপে গাইডেন্স।", Icon: FileCheck2, tint: "rose", tag: "পথ জেনে নিন" },
  { id: "work", title: "ক্যারিয়ার পথ", detail: "বিভিন্ন খাতের কাজের তথ্য ও আবেদন-সহায়তা।", Icon: BriefcaseBusiness, tint: "blue", tag: "সুযোগ খুঁজুন" },
  { id: "vehicle", title: "গাড়ি ও ভেহিকেল", detail: "গন্তব্যে পৌঁছে চলাচলের সুবিধা নিয়ে কথা বলুন।", Icon: CarFront, tint: "gold", tag: "চলুন নিজের মতো" },
];

const destinations = [
  { name: "কুয়ালালামপুর", country: "মালয়েশিয়া", label: "শহর ও থাকার ব্যবস্থা", image: "/manus-storage/async-images/K4Su3bELaAGbv25EDUreBg/image-1.webp", alt: "সূর্যোদয়ের আলোয় কুয়ালালামপুরের পেট্রোনাস টাওয়ার ও সবুজ নগরদৃশ্য", kind: "trip" as const },
  { name: "কক্সবাজার", country: "বাংলাদেশ", label: "সমুদ্রের ছুটির পরিকল্পনা", image: "/manus-storage/async-images/K4Su3bELaAGbv25EDUreBg/image-3.webp", alt: "কক্সবাজারের দীর্ঘ সমুদ্রসৈকত ও নীল সমুদ্র", kind: "trip" as const },
  { name: "মালয়েশিয়া স্টে", country: "মালয়েশিয়া", label: "ফ্ল্যাট ও হোটেল অনুরোধ", image: "/manus-storage/async-images/K4Su3bELaAGbv25EDUreBg/image-2.webp", alt: "কুয়ালালামপুরের দৃশ্য-সহ আলোভরা অ্যাপার্টমেন্ট", kind: "stay" as const },
];

const visaTypes = [
  { title: "শিক্ষার্থী ভিসা", en: "Study", Icon: GraduationCap },
  { title: "ওয়ার্ক পারমিট", en: "Work permit", Icon: BriefcaseBusiness },
  { title: "কলিং ভিসা", en: "Calling visa", Icon: FileCheck2 },
  { title: "ডিপেন্ডেন্ট ভিসা", en: "Dependent", Icon: UsersRound },
  { title: "শিশু ও স্কুলিং ভিসা", en: "Child / schooling", Icon: BookOpenCheck },
  { title: "বাবা-মায়ের ডিপেন্ডেন্ট ভিসা", en: "Parents dependent", Icon: HeartHandshake },
  { title: "ট্যুরিস্ট ভিসা", en: "Tourist", Icon: Globe2 },
];

const steps = [
  { number: "01", title: "আপনার পরিকল্পনা বলুন", detail: "কোথায়, কখন, কী উদ্দেশ্যে—প্রথমে সেটুকুই বুঝি।" },
  { number: "02", title: "বিকল্প ও প্রক্রিয়া জানুন", detail: "যা যাচাই করা যায় তা স্পষ্ট করে বলি; অজানা থাকলে সেটিও জানাই।" },
  { number: "03", title: "পরের ধাপ ঠিক করুন", detail: "আপনার সিদ্ধান্তের পর প্রাসঙ্গিক সেবা বা সরবরাহকারীর সঙ্গে এগোন।" },
];

const faqs = [
  { q: "SafarBD-তে অনুরোধ করলেই কি ভিসা নিশ্চিত?", a: "না। ভিসার সিদ্ধান্ত সংশ্লিষ্ট দূতাবাস, ইমিগ্রেশন বা কর্তৃপক্ষ নেয়। SafarBD-এর সহায়তা প্রক্রিয়া বোঝা ও প্রস্তুতিতে; ফলাফলের নিশ্চয়তা নয়।" },
  { q: "এখানেই কি হোটেল বা গাড়ি বুক হয়ে যায়?", a: "এই সাইটে আপনি আগ্রহ বা অনুরোধ জানাতে পারেন। সরবরাহকারীর প্রাপ্যতা, মূল্য ও নিশ্চিতকরণ না পাওয়া পর্যন্ত বুকিং সম্পন্ন বলে গণ্য হবে না।" },
  { q: "চাকরির সুযোগ কীভাবে যাচাই করব?", a: "কোনো চাকরির প্রস্তাব, নিয়োগকর্তা, ফি বা চুক্তি এগোনোর আগে নিজে যাচাই করুন এবং লিখিত শর্ত নিন। এই সাইটে চাকরি বা নিয়োগের নিশ্চয়তা দেওয়া হয় না।" },
];

function SectionIntro({ kicker, title, text, light = false }: { kicker: string; title: ReactNode; text?: string; light?: boolean }) {
  return <div className={`section-intro${light ? " section-intro-light" : ""}`}><span className="eyebrow">{kicker}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function Home() {
  const [activeService, setActiveService] = useState<SearchService>("trip");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [requestService, setRequestService] = useState<RequestService>("trip");
  const [requestMessage, setRequestMessage] = useState("");
  const [searchMessage, setSearchMessage] = useState("");

  function openRequest(service: RequestService, message = "") {
    setRequestService(service);
    setRequestMessage(message);
    setDialogOpen(true);
  }

  function submitSearch() {
    const searchFor = serviceTabs.find((item) => item.id === activeService)?.label ?? "সেবা";
    const note = [destination && `গন্তব্য: ${destination}`, date && `সময়: ${date}`].filter(Boolean).join(" · ");
    setSearchMessage(`${searchFor} নিয়ে আপনার অনুরোধ তৈরি করুন`);
    openRequest(activeService, note);
  }

  return (
    <div className="site-shell" id="top">
      <div className="announcement"><Sparkles size={14} /><span>ভ্রমণ, ভিসা, থাকা আর কাজের পরিকল্পনা—এক জায়গা থেকে শুরু</span><a href="#how">কীভাবে কাজ করে <ArrowRight size={13} /></a></div>
      <SiteHeader onRequest={() => openRequest("trip")} />

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-image" role="img" aria-label="কুয়ালালামপুরের টাওয়ার ও সবুজের ভ্রমণ-দৃশ্য" />
          <div className="hero-shade" />
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="hero-kicker"><span className="kicker-line" /> বাংলাদেশের মানুষের আন্তর্জাতিক যাত্রাসঙ্গী</span>
              <h1 id="hero-title">আপনার পথ,<br /><em>আরও সহজ।</em></h1>
              <p>ভ্রমণ আর থাকার খোঁজ থেকে ভিসা-সহায়তা ও কাজের পরিকল্পনা—পরের পদক্ষেপটি গুছিয়ে নিন একসাথে।</p>
              <div className="hero-actions"><a className="button button-saffron" href="#services">সেবাগুলো দেখুন <ArrowDown size={17} /></a><span className="hero-note"><span className="hero-note-dot" /> সহজ ভাষা, স্বচ্ছ পরের ধাপ</span></div>
            </div>
            <div className="hero-aside"><span className="aside-stroke" /><span>ঢাকা থেকে<br />পৃথিবীর পথে</span></div>
          </div>
          <div className="hero-index"><span>01</span><span className="index-line" /> <span>পথচলা শুরু</span></div>
        </section>

        <section className="search-wrap" aria-label="সেবা খুঁজুন">
          <div className="search-panel">
            <div className="search-tabs" role="tablist" aria-label="কোন সেবা খুঁজছেন">
              {serviceTabs.map(({ id, label, Icon }) => <button key={id} className={`search-tab${activeService === id ? " active" : ""}`} type="button" role="tab" aria-selected={activeService === id} onClick={() => { setActiveService(id); setSearchMessage(""); }}><Icon size={17} />{label}</button>)}
            </div>
            <div className="search-fields">
              <label className="search-field destination-field"><span className="field-icon"><MapPin size={18} /></span><span className="field-copy"><small>কোথায় / কী খুঁজছেন?</small><input value={destination} onChange={(event) => setDestination(event.target.value)} placeholder={activeService === "visa" ? "দেশ বা ভিসার ধরন" : activeService === "work" ? "দেশ বা কাজের ক্ষেত্র" : "গন্তব্য লিখুন"} /></span></label>
              <label className="search-field date-field"><span className="field-icon"><CalendarDays size={18} /></span><span className="field-copy"><small>সময়কাল <span className="optional-label">ঐচ্ছিক</span></small><input type="date" value={date} onChange={(event) => setDate(event.target.value)} aria-label="পছন্দের তারিখ" /></span></label>
              <button className="button button-dark search-submit" type="button" onClick={submitSearch}><Search size={18} /><span>খুঁজে দেখুন</span></button>
            </div>
            {searchMessage && <p className="search-feedback" role="status">{searchMessage}</p>}
            <div className="search-trust"><span><Check size={14} /> আপনার পছন্দ, আপনার সিদ্ধান্ত</span><span><LockKeyhole size={14} /> এখানে কোনো সংবেদনশীল নথি নয়</span></div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="section-topline"><SectionIntro kicker="এক যাত্রায় অনেক পথ" title={<>যা দরকার,<br /><em>সব এক ঠিকানায়।</em></>} text="আপনার পরিকল্পনা যেখান থেকেই শুরু হোক, উপযুক্ত সেবার পরের ধাপটি খুঁজে নিন।" /><a className="text-link" href="#how">আমাদের প্রক্রিয়া <ArrowUpRight size={17} /></a></div>
          <div className="service-grid">
            {serviceTiles.map(({ id, title, detail, Icon, tint, tag }, index) => <button type="button" className={`service-card service-${tint}`} key={id} onClick={() => openRequest(id)}><span className="service-number">0{index + 1}</span><span className="service-icon"><Icon size={24} strokeWidth={1.8} /></span><span className="service-content"><strong>{title}</strong><small>{detail}</small><span className="service-tag">{tag} <ArrowUpRight size={14} /></span></span></button>)}
          </div>
          <div className="services-footnote"><span className="footnote-mark">*</span> সেবা ও বুকিং সরবরাহকারীর যাচাই, প্রাপ্যতা ও প্রযোজ্য শর্তের ওপর নির্ভরশীল।</div>
        </section>

        <section className="destinations-section section-pad" id="destinations">
          <div className="section-topline"><SectionIntro kicker="প্রেরণা নিন, তারপর পরিকল্পনা" title="গন্তব্যের গল্প" text="বাংলাদেশের কাছের ছুটি থেকে দূরের শহর—আপনার পরের যাত্রা কোথায়?" /><div className="dest-arrows"><button type="button" aria-label="গন্তব্য অনুরোধ শুরু করুন" onClick={() => openRequest("trip")}><ArrowRight size={19} /></button></div></div>
          <div className="destination-grid">
            {destinations.map((place, i) => <article className={`destination-card destination-${i + 1}`} key={place.name}><img src={place.image} alt={place.alt} loading="lazy" /><div className="destination-overlay" /><div className="destination-top"><span>{place.country}</span><span className="destination-arrow"><ArrowUpRight size={17} /></span></div><div className="destination-bottom"><p>{place.label}</p><h3>{place.name}</h3><button type="button" className="destination-link" onClick={() => openRequest(place.kind, `গন্তব্য: ${place.name}`)}>পরিকল্পনা করুন <ArrowRight size={15} /></button></div></article>)}
          </div>
          <p className="photo-note">ছবিগুলো ভ্রমণ-প্রেরণার জন্য; কোনো নির্দিষ্ট রুম, প্যাকেজ বা প্রাপ্যতার নিশ্চয়তা নয়।</p>
        </section>

        <section className="visa-section section-pad" id="visa">
          <div className="visa-copy"><span className="eyebrow eyebrow-light">পথটা বুঝে এগোন</span><h2>নতুন দেশে<br /><em>নতুন অধ্যায়।</em></h2><p>আবেদনের আগে জেনে নিন প্রক্রিয়া, প্রয়োজনীয় প্রস্তুতি আর কোন তথ্যগুলো যাচাই করা জরুরি।</p><button className="button button-saffron" type="button" onClick={() => openRequest("visa")}>ভিসা নিয়ে কথা বলুন <ArrowUpRight size={16} /></button><p className="visa-disclaimer"><ShieldCheck size={15} /> সিদ্ধান্ত সংশ্লিষ্ট দেশের কর্তৃপক্ষের; কোনো ফলাফলের নিশ্চয়তা নয়।</p></div>
          <div className="visa-list-wrap"><div className="visa-list-heading"><span>সহায়তার ক্ষেত্র</span><span>পছন্দ করুন</span></div><div className="visa-list">{visaTypes.map(({ title, en, Icon }) => <button key={title} type="button" onClick={() => openRequest("visa", `ভিসা সহায়তা: ${title}`)}><span className="visa-item-icon"><Icon size={19} /></span><span className="visa-label"><strong>{title}</strong><small>{en}</small></span><ArrowUpRight className="visa-arrow" size={17} /></button>)}</div><div className="visa-bottom-note"><span className="visa-star">✳</span><span>প্রতিটি পরিকল্পনায় আলাদা শর্ত থাকতে পারে। সঠিক দেশের অফিসিয়াল নির্দেশনা আগে যাচাই করুন।</span></div></div>
        </section>

        <section className="stay-section section-pad" id="stays">
          <div className="stay-copy"><span className="eyebrow">থাকাটাও হোক পরিকল্পনার অংশ</span><h2>শহরের মাঝে<br />নিজের <em>একটু জায়গা।</em></h2><p>মালয়েশিয়ার ফ্ল্যাট, Airbnb-ধরনের থাকার জায়গা কিংবা হোটেল—আপনার ভ্রমণের ধরন অনুযায়ী খোঁজ শুরু করুন।</p><ul className="stay-points"><li><Check size={15} /> স্বল্প বা দীর্ঘমেয়াদি থাকার আগ্রহ</li><li><Check size={15} /> লোকেশন ও প্রয়োজন অনুযায়ী বিকল্প</li><li><Check size={15} /> বুকিং সরাসরি যাচাই করে নিশ্চিত করুন</li></ul><button className="button button-dark" type="button" onClick={() => openRequest("stay", "মালয়েশিয়ায় থাকার ব্যবস্থা সম্পর্কে জানতে চাই")}>থাকার অনুরোধ দিন <ArrowRight size={16} /></button></div>
          <div className="stay-visual"><img src="/manus-storage/async-images/K4Su3bELaAGbv25EDUreBg/image-2.webp" alt="কুয়ালালামপুরের দৃশ্য-সহ আধুনিক অ্যাপার্টমেন্ট" loading="lazy" /><div className="stay-image-caption"><span className="caption-icon"><Building2 size={19} /></span><span><strong>মালয়েশিয়া</strong><small>ফ্ল্যাট · হোটেল · থাকার ব্যবস্থা</small></span><ArrowUpRight size={17} /></div><div className="stay-stamp"><span>থাকুন<br />নিজের মতো</span><House size={22} /></div></div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="work-heading"><div><span className="eyebrow">কাজ ও চলার সুযোগ</span><h2>আপনার পরের<br /><em>পদক্ষেপ কী?</em></h2></div><p>কাজের ক্ষেত্র, নিয়োগকর্তা, চুক্তি ও নিয়ম—এগোনোর আগে যাচাই করা জরুরি। আমরা তথ্য বুঝতে ও সঠিক প্রশ্ন করতে পাশে থাকতে চাই।</p></div>
          <div className="work-panels"><article className="work-panel work-panel-green"><span className="panel-index">01 / CAREER</span><span className="panel-icon"><BriefcaseBusiness size={24} /></span><h3>কাজের সুযোগ<br />খুঁজছেন?</h3><p>বিভিন্ন কর্মক্ষেত্র ও গন্তব্যে কাজের তথ্য নিয়ে আলোচনা শুরু করুন।</p><button type="button" className="panel-link" onClick={() => openRequest("work")}>কাজ সম্পর্কে জানুন <ArrowRight size={16} /></button><div className="panel-deco deco-orbit" /></article><article className="work-panel work-panel-cream"><span className="panel-index">02 / MOVE</span><span className="panel-icon"><CarFront size={24} /></span><h3>গন্তব্যে<br />চলাচলের সুবিধা</h3><p>ভ্রমণসূচির জন্য গাড়ি বা ভেহিকেল নিয়ে কী কী বিকল্প আছে, জানতে চান?</p><button type="button" className="panel-link" onClick={() => openRequest("vehicle")}>ভেহিকেল নিয়ে কথা বলুন <ArrowRight size={16} /></button><div className="panel-deco deco-road" /></article></div>
          <div className="work-warning"><ShieldCheck size={16} /><span>কোনো চাকরি, ভিসা, নিয়োগকর্তা বা আয়ের নিশ্চয়তা দেওয়া হয় না। অফার, চুক্তি ও ফি স্বাধীনভাবে যাচাই করুন।</span></div>
        </section>

        <section className="how-section section-pad" id="how"><div className="how-head"><SectionIntro kicker="স্বচ্ছতা দিয়ে শুরু" title={<>ছোট ছোট ধাপে,<br /><em>আত্মবিশ্বাসের সাথে।</em></>} text="ভালো পরিকল্পনা শুরু হয় পরিষ্কার তথ্য থেকে—চাপ বা তাড়াহুড়ো থেকে নয়।" /><div className="how-seal"><HeartHandshake size={23} /><span>আপনার সিদ্ধান্ত<br />আপনারই</span></div></div><div className="steps-grid">{steps.map((step) => <article className="step-card" key={step.number}><span className="step-number">{step.number}</span><div className="step-line" /><h3>{step.title}</h3><p>{step.detail}</p></article>)}</div></section>

        <section className="trust-section"><div className="trust-intro"><span className="eyebrow eyebrow-light">বিশ্বাস গড়ে ওঠে কাজে</span><h2>সুন্দর প্রতিশ্রুতির চেয়ে<br /><em>স্পষ্ট তথ্য জরুরি।</em></h2></div><div className="trust-items"><div><BadgeCheck size={22} /><span><strong>যা জানি, তা বলি</strong><small>অযাচাইকৃত তথ্যকে সত্য বলে উপস্থাপন নয়।</small></span></div><div><WalletCards size={22} /><span><strong>খরচ আগে বুঝুন</strong><small>মূল্য, ফি ও শর্ত না জেনে অর্থ দেবেন না।</small></span></div><div><LockKeyhole size={22} /><span><strong>নথি নিজের কাছে রাখুন</strong><small>অনিরাপদ চ্যানেলে পরিচয়পত্র দেবেন না।</small></span></div></div></section>

        <section className="faq-section section-pad" id="faq"><div className="faq-heading"><SectionIntro kicker="প্রশ্ন থাকলে জেনে নিন" title="সোজা উত্তর।" text="সেবা নিয়ে সিদ্ধান্ত নেওয়ার আগে প্রয়োজনীয় বিষয়গুলো পরিষ্কার থাকুক।" /></div><div className="faq-list">{faqs.map(({ q, a }) => <details className="faq-item" key={q}><summary>{q}<ChevronDown size={18} /></summary><p>{a}</p></details>)}</div></section>

        <section className="closing-cta"><div className="closing-mark" aria-hidden="true"><PlaneTakeoff size={27} /></div><div><span className="eyebrow eyebrow-light">আপনার পরিকল্পনা, আপনার গতিতে</span><h2>যেখান থেকে শুরু,<br /><em>পথটা হোক পরিষ্কার।</em></h2></div><button type="button" className="button button-saffron" onClick={() => openRequest("trip")}>আপনার পরিকল্পনা বলুন <ArrowUpRight size={17} /></button><span className="closing-curve" aria-hidden="true" /></section>
      </main>

      <footer className="site-footer" id="privacy"><div className="footer-main"><div className="footer-brand"><a href="#top" aria-label="SafarBD হোমে ফিরুন"><BrandMark /></a><p>ভ্রমণ, থাকা, ভিসা-সহায়তা ও কাজের পরিকল্পনায় পাশে থাকার এক ঠিকানা—সৎ তথ্য দিয়ে, আপনার সিদ্ধান্তকে সম্মান করে।</p></div><div className="footer-column"><strong>ঘুরে দেখুন</strong><a href="#services">সেবাসমূহ</a><a href="#destinations">গন্তব্য</a><a href="#visa">ভিসা সহায়তা</a><a href="#work">কাজের সুযোগ</a></div><div className="footer-column"><strong>যা জানা জরুরি</strong><a href="#how">কীভাবে কাজ করে</a><a href="#faq">প্রশ্নোত্তর</a><a href="#privacy-note">তথ্য ও গোপনীয়তা</a><a href="#disclaimer">সেবা-সংক্রান্ত সতর্কতা</a></div><div className="footer-contact"><span className="eyebrow">পরামর্শের জন্য</span><h3>আপনার পরিকল্পনা<br />শুনতে চাই।</h3><button type="button" className="footer-link" onClick={() => openRequest("trip")}>একটি অনুরোধ শুরু করুন <ArrowUpRight size={16} /></button><p>প্রকৃত ব্যবসায়িক ফোন ও ইমেইল ঠিকানা যুক্ত হলে এখানে দেখানো হবে।</p></div></div><div className="footer-disclosures" id="disclaimer"><div><span className="disclosure-mark">!</span><p>ভিসা অনুমোদন, চাকরি/নিয়োগ, থাকার জায়গা ও যানবাহনের প্রাপ্যতা সংশ্লিষ্ট কর্তৃপক্ষ বা সরবরাহকারীর সিদ্ধান্ত ও যাচাইয়ের ওপর নির্ভর করে। সাইটে দেখানো গন্তব্য ও ছবিগুলো উদাহরণ; এগুলো লাইভ বুকিং বা নিশ্চিত অফার নয়।</p></div><div id="privacy-note"><span className="disclosure-mark"><LockKeyhole size={14} /></span><p>এই প্রোটোটাইপে অনুরোধ ফর্মের তথ্য সংরক্ষণ বা কোথাও পাঠানো হয় না। চালুর আগে ব্যবসার পরিচয়, গোপনীয়তা নীতি, শর্তাবলি, যোগাযোগের ঠিকানা ও নিরাপদ অনুরোধ-ব্যবস্থা যুক্ত করতে হবে। কোনো পাসপোর্ট, জাতীয় পরিচয়পত্র, কার্ড বা পেমেন্টের তথ্য দেবেন না।</p></div></div><div className="footer-bottom"><a href="#top"><BrandMark compact /></a><span>© {new Date().getFullYear()} SafarBD · ব্র্যান্ড নামটি আপাতত নমুনা</span><a href="#top">উপরে ফিরুন <ArrowUpRight size={14} /></a></div></footer>
      <InquiryDialog open={dialogOpen} service={requestService} initialMessage={requestMessage} onClose={() => setDialogOpen(false)} />
    </div>
  );
}
