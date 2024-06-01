"use client";
import { useCompletion } from "ai/react";
import { Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { toast } from "react-toastify";
const dummyMessages: Array<string> = [
  "Hey there! I've been pondering a few tech-related questions and figured you'd be the perfect person to ask. Firstly, I'm curious about the latest trends in machine learning algorithms—are there any groundbreaking developments you've come across recently that you find particularly fascinating?",

  "I'm also interested in learning more about the latest advancements in artificial intelligence. Are there any new AI technologies that you're excited about or that you think have the potential to revolutionize the field?",

  "Lastly, I'd love to hear your thoughts on the future of data science. What do you think are the most important trends shaping the industry, and how do you see the field evolving in the coming years?",
];
export function SuggestMessages() {
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

export default function sendUserMessages({
  params: { username },
}: {
  params: {
    username: string;
  };
}) {
  const sendMessageToUserHandler = async (content: string) => {
    console.log(content);
    if (!content) return toast.error("Message cannot be empty");
    try {
      const response = await axios.post("/api/sendMessages", {
        content: content,
        username: username,
      });
      console.log(response);
      if (response.data.success) {
        toast.success("Message Sent Successfully");
      } else if (response.data) {
        toast.error(response.data.message);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-50 container">
      <Typography variant="h3">Send Messages to {username}</Typography>
      <Typography variant="h5" className="m-4">
        Suggested Messages
      </Typography>
      <div className="preSuggestedMessages w-1/2 h-full flex flex-col bg-white rounded-md shadow-md p-6 m-4 gap-2">
        {dummyMessages.map((message, index) => (
          <div
            onClick={() => sendMessageToUserHandler(message)}
            key={index}
            className="message bg-gray-100 p-3 mb-3  rounded-lg cursor-pointer"
          >
            {message}
          </div>
        ))}
      </div>
    </div>
  );
}
