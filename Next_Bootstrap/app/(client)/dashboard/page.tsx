"use client";
import axios, { AxiosError } from "axios";
import { useState, useEffect, useCallback } from "react";
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
import { Typography } from "@material-tailwind/react";
import { UserProfileCard } from "@/components/ui/ProfileCard";
import { ClipboardDefault } from "@/components/ui/ClipBoardCopy";
import { SwitchWithDescription } from "@/components/ui/Switch";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchLoading, setIsFetchLoading] = useState(false);
  const [messages, setMessages] = useState<ApiResponse["message"] | []>([]);
  const [acceptMessage, setAcceptMessage] = useState(true);

  const { data: session, status } = useSession();
  if (!session || !session.user || status !== "authenticated") {
    return Response.json(
      {
        success: false,
        message: "User Not authorized!",
      },
      { status: 400 }
    );
  }
  const onSwitchChange = (isActive: boolean) => {
    setAcceptMessage(isActive);
    console.log("Switch is active: ", isActive);
  };

  useEffect(() => {
    async function updateUserIsAcceptingMessages() {
      setIsFetchLoading(true);
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
    }
    updateUserIsAcceptingMessages();
  }, [acceptMessage, setAcceptMessage]);

  const getProfileUrl = (): string => {
    if (typeof window !== "undefined") {
      const baseUrl = window.location.host;
      const profileUrl = `${baseUrl}/u/${session.user.username}`;
      return profileUrl;
    }
    return "";
  };

  const profileUrl = getProfileUrl();

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
  return !isLoading && !isFetchLoading ? (
    <>
      <div className="flex">
        <DefaultSidebar />
        <div className="flex justify-start flex-col w-full h-full bg-white rounded-md shadow-md p-5 m-2">
          <Typography variant="h2">User Dashboard</Typography>
          <UserProfileCard
            username={session.user.username || "User"}
            email={session.user.email || "example@email.com"}
          />
          <SwitchWithDescription onSwitchChange={onSwitchChange} />
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
