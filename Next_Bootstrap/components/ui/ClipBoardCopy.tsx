"use client";
import { IconButton, Typography } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export function ClipboardDefault({ ProfileUrl }: { ProfileUrl: string }) {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-x-4">
        <Typography variant="lead">{ProfileUrl}</Typography>
        <IconButton
          onMouseLeave={() => setCopied(false)}
          onClick={() => {
            copy(ProfileUrl);
            setCopied(true);
          }}
        >
          {copied ? (
            <CheckIcon className="h-5 w-5 text-white" />
          ) : (
            <DocumentDuplicateIcon className="h-5 w-5 text-white" />
          )}
        </IconButton>
      </div>
    </div>
  );
}
