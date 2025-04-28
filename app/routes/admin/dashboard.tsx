import React from "react";
import { Header } from "@/components/common/header";
import { TripCard } from "@/components/common/trip-card";
import { StatsCard } from "@/components/common/stats-card";
import { allTrips, dashboardStats } from "@/constants";

export default function Dashboard() {
  const user = { name: "alireza" };

  const { totalTrips, tripCreated, totalUser, userRole, title, usersJoined } =
    dashboardStats;

  return (
    <>
      <Header
        title={`Hi ${user.name}`}
        description="Track activity, trends and popular destinations in real time"
      />
      <div className="flex flex-col gap-6">
        <section className="grid grid-cols-1 lg:grid-cols-3  gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={totalUser}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            total={totalUser}
            currentMonthCount={tripCreated.currentMonth}
            lastMonthCount={tripCreated.lastMonth}
          />
          <StatsCard
            headerTitle="Active Users Today"
            total={userRole.total}
            currentMonthCount={userRole.currentMoth}
            lastMonthCount={userRole.lastMonth}
          />
        </section>
        <section>
          <h1 className="textxl font-semibold text-dark-100">Created Trips</h1>
          <div className="trip-grid">
            {allTrips
              .slice(0, 4)
              .map(
                ({ tags, id, name, imageUrls, itinerary, estimatedPrice }) => (
                  <TripCard
                    key={id}
                    tags={tags}
                    id={id.toString()}
                    name={name}
                    location={itinerary?.[0]?.location ?? ""}
                    imageUrl={imageUrls[0]}
                    price={estimatedPrice}
                  />
                )
              )}
          </div>
        </section>
      </div>
    </>
  );
}
