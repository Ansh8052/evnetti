import type { Metadata } from "next";
import{ClerkProvider} from "@clerk/nextjs"
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
   subsets: ["latin"],
   weight:['400','500', '600','700'],
   variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Evento",
  description: "Event Plateform",
  icons: {
    icon: "",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}>
           <main>{children}</main>
         </body>
    </html>
    </ClerkProvider>
  );
}




