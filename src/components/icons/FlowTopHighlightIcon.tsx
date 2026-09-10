import type { SVGProps } from "react";

export function FlowTopHighlightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 186 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#flow-top-left-shadow)">
        <path
          d="M5.38269 6.05469L180.318 6.0547"
          stroke="url(#flow-top-left-gradient)"
          strokeWidth="1.34566"
        />
      </g>
      <defs>
        <filter
          id="flow-top-left-shadow"
          x="0"
          y="0"
          width="185.701"
          height="12.109"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feGaussianBlur stdDeviation="2.69132" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.568627 0 0 0 0 0.682353 0 0 0 0 0.768627 0 0 0 0.6 0"
          />
          <feBlend in2="BackgroundImageFix" result="shadow" />
          <feBlend in="SourceGraphic" in2="shadow" />
        </filter>
        <linearGradient
          id="flow-top-left-gradient"
          x1="5.38269"
          y1="6.55469"
          x2="180.318"
          y2="6.5547"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CDDBE1" />
          <stop offset="1" stopColor="#869AA1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
