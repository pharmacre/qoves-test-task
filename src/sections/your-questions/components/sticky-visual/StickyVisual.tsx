import videoPoster from "@/assets/videos/man-poster.png";
import { GridRow } from "@/components/grid-row/GridRow";

import styles from "./StickyVisual.module.scss";

const videoSrc = new URL("../../../../assets/videos/man.mp4", import.meta.url).toString();

export function StickyVisual() {
  return (
    <div className={styles.stickyVisual} aria-hidden="true">
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        poster={videoPoster.src}
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className={styles.videoShade} />
      <div className={styles.grid}>
        <GridRow className={styles.gridCanvas}>
          <span />
        </GridRow>
      </div>
    </div>
  );
}
