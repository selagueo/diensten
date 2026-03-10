"use client";

import Image from "next/image";
import Link from "next/link";

interface ObraCardProps {
  obra: {
    slug: string;
    image: string;
    location: string;
    title: string;
    description: string;
  };
}

export function ObraCard({ obra }: ObraCardProps) {
  return (
    <Link
      href={`/obras/${obra.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={obra.image}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
          {obra.location}
        </p>
        <h3 className="mt-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-diensten-orange">
          {obra.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
          {obra.description}
        </p>
      </div>
    </Link>
  );
}
