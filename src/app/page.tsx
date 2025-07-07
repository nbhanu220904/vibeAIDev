// "use client";

// // import { Button } from "@/components/ui/button";
// // import prisma from "@/lib/db";
// import React from "react";
// import { useTRPC } from "@/trpc/client";
// import { useQuery } from "@tanstack/react-query";

// const page = () => {
//   //   const posts = await prisma.post.findMany();
//   //   console.log(posts);
//   //   return <div>{JSON.stringify(posts, null, 2)}</div>;

//   const trpc = useTRPC();
//   const { data } = useQuery(
//     trpc.createWithVibeAI.queryOptions({ text: "Bhanu!" })
//   );

//   //   trpc.createWithVibeAI.queryOptions({ text: "Hello!" });

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <h1 className="text-2xl font-bold">
//         {/* Welcome to Vibe AI */}
//         {JSON.stringify(data)}
//       </h1>
//     </div>
//   );
// };

// export default page;

// import React from "react";
// import { caller } from "@/trpc/server";

// const Page = async () => {
//   const data = await caller.createWithVibeAI({ text: "VIbe AI Dev Server!" });
//   //   fetch("/api/create-ai");
//   console.log("SERVER COMPONENT");
//   return <div>{JSON.stringify(data)}</div>;
// };

// export default Page;

import {
  // caller,
  getQueryClient,
  trpc,
} from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./Client";
import { Suspense } from "react";

const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.createWithVibeAI.queryOptions({ text: "Vibe AI Dev Server!" })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
        <Client />
      </Suspense>
      {/* <div>{JSON.stringify(data)}</div> */}
    </HydrationBoundary>
  );
};

export default Page;
