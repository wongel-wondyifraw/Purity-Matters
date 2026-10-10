import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const nokiaAmharic = localFont({
  src: [
    {
      path: "../../public/NokiaPureHeadline_ULt.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/NokiaPureHeadline_Bd.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nokia-amharic",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Purity Matters Ethiopia",
  description: "ቅድስና እኛ እግዚአብሔርን የምናይበት መንፈሳዊ ዐይናችን፣ እግዚአብሔርም እኛን የሚያይበት ብርሃናዊ ልብሳችን ነው። Explore Purity Matters Ethiopia's books, digital platform, and resources.",
  keywords: ["Purity Matters", "Ethiopia", "ቅድስና", "ፖርኖርሽኝ", "የኅሩያን ሕይወት", "Christian books Ethiopia"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${nokiaAmharic.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
