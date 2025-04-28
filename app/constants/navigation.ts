import {
  Calendar,
  Inbox,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Map,
  PlaneTakeoff,
  Settings,
  Ticket,
  Users,
} from "lucide-react";

export const bottomItems = [
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Help",
    url: "/help",
    icon: LifeBuoy,
  },
  {
    title: "Logout",
    url: "/logout",
    icon: LogOut,
  },
];

export const mainItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    description: "Overview of your travel stats",
  },
  {
    title: "Trips",
    url: "/all-trips",
    icon: PlaneTakeoff,
    description: "Manage bookings and itineraries",
  },
  {
    title: "Users",
    url: "/all-users",
    icon: Users,
    description: "Customer management",
  },
  {
    title: "Destinations",
    url: "/destinations",
    icon: Map,
    description: "Popular travel locations",
  },
  {
    title: "Bookings",
    url: "/booking",
    icon: Ticket,
    description: "View and manage reservations",
  },
  {
    title: "Messages",
    url: "/inbox",
    icon: Inbox,
    description: "Customer inquiries",
    badge: 3,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
    description: "Schedule and events",
  },
];
