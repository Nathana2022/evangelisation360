import React from "react";
import AsideBar from "../components/LadingPage/AsideBar";
import TimeLine from "../components/LadingPage/TimeLine";
import SideBar from "../components/LadingPage/SideBar";
import usersData from "../Models/users";

export default function LadingPage() {
  return (
    <div className="flex bg-[#ECECEE] gap-x-[5%] px-[5%] pt-[5%] ">
      <SideBar user={usersData} />
      <TimeLine />
      <AsideBar />
    </div>
  );
}
