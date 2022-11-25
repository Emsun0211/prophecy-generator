import React from "react";
import "tw-elements";

const ProphecyDeatils = () => {
  return (
    <div>
      <h1  className="my-10 text-center text-[#174ac0]  text-2xl ">Prophecy details for the month of <span className="font-bold">JANUARY</span></h1>
      <div class="flex gap-6 justify-center flex-wrap px-5">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Earth Quake</h5>
            <p class=" text-base mb-4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="text-gray-600 text-xs text-[]#ebf1ff">Posted Jan 06 2022</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Ghana to Win the World cup</h5>
            <p class="text-gray-700 text-base mb-4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="text-gray-600 text-xs">Posted Jan 11 2022</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Ghana to Win the World cup</h5>
            <p class="text-gray-700 text-base mb-4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="text-gray-600 text-xs">Posted Jan 24 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProphecyDeatils;
