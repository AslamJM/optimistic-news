import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "News For Mood",
  description: "We provide the news of your moods",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
