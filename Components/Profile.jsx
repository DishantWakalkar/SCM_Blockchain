import React, { useState, useEffect } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import images from "../Images/index";

export default ({
  openProfile,
  setOpenProfile,
  currentUser,
  getShipmentsCount,
}) => {
  const [count, setCount] = useState();
  useEffect(() => {
    const getshipmentData=getShipmentsCount();

    return async () => {
      const allData = await getshipmentData;
      setCount(allData);
    };
  }, []);
  return openProfile ? (
    <div className="fixed inset—0 z—10 overflow—y—auto">
    <div
      className="inset—0 w—full h-full bg-black opacity—40"
      onClick={() => setOpenProfite(false)}
    ></div>
    <div className="flex items-center min-h—screen px—4 py-8">
      <div className="relative w—full max-w-lg p—4 mx-auto bg-white rounded-md shadow-lg">
        <div className="flex justify-end">
          <button
            className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2"
            onClick={() => setOpenProfile()}
          >
            <svg
              xmlns=" http://www.w3.org/2000/svg"
              className="w-5 h-5 mx-auto"
              viewBox="0 0 20 20"
              fill='currentColor'
            >
              <path
                fillRule="evenodd"
                d="4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 1014.293 4.293a1 1 01-1.414 1.414L10 11.4141-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="max-w-sm mx—auto py—3 space—y—3 text-center">
          <div className="flex flex-col items-center pb-10">
              <Image
                class="w-24 h-24 mb-3 rounded-full shadow—lg"
                src={images.avatar}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Welcome Trader
              </h5>

              <span class="text-sm text—gray-500 dark:text—gray-400">
                {currentUser}
              </span>

              <div class="flex mt—4 space—x—3 md:mt-6">
                <a
                href="#"
                class="inline-flex items-center px—4 py-2 text—sm font-medium text—center text—black rounded—tg border—2"
                >
                  Balance:345 ETH
                </a>
                <a
                href="#"
                class="inline-flex items-center px—4 py-2 text—sm font-medium text—center text—black rounded—tg border—2"
                >
                  Total Shipment:{count}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};  
