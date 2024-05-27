"use client";
import { Switch, Typography } from "@material-tailwind/react";
import { useRef, useEffect } from "react";

interface SwitchWithDescriptionProps {
  onSwitchChange?: (isActive: boolean) => void;
}
export function SwitchWithDescription({
  onSwitchChange,
}: SwitchWithDescriptionProps) {
  const switchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (switchRef.current) {
      onSwitchChange?.(switchRef.current.checked);
    }
  }, [switchRef, onSwitchChange, switchRef.current?.checked]);

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
      inputRef={switchRef}
      crossOrigin={undefined}
    />
  );
}
