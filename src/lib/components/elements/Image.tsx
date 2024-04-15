"use client";
import React, { useState } from "react";
import clsx from "clsx";
import NextImage, { ImageProps as NextImageProps } from "next/image";

import clsxMerge from "@/lib/utils/clsxMerge";

type ImageProps = {
  rounded?: string;
  priority?: boolean;
} & NextImageProps;

export default function Image(props: Readonly<ImageProps>) {
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
        quality={100}
        onLoad={() => setIsLoading(false)}
        {...rest}
      />
    </div>
  );
}
