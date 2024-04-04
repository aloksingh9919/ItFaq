"use client"
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Card from "@/app/components/categorypost/Card";
import useFetch from "@/app/coustomhook/Category";

// export async function generateStaticParams() {
//   const response = await fetch(
//     `https://backend1.dev.smartcyberhive.com/api/category/`
//   );
//   const data = await response.json();

//   return data.map((post) => ({
//     categoryid: post.slug,
//   }));
// }

const Categoryidpage =  ({ params }) => {
  // const setpage = 1 ;
const [page , setpage] = React.useState(1)
  // const response = await fetch(
  //   `https://backend1.dev.smartcyberhive.com/api/category/${params.categoryid}/${page}/4/`
  // );
  // const pagedata = await response.json();
  // console.log(pagedata.total_pages)

  const [pagedata] = useFetch(`https://backend1.dev.smartcyberhive.com/api/category/${params.categoryid}/${page}/4/`)
  if (!pagedata) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" px-[80px] flex flex-col items-center justify-center gap-y-4 max-sm:px-2">
      <div className="grid grid-cols-5 gap-2 grid-flow-row max-sm:grid-cols-2 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-4  mb-5">
        {pagedata.items?.map((item, index) => (
          <Card key={index} title={item.title} />
        ))}
      </div>
      <Stack spacing={6}>
        <Pagination
          color="primary"
          count={pagedata.total_pages}
          defaultPage={page}
          variant="outlined"
          onChange={(event, value) => setpage(value)}
        />
      </Stack>
    </div>
  );
};

export default Categoryidpage;
