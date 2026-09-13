import type { StaticImageData } from "next/image";

import beautyStandards from "@/assets/images/your-questions/beauty_standards.png";
import geneticFactors from "@/assets/images/your-questions/genetic_factors.png";
import lifestyleFactors from "@/assets/images/your-questions/lifestyle_factors.png";

export type Insight = {
  title: string;
  description: string;
  image: StaticImageData;
};

export const insights: Insight[] = [
  {
    title: "Lifestyle factors",
    description: "Considers diet, climate, stress, sleep, and habits.",
    image: lifestyleFactors,
  },
  {
    title: "Cultural beauty standards",
    description: "Adapts to regional and societal ideals.",
    image: beautyStandards,
  },
  {
    title: "Genetic factors",
    description:
      "Takes into account genetic factors and how they might impact your facial aesthetics.",
    image: geneticFactors,
  },
];

export const considerations = [
  "First impressions matter",
  "It has a considerable impact on interpersonal interactions",
  "Small improvements can drastically impact quality of life",
];

export const principles = [
  "Not chasing unrealistic standards",
  "Not trying to look like someone else",
  "Not seeking perfection",
  "Aiming only for a better version of yourself",
];
