import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import Links from "../components/Links";  // デフォルトエクスポートの場合は括弧なしでインポート
import Headline from "../components/Headline";


export default function Home() {
  return (
    <>
      <Head>
        <title>PAGE</title>
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Headline title="PP PAGE!!!!!" />
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        

        <Links />
      </main>

      <Footer />
    </>
  );
}
