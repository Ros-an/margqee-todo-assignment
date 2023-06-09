import * as React from "react";

function ShutdownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="prefix__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 122.88 122.88"
      xmlSpace="preserve"
      width="1em"
      height="1em"
      {...props}
    >
      <style>
        {".prefix__st1{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}"}
      </style>
      <path
        d="M61.44 0c33.93 0 61.44 27.51 61.44 61.44 0 33.93-27.51 61.44-61.44 61.44C27.51 122.88 0 95.37 0 61.44 0 27.51 27.51 0 61.44 0z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#ef4136"
      />
      <path
        className="prefix__st1"
        d="M79.16 46.24c-2.32-2.68-2.03-6.73.65-9.05s6.73-2.03 9.05.65c2.79 3.23 5.01 6.96 6.53 11.04 1.48 3.98 2.29 8.23 2.29 12.62 0 10.01-4.06 19.07-10.62 25.63S71.45 97.75 61.44 97.75c-10.01 0-19.07-4.06-25.63-10.62S25.2 71.51 25.2 61.5c0-4.32.78-8.5 2.2-12.4 1.46-4 3.62-7.69 6.33-10.91a6.406 6.406 0 019.03-.78 6.406 6.406 0 01.78 9.03 23.366 23.366 0 00-4.07 7.04c-.9 2.47-1.39 5.17-1.39 8.02 0 6.45 2.62 12.3 6.84 16.53a23.285 23.285 0 0016.52 6.84c6.45 0 12.3-2.62 16.52-6.84s6.85-10.07 6.85-16.53c0-2.91-.51-5.65-1.43-8.14-.98-2.62-2.41-5.03-4.22-7.12z"
      />
      <path
        className="prefix__st1"
        d="M67.88 49.12c0 3.55-2.88 6.44-6.44 6.44-3.55 0-6.44-2.88-6.44-6.44V29.93c0-3.55 2.88-6.44 6.44-6.44 3.55 0 6.44 2.88 6.44 6.44v19.19z"
      />
    </svg>
  );
}

const MemoShutdownIcon = React.memo(ShutdownIcon);
export default MemoShutdownIcon;
