"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function UserProfileCard({
  username,
  email,
}: {
  username: string;
  email: string;
}) {
  return (
    <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              {username}
            </Typography>
          </div>
          <Typography color="blue-gray">{email}</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography className="inline-block bg-gray-300 p-1 rounded-sm">
          &quot;Verified User&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}
