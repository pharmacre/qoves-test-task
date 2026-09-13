import Image, { type StaticImageData } from "next/image";

import styles from "./PortraitCard.module.scss";

type PortraitCardProps = Readonly<{
  image: StaticImageData;
  label: string;
  alt: string;
  side: "left" | "right";
}>;

export function PortraitCard({ image, label, alt, side }: PortraitCardProps) {
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
        />
      </div>
    </figure>
  );
}
