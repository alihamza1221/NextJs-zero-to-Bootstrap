"use client";
import { Switch, Typography } from "@material-tailwind/react";

export function SwitchWithDescription() {
  return (
    <Switch
      label={
        <div>
          <Typography color="blue-gray" className="font-medium">
            Accept Messages
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            You&apos; would allow others to send you messages.
          </Typography>
        </div>
      }
      containerProps={{
        className: "-mt-5",
      }}
      crossOrigin={undefined}
    />
  );
}
