import { Theme, ThemePanel } from "@radix-ui/themes";
import ThemeProviding from "@/components/ThemeProviding";
import "./globals.css";
// import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full min-h-full" lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-full `}>
        <ThemeProviding>
          <Theme className="h-full " grayColor="sage" panelBackground="solid">
            {children}
            <ThemePanel />
          </Theme>
        </ThemeProviding>
      </body>
    </html>
  );
}
