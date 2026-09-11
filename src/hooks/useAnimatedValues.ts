import { useEffect, useRef, useState } from "react";

/** Animate demo measurements on entry and restore them on exit. */
export function useAnimatedValues(initial: number[], randomize: () => number[]) {
  const [values, setValues] = useState(initial);
  const current = useRef(initial);
  const velocity = useRef(initial.map(() => 0));
  const frame = useRef<number | null>(null);
  const hovered = useRef(false);
  const focused = useRef(false);

  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    },
    [],
  );

  function animate(target: number[]) {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      current.current = target;
      velocity.current = target.map(() => 0);
      setValues(target);
      frame.current = null;
      return;
    }

    let previousTime = performance.now();
    function tick(now: number) {
      const elapsed = Math.max(0, (now - previousTime) / 1000);
      previousTime = now;
      const frequency = 12;
      const decay = Math.exp(-frequency * elapsed);
      let settled = true;
      current.current = target.map((value, index) => {
        const offset = current.current[index] - value;
        const acceleration = velocity.current[index] + frequency * offset;
        const nextOffset = (offset + acceleration * elapsed) * decay;
        velocity.current[index] =
          (velocity.current[index] - frequency * acceleration * elapsed) * decay;
        if (Math.abs(nextOffset) > 0.005 || Math.abs(velocity.current[index]) > 0.05)
          settled = false;
        return value + nextOffset;
      });
      if (settled) {
        current.current = target;
        velocity.current = target.map(() => 0);
      }
      setValues(current.current);
      frame.current = settled ? null : requestAnimationFrame(tick);
    }
    frame.current = requestAnimationFrame(tick);
  }

  return {
    values,
    events: {
      onMouseEnter: () => {
        hovered.current = true;
        if (!focused.current) animate(randomize());
      },
      onMouseLeave: () => {
        hovered.current = false;
        if (!focused.current) animate(initial);
      },
      onFocus: () => {
        focused.current = true;
        if (!hovered.current) animate(randomize());
      },
      onBlur: () => {
        focused.current = false;
        if (!hovered.current) animate(initial);
      },
    },
  };
}
