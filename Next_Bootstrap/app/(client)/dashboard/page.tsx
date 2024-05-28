"use client";
import axios, { AxiosError } from "axios";
import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ApiResponse } from "@/types/ApiResponse";
import { DefaultSidebar } from "@/components/ui/Sidebar";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { toast } from "react-toastify";
import { SpinnerColors } from "@/components/ui/Spinner";
import { useSession } from "next-auth/react";
import { UserProfileCard } from "@/components/ui/ProfileCard";
import { ClipboardDefault } from "@/components/ui/ClipBoardCopy";
import { Switch, Typography } from "@material-tailwind/react";
import { SwitchWithDescription } from "@/components/ui/Switch";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchLoading, setIsFetchLoading] = useState(false);
  const [messages, setMessages] = useState<ApiResponse["message"] | []>([]);

  const { data: session, status, update } = useSession();
  if (!session || !session.user || status !== "authenticated") {
    return Response.json(
      {
        success: false,
        message: "User Not authorized!",
      },
      { status: 400 }
    );
  }
  const [acceptMessage, setAcceptMessage] = useState(
    session?.user.isAcceptingMessages || false
  );
  useEffect(() => {
    console.log("session-> ", session, "state-vars: ", acceptMessage);
  }, [session]); // Remove just for testing

  const handleSwitchToggle = () => {
    try {
      setAcceptMessage(!acceptMessage);
      // update({ isAcceptingMessages: !acceptMessage });
      // updateUserIsAcceptingMessages();
    } catch (err) {
      console.log(err);
    }
  };

  const updateUserIsAcceptingMessages = async () => {
    if (isFetchLoading) {
      console.log("Already in progress!!");
      toast.info("State already in Progress");
      return;
    }
    setIsFetchLoading(true);
    console.log("update message called!!", "state: ", acceptMessage);

    if (!session || !session.user) {
      console.log("User Not authorized!");
      return;
    }
    const { username } = session.user;
    const res = await axios.post<ApiResponse>("/api/acceptMessages", {
      username,
      isAcceptingMessages: acceptMessage,
    });
    if (res.data.success) {
      toast.success(res.data.message as string);
    } else {
      toast.error(res.data.message as string);
    }
    setIsFetchLoading(false);
  };

  const baseUrl = window.location.host;
  const profileUrl = `${baseUrl}/u/${session.user.username}`;

  const fetchMessages = useCallback(async () => {
    setIsFetchLoading(false);
    try {
      const response = await axios.get<ApiResponse>("/api/getMessages");
      if (response.data.success) {
        return response.data.message;
      } else {
        throw new Error(
          (response.data.message as string) || "Error fetching messages"
        );
      }
    } catch (error: AxiosError | any) {
      toast.error(error.message);
    }
  }, []);
  return !isLoading ? (
    <>
      <div className="flex">
        <DefaultSidebar />
        <div className="flex justify-start flex-col w-full h-full bg-white rounded-md shadow-md p-5 m-2">
          <Typography variant="h2">User Dashboard</Typography>

          <UserProfileCard
            username={session.user.username || "User"}
            email={session.user.email || "example@email.com"}
          />
          <Switch
            id="custom-switch-component"
            ripple={false}
            className="h-full w-full checked:bg-[#2ec946]"
            containerProps={{
              className: "w-11 h-6",
            }}
            circleProps={{
              className: "before:hidden left-0.5 border-none",
            }}
            onChange={handleSwitchToggle}
            checked={acceptMessage}
            crossOrigin={undefined}
          />
          <button
            onClick={() => update({ isAcceptingMessages: !acceptMessage })}
            className="bg-blue-500 text-white p-2 rounded-md mt-2 hover:bg-blue-800"
          >
            push To Update Session
          </button>
          <ClipboardDefault ProfileUrl={profileUrl} />
        </div>
      </div>
    </>
  ) : (
    <div className="flex w-full h-screen justify-center items-center">
      <SpinnerColors />
    </div>
  );
}
