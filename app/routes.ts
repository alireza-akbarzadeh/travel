import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/admin/admin-layout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("all-users", "routes/admin/all-users.tsx"),
    route("all-trips", "routes/admin/all-trips.tsx"),
    route("calendar", "routes/admin/calendar.tsx"),
    route("inbox", "routes/admin/inbox.tsx"),
    route("settings", "routes/admin/settings.tsx"),
    route("booking", "routes/admin/booking.tsx"),
    route("destinations", "routes/admin/destinations.tsx"),
  ]),
  layout("routes/root/auth-layout.tsx", [
    route("sign-in", "routes/root/sign-in.tsx"),
  ]),
] satisfies RouteConfig;
