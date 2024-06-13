import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight : ['400', '500', '700', '900'],subsets: ["latin"] });

export const metadata = {
  title:  {
    default: "Next Hero",
    template: "%s | Next Hero"
  },
  description: "Super Powerful Next Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
       <div className="min-h-screen">
       {children}
       </div>
        <footer className="bg-blue-400">
          This Is my footer
        </footer>
        </body>
    </html>
  );
}
