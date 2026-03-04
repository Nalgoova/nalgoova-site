import clsx from "clsx";

export function Container({ className, ...props }) {
  return <div className={clsx("mx-auto w-[min(1160px,calc(100%-48px))]", className)} {...props} />;
}

export function Button({ variant="primary", className, ...props }) {
  const base = "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition active:translate-y-[1px]";
  const styles = {
    primary: "bg-brand-orange text-white shadow-soft hover:opacity-95",
    secondary: "bg-brand-daintree/5 text-brand-daintree border border-brand-daintree/15 hover:bg-brand-daintree/7",
    ghost: "bg-transparent border border-black/15 hover:bg-black/5"
  };
  return <a className={clsx(base, styles[variant], className)} {...props} />;
}

export function Card({ className, ...props }) {
  return <div className={clsx("rounded-xl2 border border-black/10 bg-white shadow-soft", className)} {...props} />;
}

export function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-black/60">
      <span className="h-[2px] w-4 rounded-full bg-brand-elm" />
      <span>{children}</span>
    </div>
  );
}
