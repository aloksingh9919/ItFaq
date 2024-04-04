"use client";
import Card from "@/app/components/categorypost/Card";
import Paginationbox from "@/app/components/categorypost/Paginationbox";
import useFetch from "@/app/coustomhook/Category";

import { useState } from "react";

const Allpostpage =() => {
  const [page, setPage] = useState(1);

  const [data] =  useFetch(
    `https://backend1.dev.smartcyberhive.com/api/post/${page}/80/`
  );

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" px-[80px] flex flex-col items-center justify-center gap-y-4 max-sm:px-2">
      <div className="grid grid-cols-5 gap-2 grid-flow-row max-sm:grid-cols-2 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-4  mb-5">
        {data.items?.map((item,index) => (
          <Card 
          key={index}
          title={item.title} />
        ))}
      </div>
      <Paginationbox
        setPage={setPage}
        Page={page}
        totalPages={data.total_pages}
      />
    </div>
  );
};

export default Allpostpage;
