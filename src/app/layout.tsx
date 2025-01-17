"use client";
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { AbstraxionProvider } from "@burnt-labs/abstraxion";
import "@burnt-labs/abstraxion/dist/index.css";


import "@burnt-labs/abstraxion/dist/index.css";
import "@burnt-labs/ui/dist/index.css";

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: "SkillBridge Nigeria",
//   description: "Empowering Nigerian youth through technology, education, and opportunities",
// };

const treasuryConfig = {
  treasury: "xion1thcg8ll2rpeh7tn8y2xg30hduh5f2rvyaxenmfz9uanv9un04fmsgmxt6a", // Example XION treasury instance for executing seat contract
  // gasPrice: "0uxion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-slate-800`}>
      <AbstraxionProvider config={treasuryConfig}>
          <Navbar />
          <main className="pt-20 min-h-screen flex">
            <Sidebar />
            {children}
          </main>
        </AbstraxionProvider>
      </body>
    </html>
  );
}
