import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import { roboto_slab } from "@styles/fonts";
import { ThemeProvider } from "./theme-provider";

export const metadata = {
  title: "Prayudha",
  description: "Portofolio of Prayudha Adhitia Libramawan",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${roboto_slab.variable} font-slab`}>
      <body className="flex flex-col w-full min-h-screen justify-between dark:bg-dark-custom">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
