import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/shared/components/nav";
import Header from "@/shared/components/header";
import RestaurantCard from "@/shared/components/restaurant-card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen ">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar></Navbar>
        <main>
          {/* HEADER */}
          <Header />
          {/* HEADER */}
          {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            {/* CARD */}
            <RestaurantCard></RestaurantCard>
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
