export type FaqCategory = {
  title: string;
  items: Array<{ question: string; answer: string }>;
};

export const faqCategories: FaqCategory[] = [
  {
    title: "General Questions",
    items: [
      {
        question: "What is Qoves?",
        answer:
          "Qoves is the world's best platform to improve your looks and achieve a real facial transformation without surgery. We provide you, from the comfort of your home, with a personalized facial analysis and transformation plan based on over 2,000 academic studies.",
      },
      {
        question: "Who is this for?",
        answer:
          "Qoves is for anyone who wants an objective, research-led understanding of their facial aesthetics and clear guidance on how to improve them.",
      },
      {
        question: "What exactly will I receive?",
        answer:
          "You will receive a personalized facial analysis together with practical recommendations and a step-by-step improvement plan tailored to your features and goals.",
      },
      {
        question: "How does it work?",
        answer:
          "Submit the requested photos and information online. Our team reviews your facial features, prepares your analysis, and delivers your personalized plan digitally.",
      },
      {
        question: "How long will it take for me to receive my results?",
        answer:
          "Turnaround depends on the service selected. Your confirmation email will include the current delivery estimate and we will keep you updated throughout the process.",
      },
      {
        question: "Is this a one-time report or a continuous service?",
        answer:
          "Your initial analysis is a complete, one-time report. Where available, ongoing support can be added if you would like help applying and refining your protocol.",
      },
      {
        question: "How often do I need to submit photos?",
        answer:
          "One complete photo submission is enough for your initial analysis. We may request updated photos later if you choose ongoing progress reviews.",
      },
      {
        question: "What makes Qoves different from beauty apps or filters?",
        answer:
          "Qoves does not alter your image or apply a generic beauty filter. Recommendations are based on your real features, professional assessment, and published research.",
      },
      {
        question: "Can I really get results without surgery?",
        answer:
          "Many aspects of appearance can be improved through grooming, skincare, styling, health, and other non-surgical changes. Results vary, and your plan will set realistic expectations.",
      },
    ],
  },
  {
    title: "About the Analysis",
    items: [
      {
        question: "What does the analysis cover?",
        answer:
          "It evaluates facial proportions, symmetry, skin, feature relationships, and other aesthetic markers relevant to your individual face.",
      },
      {
        question: "Is every report personalized?",
        answer:
          "Yes. Your report is prepared from your own photos and goals rather than generated from a generic template.",
      },
    ],
  },
  {
    title: "About the Protocol",
    items: [
      {
        question: "How are recommendations prioritized?",
        answer:
          "Recommendations are organized by likely impact, practicality, and relevance so you can focus on the changes that matter most.",
      },
      {
        question: "Do I have to follow every recommendation?",
        answer:
          "No. The protocol is guidance, and you remain in control of which recommendations fit your preferences and circumstances.",
      },
    ],
  },
  {
    title: "Experience & Use",
    items: [
      {
        question: "Do I need special equipment?",
        answer:
          "No. A modern phone camera, suitable lighting, and the photo instructions we provide are all you need to get started.",
      },
    ],
  },
  {
    title: "Pricing & Subscription",
    items: [
      {
        question: "Are there any recurring charges?",
        answer:
          "Any recurring charge will be clearly shown before purchase. One-time reports do not renew automatically.",
      },
    ],
  },
  {
    title: "Privacy & Data",
    items: [
      {
        question: "How are my photos handled?",
        answer:
          "Your photos are handled securely and used only to provide the services you request, in accordance with our privacy policy.",
      },
    ],
  },
  {
    title: "Mindset & Philosophy",
    items: [
      {
        question: "What is Qoves' approach to aesthetics?",
        answer:
          "Our approach combines objective research with respect for individuality. The goal is informed self-improvement, not a single standard of beauty.",
      },
    ],
  },
  {
    title: "Practical Concerns",
    items: [
      {
        question: "I've had cosmetic procedures before—will this still work?",
        answer:
          "Yes. We'll take that into account and tailor your plan accordingly.",
      },
      {
        question: "I don't want surgery—can this still help me?",
        answer:
          "Yes. Your plan can focus entirely on practical, non-surgical ways to improve your appearance.",
      },
      {
        question: "I live outside the US—can I still use Qoves?",
        answer: "Yes. Qoves is a digital service and is available to clients around the world.",
      },
      {
        question: "I don't know anything about facial aesthetics—is that okay?",
        answer:
          "Absolutely. Your report explains each recommendation clearly, so no prior knowledge is required.",
      },
    ],
  },
  {
    title: "About Support",
    items: [
      {
        question: "How can I contact the team?",
        answer:
          "Use the chat in the bottom right or email hello@qoves.com and our team will help with your question.",
      },
    ],
  },
];
