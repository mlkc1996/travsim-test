import "./globals.css";
import { Roboto } from "next/font/google";

const robotoNoraml = Roboto({
  weight: "400",
});

const robotoBold = Roboto({
  weight: "700",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoNoraml.className} ${robotoBold.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
