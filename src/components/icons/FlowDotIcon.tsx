import type { SVGProps } from "react";

export function FlowDotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#flow-top-dot-shadow)">
        <rect
          x="6.72827"
          y="4.03711"
          width="5.38264"
          height="5.38264"
          rx="1.34566"
          fill="#869AA1"
        />
      </g>
      <defs>
        <filter
          id="flow-top-dot-shadow"
          x="0"
          y="0"
          width="16.148"
          height="16.1481"
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
          <feOffset dx="-1.34566" dy="1.34566" />
          <feGaussianBlur stdDeviation="2.69132" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.603922 0 0 0 0 0.682353 0 0 0 0 0.709804 0 0 0 0.6 0"
          />
          <feBlend in2="BackgroundImageFix" result="shadow" />
          <feBlend in="SourceGraphic" in2="shadow" />
        </filter>
      </defs>
    </svg>
  );
}
