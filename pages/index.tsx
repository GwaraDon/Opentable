import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/shared/components/nav";
import Header from "@/shared/components/header";
import RestaurantCard from "@/shared/components/restaurant-card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <Header />
      {/* HEADER */}
      {/* CARDS */}
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {/* CARD */}
        <div className="max-w-xs">
          <RestaurantCard></RestaurantCard>
        </div>
        {/* CARD */}
      </div>
      {/* CARDS */}
    </main>
  );
}
