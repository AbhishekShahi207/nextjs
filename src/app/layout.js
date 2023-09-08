import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ul className="li">
          
            <Link href="/" className="list">
            <li className="navigate">   Home  </li>
            </Link>
        
         
          
             <Link href="/about" className="list">
             <li className="navigate">  About Us</li>
            </Link>
          
          
         
            <Link href="/product" className="list">
            <li className="navigate">Product </li>
            </Link>
         
         
         
            <Link href="/contact" className="list">
            <li className="navigate"> Contact Us</li>
            </Link>
          
        </ul>

        {children}
      </body>
    </html>
  );
}
