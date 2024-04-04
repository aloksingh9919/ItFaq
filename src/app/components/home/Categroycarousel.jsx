"use client"
import useFetch from "@/app/coustomhook/Category";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CategoryCarousel = () => {
  const router = useRouter()
  const [data, dataError] = useFetch("https://backend1.dev.smartcyberhive.com/api/category");
  const [post, postError] = useFetch("https://backend1.dev.smartcyberhive.com/api/post/");

  if (dataError || postError) {
    console.error("Error fetching data:", dataError || postError);
    return <div>Error fetching data</div>;
  }

  if (!data || !post) {
    return <div>Loading...</div>;
  }

  const handleclick = (id) => {
    router.push(`/category/${id}`)
  }


  return (
    <>
      {data.slice(0, 5).map((item, index) => (
        <div key={index} className="w-full">
          <div className="flex justify-between px-2 p-1 items-center">
            <p>{item.name}</p>
            <button
              onClick={() => { handleclick(item.slug) }}
            >View all</button>
          </div>
          <Carousel opts={{ align: "start" }} className="w-full shadow-md rounded-md">
            <CarouselContent className="-ml-1">
              {post.
                filter((postItem) => postItem.category === item.id)
                .map((item1, index) => (
                  <div key={index} className="flex">
                    <CarouselItem>
                      <div className="border-gray-400 flex flex-col p-1 gap-1 w-[255px] max-sm:w-[150px]">
                        <div className="h-[170px] max-xl:h-[100px] w-full rounded-md relative">
                          <Image
                            className="rounded-md"
                            src={"https://flowbite.com/docs/images/blog/image-1.jpg"}
                            alt="Image"
                            fill
                          />
                        </div>
                        <div className="rounded-lg bg-white px-1">
                          <h1 className="text-gray-700 font-semibold max-xl:text-[18px] text-2xl line-clamp-1 hover:text-gray-900 hover:cursor-pointer">
                            {item1.title}
                          </h1>
                          <p className="text-gray-700 tracking-wide line-clamp-3 max-xl:line-clamp-3 max-xl:text-[13px]">
                            {item1.category}
                          </p>
                          <button

                            className="pt-2 text-gray-800 hover:text-blue-700 font-serif min-xl:text-[11px]">
                            Know more
                          </button>
                        </div>
                      </div>
                    </CarouselItem>
                  </div>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ))}
      <div className="h-[700px] w-full ">

      </div>
      {data.slice(5, 10).map((item, index) => (
        <div key={index} className="w-full">
          <div className="flex justify-between px-2 p-1 items-center">
            <p>{item.name}</p>
            <button onClick={() => { handleclick(item.slug) }}>View all</button>
          </div>
          <Carousel opts={{ align: "start" }} className="w-full shadow-md rounded-md">
            <CarouselContent className="-ml-1">
              {post.
                filter((postItem) => postItem.category === item.id)
                .map((item1, index) => (
                  <div key={index} className="flex">
                    <CarouselItem>
                      <div className="border-gray-400 flex flex-col p-1 gap-1 w-[255px] max-sm:w-[150px]">
                        <div className="h-[170px] max-xl:h-[100px] w-full rounded-md relative">
                          <Image
                            className="rounded-md"
                            src={"https://flowbite.com/docs/images/blog/image-1.jpg"}
                            alt="Image"
                            fill
                          />
                        </div>
                        <div className="rounded-lg bg-white px-1">
                          <h1 className="text-gray-700 font-semibold max-xl:text-[18px] text-2xl line-clamp-1 hover:text-gray-900 hover:cursor-pointer">
                            {item1.title}
                          </h1>
                          <p className="text-gray-700 tracking-wide line-clamp-3 max-xl:line-clamp-3 max-xl:text-[13px]">
                            {item1.category}
                          </p>
                          <button className="pt-2 text-gray-800 hover:text-blue-700 font-serif min-xl:text-[11px]">
                            Know more
                          </button>
                        </div>
                      </div>
                    </CarouselItem>
                  </div>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ))}
    </>
  );
};

export default CategoryCarousel;
