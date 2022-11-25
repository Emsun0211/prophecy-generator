import React from "react";
import { Link } from "react-router-dom";

const Prophecy = () => {
  return (
    <div className="p-6 shadow-lg rounded-lg bg-gray-100">
      <div className="mt-5">
        <div class="flex flex-wrap md gap-4 justify-center">
          <Link to="details/jan">
            <div class="cursor-pointer w-full h-full hover:scale-[1.05] hover:ease-in duration-300 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-[#174ac0] text-xl leading-tight font-bold mb-2">
                January
              </h5>
              <p class="text-gray-700 text-base mb-4">
               Click to view prophecy for the month of January
              </p>
              
            </div>
          </Link>
          <Link to="details/feb">
            <div class="cursor-pointer w-full h-full hover:scale-[1.05] hover:ease-in duration-300 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-[#174ac0] text-xl leading-tight font-bold mb-2">
                February
              </h5>
              <p class="text-gray-700 text-base mb-4">
              Click to view prophecy for the month of February
              </p>
              
            </div>
          </Link>
          <Link to="details/mar">
            <div class="cursor-pointer w-full h-full hover:scale-[1.05] hover:ease-in duration-300 h block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-[#174ac0] text-xl leading-tight font-bold mb-2">
                March
              </h5>
              <p class="text-gray-700 text-base mb-4">
                Click to view prophecy for the month of March
              </p>
              
            </div>
          </Link>
          <Link to="details/apr">
            <div class="cursor-pointer w-full h-full hover:scale-[1.05] hover:ease-in duration-300 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-[#174ac0] text-xl leading-tight font-bold mb-2">
                April
              </h5>
              <p class="text-gray-700 text-base mb-4">
              Click to view prophecy for the month of April
              </p>
              
            </div>
          </Link>
          <Link to="details/may">
            <div class="cursor-pointer w-full h-full hover:scale-[1.05] hover:ease-in duration-300 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-[#174ac0] text-xl leading-tight font-bold mb-2">
                May
              </h5>
              <p class="text-gray-700 text-base mb-4">
              Click to view prophecy for the month of May
              </p>
              
            </div>
          </Link>
          <Link to="details/jun">
            <div class="cursor-pointer w-full h-full hover:scale-[1.05] hover:ease-in duration-300 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-[#174ac0] text-xl leading-tight font-bold mb-2">
                June
              </h5>
              <p class="text-gray-700 text-base mb-4">
              Click to view prophecy for the month of June
              </p>
              
            </div>
          </Link>
          <Link to="details/jul">
            <div class="cursor-pointer w-full h-full hover:scale-[1.05] hover:ease-in duration-300 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-[#174ac0] text-xl leading-tight font-bold mb-2">
                July
              </h5>
              <p class="text-gray-700 text-base mb-4">
              Click to view prophecy for the month of July
              </p>
              
            </div>
          </Link>
          <Link to="details/aug">
            <div class="cursor-pointer w-full h-full hover:scale-[1.05] hover:ease-in duration-300 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-[#174ac0] text-xl leading-tight font-bold mb-2">
                August
              </h5>
              <p class="text-gray-700 text-base mb-4">
              Click to view prophecy for the month of August
              </p>
              
            </div>
          </Link>
          <Link to="details/sep">
            <div class="cursor-pointer w-full h-full hover:scale-[1.05] hover:ease-in duration-300 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-[#174ac0] text-xl leading-tight font-bold mb-2">
                September
              </h5>
              <p class="text-gray-700 text-base mb-4">
              Click to view prophecy for the month of September
              </p>
              
            </div>
          </Link>
          <Link to="details/oct">
            <div class="cursor-pointer w-full h-full hover:scale-[1.05] hover:ease-in duration-300 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-[#174ac0] text-xl leading-tight font-bold mb-2">
                October
              </h5>
              <p class="text-gray-700 text-base mb-4">
              Click to view prophecy for the month of October
              </p>
              
            </div>
          </Link>
          <Link to="details/nov">
            <div class="cursor-pointer w-full h-full hover:scale-[1.05] hover:ease-in duration-300 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-[#174ac0] text-xl leading-tight font-bold mb-2">
                November
              </h5>
              <p class="text-gray-700 text-base mb-4">
              Click to view prophecy for the month of November
              </p>
              
            </div>
          </Link>
          <Link to="details/dec">
            <div class="cursor-pointer w-full h-full hover:scale-[1.05] hover:ease-in duration-300 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-[#174ac0] text-xl leading-tight font-bold mb-2">
                December
              </h5>
              <p class="text-gray-700 text-base mb-4">
              Click to view prophecy for the month of December
              </p>
              
            </div>
          </Link>
         

        </div>
      </div>
    </div>
  );
};

export default Prophecy;
