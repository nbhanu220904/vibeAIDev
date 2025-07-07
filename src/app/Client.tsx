"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

export const Client = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.createWithVibeAI.queryOptions({ text: "Vibe AI Dev Server!" })
  );

  //   useEffect(() => {});
  //   const [] = useState();

  return <div>{JSON.stringify(data)}</div>;
};
