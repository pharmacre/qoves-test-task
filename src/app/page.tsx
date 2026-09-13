import { Spacing } from "@/components/spacing/Spacing";
import { Faq } from "@/sections/faq/Faq";
import { PersonalizedAesthetics } from "@/sections/personalized-aesthetics/PersonalizedAesthetics";
import { PersonalizedAnalysis } from "@/sections/personalized-analysis/PersonalizedAnalysis";
import { YourQuestions } from "@/sections/your-questions/YourQuestions";

export default function HomePage() {
  return (
    <main>
      <PersonalizedAnalysis />
      <Spacing />
      <PersonalizedAesthetics />
      <Spacing />
      <Faq />
      <Spacing />
      <YourQuestions />
    </main>
  );
}
