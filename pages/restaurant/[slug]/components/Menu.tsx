import MenuCard from "./MenuCard";

export default function Menu() {
  return (
    <div className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {/* MENU CARD */}
          <MenuCard />
          {/* MENU CARD */}
        </div>
      </div>
    </div>
  );
}
