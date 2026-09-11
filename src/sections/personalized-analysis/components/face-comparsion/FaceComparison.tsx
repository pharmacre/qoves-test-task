import Image from "next/image";

import portraitAfter from "@/assets/images/first_section_face_after.png";
import portraitBefore from "@/assets/images/first_section_face_before.png";
import { personalizedAnalysisContent as content } from "@/constants/personalized-analysis";

import { FlowBottomHighlightIcon } from "@/components/icons/FlowBottomHighlightIcon";
import { FlowDotIcon } from "@/components/icons/FlowDotIcon";
import { FlowLineIcon } from "@/components/icons/FlowLineIcon";
import { FlowMaskIcon } from "@/components/icons/FlowMaskIcon";
import { FlowTopHighlightIcon } from "@/components/icons/FlowTopHighlightIcon";
import styles from "./FaceComparison.module.scss";

export function FaceComparison() {
  return (
    <div className={styles.comparison} data-reveal>
      <figure className={styles.portraitCard}>
        <figcaption>{content.portraits.before.label}</figcaption>
        <div className={styles.portraitCrop}>
          <Image
            className={styles.portraitImage}
            src={portraitBefore}
            alt={content.portraits.before.alt}
            priority
            unoptimized
            sizes="(min-width: 1200px) 460px, 31vw"
          />
        </div>
      </figure>

      <div className={styles.flow} aria-hidden="true">
        <div className={styles.icons}>
          <FlowMaskIcon className={styles.leftMask} />
          <FlowMaskIcon className={styles.rightMask} />
          <FlowDotIcon className={styles.topDot} />
          <FlowDotIcon className={styles.bottomDot} />
          <FlowLineIcon className={styles.topIcon} />
          <FlowLineIcon className={styles.bottomIcon} />
          <FlowTopHighlightIcon className={styles.highlightTopLine} />
          <FlowBottomHighlightIcon className={styles.highlightBottomLine} />
        </div>
      </div>

      <figure className={styles.portraitCard}>
        <figcaption>{content.portraits.after.label}</figcaption>
        <div className={styles.portraitCrop}>
          <Image
            className={styles.portraitImage}
            src={portraitAfter}
            alt={content.portraits.after.alt}
            priority
            unoptimized
            sizes="(min-width: 1200px) 460px, 31vw"
          />
        </div>
      </figure>
    </div>
  );
}
