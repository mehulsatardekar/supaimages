"use client";

/** 3p dependency */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/** Utils */
import { getFormattedDate } from "@/utils/dates";

/** Types */
import { PhotoInterface } from "@/types/Photo";

interface OwnProps extends PhotoInterface {}

export const Photo = (props: OwnProps) => {
  const { id, created_at, img_url, source } = props;

  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <Link href={`#${id}`} className="group">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          alt=""
          className={`group-hover:opacity-75 duration-700 ease-in-out ${
            isImageLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          }`}
          src={`https://images.weserv.nl/?url=${img_url}`}
          height={300}
          width={400}
          onLoadingComplete={() => setIsImageLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-white-700" title="Photo Taken At">
        {getFormattedDate(created_at)}
      </h3>
      <p className="mt-1 text-lg font-medium text-gray-500">{source}</p>
    </Link>
  );
};
