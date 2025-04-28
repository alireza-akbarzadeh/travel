import React from "react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router";

interface HeaderProps {
  title: string;
  description: string;
}

export function Header(props: HeaderProps) {
  const { title, description } = props;
  const location = useLocation();
  return (
    <header className="header mb-2">
      <article>
        <h1
          className={cn(
            "text-dark-100 ",
            location.pathname === "/"
              ? "text-left md:text-4xl"
              : "text-xl md:text-2xl font-semibold"
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            "text-gray-100 font-normal",
            location.pathname === "/"
              ? "text-base md:text-lg"
              : "text-sm md:text-lg"
          )}
        >
          {description}
        </p>
      </article>
    </header>
  );
}
