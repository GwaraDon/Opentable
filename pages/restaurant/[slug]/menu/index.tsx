import Navbar from "@/shared/components/nav";
import Link from "next/link";
import Header from "../components/Header";
import Menu from "../components/Menu";
import RestaurantNav from "../components/RestaurantNav";

export default function RestaurantMenu() {
  return (
    <>
      {/* HEADER */}
      <Header />
      {/* HEADER */}
      {/* DESCRIPTION PORTION */}
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          {/* RESAURANT NAVBAR */}
          <RestaurantNav />
          {/* RESAURANT NAVBAR */}
          {/* MENU */}
          <Menu />
          {/* MENU */}
        </div>
      </div>
      {/* DESCRIPTION PORTION */}
    </>
  );
}
