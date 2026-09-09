import localFont from "next/font/local";

export const neueMontreal = localFont({
  src: [
    {
      path: "../assets/fonts/pp-neue-montreal/PPNeueMontreal-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/pp-neue-montreal/PPNeueMontreal-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/pp-neue-montreal/PPNeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/pp-neue-montreal/PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/pp-neue-montreal/PPNeueMontreal-SemiBolditalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/fonts/pp-neue-montreal/PPNeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  variable: "--font-neue-montreal",
});

export const zagmaMono = localFont({
  src: [
    {
      path: "../assets/fonts/zagma-mono/F37ZagmaMonoTrial-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/zagma-mono/F37ZagmaMonoTrial-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/zagma-mono/F37ZagmaMonoTrial-Book.otf",
      weight: "350",
      style: "normal",
    },
    {
      path: "../assets/fonts/zagma-mono/F37ZagmaMonoTrial-BookItalic.otf",
      weight: "350",
      style: "italic",
    },
    {
      path: "../assets/fonts/zagma-mono/F37ZagmaMonoTrial-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/zagma-mono/F37ZagmaMonoTrial-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/zagma-mono/F37ZagmaMonoTrial-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/zagma-mono/F37ZagmaMonoTrial-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  fallback: ["Courier New", "monospace"],
  variable: "--font-zagma-mono",
  preload: false,
});
