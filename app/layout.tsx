import "./globals.css";

export const metadata = {
  title: "Omni Points",
  description: "Points dashboard"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}