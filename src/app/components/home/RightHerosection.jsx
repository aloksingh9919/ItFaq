import Image from "next/image";
import React from "react";

const RightHerosection = () => {
  return (
    <>
      <div className="w-[25%] max-xl:w-full h-full pt-1 space-y-1">
        <h1 className="p-1  font-serif text-zinc-600  font-semibold">
          Recommendation
        </h1>

        <div className=" grid grid-flow-row max-xl:grid-flow-col max-md:grid-flow-row max-md:grid-cols-2 gap-1 bg-white w-full">
          <card className="border-gray-400 border rounded-tl-xl rounded-br-xl  w-full flex flex-col  p-1 gap-1">
            <div className="h-[170px] max-xl:h-[100px] w-full rounded-md relative">
              <Image
                className="rounded-md"
                src={"https://flowbite.com/docs/images/blog/image-1.jpg"}
                alt="Image"
                fill
              />
            </div>

            <div className=" rounded-lg bg-white px-1">
              <h1 className="text-gray-700 font-semibold max-xl:text-[18px] text-2xl line-clamp-1 hover:text-gray-900 hover:cursor-pointer">
                I'm supper dog for you.
              </h1>
              <p className="text-gray-700 tracking-wide line-clamp-3 max-xl:line-clamp-2  max-xl:text-[13px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
                labore. Ea debitis beatae sequi deleniti.
              </p>
              <button className=" pt-2  text-gray-800 hover:text-blue-700 font-serif min-xl:text-[11px] ">
                Know more -
              </button>
            </div>
          </card>

          <card className="border-gray-400 border rounded-tl-xl rounded-br-xl  w-full flex max-xl:flex-col p-1 gap-2">
            <div className="h-[100px] w-full rounded-md relative">
              <Image
                className="rounded-md"
                src={"https://flowbite.com/docs/images/blog/image-1.jpg"}
                alt="Image"
                fill
              />
            </div>

            <div className=" rounded-lg bg-white px-1">
              <h1 className="text-gray-700 font-semibold text-[18px] line-clamp-1 hover:text-gray-900 hover:cursor-pointer">
                I'm supper dog for you.
              </h1>
              <p className="text-gray-700 tracking-wide line-clamp-2 text-[13px] ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
                labore. Ea debitis beatae sequi deleniti.
              </p>
              <button className=" pt-2  text-gray-800 hover:text-blue-700 font-serif min-xl:text-[11px] ">
                Know more -
              </button>
            </div>
          </card>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default RightHerosection;
