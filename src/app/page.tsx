import { Spacing } from "@/components/spacing/Spacing";
import { PersonalizedAesthetics } from "@/sections/personalized-aesthetics/PersonalizedAesthetics";
import { PersonalizedAnalysis } from "@/sections/personalized-analysis/PersonalizedAnalysis";

export default function HomePage() {
  return (
    <main>
      <PersonalizedAnalysis />
      <Spacing />
      <PersonalizedAesthetics />
      <Spacing />
    </main>
  );
}
