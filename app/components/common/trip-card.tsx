import React from "react";
import { Link, useLocation } from "react-router";
import { Badge } from "@/components/ui/badge";
import { getFirstWord } from "@/lib/utils";

export function TripCard(props: TripCardProps) {
  const { id, name, price, tags, location, imageUrl } = props;
  const path = useLocation();

  const isPublic =
    path.pathname === "/" || path.pathname.startsWith("/travel/");

  return (
    <Link
      to={isPublic ? `/travel/${id}` : `/trips/${id}`}
      className="trip-card"
    >
      <img src={imageUrl} alt={name} />
      <article>
        <h2>{name}</h2>
        <figure className="flex items-center">
          <img
            src="/assets/icons/location-mark.svg"
            alt="location"
            className="size-4"
          />
          <figcaption>{location}</figcaption>
        </figure>
      </article>
      <div className="mt-5 space-x-1 pl-[18px] pr-3.5 pb-5">
        {tags.map((tag, index) => (
          <Badge key={tag} variant={index === 1 ? "destructive" : "success"}>
            {getFirstWord(tag)}
          </Badge>
        ))}
      </div>
      <article className="tripCard-pill">{price}</article>
    </Link>
  );
}
