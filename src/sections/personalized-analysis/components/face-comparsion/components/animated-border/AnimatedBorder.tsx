import styles from "./AnimatedBorder.module.scss";

const flowPath = [
  "M 437.624 200 V 206 Q 437.624 230 461.581 230 H 864.419 Q 888.376 230 888.376 206 V 200",
  "V 12 Q 888.376 0 900.354 0 H 1314.066 Q 1326 0 1326 12",
  "V 488 Q 1326 500 1314.066 500 H 900.354 Q 888.376 500 888.376 488",
  "V 300 V 294 Q 888.376 270 864.419 270 H 461.581 Q 437.624 270 437.624 294 V 300",
  "V 488 Q 437.624 500 425.646 500 H 11.934 Q 0 500 0 488",
  "V 12 Q 0 0 11.934 0 H 425.646 Q 437.624 0 437.624 12 Z",
].join(" ");

const tailLayers = Array.from({ length: 10 }, (_, index) => 20 - index * 2);

function Comet({ phase = 0 }: Readonly<{ phase?: number }>) {
  const from = phase ? -500 : 0;
  const to = from - 1000;

  return (
    <>
      {tailLayers.map((length) => (
        <path
          key={length}
          className={styles.tailLayer}
          d={flowPath}
          pathLength="1000"
          style={{ strokeDasharray: `0 ${1000 - length} ${length} 0` }}
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="12s"
            from={from}
            repeatCount="indefinite"
            to={to}
          />
        </path>
      ))}

      <rect className={styles.head} x="-3" y="-3" width="6" height="6" rx="1.5">
        <animateMotion
          begin={phase ? `-${phase}s` : undefined}
          calcMode="paced"
          dur="12s"
          repeatCount="indefinite"
        >
          <mpath href="#comparison-flow-path" />
        </animateMotion>
      </rect>
    </>
  );
}

export function AnimatedBorder() {
  return (
    <svg
      className={styles.border}
      viewBox="0 0 1326 500"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <path id="comparison-flow-path" d={flowPath} pathLength="1000" />
      </defs>
      <Comet />
      <Comet phase={6} />
    </svg>
  );
}
