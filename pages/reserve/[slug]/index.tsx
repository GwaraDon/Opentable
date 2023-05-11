import Navbar from "@/shared/components/nav";
import Form from "./components/Form";
import Header from "./components/Header";

export default function Reserve() {
  return (
    <>
      {/* NAVBAR END */}
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          {/* HEADER */}
          <Header />
          {/* HEADER */}
          {/* FORM */}
          <Form />
        </div>
      </div>
    </>
  );
}
