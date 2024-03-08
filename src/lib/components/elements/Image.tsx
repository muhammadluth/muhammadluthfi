"use client";
import React, { useState } from "react";
import clsx from "clsx";
import NextImage, { ImageProps } from "next/image";

import clsxMerge from "@/lib/utils/clsxMerge";

type TImage = {
  rounded?: string;
} & ImageProps;

export default function Image(props: Readonly<TImage>) {
  const { alt, src, className, rounded, ...rest } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div
      className={clsx(
        "overflow-hidden",
        isLoading ? "animate-pulse" : "",
        rounded
      )}
    >
      <NextImage
        className={clsxMerge(
          "duration-700 ease-in-out",
          isLoading
            ? "scale-[1.02] blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0",
          rounded,
          className
        )}
        src={src}
        alt={alt}
        loading="lazy"
        // priority={true}
        quality={100}
        onLoad={() => setIsLoading(false)}
        {...rest}
      />
    </div>
  );
}
