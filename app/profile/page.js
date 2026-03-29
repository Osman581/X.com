'use client'
import React, { useState } from "react";

function page() {
  const [click,setclick] = useState("posts")
  return (
    <div className="flex flex-col mr-33">
      <div className="flex">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="flex w-5 h-5 text-white mt-5 mr-10"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
        </svg>
        <div className="flex flex-col pr-60 mt-2">
          <p className="font-bold text-xl flex">
            Osman Salih Akbulut
            <svg
              viewBox="0 0 24 24"
              aria-label="Protected account"
              role="img"
              className="w-5 h-5 text-white mt-1"
              fill="currentColor"
              width="24"
              height="24"
              data-testid="icon-lock"
            >
              <path d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z" />
            </svg>
          </p>
          <p className="text-sm text-gray-500">0 posts</p>
        </div>
        <svg
          className="flex mt-5"
          viewBox="0 0 24 24"
          width="28"
          height="20"
          fill="white"
        >
          <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
        </svg>
      </div>
      <div className="px-60 py-25 bg-[#3a3f44]"></div>
      <img
        className="w-35 h-35 rounded-full border-4 border-black absolute mt-46.5 ml-4"
        src="pp.png"
        alt="profil fotoğrafi"
      ></img>
      <div className="flex px-4 py-2 w-31 font-bold text-sm border border-gray-500 rounded-full ml-102 mt-3">
        Set up profile
      </div>
      <div className="flex flex-col mt-10 ml-4">
        <p className="font-bold text-xl flex">
          Osman Salih Akbulut
          <svg
            viewBox="0 0 24 24"
            aria-label="Protected account"
            role="img"
            className="w-5 h-5 text-white mt-1"
            fill="currentColor"
            width="24"
            height="24"
            data-testid="icon-lock"
          >
            <path d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z" />
          </svg>
        </p>
        <p className="text-sm text-gray-500">@osmansak58</p>
        <p className="text-gray-500 mt-3">Joined September 2023</p>
        <div className="flex text-sm mt-3">
          <p className="font-bold">12</p>
          <p className="ml-1 text-gray-500">Following</p>
          <p className="font-bold ml-5">5</p>
          <p className="ml-1 text-gray-500">Followers</p>
        </div>
      </div>

      <div className="flex ml-6 gap-12">
        <div className={`flex py-3.5 cursor-pointer ${click === "posts" ? "font-bold text-white" : "font-medium text-gray-500"}`} onClick={()=>(setclick("posts"))}>Posts</div>
        <div className={`flex py-3.5 cursor-pointer ${click === "replies" ? "font-bold text-white" : "font-medium text-gray-500"}`} onClick={()=>(setclick("replies"))}>Replies</div>
        <div className={`flex py-3.5 cursor-pointer ${click === "high" ? "font-bold text-white" : "font-medium text-gray-500"}`} onClick={()=>(setclick("high"))}>Highlights</div>
        <div className={`flex py-3.5 cursor-pointer ${click === "articles" ? "font-bold text-white" : "font-medium text-gray-500"}`} onClick={()=>(setclick("articles"))}>Articles</div>
        <div className={`flex py-3.5 cursor-pointer ${click === "media" ? "font-bold text-white" : "font-medium text-gray-500"}`} onClick={()=>(setclick("media"))}>Media</div>
        <div className={`flex py-3.5 cursor-pointer ${click === "likes" ? "font-bold text-white" : "font-medium text-gray-500"}`} onClick={()=>(setclick("likes"))}>Likes</div>
      </div>
      <div className="flex ml-0 border-b w-[588px] border-gray-700"></div>

      {click === "posts" && <div className="ml-6 mt-3 h-[900px] overflow-y-auto no-scrollbar">
        <p className="font-extrabold text-xl">Who to follow</p>
        <div className="mt-5">
          <p className="font-bold">F.TRAVOLTA</p>
          <p className="text-sm text-gray-500">@kontravolta_</p>
        </div>
        <div className="mt-5">
          <p className="font-bold">Mertbaba Okulmuş</p>
          <p className="text-sm text-gray-500">@okulmus_mert</p>
        </div>
        <div className="mt-5">
          <p className="font-bold">Osman Salih Akbulut</p>
          <p className="text-sm text-gray-500">@osmansak58</p>
        </div>
        </div>}

      {click === "replies" && <div className="ml-6 mt-3 h-[900px] overflow-y-auto no-scrollbar">
        <p className="font-extrabold text-xl">Who to follow</p>
        <div className="mt-5">
          <p className="font-bold">Galatasaray SK</p>
          <p className="text-sm text-gray-500">@GalatasaraySK</p>
        </div>
        <div className="mt-5">
          <p className="font-bold">SportsCenter</p>
          <p className="text-sm text-gray-500">@SportsCenter</p>
        </div>
        <div className="mt-5">
          <p className="font-bold">Hatem Ben Arda</p>
          <p className="text-sm text-gray-500">@HatemBenArdaa</p>
        </div>
        </div>}

      {click === "high" && <div className="ml-6 mt-8 h-[900px] overflow-y-auto no-scrollbar">
        <p className="font-extrabold text-3xl w-70 ml-27">Highlight on your profile</p>
        <p className="text-gray-500 text-sm w-80 ml-27 mt-2">You must be subscribed to Premium to highlight posts on your profile.</p>
        <div className="flex px-8 py-4 w-59 ml-27 bg-[#E7EBED] text-black font-bold rounded-full cursor-pointer mt-7">
          Subscribe to Premium
        </div>
        </div>}
        
      {click === "articles" && <div className="ml-6 mt-8 h-[900px] overflow-y-auto no-scrollbar">
        <p className="font-extrabold text-3xl w-80 ml-27">Write Articles on X</p>
        <p className="text-gray-500 text-sm w-80 ml-27 mt-2">You must be subscribed to Premium to write Articles on X</p>
        <div className="flex px-8 py-4 w-59 ml-27 bg-[#E7EBED] text-black font-bold rounded-full cursor-pointer mt-7">
          Upgrade to Premium
        </div>
        </div>}

      {click === "media" && <div className="ml-6 mt-8 h-[900px] overflow-y-auto no-scrollbar">
        <p className="font-extrabold text-3xl w-80 ml-27">Lights, camera … attachments!</p>
        <p className="text-gray-500 text-sm w-75 ml-27 mt-2">When you post photos or videos, they will show up here.</p>
        </div>}

      {click === "likes" && <div className="ml- mt-1 h-[900px] overflow-y-auto no-scrollbar">
        <div className="flex text-sm w-[580px] ml-1 px-4 py-3 gap-2 bg-blue-950 rounded-xl"> 
          <svg
              viewBox="0 0 24 24"
              aria-label="Protected account"
              role="img"
              className="w-4.5 h-4.5 text-white "
              fill="currentColor"
              width="24"
              height="24"
              data-testid="icon-lock"
            >
              <path d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z" />
            </svg>
          Your likes are private. Only you can see them.</div>
        </div>}
    </div>
  );
}

export default page;
