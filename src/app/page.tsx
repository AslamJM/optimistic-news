import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <h1 className="text-center my-2 text-blue-600">Hello Next</h1>
    </main>
  );
}
