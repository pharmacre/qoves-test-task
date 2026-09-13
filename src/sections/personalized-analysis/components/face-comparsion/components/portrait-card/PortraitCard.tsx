import Image, { type StaticImageData } from "next/image";

import styles from "./PortraitCard.module.scss";

type PortraitCardProps = Readonly<{
  image: StaticImageData;
  label: string;
  alt: string;
  side: "left" | "right";
  onLoad?: () => void;
}>;

export function PortraitCard({ image, label, alt, side, onLoad }: PortraitCardProps) {
  return (
    <figure className={`${styles.card} ${styles[side]}`}>
      <figcaption>{label}</figcaption>
      <div className={styles.crop}>
        <Image
          className={styles.image}
          src={image}
          alt={alt}
          priority
          placeholder="blur"
          sizes="(min-width: 1200px) 460px, 31vw"
          onLoad={onLoad}
          onError={onLoad}
        />
      </div>
    </figure>
  );
}
