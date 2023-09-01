import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import { roboto_slab } from "@styles/fonts";

export const metadata = {
  title: "Prayudha",
  description: "Portofolio of Prayudha Adhitia Libramawan",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${roboto_slab.variable} font-slab`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
