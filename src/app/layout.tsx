import "@styles/globals.css";
import { roboto_slab } from "@styles/fonts";

import ThemeProvider from "@components/providers/theme-provider";
import Navbar from "@components/ui/navbar";
import Footer from "@components/ui/footer";
import ScrollToTopButton from "@components/ui/scroll-to-top-button";
import Contact from "@components/ui/contact";

export const metadata = {
  title: "Prayudha",
  description: "Portofolio of Prayudha Adhitia Libramawan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto_slab.variable} font-slab`}>
      <body className="flex flex-col w-full min-h-screen justify-between dark:bg-dark-custom">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>
            <Contact />
            {children}
            <ScrollToTopButton />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
