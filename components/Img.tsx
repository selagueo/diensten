import NextImage from "next/image";
import type { ComponentProps } from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

type ImgProps = ComponentProps<typeof NextImage>;

export default function Image({ src, ...props }: ImgProps) {
  const prefixedSrc =
    typeof src === "string" && src.startsWith("/") && BASE_PATH
      ? `${BASE_PATH}${src}`
      : src;
  return <NextImage src={prefixedSrc} {...props} />;
}
