import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    //   Imagine that this is a downloading step
    //   await step.download("file", "https://example.com/file.txt");
    await step.sleep("wait-a-moment", "30s");

    //   Imagine that this is a Transcript step
    await step.sleep("wait-a-moment", "10s");

    //   Imagine that this is a Summary step
    await step.sleep("wait-a-moment", "5s");

    return { message: `Hello ${event.data.email}!` };
  }
);
