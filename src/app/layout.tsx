import type { Metadata } from "next";
import { Quicksand, Roboto } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: '--font-quicksand',
  weight: ["300", "400", "500", "600", "700",],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: '--font-roboto',
  weight: ["300", "400", "500", "700",],
});

export const metadata: Metadata = {
  title: 'Babogue',
  description:
    'Sleep consultants.',
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} ${roboto.variable}`}>
      <body>
        <Header />
        <div className="overflow-hidden z-[2] relative">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
