"use client";

import { useMemo, useState } from "react";

export function QuoteCalc() {
  const [ft, setFt] = useState(30);
  const [pkg, setPkg] = useState(1);

  const rates = useMemo(
    () => [
      { label: "Exterior Wash", rate: 12 },
      { label: "The Signature", rate: 30 },
    ],
    []
  );

  const est = rates[pkg].rate * ft;

  return (
    <div className="bg-cream border border-line rounded-2xl p-6 text-espresso shadow-lg">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-copper-deep mb-2">
        Instant Estimate
      </p>
      <h3 className="text-2xl font-semibold mb-5">Size up your rig</h3>

      <label className="block text-sm font-semibold mb-1.5" htmlFor="qc-ft">
        RV length (feet)
      </label>
      <div className="flex items-center gap-3 mb-5">
        <input
          id="qc-ft"
          type="range"
          min={18}
          max={45}
          step={1}
          value={ft}
          onChange={(e) => setFt(parseInt(e.target.value, 10))}
          className="flex-1 accent-copper-deep"
        />
        <span className="font-display text-2xl font-semibold w-16 text-right tabular-nums" suppressHydrationWarning>
          {ft} ft
        </span>
      </div>

      <div className="space-y-2 mb-5" role="radiogroup" aria-label="Service package">
        {rates.map((r, i) => (
          <button
            key={r.label}
            role="radio"
            aria-checked={pkg === i}
            onClick={() => setPkg(i)}
            type="button"
            className={`w-full flex justify-between items-center rounded-xl border-2 px-4 py-3 text-left font-semibold transition-colors min-h-11 ${
              pkg === i
                ? "border-copper bg-white shadow-sm"
                : "border-line bg-white/40 hover:border-copper/60"
            }`}
          >
            <span>{r.label}</span>
            <span className="text-sm text-mist font-normal">${r.rate}/ft</span>
          </button>
        ))}
      </div>

      <div className="border-t border-line pt-4 flex items-baseline justify-between gap-3">
        <p className="text-sm text-mist font-medium leading-snug">
          Estimated price for a {ft}-foot RV:
        </p>
        <p className="font-display text-4xl font-semibold text-copper-deep tabular-nums" suppressHydrationWarning>
          ${est.toLocaleString()}
        </p>
      </div>
      <p className="text-xs text-mist mt-3">
        Exact quote depends on condition and add-ons — confirmed by phone before we roll.
      </p>
    </div>
  );
}
