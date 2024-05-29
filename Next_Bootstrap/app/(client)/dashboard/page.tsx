"use client";
import { ApiResponse } from "@/types/ApiResponse";
import { Typography, Switch } from "@material-tailwind/react";
import { UserProfileCard } from "@/components/ui/ProfileCard";
import { ClipboardDefault } from "@/components/ui/ClipBoardCopy";
import { SpinnerColors } from "@/components/ui/Spinner";
import axios, { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Message } from "@/model/UserModel";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Button,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [isTaskLoading, setIsTaskLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const { data: session, status, update } = useSession();

  useEffect(() => {
    console.log("useEffect: ", session?.user.isAcceptingMessages);
  }, [session?.user.isAcceptingMessages]);

  const updateUserIsAcceptingMessages = async (userMessageChoice: boolean) => {
    if (isTaskLoading) {
      console.log("Already in progress!!");
      toast.info("State already in Progress");
      return;
    }
    setIsTaskLoading(true);

    if (!session || !session.user) {
      console.log("User Not authorized!");
      return;
    }
    const { username } = session.user;
    const res = await axios.post<ApiResponse>("/api/acceptMessages", {
      username,
      isAcceptingMessages: userMessageChoice,
    });
    if (res.data.success) {
      toast.success(res.data.message as string);
    } else {
      toast.error(res.data.message as string);
    }
    setIsTaskLoading(false);
  };

  const fetchMessages = useCallback(async () => {
    setIsTaskLoading(true);
    try {
      const response = await axios.get("/api/getMessages");
      if (response.data.success) {
        return response.data?.messages;
      } else {
        throw new Error(
          (response.data.message as string) || "Error fetching messages"
        );
      }
    } catch (error: AxiosError | any) {
      toast.error(error.message);
    } finally {
      setIsTaskLoading(false);
    }
  }, [setMessages]);

  let baseUrl = "";
  try {
    baseUrl = window.location.host;
  } catch (error: any) {
    console.error(error.message);
  }
  const profileUrl = `${baseUrl}/u/${session?.user.username}`;

  return !isLoading ? (
    <div className="flex">
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            E-Commerce
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
      <div className="flex justify-start flex-col w-full h-full bg-white rounded-md shadow-md p-5 m-2">
        <Typography variant="h2">User Dashboard</Typography>

        <UserProfileCard
          username={session?.user.username || "User"}
          email={session?.user.email || "example@email.com"}
        />
        <Switch
          defaultChecked={session?.user.isAcceptingMessages}
          onChange={async (e: any) => {
            const val = e.target.checked as boolean;
            await updateUserIsAcceptingMessages(val);
            update({ isAcceptingMessages: val });
          }}
          crossOrigin={undefined}
        ></Switch>
        <ClipboardDefault ProfileUrl={profileUrl} />
        <div className="mt-6 right">
          <Button
            loading={isTaskLoading}
            variant="text"
            className="rounded-full"
            onClick={async () => {
              const res = await fetchMessages();
              console.log(res);
              setMessages(res as [Message]);
            }}
          >
            Toggle Messages
          </Button>
          <div className="float-right gap-3 rounded-lg  flex flex-col bg-gray-50 w-1/2 h-full">
            {messages &&
              messages.map((message, index) => {
                return (
                  <>
                    <div
                      key={message._id}
                      className="flex justify-between w-full rounded-lg bg-blue-400  p-3"
                    >
                      <Typography variant="lead">{message.content}</Typography>{" "}
                      <span className="inline p-1 bg-gray-300  rounded-md">
                        {message.createdAt.toString()}
                      </span>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex w-full h-screen justify-center items-center">
      <SpinnerColors />
    </div>
  );
}
