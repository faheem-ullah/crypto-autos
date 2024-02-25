import { Inter } from "next/font/google";
import { Josefin_Sans, Lora } from "next/font/google";
import "./globals.css";

const Josefin = Josefin_Sans({ subsets: ["latin"] });
export const Lora1 = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={Josefin.className}>{children}</body>
    </html>
  );
}
