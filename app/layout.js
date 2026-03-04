import "./globals.css";
import Footer from "../components/footer";
import CookieBanner from "../components/CookierBanner";

export const metadata = {
  title: "Nalgoova Therapeutics",
  description: "Swiss medical technology company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
        <cookieBanner />
      </body>
    </html>
  );
}