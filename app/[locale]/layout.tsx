import "@/app/globals.css";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

const robotoNoraml = Roboto({
  weight: "400",
});

const robotoBold = Roboto({
  weight: "700",
});

type RootLayoutProps = {
  children: React.ReactNode;
  header: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({
  children,
  header,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  return (
    <html
      lang={locale}
      className={`${robotoNoraml.className} ${robotoBold.className}`}
    >
      <body>
        <NextIntlClientProvider>
          {header}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
