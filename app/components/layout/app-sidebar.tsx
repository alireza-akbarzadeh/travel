import { LucideChevronsUpDown, PlaneTakeoff } from "lucide-react";

import {
  SidebarContent,
  SidebarGroup,
  Sidebar,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";

import { Link, NavLink } from "react-router";
import { cn } from "@/lib/utils";
import { bottomItems, mainItems } from "@/constants/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { DiscoverPro } from "./discover-pro";


export function AppSidebar() {
  const { isMobile } = useSidebar();

  return (
    <Sidebar className="border-r border-slate-200">
      <SidebarContent className="flex h-full flex-col justify-between py-6 bg-white">
        <div>
          <SidebarGroup className="px-4 pb-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md">
                <PlaneTakeoff size={22} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">
                  {import.meta.env.VITE_APP_NAME}
                </h1>
                <p className="text-xs text-slate-500">Travel Admin</p>
              </div>
            </Link>
          </SidebarGroup>
          <SidebarGroupContent>
            <div className="px-3 pb-2">
              <SidebarMenu className="space-y-5">
                {mainItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="w-full h-12">
                      <NavLink to={item.url}>
                        {({ isActive }) => (
                          <div
                            className={cn(
                              "group flex w-full items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ease-in-out hover:bg-slate-100",
                              {
                                "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md":
                                  isActive,
                                "text-slate-700": !isActive,
                              }
                            )}
                          >
                            <div
                              className={cn("rounded-md p-1", {
                                "bg-white/20": isActive,
                              })}
                            >
                              <item.icon
                                size={18}
                                className={cn("transition-all", {
                                  "text-white": isActive,
                                })}
                              />
                            </div>
                            <div className="flex-1">
                              <span className="text-sm font-medium">
                                {item.title}
                              </span>
                              {item.description && !isActive && (
                                <p className="text-xs text-slate-500">
                                  {item.description}
                                </p>
                              )}
                            </div>
                            {item.badge && (
                              <span
                                className={cn(
                                  "flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-medium",
                                  isActive
                                    ? "bg-white/20 text-white"
                                    : "bg-blue-100 text-blue-600"
                                )}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </div>
          </SidebarGroupContent>
        </div>

        <div className="mt-auto">
          <DiscoverPro />
          <SidebarMenu className='px-2.5'>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Avatar className="size-8 rounded-lg">
                      <AvatarImage />
                      <AvatarFallback className="rounded-lg">A</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">alireza</span>
                      <span className="truncate text-xs">
                        devtools95@gmail.com
                      </span>
                    </div>
                    <LucideChevronsUpDown className="ml-auto size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    align="end"
                    side={isMobile ? "bottom" : "right"}
                    sideOffset={4}
                    className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                >
                  {bottomItems.map((item) => (
                      <DropdownMenuItem key={item.title}>
                        <NavLink
                            to={item.url}
                            className="flex items-center gap-2"
                        >
                          <item.icon size={16} />
                          {item.title}
                        </NavLink>
                      </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
