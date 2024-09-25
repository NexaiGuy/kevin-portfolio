import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: "Portfolio Kevin Blancaflor",
  description: "A Tech Developer Portfolio",

  icons: {
    icon: "/assets/favicon.png",
  },

  openGraph: {
    title: "Portfolio Kevin Blancaflor",
    description: "A Tech Developer Portfolio",
    url: "https://your-portfolio-url.com", // Add your portfolio URL
    images: [
      {
        url: "/assets/work/thumb3.png", // The image path for social media previews
        width: 800,
        height: 600,
        alt: "Portfolio Preview",
      },
    ],
  },
};

const html = sty

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        </body>
    </html>
  );
}
