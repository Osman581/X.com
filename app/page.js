'use client'
import React, { useState } from "react";

function page() {
const [click,setclick] = useState("foryou")
  return (
    <div className="flex flex-col mr-33">
      <div className="flex ml-33 gap-54">
        <div className={`flex py-3.5 cursor-pointer ${click === "foryou" ? "font-bold text-white" : "font-medium text-gray-500"}`} onClick={()=>(setclick("foryou"))}>For you</div>
        <div className={`flex py-3.5 cursor-pointer ${click === "follow" ? "font-bold text-white" : "font-medium text-gray-500"}`} onClick={()=>(setclick("follow"))}>Following</div>
      </div>
      <div className="flex ml-2 border-b w-[588px] border-gray-700"></div>
    </div>
  );
}

export default page;
