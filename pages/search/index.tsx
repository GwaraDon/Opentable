import Header from "@/shared/components/header";
import Navbar from "@/shared/components/nav";
import RestaurantCard from "./components/RestaurantCard";
import Sidebar from "./components/sidebar";

export default function Search() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <Navbar></Navbar>
        {/* HEADER */}
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          {/* SEARCH SIDE BAR */}
          <div className="w-1/5">
            <Sidebar></Sidebar>
          </div>
          {/* SEARCH SIDE BAR */}
          <div className="w-5/6">
            {/* RESAURANT CAR */}
            <RestaurantCard></RestaurantCard>
            {/* RESAURANT CAR */}
          </div>
        </div>
      </main>
    </main>
  );
}
