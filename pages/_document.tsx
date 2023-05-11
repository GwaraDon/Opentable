import Navbar from "@/shared/components/nav";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <main className="bg-gray-100 min-h-screen ">
          <div className="m-auto bg-white">
            <Navbar></Navbar>
            <Main />
          </div>
        </main>
        <NextScript />
      </body>
    </Html>
  );
}
