import { Header } from "@/components/header/Header";

type HeaderProps = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: HeaderProps) {
  const { locale } = await params;
  return <Header />;
}
