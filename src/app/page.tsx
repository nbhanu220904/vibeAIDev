// import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import React from "react";

const page = async () => {
  const posts = await prisma.post.findMany();
  console.log(posts);
  return <div>{JSON.stringify(posts, null, 2)}</div>;
};

export default page;
