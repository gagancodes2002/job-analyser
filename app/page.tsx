"use client";
import Image from "next/image";
import NavBar from "../src/components/navbar";

export default function Home() {
  return (
    <div className="text-gray-800 h-[calc(100vh-100px)]">
      <div>This is home page </div>
      <div>
        Please click on <b>Dashboard</b> on navbar{" "}
      </div>
    </div>
  );
}
