import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Мій сайт",
  description: "Особистий сайт",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
