import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";

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
      <body className="bg-slate-100 min-h-screen text-slate-900">
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <div className="h-16" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
