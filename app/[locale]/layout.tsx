import "@/app/global.css";
import { Roboto } from "next/font/google";

const robotoNoraml = Roboto({
  weight: "400",
});

const robotoBold = Roboto({
  weight: "700",
});

type RootLayoutProps = {
  children: React.ReactNode;
  header: React.ReactNode;
};

export default function RootLayout({ children, header }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${robotoNoraml.className} ${robotoBold.className}`}
    >
      <body>
        {header}
        {children}
      </body>
    </html>
  );
}
