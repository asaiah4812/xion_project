import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const dreamer = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SkillBridge Nigeria",
  description: "Empowering Nigerian youth through technology, education, and opportunities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dreamer.className} antialiased bg-slate-800`}>
        <Navbar />
        <main className="pt-20 min-h-screen flex">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
