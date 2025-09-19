// components/HeroIllustration.tsx
export default function HeroIllustration() {
  return (
    <svg
      role="img"
      aria-label="Ilustrasi workflow dan AI"
      viewBox="0 0 560 420"
      className="h-auto w-full max-w-[520px]"
    >
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#00b894" />
          <stop offset="1" stopColor="#24c4a2" />
        </linearGradient>
        <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="14" cy="14" r="1.2" fill="#0ea5a8" opacity="0.12" />
        </pattern>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      {/* latar pola samar */}
      <rect width="100%" height="100%" fill="url(#grid)" />
      <ellipse cx="420" cy="140" rx="140" ry="90" fill="#00b894" opacity="0.08" filter="url(#soft)" />

      {/* kartu agent */}
      <g>
        <rect x="300" y="70" width="180" height="110" rx="14" fill="#ffffff" />
        <rect x="300" y="70" width="180" height="110" rx="14" fill="#0f172a" opacity="0.06" />
        <circle cx="326" cy="98" r="10" fill="url(#g)" />
        <rect x="348" y="90" width="98" height="14" rx="7" fill="#0f172a" opacity="0.2" />
        <rect x="316" y="120" width="140" height="10" rx="5" fill="#0f172a" opacity="0.12" />
        <rect x="316" y="140" width="118" height="10" rx="5" fill="#0f172a" opacity="0.12" />
        <rect x="316" y="160" width="92" height="10" rx="5" fill="#0f172a" opacity="0.12" />
      </g>

      {/* konektor workflow */}
      <g stroke="#0f172a" strokeWidth="2.5" strokeOpacity="0.22" fill="none">
        <path d="M120 210 H250" />
        <path d="M250 210 C290 210, 290 260, 330 260 H420" />
        <path d="M250 210 C290 210, 290 160, 330 160 H420" />
      </g>

      {/* node */}
      <g>
        {[
          [120,210],[250,210],[330,160],[330,260]
        ].map(([x,y],i)=>(
          <g key={i}>
            <circle cx={x} cy={y} r="18" fill="#ffffff" />
            <circle cx={x} cy={y} r="18" fill="#0f172a" opacity="0.06" />
            <circle cx={x} cy={y} r="6" fill="url(#g)" />
          </g>
        ))}
        <circle cx="420" cy="160" r="10" fill="url(#g)" />
        <circle cx="420" cy="260" r="10" fill="url(#g)" />
      </g>

      {/* kotak kecil logo P */}
      <g transform="translate(70,90)">
        <rect x="0" y="0" width="64" height="64" rx="16" fill="#ffffff" />
        <rect x="0" y="0" width="64" height="64" rx="16" fill="#0f172a" opacity="0.06" />
        <rect x="14" y="14" width="28" height="36" rx="10" fill="none" stroke="#0f172a" strokeWidth="4" />
        <circle cx="28" cy="48" r="6" fill="#00b894" />
      </g>
    </svg>
  );
}
