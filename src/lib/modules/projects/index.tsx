import React from "react";
import { MdVerified as MdVerifiedIcon } from "react-icons/md";
import { Tooltip } from "@nextui-org/react";

export default function Projects() {
  return (
    <div>
      <h1>PROJECTS</h1>
      <Tooltip
        content="I am a tooltip"
        delay={0}
        placement="top"
        closeDelay={0}
        motionProps={{
          variants: {
            exit: {
              opacity: 0,
              transition: {
                duration: 0.1,
                ease: "easeIn",
              },
            },
            enter: {
              opacity: 1,
              transition: {
                duration: 0.15,
                ease: "easeOut",
              },
            },
          },
        }}
      >
        <MdVerifiedIcon size={18} className="text-blue-400" />
      </Tooltip>
    </div>
  );
}
