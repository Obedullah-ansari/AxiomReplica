import React from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Sabnavbar from "@/Components/Subnavbar/Sabnavbar";
import Body from "@/Components/Body/Body";
import Footer from "@/Components/Footer/Footer";

function page() {
  return (
    <>
      <main className="w-full h-screen   bg-black   overflow-hidden">
        <Navbar />
        <Sabnavbar />

        <Body />

        <Footer />
      </main>
    </>
  );
}

export default page;
