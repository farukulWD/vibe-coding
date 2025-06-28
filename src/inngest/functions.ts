import { openai, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "4s");
    const summarizer = createAgent({
      name: "summarizer",
      system: "You are an expert summarizer.  You summary in two words",
      model: openai({ model: "gpt-4o" }),
    });

    const { output } = await summarizer.run(
      `summarize the following text:${event.data.value}`
    );
    console.log(output);

    return { output };
  }
);
