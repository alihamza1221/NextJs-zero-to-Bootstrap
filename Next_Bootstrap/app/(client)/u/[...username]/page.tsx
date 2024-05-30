"use client";
import { useCompletion } from "ai/react";
import { Button } from "@material-tailwind/react";
export default function SuggestMessages() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: "api/suggestMessages",
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="prompt"
        value={input}
        onChange={handleInputChange}
        id="input"
      />
      <Button type="submit">Submit</Button>
      <div>{completion}</div>
      <div className="border absolute flex top-[40%] mx-auto  text-3xl p-8  bg-black text-white shadow-lg rounded-md border">
        Page is under construction
      </div>
    </form>
  );
}
