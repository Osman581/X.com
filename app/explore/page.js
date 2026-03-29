'use client'
import React, { useState } from "react";
import Link from "next/link";

function page() {
  const [click,setclick] = useState("foryou")
  return (
    <div className="flex flex-col mr-33">
      <div className="flex pl-2 pr-120 w-90 py-2 mt-1.5 ml-8 border border-gray-700 rounded-full">
        <label className="mt-1" htmlFor="xsearch">
          <svg viewBox="0 0 24 24" width="28" height="16" fill="gray">
            <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
          </svg>
        </label>
        <input
          type="text"
          id="xsearch"
          name="xsearch"
          placeholder="Search"
        ></input>
      </div>

      <div className="flex ml-10 gap-14">
        <div className={`flex py-3.5 cursor-pointer ${click === "foryou" ? "font-bold text-white" : "font-medium text-gray-500"}`} onClick={()=>(setclick("foryou"))}>For you</div>
        <div className={`flex py-3.5 cursor-pointer ${click === "trending" ? "font-bold text-white" : "font-medium text-gray-500"}`} onClick={()=>(setclick("trending"))}>Trending</div>
        <div className={`flex py-3.5 cursor-pointer ${click === "news" ? "font-bold text-white" : "font-medium text-gray-500"}`} onClick={()=>(setclick("news"))}>News</div>
        <div className={`flex py-3.5 cursor-pointer ${click === "sports" ? "font-bold text-white" : "font-medium text-gray-500"}`} onClick={()=>(setclick("sports"))}>Sports</div>
        <div className={`flex py-3.5 cursor-pointer ${click === "enter" ? "font-bold text-white" : "font-medium text-gray-500"}`} onClick={()=>(setclick("enter"))}>Entertainment</div>
      </div>
      <div className="flex ml-2 border-b w-[588px] border-gray-700"></div>

      {click === "foryou" && <div className="ml-6 mt-3 h-[900px] overflow-y-auto no-scrollbar">
        <div>
          <p className="text-sm text-gray-500">Business & finance · Trending</p>
          <p className="font-bold">Erden Timur</p>
          <p className="text-sm text-gray-500">185K posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">Actors · Trending</p>
          <p className="font-bold">Deniz Baykal</p>
          <p className="text-sm text-gray-500">2,583 posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">Only on X · Trending</p>
          <p className="font-bold">Oruç</p>
          <p className="text-sm text-gray-500">11.3K posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Turkey</p>
          <p className="font-bold">#pekgy</p>
          <p className="text-sm text-gray-500">5,315 posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">Sports · Trending</p>
          <p className="font-bold">Ali Koç</p>
          <p className="text-sm text-gray-500">31.3K posts</p>
        </div>
      </div>}

      {click === "trending" && <div className="ml-6 mt-3 h-[900px] overflow-y-auto no-scrollbar">
        <div>
          <p className="text-sm text-gray-500">
            1 · Business & finance · Trending
          </p>
          <p className="font-bold">Erden Timur</p>
          <p className="text-sm text-gray-500">187K posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">2 · Only on X · Trending</p>
          <p className="font-bold">#TasacakBuDeniz</p>
          <p className="text-sm text-gray-500">70K posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">3 · Sports · Trending</p>
          <p className="font-bold">#SeçimeGerekYokGüvenimizTam</p>
          <p className="text-sm text-gray-500">19.2K posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">4 · Sports · Trending</p>
          <p className="font-bold">Necip</p>
          <p className="text-sm text-gray-500">16.7K posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">5 · Trending in Turkey</p>
          <p className="font-bold">Hayırlı Cumalar</p>
          <p className="text-sm text-gray-500">36.9K posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">6 · Trending in Turkey</p>
          <p className="font-bold">#KademeyiÇıkarın</p>
          <p className="text-sm text-gray-500">26.7K posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">7 · Politics · Trending</p>
          <p className="font-bold">#TürkiyeninBaşarısı</p>
          <p className="text-sm text-gray-500">18.4K posts</p>
        </div>
      </div>}

      {click === "news" && <div className="ml-6 mt-3 h-[900px] overflow-y-auto no-scrollbar">
        <div>
          <p className="text-sm text-gray-500">Trending in Politics</p>
          <p className="font-bold">Jack Posobiec</p>
          <p className="text-sm text-gray-500">3,080 posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Politics</p>
          <p className="font-bold">Zelenskyy</p>
          <p className="text-sm text-gray-500">10.6K posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Politics</p>
          <p className="font-bold">Horn of Africa</p>
          <p className="text-sm text-gray-500">3,578 posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in News</p>
          <p className="font-bold">Newspaper</p>
          <p className="text-sm text-gray-500">11.9K posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Politics</p>
          <p className="font-bold">Christians in Ukraine</p>
          <p className="text-sm text-gray-500">8,325 posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Politics</p>
          <p className="font-bold">Somaliland</p>
          <p className="text-sm text-gray-500">95.3K posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">
            Trending in Business & finance
          </p>
          <p className="font-bold">Silver</p>
          <p className="text-sm text-gray-500">167K posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Politics</p>
          <p className="font-bold">Niger</p>
          <p className="text-sm text-gray-500">31.4K posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">
            Trending in Business & finance
          </p>
          <p className="font-bold">Gold 2.0</p>
          <p className="text-sm text-gray-500">1,314 posts</p>
        </div>
        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Politics</p>
          <p className="font-bold">Biafra</p>
          <p className="text-sm text-gray-500">13.9K posts</p>
        </div>
                <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Politics</p>
          <p className="font-bold">Mert</p>
          <p className="text-sm text-gray-500">13.9K posts</p>
        </div>        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Politics</p>
          <p className="font-bold">Biafra</p>
          <p className="text-sm text-gray-500">13.9K posts</p>
        </div>        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Politics</p>
          <p className="font-bold">Biafra</p>
          <p className="text-sm text-gray-500">13.9K posts</p>
        </div>
      </div>}

      {click === "sports" && <div className="ml-6 mt-3 h-[900px] overflow-y-auto no-scrollbar">
        <div>
          <p className="text-sm text-gray-500">Trending in Sports</p>
          <p className="font-bold">Ayden Heaven</p>
          <p className="text-sm text-gray-500">14.2K posts</p>
        </div>

        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Sports</p>
          <p className="font-bold">Ramsey</p>
          <p className="text-sm text-gray-500">7,128 posts</p>
        </div>

        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Sports</p>
          <p className="font-bold">Mali</p>
          <p className="text-sm text-gray-500">81K posts</p>
        </div>

        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Sports</p>
          <p className="font-bold">Dorgu</p>
          <p className="text-sm text-gray-500">44.6K posts</p>
        </div>

        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Sports</p>
          <p className="font-bold">Amorim</p>
          <p className="text-sm text-gray-500">48.6K posts</p>
        </div>

        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Sports</p>
          <p className="font-bold">Lewis Hall</p>
          <p className="text-sm text-gray-500">2,004 posts</p>
        </div>

        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Sports</p>
          <p className="font-bold">Joelinton</p>
          <p className="text-sm text-gray-500">1,059 posts</p>
        </div>

        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Sports</p>
          <p className="font-bold">Fletcher</p>
          <p className="text-sm text-gray-500">14.1K posts</p>
        </div>

        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Sports</p>
          <p className="font-bold">#MUNNEW</p>
          <p className="text-sm text-gray-500">11.1K posts</p>
        </div>

        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Sports</p>
          <p className="font-bold">Wissa</p>
          <p className="text-sm text-gray-500">1,635 posts</p>
        </div>
      </div>}

      {click === "enter" && <div className="ml-6 mt-3 h-[900px] overflow-y-auto no-scrollbar">
        <div>
          <p className="text-sm text-gray-500">Trending in Entertainment</p>
          <p className="font-bold">Millie</p>
          <p className="text-sm text-gray-500">21.6K posts</p>
        </div>

        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Music</p>
          <p className="font-bold">Eunhyuk</p>
          <p className="text-sm text-gray-500">5,729 posts</p>
        </div>

        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Music</p>
          <p className="font-bold">CONGRATULATIONS JUNGKOOK</p>
          <p className="text-sm text-gray-500">3,088 posts</p>
        </div>

        <div className="mt-5">
          <p className="text-sm text-gray-500">Trending in Music</p>
          <p className="font-bold">Fabolous</p>
          <p className="text-sm text-gray-500">2,980 posts</p>
        </div>
      </div>}
    </div>
  );
}

export default page;
