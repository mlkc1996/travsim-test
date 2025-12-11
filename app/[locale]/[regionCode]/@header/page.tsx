import { Header } from "@/components/header/Header";

type HeaderProps = {
  params: Promise<{ locale: string }>;
};

export default function Page({}: HeaderProps) {
  // const { locale } = await params;
  return <Header />;
}
