import { Check, CheckCheck, ListChecks, Pencil, Plus, Save, Trash2, X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

type TodoItem = { id: string; text: string; done: boolean };
type PersonalListDialogProps = { open: boolean; onClose: () => void };
const STORAGE_KEY = "eaglesafar.personal-list.v1";

function readItems(): TodoItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is TodoItem =>
      item && typeof item === "object" &&
      typeof item.id === "string" && typeof item.text === "string" &&
      typeof item.done === "boolean" && item.text.length <= 240
    );
  } catch {
    return [];
  }
}

function makeId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.floor(Math.random() * 1_000_000)}`;
}

export default function PersonalListDialog({ open, onClose }: PersonalListDialogProps) {
  const [items, setItems] = useState<TodoItem[]>(readItems);
  const [draft, setDraft] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editDraft, setEditDraft] = useState("");
  const [storageError, setStorageError] = useState(false);

  useEffect(() => {
    if (!open) return;
    setItems(readItems());
    const handleEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  useEffect(() => {
    try {
      if (items.length === 0) localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  }, [items]);

  if (!open) return null;

  function addItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setItems((current) => [{ id: makeId(), text, done: false }, ...current]);
    setDraft("");
  }

  function saveEdit(item: TodoItem) {
    const text = editDraft.trim();
    if (text) setItems((current) => current.map((entry) => entry.id === item.id ? { ...entry, text } : entry));
    setEditingId(null);
    setEditDraft("");
  }

  function clearItems() {
    if (items.length && window.confirm("এই ফোনের EagleSafar তালিকার সব লেখা মুছে ফেলবেন?")) {
      setItems([]);
      setEditingId(null);
    }
  }

  const remaining = items.filter((item) => !item.done).length;
  const completed = items.length - remaining;

  return (
    <div className="todo-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="todo-dialog" role="dialog" aria-modal="true" aria-labelledby="todo-title">
        <button className="todo-close" type="button" onClick={onClose} aria-label="তালিকা বন্ধ করুন"><X size={21} /></button>
        <div className="todo-heading">
          <span className="todo-symbol"><ListChecks size={22} /></span>
          <div><p className="eyebrow">আপনার ফোনে · আপনার নিয়ন্ত্রণে</p><h2 id="todo-title">আমার তালিকা</h2></div>
        </div>
        <p className="todo-subtitle">যাত্রার আগে মনে রাখতে চান—এমন কাজ বা ছোট নোট লিখে রাখুন।</p>

        <form className="todo-add-form" onSubmit={addItem}>
          <label className="sr-only" htmlFor="todo-draft">নতুন কাজ বা নোট</label>
          <input id="todo-draft" value={draft} onChange={(event) => setDraft(event.target.value)} maxLength={240} placeholder="একটি কাজ বা নোট লিখুন…" autoComplete="off" />
          <button className="todo-add-button" type="submit" disabled={!draft.trim()}><Plus size={17} /><span>যোগ করুন</span></button>
        </form>
        <div className="todo-summary" aria-live="polite"><span>{remaining}টি বাকি</span><span><CheckCheck size={14} /> {completed}টি সম্পন্ন</span></div>

        <div className="todo-list" aria-label="আমার সংরক্ষিত কাজ ও নোট">
          {items.length === 0 ? (
            <div className="todo-empty"><span><ListChecks size={24} /></span><strong>তালিকাটি এখন খালি</strong><p>উপরের ঘরে প্রথম কাজ বা নোটটি লিখুন।</p></div>
          ) : items.map((item) => (
            <article className={`todo-item${item.done ? " is-done" : ""}`} key={item.id}>
              <button className="todo-check" type="button" onClick={() => setItems((current) => current.map((entry) => entry.id === item.id ? { ...entry, done: !entry.done } : entry))} aria-label={item.done ? "অসম্পন্ন হিসেবে চিহ্নিত করুন" : "সম্পন্ন হিসেবে চিহ্নিত করুন"} aria-pressed={item.done}>
                {item.done && <Check size={15} />}
              </button>
              {editingId === item.id ? (
                <form className="todo-edit-form" onSubmit={(event) => { event.preventDefault(); saveEdit(item); }}>
                  <input value={editDraft} onChange={(event) => setEditDraft(event.target.value)} maxLength={240} autoFocus aria-label="নোট সম্পাদনা" />
                  <button type="submit" aria-label="সংরক্ষণ করুন"><Save size={16} /></button>
                  <button type="button" aria-label="সম্পাদনা বাতিল" onClick={() => setEditingId(null)}><X size={16} /></button>
                </form>
              ) : (
                <><p>{item.text}</p><div className="todo-item-actions"><button type="button" aria-label="নোট সম্পাদনা" onClick={() => { setEditingId(item.id); setEditDraft(item.text); }}><Pencil size={15} /></button><button type="button" aria-label="নোট মুছুন" onClick={() => setItems((current) => current.filter((entry) => entry.id !== item.id))}><Trash2 size={15} /></button></div></>
              )}
            </article>
          ))}
        </div>

        <div className="todo-privacy"><span><Check size={14} /></span><p><strong>শুধু এই ডিভাইসে সংরক্ষিত।</strong> EagleSafar সার্ভারে পাঠানো বা অন্য ফোনে sync হয় না। Browser/app data মুছলে তালিকাও মুছে যেতে পারে। এটি encrypted storage নয়—পাসওয়ার্ড, পাসপোর্ট/NID বা card তথ্য লিখবেন না।</p></div>
        <div className="todo-footer"><button className="todo-clear" type="button" onClick={clearItems} disabled={!items.length}><Trash2 size={14} /> সব মুছুন</button><button className="button button-dark todo-done" type="button" onClick={onClose}>বন্ধ করুন</button></div>
        {storageError && <p className="todo-storage-error" role="alert">এই browser-এ local save করা যাচ্ছে না; storage permission পরীক্ষা করুন।</p>}
      </section>
    </div>
  );
}
