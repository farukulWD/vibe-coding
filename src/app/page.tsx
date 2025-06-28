"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

const Home = () => {
  const [value, setValue] = useState("");
  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("Background job has been start");
      },
    })
  );
  return (
    <div className=" p-4 flex flex-col gap-y-2">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button className="" onClick={() => invoke.mutate({ value })}>
        Inngest Background Jobs
      </Button>
    </div>
  );
};

export default Home;
