import { Poppins, Anton } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} ${anton.variable} antialiased font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
