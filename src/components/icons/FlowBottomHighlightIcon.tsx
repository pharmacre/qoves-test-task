import type { SVGProps } from "react";

export function FlowBottomHighlightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 180 78" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#flow-bottom-right-shadow)">
        <path
          d="M5.38269 6.05469H151.978C163.869 6.05469 173.509 15.6943 173.509 27.5852V71.992"
          stroke="url(#flow-bottom-right-gradient)"
          strokeWidth="1"
        />
      </g>
      <defs>
        <filter
          id="flow-bottom-right-shadow"
          x="0"
          y="0"
          width="179.564"
          height="77.3747"
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
          id="flow-bottom-right-gradient"
          x1="5.38269"
          y1="39.0233"
          x2="173.509"
          y2="39.0233"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CDDBE1" />
          <stop offset="1" stopColor="#869AA1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
